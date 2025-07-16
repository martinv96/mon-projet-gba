
  // Données pour chaque version, on peut ajouter autant de sections que souhaité
  const solutions = {
    rubis: `
      <h2 class="text-2xl font-bold mb-6 text-center text-red-600">Soluce Pokémon Rubis GBA</h2>

  <div class="space-y-4" id="accordion">
    <!-- Introduction -->
    <div class="border border-gray-300 rounded-md">
      <button class="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 font-semibold text-red-700 rounded-t-md flex justify-between items-center" 
              aria-expanded="false" aria-controls="sect1" id="head1" onclick="toggleAccordion(event)">
        <span>Introduction</span>
        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="sect1" class="px-4 py-3 hidden" role="region" aria-labelledby="head1">
        <p>Bienvenue dans la solution complète de Pokémon Rubis sur Game Boy Advance. Cette soluce vous guide pas à pas du début à la fin du jeu, avec tous les conseils nécessaires.</p>
      </div>
    </div>

    <!-- Début du jeu -->
    <div class="border border-gray-300 rounded-md">
      <button class="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 font-semibold text-red-700 rounded-t-md flex justify-between items-center" 
              aria-expanded="false" aria-controls="sect2" id="head2" onclick="toggleAccordion(event)">
        <span>Début du jeu et choix du starter</span>
        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="sect2" class="px-4 py-3 hidden" role="region" aria-labelledby="head2">
        <p>Au début du jeu, vous sortez de votre maison à <strong>Vieux Bourg</strong>. Après une rencontre avec votre rival, le Professeur Orme vous demandera de choisir votre Pokémon de départ parmi :</p>
        <ul class="list-disc list-inside">
          <li><strong>Arcko</strong> (Type Plante) – Rapide et efficace contre les types Eau et Roche</li>
          <li><strong>Poussifeu</strong> (Type Feu) – Puissant contre les Pokémon Plante, Glace et Insecte</li>
          <li><strong>Gobou</strong> (Type Eau) – Polyvalent et bon contre les types Feu, Roche et Sol</li>
        </ul>
        <p>Explorez un peu la ville, puis dirigez-vous vers <strong>Rocade Ville</strong> pour affronter votre premier rival et poursuivre l’aventure.</p>
      </div>
    </div>

    <!-- Arènes détaillées -->
    <div class="border border-gray-300 rounded-md">
      <button class="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 font-semibold text-red-700 rounded-t-md flex justify-between items-center" 
              aria-expanded="false" aria-controls="sect3" id="head3" onclick="toggleAccordion(event)">
        <span>Les Arènes (détails et stratégies)</span>
        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="sect3" class="px-4 py-3 hidden" role="region" aria-labelledby="head3">
        <p>Les chefs d’arène sont des défis clés pour avancer et obtenir les badges nécessaires pour la Ligue Pokémon :</p>
        <ul class="list-disc list-inside space-y-3">
          <li>
            <strong>1. Roxanne – Rustboro City (Type Roche)</strong><br>
            <em>Pokémon principaux :</em> Geodude, Nosepass.<br>
            <strong>Stratégie :</strong> Utilisez des Pokémon de type Plante ou Eau (ex : Arcko ou Gobou). Attention à ses attaques physiques, préparez des potions.
          </li>
          <li>
            <strong>2. Brawly – Dewford City (Type Combat)</strong><br>
            <em>Pokémon principaux :</em> Makuhita, Meditite.<br>
            <strong>Stratégie :</strong> Attaques de type Vol (ex : Roucool), Psy ou Fée sont efficaces. Préparez vos Pokémon pour encaisser les coups.
          </li>
          <li>
            <strong>3. Wattson – Mauville City (Type Électrique)</strong><br>
            <em>Pokémon principaux :</em> Magnemite, Voltorb, Magneton.<br>
            <strong>Stratégie :</strong> Pokémon de type Sol (ex : Nosferalto) sont immunisés à ses attaques. Méfiez-vous de ses attaques statuts.
          </li>
          <li>
            <strong>4. Flannery – Lavaridge Town (Type Feu)</strong><br>
            <em>Pokémon principaux :</em> Numel, Torkoal.<br>
            <strong>Stratégie :</strong> Attaques Eau, Sol, Roche sont très efficaces. Équipez vos Pokémon avec des CT Surf ou Force si possible.
          </li>
          <li>
            <strong>5. Norman – Petalburg City (Type Normal)</strong><br>
            <em>Pokémon principaux :</em> Slaking, Vigoroth, Linoone.<br>
            <strong>Stratégie :</strong> Attaques Combat (ex : Machoc) sont recommandées. Attention à Slaking qui a une puissante attaque.
          </li>
          <li>
            <strong>6. Winona – Fortree City (Type Vol)</strong><br>
            <em>Pokémon principaux :</em> Swellow, Pelipper, Skarmory.<br>
            <strong>Stratégie :</strong> Attaques Roche, Électrique ou Glace. Les Pokémon Plante sont vulnérables.
          </li>
          <li>
            <strong>7. Tate & Liza – Fallarbor Town (Type Psy)</strong><br>
            <em>Pokémon principaux :</em> Lunatone, Solrock.<br>
            <strong>Stratégie :</strong> Utilisez des Pokémon avec attaques Insecte, Spectre ou Ténèbres. Méfiez-vous de leurs attaques de statut.
          </li>
          <li>
            <strong>8. Juan – Pacifidlog Town (Type Eau)</strong><br>
            <em>Pokémon principaux :</em> Kingdra.<br>
            <strong>Stratégie :</strong> Attaques Plante ou Électrique sont très efficaces. Soyez préparé à une longue bataille.
          </li>
        </ul>
      </div>
    </div>

    <!-- Cheminement principal -->
    <div class="border border-gray-300 rounded-md">
      <button class="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 font-semibold text-red-700 rounded-t-md flex justify-between items-center" 
              aria-expanded="false" aria-controls="sect4" id="head4" onclick="toggleAccordion(event)">
        <span>Cheminement principal et conseils</span>
        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="sect4" class="px-4 py-3 hidden" role="region" aria-labelledby="head4">
        <p>Après avoir battu les premières arènes, explorez la région de Hoenn :</p>
        <ol class="list-decimal list-inside space-y-1">
          <li>Visitez le <strong>Mont Chimnée</strong> pour progresser vers Lavaridge.</li>
          <li>Collectez les CS (coupe, surf, force…) pour accéder à de nouvelles zones.</li>
          <li>Affrontez le <strong>Team Magma</strong> qui cherche à manipuler le volcan.</li>
          <li>Capturez les Pokémon légendaires <strong>Groudon</strong> ou <strong>Kyogre</strong> selon votre version.</li>
          <li>Préparez-vous pour le Conseil des 4 et la Ligue Pokémon à <strong>Clémenti-Ville</strong>.</li>
        </ol>

        <h4 class="mt-4 font-semibold">Conseils</h4>
        <ul class="list-disc list-inside">
          <li>Entraînez une équipe équilibrée de niveau 40+ avant le Conseil des 4.</li>
          <li>Utilisez des objets comme les potions, rappels, et baies.</li>
          <li>Ne négligez pas l'exploration pour trouver des CT et objets rares.</li>
        </ul>
      </div>
    </div>

    <!-- Routes du jeu -->
    <div class="border border-gray-300 rounded-md">
      <button class="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 font-semibold text-red-700 rounded-t-md flex justify-between items-center" 
              aria-expanded="false" aria-controls="sect5" id="head5" onclick="toggleAccordion(event)">
        <span>Les routes principales</span>
        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="sect5" class="px-4 py-3 hidden" role="region" aria-labelledby="head5">
        <p>Voici un résumé des routes principales pour avancer dans Hoenn :</p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Route 101</strong> – Relie Vieux Bourg à Rustboro City, idéale pour capturer les premiers Pokémon sauvages comme Poussifeu.</li>
          <li><strong>Route 102</strong> – Traverse la zone entre Rustboro et la Route 103, utile pour l'entraînement et les objets cachés.</li>
          <li><strong>Route 103</strong> – Connexion vers la Route 104, avec plusieurs dresseurs à affronter.</li>
          <li><strong>Route 104</strong> – Voie vers Mérouville, avec accès au premier surf.</li>
          <li><strong>Route 105</strong> – Route aquatique entre Mérouville et la Route 106, peuplée de Pokémon eau.</li>
          <li><strong>Route 106</strong> – Relie Mérouville à Rusturf Tunnel, avec plusieurs herbes hautes pour attraper des Pokémon.</li>
          <li><strong>Route 110</strong> – Accès à la forêt de Clémenti-Ville, parfait pour entraîner les Pokémon avant la deuxième arène.</li>
          <li><strong>Route 111</strong> – Menant à la ville d’Argenta, avec un désert proche.</li>
          <li><strong>Route 113</strong> – Connexion entre Argenta et le Mont Sélénite, passage obligatoire pour la suite.</li>
          <li><strong>Route 118</strong> – Longue route d’eau entre Argenta et Lavaridge, utilisée pour surfer et attraper des Pokémon rares.</li>
          <li><strong>Route 119</strong> – Traverse la zone forestière et mène à Fort-Vanitas.</li>
          <li><strong>Route 120</strong> – Chemin vers le Mont Chimnée et la zone de Lavaridge.</li>
        </ul>
      </div>
    </div>

    <!-- Astuces et objets clés -->
    <div class="border border-gray-300 rounded-md">
      <button class="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 font-semibold text-red-700 rounded-t-md flex justify-between items-center" 
              aria-expanded="false" aria-controls="sect6" id="head6" onclick="toggleAccordion(event)">
        <span>Astuces et objets clés</span>
        <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div id="sect6" class="px-4 py-3 hidden" role="region" aria-labelledby="head6">
        <ul class="list-disc list-inside">
          <li><strong>CT Surf :</strong> Obtenue tôt, elle est indispensable pour accéder à de nombreuses zones aquatiques.</li>
          <li><strong>Baie Oran :</strong> Récupère de la vie automatiquement, très utile en combat.</li>
          <li><strong>Pokémon Repousse :</strong> Pour éviter les rencontres sauvages quand tu veux explorer.</li>
          <li><strong>Pokémon équilibrés :</strong> Pense à varier les types dans ton équipe pour couvrir toutes les faiblesses.</li>
          <li><strong>Objets rares :</strong> Cherche les objets cachés sur les routes et dans les grottes.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  </div>
    `,
    emeraude: `
      <h2 class="text-2xl font-bold mb-6 text-center text-green-600">Soluce Pokémon Émeraude GBA</h2>

<div class="space-y-4" id="accordion">
  <!-- Introduction -->
  <div class="border border-gray-300 rounded-md">
    <button class="w-full text-left px-4 py-3 bg-green-100 hover:bg-green-200 font-semibold text-green-700 rounded-t-md flex justify-between items-center" 
            aria-expanded="false" aria-controls="sect1" id="head1" onclick="toggleAccordion(event)">
      <span>Introduction</span>
      <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
           stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div id="sect1" class="px-4 py-3 hidden" role="region" aria-labelledby="head1">
      <p>Bienvenue dans la solution complète de Pokémon Émeraude sur Game Boy Advance. Cette soluce vous guide pas à pas du début à la fin du jeu, avec tous les conseils essentiels.</p>
    </div>
  </div>

  <!-- Début du jeu -->
  <div class="border border-gray-300 rounded-md">
    <button class="w-full text-left px-4 py-3 bg-green-100 hover:bg-green-200 font-semibold text-green-700 rounded-t-md flex justify-between items-center" 
            aria-expanded="false" aria-controls="sect2" id="head2" onclick="toggleAccordion(event)">
      <span>Début du jeu et choix du starter</span>
      <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
           stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div id="sect2" class="px-4 py-3 hidden" role="region" aria-labelledby="head2">
      <p>Au début du jeu, vous sortez de votre maison à <strong>Vieux Bourg</strong>. Après votre rencontre avec le Professeur Orme, choisissez votre Pokémon de départ parmi :</p>
      <ul class="list-disc list-inside">
        <li><strong>Arcko</strong> (Type Plante) – Rapide et efficace contre Eau et Roche</li>
        <li><strong>Poussifeu</strong> (Type Feu) – Puissant face aux Pokémon Plante, Glace et Insecte</li>
        <li><strong>Gobou</strong> (Type Eau) – Polyvalent, bon contre Feu, Roche et Sol</li>
      </ul>
      <p>Explorez Vieux Bourg et rendez-vous à <strong>Rocade Ville</strong> pour affronter votre premier rival et commencer l’aventure.</p>
    </div>
  </div>

  <!-- Arènes détaillées -->
  <div class="border border-gray-300 rounded-md">
    <button class="w-full text-left px-4 py-3 bg-green-100 hover:bg-green-200 font-semibold text-green-700 rounded-t-md flex justify-between items-center" 
            aria-expanded="false" aria-controls="sect3" id="head3" onclick="toggleAccordion(event)">
      <span>Les Arènes (détails et stratégies)</span>
      <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
           stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div id="sect3" class="px-4 py-3 hidden" role="region" aria-labelledby="head3">
      <p>Les chefs d’arène sont vos principaux défis pour avancer dans Hoenn et obtenir les badges pour la Ligue Pokémon :</p>
      <ul class="list-disc list-inside space-y-3">
        <li>
          <strong>1. Roxanne – Rustboro City (Type Roche)</strong><br>
          <em>Pokémon principaux :</em> Geodude, Nosepass.<br>
          <strong>Stratégie :</strong> Utilisez Plante ou Eau (Arcko, Gobou). Prévoyez des potions contre ses attaques physiques.
        </li>
        <li>
          <strong>2. Brawly – Dewford City (Type Combat)</strong><br>
          <em>Pokémon principaux :</em> Makuhita, Meditite.<br>
          <strong>Stratégie :</strong> Attaques Vol, Psy ou Fée efficaces. Préparez-vous aux coups physiques.
        </li>
        <li>
          <strong>3. Wattson – Mauville City (Type Électrique)</strong><br>
          <em>Pokémon principaux :</em> Magnemite, Voltorb, Magneton.<br>
          <strong>Stratégie :</strong> Utilisez Sol (Nosferalto) immunisé. Attention aux attaques statut.
        </li>
        <li>
          <strong>4. Flannery – Lavaridge Town (Type Feu)</strong><br>
          <em>Pokémon principaux :</em> Numel, Torkoal.<br>
          <strong>Stratégie :</strong> Attaques Eau, Sol, Roche conseillées. CT Surf ou Force utiles.
        </li>
        <li>
          <strong>5. Norman – Petalburg City (Type Normal)</strong><br>
          <em>Pokémon principaux :</em> Slaking, Vigoroth, Linoone.<br>
          <strong>Stratégie :</strong> Attaques Combat (Machoc) recommandées. Attention à Slaking.
        </li>
        <li>
          <strong>6. Winona – Fortree City (Type Vol)</strong><br>
          <em>Pokémon principaux :</em> Swellow, Pelipper, Skarmory.<br>
          <strong>Stratégie :</strong> Utilisez Roche, Électrique ou Glace. Les Plantes sont vulnérables.
        </li>
        <li>
          <strong>7. Tate & Liza – Fallarbor Town (Type Psy)</strong><br>
          <em>Pokémon principaux :</em> Lunatone, Solrock.<br>
          <strong>Stratégie :</strong> Attaques Insecte, Spectre, Ténèbres. Attention aux statuts.
        </li>
        <li>
          <strong>8. Juan – Pacifidlog Town (Type Eau)</strong><br>
          <em>Pokémon principaux :</em> Kingdra.<br>
          <strong>Stratégie :</strong> Plante ou Électrique efficaces. Préparez-vous à une longue bataille.
        </li>
      </ul>
    </div>
  </div>

  <!-- Cheminement principal -->
  <div class="border border-gray-300 rounded-md">
    <button class="w-full text-left px-4 py-3 bg-green-100 hover:bg-green-200 font-semibold text-green-700 rounded-t-md flex justify-between items-center" 
            aria-expanded="false" aria-controls="sect4" id="head4" onclick="toggleAccordion(event)">
      <span>Cheminement principal et conseils</span>
      <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
           stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div id="sect4" class="px-4 py-3 hidden" role="region" aria-labelledby="head4">
      <p>Après les premières arènes, explorez la région d'Hoenn :</p>
      <ol class="list-decimal list-inside space-y-1">
        <li>Montez le <strong>Mont Chimnée</strong> pour atteindre Lavaridge.</li>
        <li>Obtenez les CS (coupe, surf, force…) pour ouvrir de nouvelles zones.</li>
        <li>Affrontez la <strong>Team Magma</strong> qui menace la région.</li>
        <li>Capturez <strong>Rayquaza</strong>, le Pokémon légendaire exclusif à Émeraude.</li>
        <li>Préparez-vous pour le Conseil des 4 et la Ligue à <strong>Clémenti-Ville</strong>.</li>
      </ol>

      <h4 class="mt-4 font-semibold">Conseils</h4>
      <ul class="list-disc list-inside">
        <li>Entraînez une équipe variée niveau 40+ avant le Conseil des 4.</li>
        <li>Utilisez les CTs et objets pour optimiser vos attaques.</li>
        <li>Explorez les zones secrètes comme la Forêt de Jade et les Îles Mirage.</li>
      </ul>
    </div>
  </div>

  <!-- Pokémon Légendaires -->
  <div class="border border-gray-300 rounded-md">
    <button class="w-full text-left px-4 py-3 bg-green-100 hover:bg-green-200 font-semibold text-green-700 rounded-t-md flex justify-between items-center" 
            aria-expanded="false" aria-controls="sect5" id="head5" onclick="toggleAccordion(event)">
      <span>Pokémon légendaires et captures spéciales</span>
      <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
           stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div id="sect5" class="px-4 py-3 hidden" role="region" aria-labelledby="head5">
      <p>Voici les légendaires incontournables dans Pokémon Émeraude :</p>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <strong>Rayquaza</strong> – Trouvé au <em>Sommet du Ciel</em>, accessible après avoir réveillé Groudon et Kyogre.<br>
          Conseil : Préparez une équipe avec des Pokémon de niveau 50+, utilisez des Hyper Balls.
        </li>
        <li>
          <strong>Groudon</strong> – Caché dans la <em>Grottes Terre</em>. Disponible uniquement dans certaines conditions.<br>
          Conseil : Capturer après Kyogre pour éviter conflit météo.
        </li>
        <li>
          <strong>Kyogre</strong> – Trouvé dans la <em>Grottes Eau</em>. Capture après avoir calmé Groudon.<br>
          Conseil : Utilisez Pokémon avec attaques Électriques ou Plantes.
        </li>
        <li>
          <strong>Regirock, Regice, Registeel</strong> – Les trois Titans anciens, accessibles via des énigmes.<br>
          Conseil : Résolvez les puzzles dans les Ruines pour accéder à leur capture.
        </li>
      </ul>
    </div>
  </div>
</div>
    `
  };

  // Fonction pour gérer l'affichage accordéon
  function toggleAccordion(event) {
    const button = event.currentTarget;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    // Fermer tous les panneaux dans ce container
    const parent = button.parentNode.parentNode;
    parent.querySelectorAll('button').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.classList.add('hidden');
      btn.querySelector('svg').classList.remove('rotate-180');
    });

    if (!expanded) {
      // Ouvrir celui cliqué
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.classList.remove('hidden');
      button.querySelector('svg').classList.add('rotate-180');
    }
  }

  // Fonction pour changer la version sélectionnée
  function changeVersion() {
    const select = document.getElementById('versionSelect');
    const selectedVersion = select.value;
    const container = document.getElementById('accordionContainer');
    container.innerHTML = solutions[selectedVersion];
  }

  // Initialisation au chargement
  document.addEventListener('DOMContentLoaded', () => {
    changeVersion();
    document.getElementById('versionSelect').addEventListener('change', changeVersion);
  });
