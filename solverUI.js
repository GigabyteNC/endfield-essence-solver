document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('weaponSearch');
  const suggestionsBox = document.getElementById('weaponSuggestions');
  const attributeSelect = document.getElementById('attributeSelect');
  const secondarySelect = document.getElementById('secondarySelect');
  const skillSelect = document.getElementById('skillSelect');
  const optimalContainer = document.getElementById('optimalResults');
  const partialContainer = document.getElementById('partialResults');

  // Core function to update result cards on state change
  function updateSolverUI() {
    const targetSecondary = secondarySelect.value;
    const targetSkill = skillSelect.value;

    if (!targetSecondary && !targetSkill) {
      optimalContainer.innerHTML = `<p class="text-xs text-slate-500 italic col-span-full">Awaiting stat selection or weapon preset input...</p>`;
      partialContainer.innerHTML = `<p class="text-xs text-slate-500 italic col-span-full">No partial node calculations loaded.</p>`;
      return;
    }

    // Call findOptimalFarmingNodes from essenceSolver.js
    const results = findOptimalFarmingNodes(targetSecondary, targetSkill);

    // Render 100% Matches
    if (results.optimal.length > 0) {
      optimalContainer.innerHTML = results.optimal.map(node => `
        <div class="hud-card p-4 rounded-lg relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded-bl tracking-wider">100% MATCH</div>
          <h3 class="text-sm font-bold text-slate-100 mb-1">📍 ${node.name}</h3>
          <p class="text-xs text-emerald-400 font-medium mb-3">Drops BOTH selected stats!</p>
          <div class="space-y-1 text-[11px] text-slate-400 font-sans">
            <div><strong class="text-slate-300">Secondary Pool:</strong> ${node.secondary.length} stats</div>
            <div><strong class="text-slate-300">Skill Pool:</strong> ${node.skill.length} stats</div>
          </div>
        </div>
      `).join('');
    } else {
      optimalContainer.innerHTML = `<p class="text-xs text-slate-400 col-span-full">No single location drops BOTH selected stats. Try farming partial nodes below.</p>`;
    }

    // Render Partial Matches
    const partials = [...results.partialSecondary, ...results.partialSkill];
    if (partials.length > 0) {
      partialContainer.innerHTML = partials.map(node => {
        const hasSec = node.secondary.includes(targetSecondary);
        return `
          <div class="bg-slate-900/40 border border-slate-800 p-4 rounded-lg">
            <h3 class="text-sm font-semibold text-slate-200">📍 ${node.name}</h3>
            <p class="text-xs text-amber-400/90 mt-1">
              Provides: <span class="font-medium text-slate-200">${hasSec ? targetSecondary : targetSkill}</span>
            </p>
          </div>
        `;
      }).join('');
    } else {
      partialContainer.innerHTML = `<p class="text-xs text-slate-500 col-span-full">No partial node matches found.</p>`;
    }
  }

  // Live weapon search typing logic
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length === 0) {
      suggestionsBox.classList.add('hidden');
      return;
    }

    const matches = WEAPON_DATABASE.filter(weapon => 
      weapon.name.toLowerCase().includes(query) || 
      weapon.category.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      suggestionsBox.innerHTML = matches.map(weapon => `
        <div 
          class="weapon-suggestion-item px-4 py-2.5 hover:bg-blue-950/50 cursor-pointer transition flex justify-between items-center"
          data-weapon="${weapon.name}"
        >
          <div>
            <div class="text-xs font-bold text-slate-100 tracking-wider">${weapon.name}</div>
            <div class="text-[10px] text-blue-400 uppercase tracking-widest">${weapon.category}</div>
          </div>
          <div class="text-right text-[10px] text-slate-400 font-mono">
            ${weapon.secondaryStat} + ${weapon.skillStat}
          </div>
        </div>
      `).join('');
      suggestionsBox.classList.remove('hidden');
    } else {
      suggestionsBox.classList.add('hidden');
    }
  });

  // Clicking a search item auto-fills dropdowns
  suggestionsBox.addEventListener('click', (e) => {
    const item = e.target.closest('.weapon-suggestion-item');
    if (!item) return;

    const weaponName = item.dataset.weapon;
    const selectedWeapon = WEAPON_DATABASE.find(w => w.name === weaponName);

    if (selectedWeapon) {
      searchInput.value = selectedWeapon.name;
      secondarySelect.value = selectedWeapon.secondaryStat;
      skillSelect.value = selectedWeapon.skillStat;
      suggestionsBox.classList.add('hidden');
      updateSolverUI();
    }
  });

  // Hide popover menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.add('hidden');
    }
  });

  // Event Listeners for dropdown selections
  if (attributeSelect) attributeSelect.addEventListener('change', updateSolverUI);
  secondarySelect.addEventListener('change', updateSolverUI);
  skillSelect.addEventListener('change', updateSolverUI);
});