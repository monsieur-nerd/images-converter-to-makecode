// ============================================================
// ARCADE SPRITE CONVERTER - APPLICATION PRINCIPALE
// ============================================================

let currentImage = null;
let currentConfig = {};
let conversionHistory = [];

const elements = {
    imageInput: null,
    dropZone: null,
    beforeCanvas: null,
    afterCanvas: null,
    beforeInfo: null,
    afterInfo: null,
    paletteSelect: null,
    ditheringSelect: null,
    brightnessSlider: null,
    contrastSlider: null,
    saturationSlider: null,
    grayscaleCheck: null,
    invertCheck: null,
    resizeModeRadios: null,
    customSizeInputs: null,
    customWidth: null,
    customHeight: null,
    convertBtn: null,
    resetBtn: null,
    copyButton: null,
    downloadButton: null,
    downloadJSButton: null,
    clearHistoryBtn: null,
    presets: {},
    mainContent: null,
    outputSection: null,
    outputCode: null,
    outputStats: null,
    historySection: null,
    historyList: null,
    spinner: null,
    toast: null,
};

// ============================================================
// INITIALISATION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Arcade Sprite Converter Pro - Initialisation');
    
    cacheDOM();
    setupEventListeners();
    loadHistory();
    setActiveLanguageButton();
    updateUILanguage();
});

function cacheDOM() {
    elements.imageInput = document.getElementById('imageInput');
    elements.dropZone = document.getElementById('dropZone');
    elements.beforeCanvas = document.getElementById('beforeCanvas');
    elements.afterCanvas = document.getElementById('afterCanvas');
    elements.beforeInfo = document.getElementById('beforeInfo');
    elements.afterInfo = document.getElementById('afterInfo');
    elements.paletteSelect = document.getElementById('paletteSelect');
    elements.ditheringSelect = document.getElementById('ditheringSelect');
    elements.brightnessSlider = document.getElementById('brightnessSlider');
    elements.contrastSlider = document.getElementById('contrastSlider');
    elements.saturationSlider = document.getElementById('saturationSlider');
    elements.grayscaleCheck = document.getElementById('grayscaleCheck');
    elements.invertCheck = document.getElementById('invertCheck');
    elements.resizeModeRadios = document.getElementsByName('resizeMode');
    elements.customSizeInputs = document.getElementById('customSizeInputs');
    elements.customWidth = document.getElementById('customWidth');
    elements.customHeight = document.getElementById('customHeight');
    elements.convertBtn = document.getElementById('convertBtn');
    elements.resetBtn = document.getElementById('resetBtn');
    elements.copyButton = document.getElementById('copyButton');
    elements.downloadButton = document.getElementById('downloadButton');
    elements.downloadJSButton = document.getElementById('downloadJSButton');
    elements.clearHistoryBtn = document.getElementById('clearHistoryBtn');
    elements.presets.hq = document.getElementById('presetHQ');
    elements.presets.balance = document.getElementById('presetBalance');
    elements.presets.fast = document.getElementById('presetFast');
    elements.presets.retro = document.getElementById('presetRetro');
    elements.mainContent = document.getElementById('mainContent');
    elements.outputSection = document.getElementById('outputSection');
    elements.outputCode = document.getElementById('outputCode');
    elements.outputStats = document.getElementById('outputStats');
    elements.historySection = document.getElementById('historySection');
    elements.historyList = document.getElementById('historyList');
    elements.spinner = document.getElementById('spinner');
    elements.toast = document.getElementById('toast');
}

function setupEventListeners() {
    elements.dropZone.addEventListener('click', () => elements.imageInput.click());
    elements.imageInput.addEventListener('change', handleImageSelect);
    
    elements.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.dropZone.classList.add('drag-over');
    });
    
    elements.dropZone.addEventListener('dragleave', () => {
        elements.dropZone.classList.remove('drag-over');
    });
    
    elements.dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    elements.dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleImageFile(e.dataTransfer.files[0]);  // ✅ File extrait
    }
});
    
    elements.paletteSelect.addEventListener('change', () => {
        updatePalettePreview();
        previewConversion();
    });
    
    elements.ditheringSelect.addEventListener('change', previewConversion);
    
    elements.brightnessSlider.addEventListener('input', (e) => {
        document.getElementById('brightnessValue').textContent = e.target.value + '%';
        previewConversion();
    });
    
    elements.contrastSlider.addEventListener('input', (e) => {
        document.getElementById('contrastValue').textContent = e.target.value + '%';
        previewConversion();
    });
    
    elements.saturationSlider.addEventListener('input', (e) => {
        document.getElementById('saturationValue').textContent = e.target.value + '%';
        previewConversion();
    });
    
    elements.grayscaleCheck.addEventListener('change', previewConversion);
    elements.invertCheck.addEventListener('change', previewConversion);
    
    elements.resizeModeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            elements.customSizeInputs.style.display = this.value === 'custom' ? 'block' : 'none';
            previewConversion();
        });
    });
    
    elements.customWidth.addEventListener('input', previewConversion);
    elements.customHeight.addEventListener('input', previewConversion);
    
    elements.convertBtn.addEventListener('click', performConversion);
    elements.resetBtn.addEventListener('click', resetForm);
    elements.copyButton.addEventListener('click', copyToClipboard);
    elements.downloadButton.addEventListener('click', downloadPNG);
    elements.downloadJSButton.addEventListener('click', downloadJS);
    elements.clearHistoryBtn.addEventListener('click', clearHistory);
    
    elements.presets.hq.addEventListener('click', () => applyPreset('highQuality'));
    elements.presets.balance.addEventListener('click', () => applyPreset('balanced'));
    elements.presets.fast.addEventListener('click', () => applyPreset('fast'));
    elements.presets.retro.addEventListener('click', () => applyPreset('retro'));
}

