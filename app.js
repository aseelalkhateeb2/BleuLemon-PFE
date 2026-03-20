/* ════════════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════════════ */
var state = {
  step: 1,
  lang: 'fr',
  uiLang: 'fr',
  selectedTypes: [],
  generatedText: '',
  translatedText: '',
  clientLogoB64: ''
};

/* ════════════════════════════════════════════════════════════════
   BILINGUAL UI TRANSLATIONS
════════════════════════════════════════════════════════════════ */
var T = {
  fr: {
    step_titles: ['','Brief client','Structure','Prompt généré','Génération IA','Résultat final','Bibliothèque'],
    step_subs: ['',
      'Renseignez les informations du client et du projet',
      'Choisissez les sections à inclure dans la proposition',
      'Vérifiez et copiez le prompt système généré',
      'Mistral AI rédige votre proposition commerciale',
      'Relisez, téléchargez et traduisez la proposition',
      'Gérez votre bibliothèque de références clients'],
    nav_workflow: 'Workflow',
    nav_library:  'Bibliothèque',
    nav_refs:     'Références clients',
    logo_sub:     'Proposal Generator · Mistral AI',
    footer:       'PFE IAE Lyon 2026 · BleuLemon · Mistral AI',
    api_label:    'Clé API Mistral AI',
    api_placeholder: 'Votre clé Mistral AI...',
    api_hint:     'Obtenez une clé sur console.mistral.ai',
    api_valid:    'Clé Mistral valide',
    api_short:    'Clé trop courte',
    api_required: 'Clé Mistral requise',
    api_ready:    '✓ Prêt à générer',
    api_check:    'Vérifiez votre clé sur console.mistral.ai',
    p1_title:     'Informations client & projet',
    p1_desc:      'Complétez le brief — ces données alimenteront le prompt IA.',
    client_label: 'Client',
    f_client:     'Nom du client',
    f_client_ph:  'ex. CORPIOT',
    f_sector:     'Secteur d\'activité',
    f_contact:    'Interlocuteur principal',
    f_contact_ph: 'ex. José DUPONT, Directeur des Ops',
    f_size:       'Taille entreprise',
    f_context:    'Contexte & besoin principal',
    f_context_ph: 'Décrivez le problème à résoudre, la situation actuelle, les outils en place, les enjeux clés...',
    f_budget:     'Budget indicatif (€ HT)',
    f_budget_ph:  'ex. 25 000 €',
    f_deadline:   'Délai souhaité',
    f_deadline_ph:'ex. Q2 2026, 3 mois',
    proj_label:   'Type(s) de projet',
    lang_label:   'Langue de sortie',
    btn_next_struct: 'Suivant : Structure →',
    p2_title:     'Structure de la proposition',
    p2_desc:      'Activez ou désactivez les sections selon le contexte du projet.',
    p2_hint:      'Les sections <strong>obligatoires</strong> sont toujours incluses. Activez les optionnelles selon le projet.',
    mandatory_label: 'Sections obligatoires',
    optional_label:  'Sections optionnelles',
    badge_req:    'Obligatoire',
    badge_opt:    'Optionnel',
    btn_back:     '← Retour',
    btn_next_prompt: 'Suivant : Prompt →',
    p3_title:     'Prompt généré',
    p3_desc:      'Prompt prêt à l\'emploi — copiez-le ou générez directement.',
    brief_summary_label: 'Récapitulatif du brief',
    prompt_label: 'Prompt système',
    btn_copy_prompt: '📋 Copier le prompt',
    btn_dl_prompt:   '⬇ Télécharger .txt',
    btn_generate: 'Générer la proposition →',
    p4_title:     'Génération IA en cours',
    p4_desc:      'Mistral AI rédige votre proposition commerciale…',
    status_wait:  'En attente…',
    status_connecting: 'Connexion à Mistral AI…',
    status_sending: 'Envoi du prompt à Mistral AI…',
    status_generating: 'Génération en cours…',
    status_done:  '✓ Proposition générée',
    status_missing_key: '⚠️ Clé Mistral manquante. Renseignez votre clé à l\'étape 1.',
    btn_edit_prompt: '← Modifier le prompt',
    btn_see_result:  'Voir le résultat structuré →',
    p5_title:     'Proposition commerciale générée',
    p5_desc:      'Relisez, ajustez et téléchargez votre proposition.',
    actions_label:'Actions',
    btn_dl_txt:   '⬇ Télécharger .txt',
    btn_dl_pdf:   '🖨 Exporter PDF',
    btn_dl_word:  '📄 Exporter Word',
    btn_copy_text:'📋 Copier le texte',
    btn_translate:'🌐 Traduire en anglais',
    btn_translating: 'Traduction en cours…',
    btn_dl_en:    '⬇ Télécharger EN',
    btn_edit_brief: '← Modifier le brief',
    btn_regen:    'Régénérer →',
    p6_title:     'Bibliothèque de références clients',
    p6_desc:      'Cliquez sur une référence pour l\'injecter dans votre brief.',
    add_ref_label:'Ajouter une référence',
    f_ref_client: 'Nom du client',
    f_ref_client_ph: 'ex. Safran',
    f_ref_tags:   'Tags',
    f_ref_tags_ph:'ex. Migration, Cloud, JSM',
    f_ref_desc:   'Description du projet',
    f_ref_desc_ph:'Décrivez le projet et les résultats obtenus...',
    btn_add_ref:  '+ Ajouter à la bibliothèque',
    ref_injected: '✓ Référence injectée dans le brief',
    ref_inject_btn:'Injecter dans le brief',
    info_client:  'Client',
    info_project: 'Projet',
    info_size:    'Taille',
    info_sections:'Sections',
    info_lang:    'Langue',
    info_tjm:     'TJM standard',
    pill_generated:'Généré',
    copied:       'Copié !',
    pdf_generating:'⏳ Génération PDF…',
    word_generating:'⏳ Génération Word…',
    word_loading: '⏳ Chargement…',
    err_word:     '✗ Erreur Word',
    err_net:      '✗ Erreur réseau',
    err_api:      '✗ Erreur : ',
    translate_error: 'Clé Mistral requise pour la traduction.',
    no_proposal:  'Aucune proposition générée. Revenez à l\'étape 4.',
    client_req:   'Nom du client requis.',
    select_ph:    '— Sélectionner —',
    sector_opts:  ['IT / Technologie','Industrie','Banque / Finance','Énergie / Utilities','Retail / Distribution','Santé / Pharma','Transport / Logistique','Secteur public','Autre'],
    size_opts:    ['TPE / Startup (< 50)','PME (50 – 250)','ETI (250 – 5 000)','Grand compte (> 5 000)'],
    tag_labels:   ['Migration Cloud','Implémentation JSM','ITSM','ESM','Agile Coaching','Formation','Licensing','DevOps','Run / TMA','Assets / CMDB','Reprise de données','SSO / LDAP'],
    output_lang_fr: 'Français', output_lang_en: 'English',
    cover_title:  'Proposition Commerciale',
    cover_partner:'BleuLemon · Atlassian Platinum Partner',
    footer_conf:  'BleuLemon · Confidentiel · ',
    footer_powered:' · Powered by Mistral AI',
  },
  en: {
    step_titles: ['','Client Brief','Structure','Generated Prompt','AI Generation','Final Result','Library'],
    step_subs: ['',
      'Fill in the client and project information',
      'Choose the sections to include in the proposal',
      'Review and copy the generated system prompt',
      'Mistral AI is writing your commercial proposal',
      'Review, download and translate the proposal',
      'Manage your client reference library'],
    nav_workflow: 'Workflow',
    nav_library:  'Library',
    nav_refs:     'Client References',
    logo_sub:     'Proposal Generator · Mistral AI',
    footer:       'PFE IAE Lyon 2026 · BleuLemon · Mistral AI',
    api_label:    'Mistral AI API Key',
    api_placeholder: 'Your Mistral AI key...',
    api_hint:     'Get a key at console.mistral.ai',
    api_valid:    'Valid Mistral key',
    api_short:    'Key too short',
    api_required: 'Mistral key required',
    api_ready:    '✓ Ready to generate',
    api_check:    'Check your key at console.mistral.ai',
    p1_title:     'Client & Project Information',
    p1_desc:      'Fill in the brief — this data will feed the AI prompt.',
    client_label: 'Client',
    f_client:     'Client name',
    f_client_ph:  'e.g. CORPIOT',
    f_sector:     'Industry sector',
    f_contact:    'Main contact',
    f_contact_ph: 'e.g. José DUPONT, Operations Director',
    f_size:       'Company size',
    f_context:    'Context & main need',
    f_context_ph: 'Describe the problem to solve, current situation, tools in place, key challenges...',
    f_budget:     'Indicative budget (€ excl. tax)',
    f_budget_ph:  'e.g. 25,000 €',
    f_deadline:   'Target deadline',
    f_deadline_ph:'e.g. Q2 2026, 3 months',
    proj_label:   'Project type(s)',
    lang_label:   'Output language',
    btn_next_struct: 'Next: Structure →',
    p2_title:     'Proposal Structure',
    p2_desc:      'Enable or disable sections depending on the project context.',
    p2_hint:      '<strong>Mandatory</strong> sections are always included. Toggle optional ones per project.',
    mandatory_label: 'Mandatory sections',
    optional_label:  'Optional sections',
    badge_req:    'Mandatory',
    badge_opt:    'Optional',
    btn_back:     '← Back',
    btn_next_prompt: 'Next: Prompt →',
    p3_title:     'Generated Prompt',
    p3_desc:      'System prompt ready to use — copy it or generate directly.',
    brief_summary_label: 'Brief summary',
    prompt_label: 'System prompt',
    btn_copy_prompt: '📋 Copy prompt',
    btn_dl_prompt:   '⬇ Download .txt',
    btn_generate: 'Generate proposal →',
    p4_title:     'AI Generation in progress',
    p4_desc:      'Mistral AI is writing your commercial proposal…',
    status_wait:  'Waiting…',
    status_connecting: 'Connecting to Mistral AI…',
    status_sending: 'Sending prompt to Mistral AI…',
    status_generating: 'Generating…',
    status_done:  '✓ Proposal generated',
    status_missing_key: '⚠️ Mistral key missing. Add your key in step 1.',
    btn_edit_prompt: '← Edit prompt',
    btn_see_result:  'View structured result →',
    p5_title:     'Generated Commercial Proposal',
    p5_desc:      'Review, adjust and download your proposal.',
    actions_label:'Actions',
    btn_dl_txt:   '⬇ Download .txt',
    btn_dl_pdf:   '🖨 Export PDF',
    btn_dl_word:  '📄 Export Word',
    btn_copy_text:'📋 Copy text',
    btn_translate:'🌐 Translate to French',
    btn_translating: 'Translating…',
    btn_dl_en:    '⬇ Download FR',
    btn_edit_brief: '← Edit brief',
    btn_regen:    'Regenerate →',
    p6_title:     'Client Reference Library',
    p6_desc:      'Click a reference to inject it into your brief.',
    add_ref_label:'Add a reference',
    f_ref_client: 'Client name',
    f_ref_client_ph: 'e.g. Safran',
    f_ref_tags:   'Tags',
    f_ref_tags_ph:'e.g. Migration, Cloud, JSM',
    f_ref_desc:   'Project description',
    f_ref_desc_ph:'Describe the project and results obtained...',
    btn_add_ref:  '+ Add to library',
    ref_injected: '✓ Reference injected into brief',
    ref_inject_btn:'Inject into brief',
    info_client:  'Client',
    info_project: 'Project',
    info_size:    'Size',
    info_sections:'Sections',
    info_lang:    'Language',
    info_tjm:     'Standard rate',
    pill_generated:'Generated',
    copied:       'Copied!',
    pdf_generating:'⏳ Generating PDF…',
    word_generating:'⏳ Generating Word…',
    word_loading: '⏳ Loading…',
    err_word:     '✗ Word error',
    err_net:      '✗ Network error',
    err_api:      '✗ Error: ',
    translate_error: 'Mistral key required for translation.',
    no_proposal:  'No proposal generated. Go back to step 4.',
    client_req:   'Client name required.',
    select_ph:    '— Select —',
    sector_opts:  ['IT / Technology','Industry','Banking / Finance','Energy / Utilities','Retail / Distribution','Healthcare / Pharma','Transport / Logistics','Public sector','Other'],
    size_opts:    ['Startup (< 50)','SME (50 – 250)','Mid-size (250 – 5,000)','Large enterprise (> 5,000)'],
    tag_labels:   ['Cloud Migration','JSM Implementation','ITSM','ESM','Agile Coaching','Training','Licensing','DevOps','Run / TMA','Assets / CMDB','Data Migration','SSO / LDAP'],
    output_lang_fr: 'French', output_lang_en: 'English',
    cover_title:  'Commercial Proposal',
    cover_partner:'BleuLemon · Atlassian Platinum Partner',
    footer_conf:  'BleuLemon · Confidential · ',
    footer_powered:' · Powered by Mistral AI',
  }
};

