// ============================================================
// INTERNATIONALIZATION - TRADUCTIONS FR/EN COMPLETES
// ============================================================

const translations = {
  fr: {
    // Header
    title: '🎮 Arcade Sprite Converter Pro',
    subtitle: 'Convertir vos images PNG en sprites MakeCode Arcade haute qualité',

    // Upload Section
    uploadText: '📁 Glissez une image ou',
    uploadLink: 'parcourez',
    uploadInfo: 'PNG, JPG, GIF, WebP - Max 10MB',

    // Main Sections
    original: '📷 Original',
    preview: '✨ Aperçu',
    pixels: 'pixels',
    converted: 'Converti',

    // Quick Presets
    quickPresets: '⚡ Présets rapides',
    presetHQ: '⭐ Haute qualité',
    presetBalance: '⚖️ Équilibré',
    presetFast: '⚡ Rapide',
    presetRetro: '🕹️ Rétro',

    // Palette Section
    palette: '🎨 Palette de couleurs',
    paletteMakeCode: 'MakeCode Arcade (16 couleurs) - Par défaut',
    paletteGameBoy: 'Game Boy (4 couleurs) - Classique',
    palettePICO8: 'PICO-8 (16 couleurs) - Indie',
    paletteCommodore: 'Commodore 64 (16 couleurs) - Rétro',
    paletteAtari: 'Atari 2600 (128 couleurs) - Antique',

    // Dithering Section
    dithering: '🔲 Algorithme de dithering',
    ditheringNearest: 'Aucun (Rapide) - Conversion basique',
    ditheringFloyd: 'Floyd-Steinberg - Meilleure qualité ⭐⭐⭐⭐⭐',
    ditheringBayer2x2: 'Bayer 2x2 - Motif 2x2',
    ditheringBayer4x4: 'Bayer 4x4 - Motif régulier ⭐⭐⭐⭐',
    ditheringBayer8x8: 'Bayer 8x8 - Motif 8x8',
    ditheringAtkinson: 'Atkinson - Moins d\'artefacts ⭐⭐⭐⭐',
    ditheringHint: '💡 Floyd-Steinberg idéal pour photos, Bayer pour pixel art',

    // Filters Section
    filters: '🎛️ Filtres d\'image',
    brightness: 'Brillance',
    contrast: 'Contraste',
    saturation: 'Saturation',
    grayscale: 'Niveaux de gris',
    invert: 'Inverser les couleurs',

    // Resize Section
    resize: '📏 Redimensionnement',
    resizeFitWidth: 'Ajuster à la largeur (16px)',
    resizeFitHeight: 'Ajuster à la hauteur (16px)',
    resizeCustom: 'Taille personnalisée',
    resizeOriginal: 'Taille originale (limité à 160×120)',
    width: 'Largeur',
    height: 'Hauteur',
    px: 'px',

    // Buttons
    convert: '🔄 Convertir',
    reset: '↻ Réinitialiser',
    copyCode: '📋 Copier le code',
    downloadPNG: '⬇️ Télécharger PNG',
    downloadJS: '⬇️ Télécharger .js',
    clearHistory: '🗑️ Effacer l\'historique',

    // Output Section
    outputTitle: '📋 Code MakeCode Arcade',
    outputHint: '💡 Conseil: Collez le code directement dans l\'onglet JavaScript de MakeCode Arcade',

    // History Section
    historyTitle: '📜 Historique de conversions',

    // Footer
    footerText: '🎮 Arcade Sprite Converter - Convertir vos images en sprites MakeCode Arcade',
    footerVersion: 'Version 2.0 | Hébergé sur GitHub Pages |',
    footerInspired: 'Inspiré par Kristian Pedersen',

    // Notifications
    notificationSuccess: '✅ Conversion réussie!',
    notificationCopied: '📋 Code copié au presse-papiers!',
    notificationPNGDownloaded: '⬇️ PNG téléchargé!',
    notificationJSDownloaded: '⬇️ Fichier JavaScript téléchargé!',
    notificationPresetApplied: '✨ Preset appliqué!',
    notificationHistoryCleared: '🗑️ Historique effacé',
    notificationFileTooLarge: 'Fichier trop volumineux (max 10MB)',
    notificationConfirmClear: 'Êtes-vous sûr de vouloir effacer tout l\'historique?',

    // UI Messages
    conversion: 'Conversion en cours...',
  },

  en: {
    // Header
    title: '🎮 Arcade Sprite Converter Pro',
    subtitle: 'Convert your PNG images to high-quality MakeCode Arcade sprites',

    // Upload Section
    uploadText: '📁 Drag an image or',
    uploadLink: 'browse',
    uploadInfo: 'PNG, JPG, GIF, WebP - Max 10MB',

    // Main Sections
    original: '📷 Original',
    preview: '✨ Preview',
    pixels: 'pixels',
    converted: 'Converted',

    // Quick Presets
    quickPresets: '⚡ Quick Presets',
    presetHQ: '⭐ High Quality',
    presetBalance: '⚖️ Balanced',
    presetFast: '⚡ Fast',
    presetRetro: '🕹️ Retro',

    // Palette Section
    palette: '🎨 Color Palette',
    paletteMakeCode: 'MakeCode Arcade (16 colors) - Default',
    paletteGameBoy: 'Game Boy (4 colors) - Classic',
    palettePICO8: 'PICO-8 (16 colors) - Indie',
    paletteCommodore: 'Commodore 64 (16 colors) - Retro',
    paletteAtari: 'Atari 2600 (128 colors) - Vintage',

    // Dithering Section
    dithering: '🔲 Dithering Algorithm',
    ditheringNearest: 'None (Fast) - Basic conversion',
    ditheringFloyd: 'Floyd-Steinberg - Best quality ⭐⭐⭐⭐⭐',
    ditheringBayer2x2: 'Bayer 2x2 - 2x2 pattern',
    ditheringBayer4x4: 'Bayer 4x4 - Regular pattern ⭐⭐⭐⭐',
    ditheringBayer8x8: 'Bayer 8x8 - 8x8 pattern',
    ditheringAtkinson: 'Atkinson - Fewer artifacts ⭐⭐⭐⭐',
    ditheringHint: '💡 Floyd-Steinberg ideal for photos, Bayer for pixel art',

    // Filters Section
    filters: '🎛️ Image Filters',
    brightness: 'Brightness',
    contrast: 'Contrast',
    saturation: 'Saturation',
    grayscale: 'Grayscale',
    invert: 'Invert Colors',

    // Resize Section
    resize: '📏 Resizing',
    resizeFitWidth: 'Fit to width (16px)',
    resizeFitHeight: 'Fit to height (16px)',
    resizeCustom: 'Custom size',
    resizeOriginal: 'Original size (limited to 160×120)',
    width: 'Width',
    height: 'Height',
    px: 'px',

    // Buttons
    convert: '🔄 Convert',
    reset: '↻ Reset',
    copyCode: '📋 Copy Code',
    downloadPNG: '⬇️ Download PNG',
    downloadJS: '⬇️ Download .js',
    clearHistory: '🗑️ Clear History',

    // Output Section
    outputTitle: '📋 MakeCode Arcade Code',
    outputHint: '💡 Tip: Paste the code directly in the JavaScript tab of MakeCode Arcade',

    // History Section
    historyTitle: '📜 Conversion History',

    // Footer
    footerText: '🎮 Arcade Sprite Converter - Convert your images to MakeCode Arcade sprites',
    footerVersion: 'Version 2.0 | Hosted on GitHub Pages |',
    footerInspired: 'Inspired by Kristian Pedersen',

    // Notifications
    notificationSuccess: '✅ Conversion successful!',
    notificationCopied: '📋 Code copied to clipboard!',
    notificationPNGDownloaded: '⬇️ PNG downloaded!',
    notificationJSDownloaded: '⬇️ JavaScript file downloaded!',
    notificationPresetApplied: '✨ Preset applied!',
    notificationHistoryCleared: '🗑️ History cleared',
    notificationFileTooLarge: 'File too large (max 10MB)',
    notificationConfirmClear: 'Are you sure you want to clear the entire history?',

    // UI Messages
    conversion: 'Converting...',
  }
};