// ============================================================
// GESTION DES IMAGES
// ============================================================

function handleImageSelect(e) {
    const files = e.target.files;
    if (files && files.length > 0) {
        handleImageFile(files[0]);              // ✅ File extrait
    }
}

function handleImageFile(file) {
    if (file.size > 10 * 1024 * 1024) {
        showToast('notificationFileTooLarge');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            currentImage = img;
            displayOriginalPreview(img);
            elements.mainContent.style.display = 'grid';
            elements.convertBtn.disabled = false;
            elements.outputSection.style.display = 'none';
            
            setTimeout(() => previewConversion(), 100);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function displayOriginalPreview(img) {
    elements.beforeCanvas.width = Math.min(img.width, 300);
    elements.beforeCanvas.height = Math.min(img.height, 300);
    
    const ctx = elements.beforeCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, elements.beforeCanvas.width, elements.beforeCanvas.height);
    
    elements.beforeInfo.textContent = `${img.width} × ${img.height} ${t('pixels')}`;
}

// ============================================================
// PRÉVISUALISATION
// ============================================================

function previewConversion() {
    if (!currentImage) return;
    
    currentConfig = buildConfig();
    const { width, height } = calculateDimensions();
    
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(currentImage, 0, 0, width, height);
    
    const imageData = ctx.getImageData(0, 0, width, height);
    
    applyFilters(imageData);
    
    const palette = PALETTES[currentConfig.palette];
    applyDithering(imageData, palette, currentConfig.dithering);
    
    displayPreview(imageData, width, height);
}

function displayPreview(imageData, width, height) {
    const scale = Math.min(300 / width, 300 / height, 10);
    elements.afterCanvas.width = width * scale;
    elements.afterCanvas.height = height * scale;
    
    const ctx = elements.afterCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = imageData.data[idx];
            const g = imageData.data[idx + 1];
            const b = imageData.data[idx + 2];
            const a = imageData.data[idx + 3];
            
            ctx.fillStyle = `rgba(${r},${g},${b},${a/255})`;
            ctx.fillRect(x * scale, y * scale, scale, scale);
        }
    }
    
    elements.afterInfo.textContent = `${width} × ${height} ${t('pixels')} (${t('converted')})`;
}

// ============================================================
// CONVERSION COMPLÈTE
// ============================================================

function performConversion() {
    if (!currentImage) return;
    
    showSpinner(true);
    
    setTimeout(() => {
        currentConfig = buildConfig();
        const { width, height } = calculateDimensions();
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(currentImage, 0, 0, width, height);
        
        const imageData = ctx.getImageData(0, 0, width, height);
        
        applyFilters(imageData);
        
        const palette = PALETTES[currentConfig.palette];
        applyDithering(imageData, palette, currentConfig.dithering);
        
        const spriteCode = generateMakeCodeSprite(imageData, width, height);
        
        const code = `let mySprite = sprites.create(img\`
${spriteCode}
\`, SpriteKind.Player)`;
        
        elements.outputCode.value = code;
        elements.outputStats.textContent = `${width} × ${height} pixels | ${currentConfig.dithering}`;
        elements.outputSection.style.display = 'block';
        
        addToHistory(imageData, currentConfig, width, height);
        
        showSpinner(false);
        showToast('notificationSuccess');
    }, 100);
}

// ============================================================
// CONFIGURATION
// ============================================================