var STEP_TITLES = T.fr.step_titles;
var STEP_SUBS   = T.fr.step_subs;

/* ── Sections ─────────────────────────────────────────────── */
var MANDATORY = [
  { id:'m1', name:'Fiche de suivi du document',    desc:'Identification, rédacteurs, date de validation, diffusion.' },
  { id:'m2', name:'Introduction & contexte client',desc:'Résumé du besoin, interlocuteurs, situation actuelle, enjeux.' },
  { id:'m3', name:'Présentation de BleuLemon',     desc:'Partenariat Atlassian Platinum, certifications, domaines d\'expertise.' },
  { id:'m35',name:'Extrait de nos références actives (§2.5)', desc:'REXEL (ITSM multi-pays, intégrations tierces) · EDF solutions solaires (migration EasyVista → JSM, Assets, SSO). Clients actifs BleuLemon.' },
  { id:'m4', name:'Notre démarche',                desc:'Méthode itérative : Kickoff → Cadrage → Conception → Implémentation → Post-MEP.' },
  { id:'m5', name:'Réponse au besoin',             desc:'Périmètre fonctionnel, ateliers, implémentation, tests, formations.' },
  { id:'m6', name:'Conditions tarifaires',         desc:'TJM, estimation de charge, licences, facturation, conditions de paiement.' },
];

var OPTIONAL = [
  { id:'o1', name:'Références significatives clients', desc:'Cas REXEL, EDF solutions solaires et autres références actives.',       enabled:true  },
  { id:'o2', name:'Détail licensing Atlassian',        desc:'Service Collection Free / Standard / Premium / Enterprise.',            enabled:true  },
  { id:'o3', name:'Conduite du changement',            desc:'Formations agents, administrateurs, Assets. Cahier de paramétrage.',    enabled:true  },
  { id:'o4', name:'Macro-planning',                    desc:'Gantt indicatif, jalons clés, répartition de charge BL vs client.',    enabled:false },
  { id:'o5', name:'Organisation projet',               desc:'Rôles BleuLemon et rôles attendus côté client.',                       enabled:false },
  { id:'o6', name:'Prérequis techniques',              desc:'Instance Atlassian, droits admin, accès SSO/LDAP requis.',             enabled:false },
  { id:'o7', name:'Cybersécurité BleuLemon',           desc:'Démarche sécurité SI, score CyberVadis, partenaire ACI Technology.',   enabled:false },
  { id:'o8', name:'Teamwork Collection',               desc:'Offre complémentaire Jira + Confluence + Loom + Rovo.',                enabled:false },
  { id:'o9', name:'Lots futurs envisageables',         desc:'Évolutions non prioritaires : base de connaissance, chatbot, etc.',    enabled:true  },
];

/* ── Reference library ───────────────────────────────────── */
var LIBRARY = [
  { icon:'🏭', bg:'#E1F5EE', client:'REXEL',               tags:'ITSM · Intégration · Multi-pays',
    desc:'Portail JSM multi-pays. Intégration EasyVista, ITracing, SecureWorks. Incident & Change Management.',
    context:'REXEL est distributeur mondial de matériel électrique. Portail GISP devenu le projet JSM le plus utilisé chez Rexel, réutilisé dans plusieurs pays.' },
  { icon:'⚡', bg:'#E6F1FB', client:'EDF solutions solaires', tags:'Migration · Assets · SSO',
    desc:'Migration EasyVista → JSM Data Center puis Cloud. Intégration SCCM, Azure AD, Intune avec Assets.',
    context:'Filiale EDF spécialisée panneaux solaires. Croissance +25%/an. Premier projet très bien accueilli, déployé dans plusieurs directions métiers (RH, IOT, QSE).' },
  { icon:'🚂', bg:'#FAEEDA', client:'SNCF Connect & Tech',   tags:'Agile · SAFe · Jira',
    desc:'Transformation Agile à l\'échelle SAFe. Mise en place Jira Software et Confluence.',
    context:'Accompagnement SAFe (Scaled Agile Framework). Formation des équipes et mise en place des outils de pilotage.' },
  { icon:'🔵', bg:'#EEEDFE', client:'CMA CGM',               tags:'Migration Cloud · 2025',
    desc:'Migration Data Center → Cloud Atlassian. Gouvernance et provisioning utilisateurs.',
    context:'Groupe de transport maritime international. Migration complexe avec enjeux de conformité et résidence des données.' },
  { icon:'🏦', bg:'#FCEBEB', client:'BRED Banque Populaire',  tags:'ESM · Confluence · Agile',
    desc:'ESM multi-directions. Documentation Confluence. Agile@scale pour les équipes IT.',
    context:'Banque de réseau. Déploiement ESM pour les directions IT, RH et Juridique.' },
  { icon:'✈️', bg:'#EAF3DE', client:'SAFRAN',                 tags:'ITSM · Jira · 2023',
    desc:'Mise en place JSM pour le support IT interne. Formation des administrateurs et agents.',
    context:'Groupe aéronautique. Centre de services structuré avec SLA et tableaux de bord.' },
];