// ============================================================
// CURRENT LANGUAGE STATE - DEFAULT TO ENGLISH
// ============================================================

let currentLanguage = localStorage.getItem('arcadeSpriteLanguage') || 'en';

// ============================================================
// GET TRANSLATION FUNCTION
// ============================================================

function t(key) {
  if (translations[currentLanguage] && translations[currentLanguage][key]) {
    return translations[currentLanguage][key];
  }

  if (translations['en'] && translations['en'][key]) {
    return translations['en'][key];
  }

  return key;
}

// ============================================================
// CHANGE LANGUAGE FUNCTION
// ============================================================

function changeLanguage(lang) {
  if (lang === 'fr' || lang === 'en') {
    currentLanguage = lang;
    localStorage.setItem('arcadeSpriteLanguage', lang);
    setActiveLanguageButton();
    updateUILanguage();
    showToast(lang === 'fr' ? '🇫🇷 Français' : '🇬🇧 English');
  }
}

// ============================================================
// SET ACTIVE LANGUAGE BUTTON
// ============================================================

function setActiveLanguageButton() {
  const btnFR = document.getElementById('langFR');
  const btnEN = document.getElementById('langEN');
  
  if (btnFR) btnFR.classList.remove('active');
  if (btnEN) btnEN.classList.remove('active');
  
  if (currentLanguage === 'fr' && btnFR) {
    btnFR.classList.add('active');
  } else if (btnEN) {
    btnEN.classList.add('active');
  }
}