function buildConfig() {
    const resizeMode = Array.from(elements.resizeModeRadios).find(r => r.checked).value;
    
    return {
        palette: elements.paletteSelect.value,
        dithering: elements.ditheringSelect.value,
        brightness: parseInt(elements.brightnessSlider.value),
        contrast: parseInt(elements.contrastSlider.value),
        saturation: parseInt(elements.saturationSlider.value),
        grayscale: elements.grayscaleCheck.checked,
        invert: elements.invertCheck.checked,
        resizeMode: resizeMode,
        customWidth: parseInt(elements.customWidth.value),
        customHeight: parseInt(elements.customHeight.value),
    };
}

function calculateDimensions() {
    const config = buildConfig();
    let width, height;
    
    switch (config.resizeMode) {
        case 'fitWidth':
            width = 16;
            height = Math.round((currentImage.height / currentImage.width) * 16);
            break;
        case 'fitHeight':
            height = 16;
            width = Math.round((currentImage.width / currentImage.height) * 16);
            break;
        case 'custom':
            width = config.customWidth;
            height = config.customHeight;
            break;
        case 'original':
            width = currentImage.width;
            height = currentImage.height;
            break;
        default:
            width = 16;
            height = 16;
    }
    
    width = Math.min(Math.max(1, width), 160);
    height = Math.min(Math.max(1, height), 120);
    
    return { width, height };
}

// ============================================================
// FILTRES D'IMAGE
// ============================================================

function applyFilters(imageData) {
    const config = buildConfig();
    
    if (config.grayscale) applyGrayscale(imageData);
    if (config.invert) applyInvert(imageData);
    if (config.brightness !== 0) applyBrightness(imageData, config.brightness);
    if (config.contrast !== 0) applyContrast(imageData, config.contrast);
    if (config.saturation !== 0) applySaturation(imageData, config.saturation);
}

// ============================================================
// DITHERING
// ============================================================

function applyDithering(imageData, palette, algorithm) {
    switch (algorithm) {
        case 'floyd-steinberg':
            floydSteinbergDither(imageData, palette);
            break;
        case 'bayer-2x2':
            bayerDither(imageData, palette, BAYER_MATRIX_2x2);
            break;
        case 'bayer-4x4':
            bayerDither(imageData, palette, BAYER_MATRIX_4x4);
            break;
        case 'bayer-8x8':
            bayerDither(imageData, palette, BAYER_MATRIX_8x8);
            break;
        case 'atkinson':
            atkinsonDither(imageData, palette);
            break;
        case 'nearest':
        default:
            quantizeNearestColor(imageData, palette);
    }
}

// ============================================================
// GÉNÉRATION DU CODE MAKECODE
// ============================================================

function generateMakeCodeSprite(imageData, width, height) {
    const palette = PALETTES['makecode'];
    const pixels = imageData.data;
    const lines = [];
    
    for (let y = 0; y < height; y++) {
        let line = '';
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = pixels[idx];
            const g = pixels[idx + 1];
            const b = pixels[idx + 2];
            const a = pixels[idx + 3];
            
            let colorIndex = 0;
            let minDist = Infinity;
            
            if (a < 128) {
                colorIndex = 0;
            } else {
                for (let i = 1; i < palette.length; i++) {
                    const dist = colorDistance(r, g, b, palette[i].r, palette[i].g, palette[i].b);
                    if (dist < minDist) {
                        minDist = dist;
                        colorIndex = i;
                    }
                }
            }
            
            line += colorIndex.toString(16) + ' ';
        }
        lines.push(line.trim());
    }
    
    return lines.join('\n');
}

// ============================================================
// UTILITAIRES
// ============================================================

function updatePalettePreview() {
    const palette = PALETTES[elements.paletteSelect.value];
    const previewDiv = document.getElementById('palettePreview');
    previewDiv.innerHTML = '';
    
    for (let i = 0; i < Math.min(16, palette.length); i++) {
        const color = palette[i];
        const swatch = document.createElement('div');
        swatch.className = 'palette-color';
        swatch.style.background = color.hex;
        swatch.title = color.name;
        previewDiv.appendChild(swatch);
    }
}

// ============================================================
// ACTIONS UTILISATEUR
// ============================================================

function applyPreset(presetName) {
    const presets = {
        highQuality: {
            dithering: 'floyd-steinberg',
            brightness: 0,
            contrast: 0,
            saturation: 0,
            grayscale: false,
            invert: false,
        },
        balanced: {
            dithering: 'bayer-4x4',
            brightness: 0,
            contrast: 5,
            saturation: 0,
            grayscale: false,
            invert: false,
        },
        fast: {
            dithering: 'nearest',
            brightness: 0,
            contrast: 0,
            saturation: 0,
            grayscale: false,
            invert: false,
        },
        retro: {
            dithering: 'bayer-4x4',
            brightness: 0,
            contrast: 10,
            saturation: 10,
            grayscale: false,
            invert: false,
        }
    };
    
    const preset = presets[presetName];
    elements.ditheringSelect.value = preset.dithering;
    elements.brightnessSlider.value = preset.brightness;
    elements.contrastSlider.value = preset.contrast;
    elements.saturationSlider.value = preset.saturation;
    elements.grayscaleCheck.checked = preset.grayscale;
    elements.invertCheck.checked = preset.invert;
    
    document.getElementById('brightnessValue').textContent = preset.brightness + '%';
    document.getElementById('contrastValue').textContent = preset.contrast + '%';
    document.getElementById('saturationValue').textContent = preset.saturation + '%';
    
    previewConversion();
    showToast('notificationPresetApplied');
}