/* ════════════════════════════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════════════════════════════ */
function goStep(n) {
  if (n === state.step) return;
  if (n === 2) buildSections();
  if (n === 3) { buildBriefSummary(); buildPrompt(); }
  if (n === 4) startGeneration();
  if (n === 6) buildLibrary();

  document.getElementById('panel-' + state.step).classList.remove('active');
  document.getElementById('panel-' + n).classList.add('active');

  for (var i = 1; i <= 6; i++) {
    var nav = document.getElementById('nav-' + i);
    if (!nav) continue;
    nav.classList.remove('active', 'done');
    var num = nav.querySelector('.nav-num');
    if      (i < n)  { nav.classList.add('done');   num.innerHTML = '✓'; }
    else if (i === n) { nav.classList.add('active'); num.innerHTML = i;  }
    else              { num.innerHTML = i; }
  }

  document.getElementById('topbar-title').textContent = STEP_TITLES[n];
  document.getElementById('topbar-sub').textContent   = STEP_SUBS[n];
  state.step = n;
}

/* ════════════════════════════════════════════════════════════════
   NEW PROPOSAL — resets everything except API key
════════════════════════════════════════════════════════════════ */
function newProposal() {
  var tl  = T[state.uiLang] || T.fr;
  var msg = state.uiLang === 'en'
    ? 'Start a new proposal? All current data will be cleared.\nYour API key will be kept.'
    : 'Commencer une nouvelle proposition ? Toutes les données seront effacées.\nVotre clé API sera conservée.';

  if (!confirm(msg)) return;

  /* Save the API key */
  var savedKey = document.getElementById('api-key')
    ? document.getElementById('api-key').value
    : '';

  /* Reset state */
  state.step           = 1;
  state.lang           = 'fr';
  state.selectedTypes  = [];
  state.generatedText  = '';
  state.translatedText = '';
  state.injectedRefs   = [];
  state._lastPrompt    = '';

  /* Clear all form fields */
  ['f-client','f-contact','f-context','f-budget','f-deadline'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });
  var sector = document.getElementById('f-sector');
  if (sector) sector.selectedIndex = 0;
  var size = document.getElementById('f-size');
  if (size) size.selectedIndex = 0;

  /* Restore API key */
  var keyEl = document.getElementById('api-key');
  if (keyEl) keyEl.value = savedKey;

  /* Clear project type tags */
  document.querySelectorAll('#project-types .tag').forEach(function(t) {
    t.classList.remove('selected');
  });

  /* Reset output language to FR */
  state.lang = 'fr';
  document.getElementById('lang-fr').classList.add('active');
  document.getElementById('lang-en').classList.remove('active');

  /* Clear result blocks and streaming box */
  var rb = document.getElementById('result-blocks');
  if (rb) rb.innerHTML = '';
  var sb = document.getElementById('streaming-box');
  if (sb) { sb.textContent = ''; sb.style.display = 'none'; }

  /* Reset sections (rebuild from scratch next time) */
  var ms = document.getElementById('mandatory-sections');
  var os = document.getElementById('optional-sections');
  if (ms) ms.innerHTML = '';
  if (os) os.innerHTML = '';

  /* Reset progress */
  var fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = '0%';
  var statusTxt = document.getElementById('status-text');
  if (statusTxt) statusTxt.textContent = tl.status_wait;
  var btnRow = document.getElementById('gen-btn-row');
  if (btnRow) btnRow.style.display = 'none';

  /* Reset translate button */
  var trBtn = document.getElementById('btn-translate');
  if (trBtn) {
    trBtn.textContent = tl.btn_translate;
    trBtn.disabled    = false;
    trBtn.onclick     = translateResult;
  }

  /* Navigate to step 1 */
  document.getElementById('panel-' + state.step).classList.remove('active');
  document.getElementById('panel-1').classList.add('active');
  state.step = 1;

  for (var i = 1; i <= 6; i++) {
    var nav = document.getElementById('nav-' + i);
    if (!nav) continue;
    nav.classList.remove('active', 'done');
    var num = nav.querySelector('.nav-num');
    if (num) num.innerHTML = i === 1 ? '1' : i;
  }
  document.getElementById('nav-1').classList.add('active');

  document.getElementById('topbar-title').textContent = tl.step_titles[1];
  document.getElementById('topbar-sub').textContent   = tl.step_subs[1];

  /* Re-check API key status */
  checkApiKey();
}
document.querySelectorAll('#project-types .tag').forEach(function(t) {
  t.addEventListener('click', function() {
    var val = this.dataset.val;
    this.classList.toggle('selected');
    var idx = state.selectedTypes.indexOf(val);
    if (idx > -1) state.selectedTypes.splice(idx, 1);
    else state.selectedTypes.push(val);
  });
});

function setLang(l) {
  state.lang = l;
  document.getElementById('lang-fr').classList.toggle('active', l === 'fr');
  document.getElementById('lang-en').classList.toggle('active', l === 'en');
}

