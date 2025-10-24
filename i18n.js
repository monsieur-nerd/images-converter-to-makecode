
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
// CURRENT LANGUAGE STATE
// ============================================================

let currentLanguage = localStorage.getItem('arcadeSpriteLanguage') || 'fr';

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
// UPDATE UI LANGUAGE (Stub - will be called from app.js)
// ============================================================

function updateUILanguage() {
    // Cette fonction est définie dans app.js
    // Elle ne fait rien ici, c'est juste un placeholder
}