// ============================================================
// UPDATE UI LANGUAGE
// ============================================================

function updateUILanguage() {
  // Header
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  if (pageTitle) pageTitle.textContent = t('title');
  if (pageSubtitle) pageSubtitle.textContent = t('subtitle');

  // Upload Section
  const uploadText = document.getElementById('uploadText');
  const uploadLink = document.getElementById('uploadLink');
  const uploadInfo = document.getElementById('uploadInfo');
  if (uploadText) uploadText.textContent = t('uploadText');
  if (uploadLink) uploadLink.textContent = t('uploadLink');
  if (uploadInfo) uploadInfo.textContent = t('uploadInfo');

  // Preview Labels
  const originalLabel = document.getElementById('originalLabel');
  const previewLabel = document.getElementById('previewLabel');
  if (originalLabel) originalLabel.textContent = t('original');
  if (previewLabel) previewLabel.textContent = t('preview');

  // Quick Presets
  const quickPresetsLabel = document.getElementById('quickPresetsLabel');
  const presetHQLabel = document.getElementById('presetHQLabel');
  const presetBalanceLabel = document.getElementById('presetBalanceLabel');
  const presetFastLabel = document.getElementById('presetFastLabel');
  const presetRetroLabel = document.getElementById('presetRetroLabel');
  if (quickPresetsLabel) quickPresetsLabel.textContent = t('quickPresets');
  if (presetHQLabel) presetHQLabel.textContent = t('presetHQ');
  if (presetBalanceLabel) presetBalanceLabel.textContent = t('presetBalance');
  if (presetFastLabel) presetFastLabel.textContent = t('presetFast');
  if (presetRetroLabel) presetRetroLabel.textContent = t('presetRetro');

  // Palette Section
  const paletteLabel = document.getElementById('paletteLabel');
  const paletteMakeCode = document.getElementById('paletteMakeCode');
  const paletteGameBoy = document.getElementById('paletteGameBoy');
  const palettePICO8 = document.getElementById('palettePICO8');
  const paletteCommodore = document.getElementById('paletteCommodore');
  const paletteAtari = document.getElementById('paletteAtari');
  if (paletteLabel) paletteLabel.textContent = t('palette');
  if (paletteMakeCode) paletteMakeCode.textContent = t('paletteMakeCode');
  if (paletteGameBoy) paletteGameBoy.textContent = t('paletteGameBoy');
  if (palettePICO8) palettePICO8.textContent = t('palettePICO8');
  if (paletteCommodore) paletteCommodore.textContent = t('paletteCommodore');
  if (paletteAtari) paletteAtari.textContent = t('paletteAtari');

  // Dithering Section
  const ditheringLabel = document.getElementById('ditheringLabel');
  const ditheringNearest = document.getElementById('ditheringNearest');
  const ditheringFloyd = document.getElementById('ditheringFloyd');
  const ditheringBayer2x2 = document.getElementById('ditheringBayer2x2');
  const ditheringBayer4x4 = document.getElementById('ditheringBayer4x4');
  const ditheringBayer8x8 = document.getElementById('ditheringBayer8x8');
  const ditheringAtkinson = document.getElementById('ditheringAtkinson');
  const ditheringHint = document.getElementById('ditheringHint');
  if (ditheringLabel) ditheringLabel.textContent = t('dithering');
  if (ditheringNearest) ditheringNearest.textContent = t('ditheringNearest');
  if (ditheringFloyd) ditheringFloyd.textContent = t('ditheringFloyd');
  if (ditheringBayer2x2) ditheringBayer2x2.textContent = t('ditheringBayer2x2');
  if (ditheringBayer4x4) ditheringBayer4x4.textContent = t('ditheringBayer4x4');
  if (ditheringBayer8x8) ditheringBayer8x8.textContent = t('ditheringBayer8x8');
  if (ditheringAtkinson) ditheringAtkinson.textContent = t('ditheringAtkinson');
  if (ditheringHint) ditheringHint.textContent = t('ditheringHint');

  // Filters Section
  const filtersLabel = document.getElementById('filtersLabel');
  const brightnessLabel = document.getElementById('brightnessLabel');
  const contrastLabel = document.getElementById('contrastLabel');
  const saturationLabel = document.getElementById('saturationLabel');
  const grayscaleLabel = document.getElementById('grayscaleLabel');
  const invertLabel = document.getElementById('invertLabel');
  if (filtersLabel) filtersLabel.textContent = t('filters');
  if (brightnessLabel) brightnessLabel.textContent = t('brightness');
  if (contrastLabel) contrastLabel.textContent = t('contrast');
  if (saturationLabel) saturationLabel.textContent = t('saturation');
  if (grayscaleLabel) grayscaleLabel.textContent = t('grayscale');
  if (invertLabel) invertLabel.textContent = t('invert');

  // Resize Section
  const resizeLabel = document.getElementById('resizeLabel');
  const resizeFitWidthLabel = document.getElementById('resizeFitWidthLabel');
  const resizeFitHeightLabel = document.getElementById('resizeFitHeightLabel');
  const resizeCustomLabel = document.getElementById('resizeCustomLabel');
  const resizeOriginalLabel = document.getElementById('resizeOriginalLabel');
  const widthLabel = document.getElementById('widthLabel');
  const heightLabel = document.getElementById('heightLabel');
  const pxLabel = document.getElementById('pxLabel');
  const pxLabel2 = document.getElementById('pxLabel2');
  if (resizeLabel) resizeLabel.textContent = t('resize');
  if (resizeFitWidthLabel) resizeFitWidthLabel.textContent = t('resizeFitWidth');
  if (resizeFitHeightLabel) resizeFitHeightLabel.textContent = t('resizeFitHeight');
  if (resizeCustomLabel) resizeCustomLabel.textContent = t('resizeCustom');
  if (resizeOriginalLabel) resizeOriginalLabel.textContent = t('resizeOriginal');
  if (widthLabel) widthLabel.textContent = t('width') + ': ';
  if (heightLabel) heightLabel.textContent = t('height') + ': ';
  if (pxLabel) pxLabel.textContent = t('px');
  if (pxLabel2) pxLabel2.textContent = t('px');

  // Buttons
  const convertLabel = document.getElementById('convertLabel');
  const resetLabel = document.getElementById('resetLabel');
  const copyLabel = document.getElementById('copyLabel');
  const downloadLabel = document.getElementById('downloadLabel');
  const downloadJSLabel = document.getElementById('downloadJSLabel');
  const clearHistoryLabel = document.getElementById('clearHistoryLabel');
  if (convertLabel) convertLabel.textContent = t('convert');
  if (resetLabel) resetLabel.textContent = t('reset');
  if (copyLabel) copyLabel.textContent = t('copyCode');
  if (downloadLabel) downloadLabel.textContent = t('downloadPNG');
  if (downloadJSLabel) downloadJSLabel.textContent = t('downloadJS');
  if (clearHistoryLabel) clearHistoryLabel.textContent = t('clearHistory');

  // Output Section
  const outputTitle = document.getElementById('outputTitle');
  const outputHint = document.getElementById('outputHint');
  if (outputTitle) outputTitle.textContent = t('outputTitle');
  if (outputHint) outputHint.textContent = t('outputHint');

  // History Section
  const historyTitle = document.getElementById('historyTitle');
  if (historyTitle) historyTitle.textContent = t('historyTitle');

  // Footer
  const footerText = document.getElementById('footerText');
  const footerVersion = document.getElementById('footerVersion');
  const footerInspired = document.getElementById('footerInspired');
  if (footerText) footerText.textContent = t('footerText');
  if (footerVersion) footerVersion.textContent = t('footerVersion');
  if (footerInspired) footerInspired.textContent = t('footerInspired');

  // Spinner
  const spinnerText = document.getElementById('spinnerText');
  if (spinnerText) spinnerText.textContent = t('conversion');
}