/* ── UI Language switcher ───────────────────────────────────── */
function setUiLang(l) {
  state.uiLang = l;
  document.getElementById('ui-lang-fr').classList.toggle('active', l === 'fr');
  document.getElementById('ui-lang-en').classList.toggle('active', l === 'en');
  var t = T[l];

  /* Sidebar */
  document.querySelector('#nav-1 span').textContent = t.step_titles[1];
  document.querySelector('#nav-2 span').textContent = t.step_titles[2];
  document.querySelector('#nav-3 span').textContent = t.step_titles[3];
  document.querySelector('#nav-4 span').textContent = t.step_titles[4];
  document.querySelector('#nav-5 span').textContent = t.step_titles[5];
  document.querySelector('#nav-6 span').textContent = t.nav_refs;
  document.querySelectorAll('.nav-label')[0].textContent = t.nav_workflow;
  document.querySelectorAll('.nav-label')[1].textContent = t.nav_library;
  document.querySelector('.logo-sub').textContent = t.logo_sub;
  document.querySelector('.sidebar-footer').innerHTML = 'v1.2 · ' + t.footer;

  /* Topbar */
  STEP_TITLES = t.step_titles;
  STEP_SUBS   = t.step_subs;
  document.getElementById('topbar-title').textContent = t.step_titles[state.step];
  document.getElementById('topbar-sub').textContent   = t.step_subs[state.step];
  document.getElementById('api-status-text').textContent = t.api_required;

  /* Panel 1 */
  document.querySelector('#panel-1 .section-title').textContent = t.p1_title;
  document.querySelector('#panel-1 .section-desc').textContent  = t.p1_desc;
  var fl = document.querySelectorAll('#panel-1 .field-label');
  if (fl[0]) fl[0].textContent = t.api_label;
  if (fl[1]) fl[1].textContent = t.client_label;
  if (fl[2]) fl[2].textContent = t.proj_label;
  if (fl[3]) fl[3].textContent = t.lang_label;
  document.getElementById('api-key').placeholder = t.api_placeholder;
  document.getElementById('key-hint').textContent = t.api_hint;
  document.getElementById('f-client').placeholder = t.f_client_ph;
  document.getElementById('f-contact').placeholder = t.f_contact_ph;
  document.getElementById('f-context').placeholder = t.f_context_ph;
  document.getElementById('f-budget').placeholder  = t.f_budget_ph;
  document.getElementById('f-deadline').placeholder = t.f_deadline_ph;

  /* Sector select */
  var sel = document.getElementById('f-sector');
  var cur = sel.value;
  sel.options[0].text = t.select_ph;
  t.sector_opts.forEach(function(opt, i) { if (sel.options[i+1]) sel.options[i+1].text = opt; });

  /* Size select */
  var sz = document.getElementById('f-size');
  sz.options[0].text = t.select_ph;
  t.size_opts.forEach(function(opt, i) { if (sz.options[i+1]) sz.options[i+1].text = opt; });

  /* Labels */
  var labels = document.querySelectorAll('#panel-1 label');
  var lmap = [t.f_client, t.f_sector, t.f_contact, t.f_size, t.f_context, t.f_budget, t.f_deadline];
  labels.forEach(function(lb, i) { if (lmap[i]) lb.textContent = lmap[i]; });

  /* Tags */
  var tags = document.querySelectorAll('#project-types .tag');
  tags.forEach(function(tg, i) { if (t.tag_labels[i]) tg.textContent = t.tag_labels[i]; });

  /* Output lang buttons */
  document.getElementById('lang-fr').textContent = t.output_lang_fr;
  document.getElementById('lang-en').textContent = t.output_lang_en;

  /* Panel 1 button */
  var p1btn = document.querySelector('#panel-1 .btn-primary');
  if (p1btn) p1btn.textContent = t.btn_next_struct;

  /* Panel 2 */
  document.querySelector('#panel-2 .section-title').textContent = t.p2_title;
  document.querySelector('#panel-2 .section-desc').textContent  = t.p2_desc;
  var hintEl = document.querySelector('#panel-2 .hint span:last-child');
  if (hintEl) hintEl.innerHTML = t.p2_hint;
  var fl2 = document.querySelectorAll('#panel-2 .field-label');
  if (fl2[0]) fl2[0].textContent = t.mandatory_label;
  if (fl2[1]) fl2[1].textContent = t.optional_label;
  var p2btns = document.querySelectorAll('#panel-2 .btn');
  if (p2btns[0]) p2btns[0].textContent = t.btn_back;
  if (p2btns[1]) p2btns[1].textContent = t.btn_next_prompt;

  /* Panel 3 */
  document.querySelector('#panel-3 .section-title').textContent = t.p3_title;
  document.querySelector('#panel-3 .section-desc').textContent  = t.p3_desc;
  var fl3 = document.querySelectorAll('#panel-3 .field-label');
  if (fl3[0]) fl3[0].textContent = t.brief_summary_label;
  if (fl3[1]) fl3[1].textContent = t.prompt_label;
  var p3btns = document.querySelectorAll('#panel-3 .btn');
  p3btns.forEach(function(b) {
    if (b.textContent.indexOf('Copier') > -1 || b.textContent.indexOf('Copy') > -1) b.textContent = t.btn_copy_prompt;
    if (b.textContent.indexOf('Télécharger') > -1 || b.textContent.indexOf('Download') > -1) b.textContent = t.btn_dl_prompt;
    if (b.classList.contains('btn-teal')) b.textContent = t.btn_generate;
    if (b.textContent === '← Retour' || b.textContent === '← Back') b.textContent = t.btn_back;
  });

  /* Panel 4 */
  document.querySelector('#panel-4 .section-title').textContent = t.p4_title;
  document.querySelector('#panel-4 .section-desc').textContent  = t.p4_desc;
  var stTxt = document.getElementById('status-text');
  if (stTxt && (stTxt.textContent === 'En attente…' || stTxt.textContent === 'Waiting…'))
    stTxt.textContent = t.status_wait;

  /* Panel 5 */
  document.querySelector('#panel-5 .section-title').textContent = t.p5_title;
  document.querySelector('#panel-5 .section-desc').textContent  = t.p5_desc;
  var fl5 = document.querySelectorAll('#panel-5 .field-label');
  if (fl5[0]) fl5[0].textContent = t.actions_label;
  var dlTxt = document.getElementById('btn-pdf');
  if (dlTxt) dlTxt.textContent = t.btn_dl_pdf;
  var wdBtn = document.getElementById('btn-word');
  if (wdBtn) wdBtn.textContent = t.btn_dl_word;
  var trBtn = document.getElementById('btn-translate');
  if (trBtn && (trBtn.textContent.indexOf('Traduire') > -1 || trBtn.textContent.indexOf('Translate') > -1))
    trBtn.textContent = t.btn_translate;

  /* Panel 6 */
  document.querySelector('#panel-6 .section-title').textContent = t.p6_title;
  document.querySelector('#panel-6 .section-desc').textContent  = t.p6_desc;
  var fl6 = document.querySelectorAll('#panel-6 .field-label');
  if (fl6[0]) fl6[0].textContent = t.add_ref_label;
  document.getElementById('lib-new-client').placeholder = t.f_ref_client_ph;
  document.getElementById('lib-new-tags').placeholder   = t.f_ref_tags_ph;
  document.getElementById('lib-new-desc').placeholder   = t.f_ref_desc_ph;
  var addBtn = document.querySelector('#panel-6 .btn-primary');
  if (addBtn) addBtn.textContent = t.btn_add_ref;
  var lib6labels = document.querySelectorAll('#panel-6 label');
  var lmap6 = [t.f_ref_client, t.f_ref_tags, t.f_ref_desc];
  lib6labels.forEach(function(lb, i) { if (lmap6[i]) lb.textContent = lmap6[i]; });

  /* Rebuild library cards with new language */
  if (document.getElementById('lib-grid').children.length > 0) buildLibrary();

  checkApiKey();
}

function tr(key) { return (T[state.uiLang] || T.fr)[key] || key; }
function checkApiKey() {
  var key  = document.getElementById('api-key').value.trim();
  var dot  = document.getElementById('api-dot');
  var txt  = document.getElementById('api-status-text');
  var hint = document.getElementById('key-hint');
  var tl   = T[state.uiLang] || T.fr;
  if (key.length >= 32) {
    dot.className    = 'api-dot ok';
    txt.textContent  = tl.api_valid;
    hint.textContent = tl.api_ready;
    hint.style.color = 'var(--teal)';
  } else if (key.length > 0) {
    dot.className    = 'api-dot error';
    txt.textContent  = tl.api_short;
    hint.textContent = tl.api_check;
    hint.style.color = '#E24B4A';
  } else {
    dot.className    = 'api-dot';
    txt.textContent  = tl.api_required;
    hint.textContent = tl.api_hint;
    hint.style.color = 'var(--gray-400)';
  }
}

/* ════════════════════════════════════════════════════════════════
   PANEL 2
════════════════════════════════════════════════════════════════ */
function buildSections() {
  var mEl = document.getElementById('mandatory-sections');
  var oEl = document.getElementById('optional-sections');
  var tl  = T[state.uiLang] || T.fr;
  mEl.innerHTML = '';
  oEl.innerHTML = '';

  MANDATORY.forEach(function(s) {
    var d = document.createElement('div');
    d.className = 'section-card';
    d.innerHTML =
      '<div class="section-card-header">' +
        '<div class="section-card-info">' +
          '<span class="section-card-name">' + s.name + '</span>' +
          '<span class="badge badge-required">' + tl.badge_req + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="section-card-desc">' + s.desc + '</div>';
    mEl.appendChild(d);
  });

  OPTIONAL.forEach(function(s) {
    var d = document.createElement('div');
    d.className = 'section-card';
    d.innerHTML =
      '<div class="section-card-header">' +
        '<div class="section-card-info">' +
          '<span class="section-card-name">' + s.name + '</span>' +
          '<span class="badge badge-optional">' + tl.badge_opt + '</span>' +
        '</div>' +
        '<label class="toggle-switch">' +
          '<input type="checkbox" id="opt-' + s.id + '"' + (s.enabled ? ' checked' : '') + '>' +
          '<div class="toggle-track"></div>' +
        '</label>' +
      '</div>' +
      '<div class="section-card-desc">' + s.desc + '</div>';
    oEl.appendChild(d);
  });
}

function getActiveSections() {
  var sections = MANDATORY.map(function(s) { return s.name; });
  OPTIONAL.forEach(function(s) {
    var el = document.getElementById('opt-' + s.id);
    if (el && el.checked) sections.push(s.name);
  });
  return sections;
}

/* ════════════════════════════════════════════════════════════════
   PANEL 3
════════════════════════════════════════════════════════════════ */
function buildBriefSummary() {
  var client   = v('f-client') || '—';
  var types    = state.selectedTypes.length ? state.selectedTypes.map(function(t) { return t.split(' ')[0]; }).join(', ') : '—';
  var sections = getActiveSections().length;
  var lang     = state.lang === 'fr' ? 'Français' : 'English';
  var size     = v('f-size') || '—';

  document.getElementById('brief-summary').innerHTML = [
    { label:'Client',      value: client },
    { label:'Projet',      value: types.substring(0,28) + (types.length > 28 ? '…':'') },
    { label:'Taille',      value: size.split(' ')[0] || '—' },
    { label:'Sections',    value: sections + ' sections' },
    { label:'Langue',      value: lang },
    { label:'TJM standard',value: '900 €/j HT' },
  ].map(function(c) {
    return '<div class="info-card">' +
             '<div class="info-card-label">'  + c.label + '</div>' +
             '<div class="info-card-value">'  + c.value + '</div>' +
           '</div>';
  }).join('');
}