function resetForm() {
    elements.imageInput.value = '';
    elements.ditheringSelect.value = 'floyd-steinberg';
    elements.brightnessSlider.value = 0;
    elements.contrastSlider.value = 0;
    elements.saturationSlider.value = 0;
    elements.grayscaleCheck.checked = false;
    elements.invertCheck.checked = false;
    
    document.getElementById('brightnessValue').textContent = '0%';
    document.getElementById('contrastValue').textContent = '0%';
    document.getElementById('saturationValue').textContent = '0%';
    
    currentImage = null;
    elements.mainContent.style.display = 'none';
    elements.outputSection.style.display = 'none';
}

function copyToClipboard() {
    elements.outputCode.select();
    document.execCommand('copy');
    
    const originalText = elements.copyButton.textContent;
    elements.copyButton.textContent = '✓ ' + t('notificationCopied');
    elements.copyButton.style.background = '#20c997';
    
    setTimeout(() => {
        elements.copyButton.textContent = originalText;
        elements.copyButton.style.background = 'var(--success)';
    }, 2000);
    
    showToast('notificationCopied');
}

function downloadPNG() {
    const { width, height } = calculateDimensions();
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(elements.afterCanvas, 0, 0);
    
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'sprite.png';
    link.click();
    
    showToast('notificationPNGDownloaded');
}

function downloadJS() {
    const code = elements.outputCode.value;
    const blob = new Blob([code], { type: 'text/javascript' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sprite.js';
    link.click();
    
    showToast('notificationJSDownloaded');
}

// ============================================================
// HISTORIQUE
// ============================================================

function addToHistory(imageData, config, width, height) {
    const thumbnail = document.createElement('canvas');
    thumbnail.width = 120;
    thumbnail.height = 120;
    const ctx = thumbnail.getContext('2d');
    
    ctx.drawImage(elements.afterCanvas, 0, 0, 120, 120);
    
    conversionHistory.unshift({
        timestamp: new Date().toLocaleString(),
        config: config,
        thumbnail: thumbnail.toDataURL()
    });
    
    if (conversionHistory.length > 50) {
        conversionHistory.pop();
    }
    
    saveHistory();
    displayHistory();
}

function displayHistory() {
    if (conversionHistory.length === 0) {
        elements.historySection.style.display = 'none';
        return;
    }
    
    elements.historySection.style.display = 'block';
    elements.historyList.innerHTML = '';
    
    conversionHistory.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `<img src="${item.thumbnail}" alt="Thumbnail">`;
        div.title = item.timestamp;
        div.style.cursor = 'pointer';
        
        div.addEventListener('click', () => {
            elements.outputCode.value = `let mySprite = sprites.create(img\`
// Sprite ${index + 1} - ${item.timestamp}
\`, SpriteKind.Player)`;
            elements.outputSection.scrollIntoView({ behavior: 'smooth' });
        });
        
        elements.historyList.appendChild(div);
    });
}

function saveHistory() {
    localStorage.setItem('arcadeSpriteHistory', JSON.stringify(conversionHistory));
}

function loadHistory() {
    const saved = localStorage.getItem('arcadeSpriteHistory');
    if (saved) {
        conversionHistory = JSON.parse(saved);
        displayHistory();
    }
}

function clearHistory() {
    if (confirm(t('notificationConfirmClear'))) {
        conversionHistory = [];
        saveHistory();
        displayHistory();
        showToast('notificationHistoryCleared');
    }
}

// ============================================================
// NOTIFICATIONS
// ============================================================

function showToast(message, type = 'success') {
    const toastMessage = message.startsWith('notification') ? t(message) : message;
    elements.toast.textContent = toastMessage;
    elements.toast.style.background = type === 'error' ? 'var(--danger)' : 'var(--success)';
    elements.toast.style.display = 'block';
    
    setTimeout(() => {
        elements.toast.style.display = 'none';
    }, 3000);
}

function showSpinner(show) {
    elements.spinner.style.display = show ? 'flex' : 'none';
}

// ============================================================
// UI LANGUAGE
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