function buildPrompt() {
  var client   = v('f-client')   || '[Nom du client]';
  var sector   = v('f-sector')   || '[Secteur]';
  var contact  = v('f-contact')  || '[Interlocuteur]';
  var size     = v('f-size')     || '[Taille]';
  var context  = v('f-context')  || '[Contexte à décrire]';
  var budget   = v('f-budget')   || 'non communiqué';
  var deadline = v('f-deadline') || 'non communiqué';
  var types    = state.selectedTypes.length ? state.selectedTypes.join(', ') : '[Type de projet]';
  var lang     = state.lang === 'fr' ? 'français' : 'English';
  var sections = getActiveSections();

  var prompt =
    'Tu es un consultant senior de BleuLemon, cabinet de conseil et de formation IT basé à Paris et Lyon.\n' +
    'BleuLemon est Partenaire Atlassian Platinum depuis 2015, spécialisé ITSM (depuis juin 2023) et Cloud (depuis mars 2024).\n\n' +
    'Rédige une proposition commerciale professionnelle complète en ' + lang + ' pour le client suivant.\n\n' +
    '══ BRIEF CLIENT ══════════════════════════════════\n' +
    'Client          : ' + client   + '\n' +
    'Secteur         : ' + sector   + '\n' +
    'Taille          : ' + size     + '\n' +
    'Interlocuteur   : ' + contact  + '\n' +
    'Type(s) projet  : ' + types    + '\n' +
    'Budget indicatif: ' + budget   + '\n' +
    'Délai souhaité  : ' + deadline + '\n' +
    'Contexte/Besoin :\n' + context + '\n\n' +
    '══ STRUCTURE DE LA PROPOSITION ═════════════════\n';

  sections.forEach(function(s, i) { prompt += (i + 1) + '. ' + s + '\n'; });

  prompt +=
    '\n══ INSTRUCTIONS DE RÉDACTION ══════════════════\n' +
    'Ton : professionnel, orienté résultats, co-construction, jamais commercial agressif.\n' +
    'Style : phrases courtes, structure claire, titres hiérarchiques.\n' +
    'Inclure :\n' +
    '  – La section §2.5 "Extrait de nos références actives" OBLIGATOIRE avec :\n' +
    '      • REXEL : distributeur mondial matériel électrique. JSM Cloud pour portail GISP multi-pays. Incident Management, Change Management, Service Request. Intégrations : EasyVista (synchronisation tickets), ITracing (sécurité multi-pays), SecureWorks. Résultat : projet JSM le plus utilisé chez Rexel, réutilisé dans plusieurs pays.\n' +
    '      • EDF solutions solaires : filiale EDF panneaux solaires, croissance +25%/an. Migration EasyVista → JSM Data Center puis Cloud. Intégration SCCM/Azure AD/Intune avec Assets (CMDB). SSO & user provisioning Azure AD. Projets ESM déployés : RH, IoT, QSE. Résultat : outil central entre utilisateurs finaux et équipes support, IT et Métiers.\n' +
    '  – Des références clients similaires (REXEL, EDF solutions solaires si pertinent)\n' +
    '  – Une estimation de charge réaliste (TJM BleuLemon : 900 €/j HT)\n' +
    '  – Les bonnes pratiques ITSM / ITIL et l\'approche itérative de BleuLemon\n' +
    '  – La démarche de conduite du changement et d\'autonomisation du client\n' +
    '  – Les niveaux de licence Atlassian Service Collection si pertinent\n' +
    'Conditions de paiement standard : 30 jours date de facture.\n' +
    'La proposition doit être valable 30 jours.\n' +
    'Format de sortie : texte structuré avec titres ##, sous-titres ###, listes à puces.\n' +
    'Longueur cible : proposition complète et détaillée (~1 500 à 2 500 mots).';

  document.getElementById('prompt-display').innerHTML = formatPrompt(prompt);
  state._lastPrompt = prompt;
  return prompt;
}

function formatPrompt(p) {
  return p
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/(══[^═]+══[^\n]*)/g, '<span class="hl">$1</span>')
    .replace(/(Client|Secteur|Taille|Interlocuteur|Type\(s\)|Budget|Délai|Contexte)\s*:/g, '<span class="key">$1 :</span>')
    .replace(/\n/g,'<br>');
}

function copyPrompt()    { copyToClipboard(state._lastPrompt || ''); flash(event.target, 'Copié !'); }
function downloadPrompt(){ download('bleulemon_prompt.txt', state._lastPrompt || ''); }

/* ════════════════════════════════════════════════════════════════
   FIX 2: Single clean Mistral API function (streaming)
════════════════════════════════════════════════════════════════ */
function callMistralAPI(apiKey, prompt, onChunk, onDone, onError) {
  fetch('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + apiKey          /* ← correct Mistral header */
    },
    body: JSON.stringify({
      model:       'mistral-small-latest',
      max_tokens:  4096,
      temperature: 0.7,
      stream:      true,
      messages: [{ role: 'user', content: prompt }]
    })
  })
  .then(function(res) {
    if (!res.ok) {
      return res.json().then(function(e) {
        onError((e.message) || ('Erreur HTTP ' + res.status));
      });
    }

    var reader  = res.body.getReader();
    var decoder = new TextDecoder();
    var buffer  = '';

    function read() {
      reader.read().then(function(result) {
        if (result.done) { onDone(); return; }

        buffer += decoder.decode(result.value, { stream: true });
        var lines = buffer.split('\n');
        buffer = lines.pop();                       /* keep incomplete line in buffer */

        lines.forEach(function(line) {
          line = line.trim();
          if (!line || line === 'data: [DONE]') return;
          if (!line.startsWith('data: '))       return;

          try {
            var parsed = JSON.parse(line.slice(6));  /* FIX 3: correct Mistral SSE format */
            var delta  = parsed.choices && parsed.choices[0] && parsed.choices[0].delta;
            if (delta && delta.content) {
              onChunk(delta.content);
            }
          } catch(e) { /* ignore parse errors on incomplete chunks */ }
        });

        read();
      }).catch(function(err) { onError(err.message); });
    }

    read();
  })
  .catch(function(err) { onError(err.message); });
}

/* ════════════════════════════════════════════════════════════════
   PANEL 4 — GÉNÉRATION
════════════════════════════════════════════════════════════════ */
function startGeneration() {
  state.generatedText = '';

  var fill      = document.getElementById('progress-fill');
  var spinner   = document.getElementById('spinner');
  var statusTxt = document.getElementById('status-text');
  var streamBox = document.getElementById('streaming-box');
  var btnRow    = document.getElementById('gen-btn-row');

  var tl = T[state.uiLang] || T.fr;
  fill.style.width      = '0%';
  spinner.style.display = 'inline-block';
  statusTxt.textContent = tl.status_connecting;
  streamBox.style.display = 'none';
  streamBox.textContent   = '';
  btnRow.style.display    = 'none';

  var apiKey = document.getElementById('api-key').value.trim();
  var prompt = state._lastPrompt || buildPrompt();

  if (!apiKey || apiKey.length < 32) {
    spinner.style.display = 'none';
    statusTxt.textContent = tl.status_missing_key;
    fill.style.width = '0%';
    return;
  }

  fill.style.width      = '15%';
  statusTxt.textContent = tl.status_sending;

  callMistralAPI(
    apiKey,
    prompt,
    /* onChunk */ function(chunk) {
      state.generatedText += chunk;
      if (streamBox.style.display === 'none') streamBox.style.display = 'block';
      streamBox.textContent = state.generatedText;
      streamBox.scrollTop   = streamBox.scrollHeight;
      var tl2 = T[state.uiLang] || T.fr;
      var progress = Math.min(15 + (state.generatedText.length / 25), 92);
      fill.style.width      = progress + '%';
      statusTxt.textContent = tl2.status_generating + ' (' + state.generatedText.length + ' chars)';
    },
    /* onDone  */ function() {
      var tl2 = T[state.uiLang] || T.fr;
      fill.style.width      = '100%';
      spinner.style.display = 'none';
      statusTxt.textContent = tl2.status_done + ' (' + state.generatedText.length + ' chars)';
      btnRow.style.display  = 'flex';
      buildResultBlocks();
    },
    /* onError */ function(err) {
      var tl2 = T[state.uiLang] || T.fr;
      fill.style.width      = '0%';
      spinner.style.display = 'none';
      statusTxt.textContent = tl2.err_api + err;
      btnRow.style.display  = 'flex';
    }
  );
}

/* ════════════════════════════════════════════════════════════════
   PANEL 5 — RÉSULTAT
════════════════════════════════════════════════════════════════ */
function buildResultBlocks() {
  var text      = state.generatedText;
  var container = document.getElementById('result-blocks');
  container.innerHTML = '';

  if (!text) {
    container.innerHTML = '<div class="hint"><span class="hint-icon">⚠️</span><span>Aucune proposition générée. Revenez à l\'étape 4.</span></div>';
    return;
  }

  var sections = text.split(/(?=^##\s)/m);

  if (sections.length <= 1) {
    var block = document.createElement('div');
    block.className = 'result-section';
    block.innerHTML =
      '<div class="result-section-header">' +
        '<span class="result-section-title">Proposition complète</span>' +
        '<span class="pill-ok">Généré</span>' +
      '</div>' +
      '<div class="result-section-body">' + mdToHtml(text) + '</div>';
    container.appendChild(block);
    return;
  }

  sections.forEach(function(sec) {
    if (!sec.trim()) return;
    var lines = sec.trim().split('\n');
    var title = lines[0].replace(/^##\s*/, '').trim();
    var body  = lines.slice(1).join('\n').trim();
    var block = document.createElement('div');
    block.className = 'result-section';
    block.innerHTML =
      '<div class="result-section-header">' +
        '<span class="result-section-title">' + escHtml(title) + '</span>' +
        '<span class="pill-ok">Généré</span>' +
      '</div>' +
      '<div class="result-section-body">' + mdToHtml(body) + '</div>';
    container.appendChild(block);
  });
}

function mdToHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g,     '<em>$1</em>')
    .replace(/^###\s(.+)$/gm, '<h4 style="font-size:14px;font-weight:600;margin:12px 0 6px;">$1</h4>')
    .replace(/^##\s(.+)$/gm,  '<h3 style="font-size:15px;font-weight:600;margin:14px 0 8px;">$1</h3>')
    .replace(/^- (.+)$/gm,    '<li style="margin-left:16px;list-style:disc;">$1</li>')
    .replace(/(<li[^>]*>.*<\/li>)/gs, '<ul style="margin:6px 0;">$1</ul>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>').replace(/$/, '</p>');
}

function downloadResult() {
  download('bleulemon_proposition_' + (v('f-client') || 'client').replace(/\s+/g,'_') + '.txt', state.generatedText);
}

function copyResult() { copyToClipboard(state.generatedText); flash(event.target, 'Copié !'); }
function regenerate() { goStep(4); }

/* FIX 5: Correct key check for translate (Mistral) */
function translateResult() {
  var apiKey = document.getElementById('api-key').value.trim();
  if (apiKey.length < 32) { alert('Clé Mistral requise pour la traduction.'); return; }

  var btn = document.getElementById('btn-translate');
  btn.disabled    = true;
  btn.textContent = 'Traduction en cours…';
  state.translatedText = '';

  callMistralAPI(
    apiKey,
    'Translate the following French commercial proposal into professional English. ' +
    'Keep the same structure, headings, tone, and all specific names (BleuLemon, Atlassian, client names). ' +
    'Output clean formatted text with ## headings.\n\n' + state.generatedText,
    function(chunk) { state.translatedText += chunk; },
    function() {
      btn.disabled    = false;
      btn.textContent = '⬇ Télécharger EN';
      btn.onclick     = function() { download('bleulemon_proposal_EN.txt', state.translatedText); };
    },
    function(err) {
      btn.disabled    = false;
      btn.textContent = '✗ Erreur : ' + err;
    }
  );
}

/* ════════════════════════════════════════════════════════════════
   PANEL 6 — LIBRARY (fully functional)
════════════════════════════════════════════════════════════════ */
function buildLibrary() {
  var grid = document.getElementById('lib-grid');
  var tl   = T[state.uiLang] || T.fr;
  grid.innerHTML = '';

  LIBRARY.forEach(function(ref, idx) {
    var isInjected = state.injectedRefs && state.injectedRefs.indexOf(ref.client) > -1;
    var card = document.createElement('div');
    card.className = 'lib-card';
    card.style.cssText = 'position:relative;cursor:default;';
    card.innerHTML =
      '<div class="lib-card-head">' +
        '<div class="lib-icon" style="background:' + ref.bg + ';">' + ref.icon + '</div>' +
        '<div style="flex:1;">' +
          '<div class="lib-title">' + ref.client + '</div>' +
          '<div class="lib-tags">'  + ref.tags   + '</div>' +
        '</div>' +
        (isInjected ? '<span style="font-size:10px;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:100px;font-weight:500;white-space:nowrap;">✓ ' + tl.ref_injected.split(' ').slice(1).join(' ') + '</span>' : '') +
      '</div>' +
      '<div class="lib-desc" style="margin-bottom:8px;">' + ref.desc + '</div>' +
      '<div style="background:var(--gray-50);border:1px solid var(--border);border-radius:6px;padding:8px 10px;font-size:12px;color:var(--gray-600);margin-bottom:10px;line-height:1.55;">' +
        ref.context +
      '</div>' +
      '<button id="inject-btn-' + idx + '" ' +
        'style="width:100%;padding:7px 10px;border-radius:6px;' +
        'border:1px solid ' + (isInjected ? 'var(--teal-mid)' : 'var(--border-md)') + ';' +
        'background:' + (isInjected ? 'var(--teal-light)' : 'var(--white)') + ';' +
        'color:' + (isInjected ? 'var(--teal-dark)' : 'var(--gray-900)') + ';' +
        'font-size:13px;font-weight:500;cursor:pointer;font-family:var(--font);transition:all 0.15s;" ' +
        'onclick="injectRef(' + idx + ', this)">' +
        (isInjected ? '✓ ' + tl.ref_injected : '→ ' + tl.ref_inject_btn) +
      '</button>';
    grid.appendChild(card);
  });
}

function injectRef(idx, btn) {
  var ref = LIBRARY[idx];
  var tl  = T[state.uiLang] || T.fr;
  var ctx = document.getElementById('f-context');

  if (!state.injectedRefs) state.injectedRefs = [];
  var alreadyIn = state.injectedRefs.indexOf(ref.client) > -1;

  if (alreadyIn) {
    /* Remove injection */
    var escaped = ref.client.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    ctx.value = ctx.value.replace(
      new RegExp('\n?\n?\\[REF:' + escaped + '\\][^\[]*', 'g'), ''
    ).trim();
    state.injectedRefs.splice(state.injectedRefs.indexOf(ref.client), 1);
    btn.textContent  = '→ ' + tl.ref_inject_btn;
    btn.style.background = 'var(--white)';
    btn.style.borderColor = 'var(--border-md)';
    btn.style.color = 'var(--gray-900)';
    /* Remove badge */
    var badge = btn.closest('.lib-card').querySelector('.lib-card-head span');
    if (badge) badge.remove();
  } else {
    /* Add injection */
    var inject =
      '\n\n[REF:' + ref.client + ']' +
      '\nClient similaire : ' + ref.client +
      '\nTags : ' + ref.tags +
      '\nContexte projet : ' + ref.context;
    ctx.value = (ctx.value + inject).trim();
    state.injectedRefs.push(ref.client);
    btn.textContent  = '✓ ' + tl.ref_injected;
    btn.style.background  = 'var(--teal-light)';
    btn.style.borderColor = 'var(--teal-mid)';
    btn.style.color = 'var(--teal-dark)';
    /* Add badge */
    var head = btn.closest('.lib-card').querySelector('.lib-card-head');
    if (!head.querySelector('span')) {
      var badge = document.createElement('span');
      badge.style.cssText = 'font-size:10px;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:100px;font-weight:500;white-space:nowrap;';
      badge.textContent = '✓';
      head.appendChild(badge);
    }
    setTimeout(function() { goStep(1); }, 500);
  }
}

function addLibEntry() {
  var client = v('lib-new-client');
  var tags   = v('lib-new-tags');
  var desc   = v('lib-new-desc');
  var tl     = T[state.uiLang] || T.fr;
  if (!client) { alert(tl.client_req); return; }
  LIBRARY.push({ icon:'📁', bg:'#F1F0E9', client:client, tags:tags, desc:desc, context:desc });
  document.getElementById('lib-new-client').value = '';
  document.getElementById('lib-new-tags').value   = '';
  document.getElementById('lib-new-desc').value   = '';
  buildLibrary();
}

/* ════════════════════════════════════════════════════════════════
   EXPORT PDF
════════════════════════════════════════════════════════════════ */
function downloadPDF() {
  var btn = document.getElementById('btn-pdf');
  btn.disabled = true;
  btn.textContent = '⏳ Génération PDF…';

  var client   = v('f-client') || 'BleuLemon';
  var date     = new Date().toLocaleDateString('fr-FR');
  var text     = state.generatedText;

  /* Build a full HTML page styled for print with BleuLemon branding */
  var clientLogoHtml = state.clientLogoB64
    ? '<img src="' + state.clientLogoB64 + '" style="max-height:70px;max-width:180px;object-fit:contain;display:block;margin:0 auto 12px;" alt="Logo client" />'
    : '<div style="width:180px;height:70px;background:#EEF2F8;border:1.5px dashed #8bd6b5;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10pt;color:#8bd6b5;margin:0 auto 12px;font-family:Montserrat,Arial,sans-serif;">Logo Entreprise</div>';

  var printHTML = '<!DOCTYPE html><html lang="fr"><head>' +
    '<meta charset="UTF-8">' +
    '<title>Proposition — ' + client + '</title>' +
    '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">' +
    '<style>' +
      '@page { size: A4; margin: 18mm 16mm 22mm 16mm; }' +
      'body { font-family: Montserrat, Arial, sans-serif; font-size: 10.5pt; color: #1C1C1A; line-height: 1.65; }' +
      /* Cover page */
      '.cover { text-align:center; padding: 56px 0 36px; margin-bottom: 36px; }' +
      '.cover-logo-bl { display:flex; align-items:center; justify-content:center; gap:0; margin-bottom:28px; }' +
      '.cover-logo-bl .bl-text { font-size:32pt; font-weight:700; color:#0b3f70; font-family:Montserrat,Arial,sans-serif; letter-spacing:-1px; line-height:1; }' +
      '.cover-logo-bl .bl-dash { display:inline-block; width:22px; height:5px; background:#8bd6b5; margin-bottom:2px; vertical-align:middle; }' +
      '.cover-title-box { border:2px solid #8bd6b5; border-radius:10px; display:inline-block; padding:16px 40px 14px; margin:20px 0 18px; }' +
      '.cover-title-box h1 { font-size:18pt; color:#0b3f70; font-weight:700; margin:0 0 4px; }' +
      '.cover-title-box .subtitle { font-size:11pt; color:#0b3f70; font-weight:500; margin:0; }' +
      '.cover-meta { font-size:9.5pt; color:#5F5E5A; letter-spacing:0.08em; text-transform:uppercase; margin:10px 0 4px; }' +
      '.cover-date { font-size:10pt; color:#5F5E5A; }' +
      '.contact-box { border:1.5px solid #D3D1C7; border-radius:8px; display:inline-block; padding:12px 28px; margin-top:18px; text-align:left; }' +
      '.contact-box strong { display:block; font-size:10pt; color:#0b3f70; font-weight:700; margin-bottom:4px; }' +
      '.contact-box span { font-size:9.5pt; color:#1C1C1A; line-height:1.7; }' +
      /* Divider line bottom of cover */
      '.cover-line { height:4px; background:#1D9E75; border-radius:2px; margin:28px 0 0; }' +
      /* Body styles */
      'h2 { font-size: 13pt; color: #0b3f70; font-weight:700; border-bottom: 2px solid #1D9E75; padding-bottom: 5px; margin: 28px 0 10px; font-family:Montserrat,Arial,sans-serif; page-break-after:avoid; }' +
      'h3 { font-size: 11pt; color: #1D9E75; font-weight:600; margin: 18px 0 6px; font-family:Montserrat,Arial,sans-serif; page-break-after:avoid; }' +
      'h4 { font-size: 10.5pt; color: #0b3f70; font-weight:600; margin: 12px 0 4px; font-family:Montserrat,Arial,sans-serif; }' +
      'ul { margin: 6px 0 10px 20px; }' +
      'li { margin-bottom: 4px; }' +
      'p  { margin: 0 0 8px; }' +
      'strong { color: #0b3f70; }' +
      /* Footer */
      '.footer { position: fixed; bottom: 0; left: 0; right: 0; text-align: center; font-size: 8.5pt; color: #9B9A95; border-top: 1.5px solid #1D9E75; padding: 5px 0; font-family:Montserrat,Arial,sans-serif; background:white; }' +
      '.footer strong { color: #0b3f70; }' +
    '</style></head><body>' +
    /* COVER */
    '<div class="cover">' +
      /* BleuLemon logo typographic */
      '<div class="cover-logo-bl">' +
        '<span class="bl-text">B<span style="position:relative;">l<span style="position:absolute;bottom:-7px;left:-1px;width:18px;height:4px;background:#8bd6b5;display:block;"></span></span>eu</span>' +
        '<br>' +
      '</div>' +
      '<div style="text-align:center;margin-bottom:20px;">' +
        '<span style="font-size:26pt;font-weight:700;color:#0b3f70;font-family:Montserrat,Arial,sans-serif;">Bleu<span style="position:relative;display:inline-block;">' +
          '<span style="position:absolute;bottom:2px;left:0;width:20px;height:4px;background:#8bd6b5;"></span>' +
          'lemon<span style="position:absolute;bottom:2px;right:0;width:14px;height:4px;background:#8bd6b5;"></span>' +
        '</span></span>' +
      '</div>' +
      /* Title box */
      '<div class="cover-title-box">' +
        '<h1>Proposition Commerciale</h1>' +
        '<p class="subtitle">' + escHtml(client) + '</p>' +
      '</div><br>' +
      /* Client logo */
      clientLogoHtml +
      /* Meta */
      '<div class="cover-meta">Proposition Commerciale</div>' +
      '<div class="cover-date">1.0 — ' + date + '</div>' +
      /* Contact box */
      '<div class="contact-box">' +
        '<strong>Votre contact :</strong>' +
        '<span>BleuLemon · Atlassian Platinum Partner<br>contact@bleulemon.fr · bleulemon.fr</span>' +
      '</div>' +
      '<div class="cover-line"></div>' +
    '</div>' +
    /* CONTENT */
    markdownToPrintHTML(text) +
    /* FOOTER */
    '<div class="footer"><strong>BleuLemon</strong> · Confidentiel · ' + date + ' · Powered by Mistral AI</div>' +
    '</body></html>';

  /* Open print dialog in new window */
  var win = window.open('', '_blank', 'width=900,height=700');
  win.document.write(printHTML);
  win.document.close();
  win.focus();
  setTimeout(function() {
    win.print();
    btn.disabled = false;
    btn.textContent = '🖨 Exporter PDF';
  }, 800);
}

/* Convert markdown text to clean print HTML */
function markdownToPrintHTML(text) {
  if (!text) return '';
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm,  '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,   '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,    '<h2>$1</h2>')
    .replace(/^- (.+)$/gm,    '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>').replace(/$/, '</p>');
}

/* ════════════════════════════════════════════════════════════════
   EXPORT WORD (.docx)
════════════════════════════════════════════════════════════════ */
function downloadWord() {
  var btn = document.getElementById('btn-word');

  /* Check docx library is loaded */
  if (typeof docx === 'undefined') {
    btn.textContent = '⏳ Chargement…';
    btn.disabled = true;
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/docx@8.5.0/build/index.umd.js';
    s.onload  = function() { btn.disabled = false; btn.textContent = '📄 Exporter Word'; downloadWord(); };
    s.onerror = function() { btn.disabled = false; btn.textContent = '✗ Erreur réseau'; };
    document.head.appendChild(s);
    return;
  }

  btn.disabled    = true;
  btn.textContent = '⏳ Génération Word…';

  var client = v('f-client') || 'Client';
  var date   = new Date().toLocaleDateString('fr-FR');
  var text   = state.generatedText;

  var D   = docx;
  var ALT = D.AlignmentType;
  var BST = D.BorderStyle;
  var WDT = D.WidthType;
  var SHT = D.ShadingType;
  var LVF = D.LevelFormat;

  /* BleuLemon brand colors from charte graphique 2026 */
  var BL_NAVY  = '0b3f70';   /* Bleu Profond primary */
  var BL_TEAL  = '1D9E75';   /* Vert Menthe primary */
  var BL_TEAL2 = '8bd6b5';   /* Vert Menthe lighter */
  var BL_GRAY  = '5F5E5A';   /* Gray text */
  var BL_DARK  = '1C1C1A';   /* Body text */

  /* Helper: plain paragraph */
  function p(txt, opts) {
    opts = opts || {};
    return new D.Paragraph({
      alignment: opts.center ? ALT.CENTER : ALT.LEFT,
      spacing: { before: opts.before || 0, after: opts.after || 120 },
      children: [new D.TextRun({
        text: txt, font: 'Montserrat',
        size:  opts.size  || 22,
        bold:  opts.bold  || false,
        color: opts.color || BL_DARK,
      })],
    });
  }

  /* Helper: heading paragraph */
  function heading(txt, level) {
    var sizes  = { 1: 32, 2: 26, 3: 22 };
    var colors = { 1: BL_NAVY, 2: BL_TEAL, 3: BL_NAVY };
    return new D.Paragraph({
      spacing: { before: level === 1 ? 360 : 240, after: 120 },
      border: level === 2 ? { bottom: { style: BST.SINGLE, size: 4, color: BL_TEAL, space: 3 } } : undefined,
      children: [new D.TextRun({
        text: txt, font: 'Montserrat',
        size:  sizes[level]  || 22,
        bold:  true,
        color: colors[level] || BL_NAVY,
      })],
    });
  }

  /* Helper: bullet */
  function bullet(txt) {
    return new D.Paragraph({
      numbering: { reference: 'bullets', level: 0 },
      spacing: { before: 40, after: 60 },
      children: [new D.TextRun({ text: txt, font: 'Montserrat', size: 22, color: BL_DARK })],
    });
  }

  /* Parse markdown text into docx children array */
  function parseMarkdown(md) {
    var children = [];
    var lines    = md.split('\n');
    lines.forEach(function(line) {
      var l = line.trim();
      if (!l) { children.push(p('')); return; }
      if (l.startsWith('#### ')) { children.push(heading(l.slice(5), 3)); return; }
      if (l.startsWith('### '))  { children.push(heading(l.slice(4), 3)); return; }
      if (l.startsWith('## '))   { children.push(heading(l.slice(3), 2)); return; }
      if (l.startsWith('# '))    { children.push(heading(l.slice(2), 1)); return; }
      if (l.startsWith('- '))    { children.push(bullet(l.slice(2)));     return; }
      /* Bold inline: split on ** */
      var parts = l.split(/\*\*([^*]+)\*\*/g);
      var runs  = parts.map(function(part, i) {
        return new D.TextRun({ text: part, font:'Montserrat', size:22, bold: i % 2 === 1, color: i % 2 === 1 ? BL_NAVY : BL_DARK });
      });
      children.push(new D.Paragraph({ spacing:{ before:0, after:120 }, children: runs }));
    });
    return children;
  }

  /* ── Cover block with BleuLemon branding ───────────────── */
  /* BleuLemon logotype (typographic) */
  var bleuLemonLogo = new D.Paragraph({
    spacing: { before: 480, after: 60 }, alignment: ALT.CENTER,
    children: [
      new D.TextRun({ text: 'Bleu', font:'Montserrat', size:52, bold:true, color:BL_NAVY }),
      new D.TextRun({ text: 'lemon', font:'Montserrat', size:52, bold:true, color:BL_NAVY }),
    ],
  });

  /* Teal underline bar (simulate the 2 dashes from charte) */
  var logoBar = new D.Paragraph({
    spacing: { before: 0, after: 200 }, alignment: ALT.CENTER,
    border: { bottom: { style: BST.SINGLE, size: 8, color: BL_TEAL2, space: 4 } },
    children: [new D.TextRun({ text: '', font:'Montserrat', size:8 })],
  });

  /* Title box border simulation */
  var coverTitleLine = new D.Paragraph({
    spacing: { before: 160, after: 0 }, alignment: ALT.CENTER,
    border: { top: { style: BST.SINGLE, size: 6, color: BL_TEAL2, space: 4 },
              left: { style: BST.SINGLE, size: 6, color: BL_TEAL2, space: 8 },
              right: { style: BST.SINGLE, size: 6, color: BL_TEAL2, space: 8 } },
    children: [new D.TextRun({ text: 'Proposition Commerciale', font:'Montserrat', size:40, bold:true, color:BL_NAVY })],
  });

  var coverSubtitleLine = new D.Paragraph({
    spacing: { before: 0, after: 0 }, alignment: ALT.CENTER,
    border: { bottom: { style: BST.SINGLE, size: 6, color: BL_TEAL2, space: 8 },
              left: { style: BST.SINGLE, size: 6, color: BL_TEAL2, space: 8 },
              right: { style: BST.SINGLE, size: 6, color: BL_TEAL2, space: 8 } },
    children: [new D.TextRun({ text: client, font:'Montserrat', size:32, bold:true, color:BL_NAVY })],
  });

  /* Client logo or placeholder */
  var logoPlaceholder = new D.Paragraph({
    spacing: { before: 200, after: 40 }, alignment: ALT.CENTER,
    shading: { type: SHT.CLEAR, fill: 'EEF2F8' },
    border: { top:    { style: BST.DASHED, size: 4, color: BL_TEAL2, space: 4 },
              bottom: { style: BST.DASHED, size: 4, color: BL_TEAL2, space: 4 },
              left:   { style: BST.DASHED, size: 4, color: BL_TEAL2, space: 4 },
              right:  { style: BST.DASHED, size: 4, color: BL_TEAL2, space: 4 } },
    children: [new D.TextRun({ text: 'Logo Entreprise', font:'Montserrat', size:22, color: BL_TEAL2, italics:true })],
  });

  /* Meta lines */
  var metaLabel = new D.Paragraph({
    spacing: { before: 200, after: 30 }, alignment: ALT.CENTER,
    children: [new D.TextRun({ text: 'PROPOSITION COMMERCIALE', font:'Montserrat', size:18, color: BL_TEAL, allCaps:true, bold:false })],
  });
  var metaDate = new D.Paragraph({
    spacing: { before: 0, after: 200 }, alignment: ALT.CENTER,
    children: [new D.TextRun({ text: '1.0 — ' + date, font:'Montserrat', size:20, color: BL_GRAY })],
  });

  /* Contact box */
  var contactTitle = new D.Paragraph({
    spacing: { before: 0, after: 40 }, alignment: ALT.CENTER,
    border: { top:  { style: BST.SINGLE, size: 4, color: 'D3D1C7', space: 6 },
              left: { style: BST.SINGLE, size: 4, color: 'D3D1C7', space: 8 },
              right:{ style: BST.SINGLE, size: 4, color: 'D3D1C7', space: 8 } },
    children: [new D.TextRun({ text: 'Votre contact :', font:'Montserrat', size:20, bold:true, color:BL_NAVY })],
  });
  var contactLine = new D.Paragraph({
    spacing: { before: 0, after: 0 }, alignment: ALT.CENTER,
    border: { left: { style: BST.SINGLE, size: 4, color: 'D3D1C7', space: 8 },
              right:{ style: BST.SINGLE, size: 4, color: 'D3D1C7', space: 8 },
              bottom:{ style: BST.SINGLE, size: 4, color: 'D3D1C7', space: 6 } },
    children: [new D.TextRun({ text: 'BleuLemon · Atlassian Platinum Partner · contact@bleulemon.fr', font:'Montserrat', size:18, color:BL_GRAY })],
  });

  /* Teal divider */
  var divider = new D.Paragraph({
    spacing: { before: 200, after: 0 },
    border: { bottom: { style: BST.SINGLE, size: 8, color: BL_TEAL, space: 4 } },
    children: [new D.TextRun({ text: '', font:'Montserrat', size:8 })],
  });
  var spacer = new D.Paragraph({ children: [new D.TextRun({ text: '', size: 22 })] });

  var coverChildren = [
    bleuLemonLogo, logoBar,
    coverTitleLine, coverSubtitleLine,
    logoPlaceholder,
    metaLabel, metaDate,
    contactTitle, contactLine,
    divider, spacer,
  ];

  /* ── Body from generated text ────────────────────────────── */
  var bodyChildren = parseMarkdown(text);

  /* ── Footer paragraph ────────────────────────────────────── */
  var footerChildren = [
    new D.Paragraph({
      spacing:{ before:360, after:0 },
      border:{ top:{ style:BST.SINGLE, size:6, color:BL_TEAL, space:6 } },
      alignment: ALT.CENTER,
      children:[new D.TextRun({
        text: 'BleuLemon · Confidentiel · ' + date + ' · Powered by Mistral AI',
        font:'Montserrat', size:18, color:'9B9A95', italics:true
      })],
    }),
  ];

  var doc = new D.Document({
    numbering: {
      config: [{
        reference: 'bullets',
        levels: [{
          level: 0, format: LVF.BULLET, text: '•',
          alignment: ALT.LEFT,
          style: { paragraph: { indent: { left: 560, hanging: 280 } } },
        }],
      }],
    },
    styles: {
      default: { document: { run: { font:'Montserrat', size:22, color:BL_DARK } } },
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
        },
      },
      children: coverChildren.concat(bodyChildren).concat(footerChildren),
    }],
  });

  D.Packer.toBlob(doc).then(function(blob) {
    var url = URL.createObjectURL(blob);
    var a   = document.createElement('a');
    a.href  = url;
    a.download = 'BleuLemon_Proposition_' + client.replace(/\s+/g,'_') + '.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    btn.disabled    = false;
    btn.textContent = '📄 Exporter Word';
  }).catch(function(err) {
    btn.disabled    = false;
    btn.textContent = '✗ Erreur Word';
    console.error(err);
  });
}


function v(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function handleLogoUpload(input) {
  if (!input.files || !input.files[0]) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    state.clientLogoB64 = e.target.result;
    var preview = document.getElementById('logo-preview');
    preview.innerHTML = '<img src="' + e.target.result + '" style="max-width:86px;max-height:48px;object-fit:contain;" />';
  };
  reader.readAsDataURL(input.files[0]);
}

function clearLogo() {
  state.clientLogoB64 = '';
  document.getElementById('logo-preview').innerHTML = 'Logo';
  var fi = document.getElementById('f-client-logo');
  if (fi) fi.value = '';
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(function() { fallbackCopy(text); });
  } else { fallbackCopy(text); }
}

function fallbackCopy(text) {
  var ta        = document.createElement('textarea');
  ta.value      = text;
  ta.style.cssText = 'position:fixed;opacity:0;';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

function download(filename, content) {
  var blob = new Blob([content], { type:'text/plain;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function flash(btn, msg) {
  var orig      = btn.textContent;
  btn.textContent = msg;
  setTimeout(function() { btn.textContent = orig; }, 1500);
}
