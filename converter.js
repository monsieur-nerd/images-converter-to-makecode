// ============================================================
// PALETTES PRÉDÉFINIES
// ============================================================

const PALETTES = {
    'makecode': [
        { r: 0, g: 0, b: 0, name: 'Transparent', hex: '#000000' },
        { r: 255, g: 255, b: 255, name: 'White', hex: '#FFFFFF' },
        { r: 255, g: 33, b: 33, name: 'Red', hex: '#FF2121' },
        { r: 255, g: 147, b: 196, name: 'Pink', hex: '#FF93C4' },
        { r: 255, g: 129, b: 53, name: 'Orange', hex: '#FF8135' },
        { r: 255, g: 216, b: 112, name: 'Yellow', hex: '#FFD870' },
        { r: 36, g: 156, b: 163, name: 'Teal', hex: '#249CA3' },
        { r: 120, g: 220, b: 82, name: 'Green', hex: '#78DC52' },
        { r: 0, g: 135, b: 81, name: 'Dark Green', hex: '#008751' },
        { r: 20, g: 228, b: 194, name: 'Light Blue', hex: '#14E4C2' },
        { r: 51, g: 51, b: 255, name: 'Blue', hex: '#3333FF' },
        { r: 0, g: 90, b: 153, name: 'Dark Blue', hex: '#005A99' },
        { r: 132, g: 112, b: 169, name: 'Purple', hex: '#8470A9' },
        { r: 105, g: 106, b: 173, name: 'Light Purple', hex: '#696AAD' },
        { r: 212, g: 193, b: 151, name: 'Tan', hex: '#D4C197' },
        { r: 141, g: 82, b: 73, name: 'Brown', hex: '#8D5249' }
    ],
    'game-boy': [
        { r: 15, g: 56, b: 15, name: 'Black', hex: '#0F380F' },
        { r: 48, g: 98, b: 48, name: 'Dark Gray', hex: '#306230' },
        { r: 139, g: 172, b: 15, name: 'Light Gray', hex: '#8BAC0F' },
        { r: 155, g: 188, b: 15, name: 'White', hex: '#9BBC0F' }
    ],
    'pico-8': [
        { r: 0, g: 0, b: 0, name: 'Black', hex: '#000000' },
        { r: 29, g: 43, b: 83, name: 'Dark Blue', hex: '#1D2B53' },
        { r: 126, g: 37, b: 83, name: 'Dark Purple', hex: '#7E2553' },
        { r: 0, g: 135, b: 81, name: 'Dark Green', hex: '#008751' },
        { r: 171, g: 82, b: 54, name: 'Brown', hex: '#AB5236' },
        { r: 95, g: 87, b: 79, name: 'Dark Gray', hex: '#5F574F' },
        { r: 194, g: 195, b: 199, name: 'Light Gray', hex: '#C2C3C7' },
        { r: 255, g: 241, b: 232, name: 'White', hex: '#FFF1E8' },
        { r: 255, g: 0, b: 77, name: 'Red', hex: '#FF004D' },
        { r: 255, g: 163, b: 0, name: 'Orange', hex: '#FFA300' },
        { r: 255, g: 240, b: 0, name: 'Yellow', hex: '#FFF000' },
        { r: 0, g: 231, b: 54, name: 'Green', hex: '#00E436' },
        { r: 41, g: 173, b: 255, name: 'Blue', hex: '#29ADFF' },
        { r: 131, g: 118, b: 156, name: 'Indigo', hex: '#83769C' },
        { r: 255, g: 119, b: 168, name: 'Pink', hex: '#FF77A8' },
        { r: 255, g: 204, b: 170, name: 'Peach', hex: '#FFCCAA' }
    ],
    'commodore-64': [
        { r: 0, g: 0, b: 0, name: 'Black', hex: '#000000' },
        { r: 255, g: 255, b: 255, name: 'White', hex: '#FFFFFF' },
        { r: 104, g: 55, b: 43, name: 'Red', hex: '#683727' },
        { r: 111, g: 194, b: 202, name: 'Cyan', hex: '#6FC2CA' },
        { r: 163, g: 53, b: 158, name: 'Magenta', hex: '#A3359E' },
        { r: 87, g: 171, b: 45, name: 'Green', hex: '#57AB2D' },
        { r: 40, g: 40, b: 120, name: 'Blue', hex: '#282878' },
        { r: 184, g: 199, b: 111, name: 'Yellow', hex: '#B8C76F' },
        { r: 170, g: 85, b: 0, name: 'Orange', hex: '#AA5500' },
        { r: 119, g: 68, b: 0, name: 'Brown', hex: '#774400' },
        { r: 221, g: 136, b: 119, name: 'Light Red', hex: '#DD8877' },
        { r: 136, g: 136, b: 136, name: 'Gray 1', hex: '#888888' },
        { r: 187, g: 187, b: 187, name: 'Gray 2', hex: '#BBBBBB' },
        { r: 170, g: 255, b: 102, name: 'Light Green', hex: '#AAFF66' },
        { r: 136, g: 136, b: 255, name: 'Light Blue', hex: '#8888FF' },
        { r: 221, g: 221, b: 221, name: 'Light Gray', hex: '#DDDDDD' }
    ],
    'atari-2600': [
        { r: 0, g: 0, b: 0, name: 'Black', hex: '#000000' },
        { r: 68, g: 68, b: 68, name: 'Dark Gray', hex: '#444444' },
        { r: 136, g: 136, b: 136, name: 'Gray', hex: '#888888' },
        { r: 204, g: 204, b: 204, name: 'Light Gray', hex: '#CCCCCC' },
        { r: 0, g: 0, b: 136, name: 'Dark Blue', hex: '#000088' },
        { r: 68, g: 68, b: 204, name: 'Blue', hex: '#4444CC' },
        { r: 136, g: 136, b: 255, name: 'Light Blue', hex: '#8888FF' },
        { r: 204, g: 204, b: 255, name: 'Lighter Blue', hex: '#CCCCFF' },
        { r: 136, g: 0, b: 0, name: 'Dark Red', hex: '#880000' },
        { r: 204, g: 68, b: 68, name: 'Red', hex: '#CC4444' },
        { r: 255, g: 136, b: 136, name: 'Light Red', hex: '#FF8888' },
        { r: 255, g: 204, b: 204, name: 'Lighter Red', hex: '#FFCCCC' },
        { r: 0, g: 136, b: 0, name: 'Dark Green', hex: '#008800' },
        { r: 68, g: 204, b: 68, name: 'Green', hex: '#44CC44' },
        { r: 136, g: 255, b: 136, name: 'Light Green', hex: '#88FF88' },
        { r: 204, g: 255, b: 204, name: 'Lighter Green', hex: '#CCFFCC' }
    ]
};

// ============================================================
// BAYER MATRICES POUR DITHERING ORDONNÉ
// ============================================================

const BAYER_MATRIX_2x2 = [
    [0, 2],
    [3, 1]
];

const BAYER_MATRIX_4x4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5]
];

const BAYER_MATRIX_8x8 = [
    [0, 32, 8, 40, 2, 34, 10, 42],
    [48, 16, 56, 24, 50, 18, 58, 26],
    [12, 44, 4, 36, 14, 46, 6, 38],
    [60, 28, 52, 20, 62, 30, 54, 22],
    [3, 35, 11, 43, 1, 33, 9, 41],
    [51, 19, 59, 27, 49, 17, 57, 25],
    [15, 47, 7, 39, 13, 45, 5, 37],
    [63, 31, 55, 23, 61, 29, 53, 21]
];

// ============================================================
// CALCUL DE DISTANCE DE COULEUR
// ============================================================

function colorDistance(r1, g1, b1, r2, g2, b2) {
    const rDiff = r1 - r2;
    const gDiff = g1 - g2;
    const bDiff = b1 - b2;
    return Math.sqrt(rDiff * rDiff * 0.299 + gDiff * gDiff * 0.587 + bDiff * bDiff * 0.114);
}

// ============================================================
// ALGORITHMES DE QUANTIFICATION
// ============================================================

function quantizeNearestColor(imageData, palette) {
    const pixels = imageData.data;
    
    for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];
        
        if (a < 128) {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 0;
            pixels[i + 3] = 0;
            continue;
        }
        
        let minDist = Infinity;
        let closestIdx = 0;
        
        for (let j = 0; j < palette.length; j++) {
            const dist = colorDistance(r, g, b, palette[j].r, palette[j].g, palette[j].b);
            if (dist < minDist) {
                minDist = dist;
                closestIdx = j;
            }
        }
        
        const color = palette[closestIdx];
        pixels[i] = color.r;
        pixels[i + 1] = color.g;
        pixels[i + 2] = color.b;
    }
    
    return imageData;
}

// ============================================================
// ALGORITHMES DE DITHERING
// ============================================================

function floydSteinbergDither(imageData, palette) {
    const pixels = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    
    const errorR = Array(width * height).fill(0);
    const errorG = Array(width * height).fill(0);
    const errorB = Array(width * height).fill(0);
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            
            let r = Math.round(pixels[idx] + errorR[y * width + x]);
            let g = Math.round(pixels[idx + 1] + errorG[y * width + x]);
            let b = Math.round(pixels[idx + 2] + errorB[y * width + x]);
            const a = pixels[idx + 3];
            
            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));
            
            if (a < 128) {
                pixels[idx] = pixels[idx + 1] = pixels[idx + 2] = 0;
                pixels[idx + 3] = 0;
                continue;
            }
            
            let minDist = Infinity;
            let closestColor = palette;
            
            for (let color of palette) {
                const dist = colorDistance(r, g, b, color.r, color.g, color.b);
                if (dist < minDist) {
                    minDist = dist;
                    closestColor = color;
                }
            }
            
            const errR = r - closestColor.r;
            const errG = g - closestColor.g;
            const errB = b - closestColor.b;
            
            const diffusionWeights = [
                { dx: 1, dy: 0, weight: 7/16 },
                { dx: -1, dy: 1, weight: 3/16 },
                { dx: 0, dy: 1, weight: 5/16 },
                { dx: 1, dy: 1, weight: 1/16 }
            ];
            
            for (const { dx, dy, weight } of diffusionWeights) {
                const nx = x + dx;
                const ny = y + dy;
                
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const nidx = ny * width + nx;
                    errorR[nidx] += errR * weight;
                    errorG[nidx] += errG * weight;
                    errorB[nidx] += errB * weight;
                }
            }
            
            pixels[idx] = closestColor.r;
            pixels[idx + 1] = closestColor.g;
            pixels[idx + 2] = closestColor.b;
        }
    }
    
    return imageData;
}

function bayerDither(imageData, palette, bayerMatrix) {
    const pixels = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const matrixSize = bayerMatrix.length;
    const matrixMax = matrixSize * matrixSize;
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const a = pixels[idx + 3];
            
            if (a < 128) {
                pixels[idx] = pixels[idx + 1] = pixels[idx + 2] = 0;
                pixels[idx + 3] = 0;
                continue;
            }
            
            let r = pixels[idx];
            let g = pixels[idx + 1];
            let b = pixels[idx + 2];
            
            const threshold = bayerMatrix[y % matrixSize][x % matrixSize] / matrixMax;
            
            r = Math.round(r + (threshold - 0.5) * 256);
            g = Math.round(g + (threshold - 0.5) * 256);
            b = Math.round(b + (threshold - 0.5) * 256);
            
            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));
            
            let minDist = Infinity;
            let closestColor = palette;
            
            for (let color of palette) {
                const dist = colorDistance(r, g, b, color.r, color.g, color.b);
                if (dist < minDist) {
                    minDist = dist;
                    closestColor = color;
                }
            }
            
            pixels[idx] = closestColor.r;
            pixels[idx + 1] = closestColor.g;
            pixels[idx + 2] = closestColor.b;
        }
    }
    
    return imageData;
}

function atkinsonDither(imageData, palette) {
    const pixels = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    
    const errorR = Array(width * height).fill(0);
    const errorG = Array(width * height).fill(0);
    const errorB = Array(width * height).fill(0);
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            
            let r = Math.round(pixels[idx] + errorR[y * width + x]);
            let g = Math.round(pixels[idx + 1] + errorG[y * width + x]);
            let b = Math.round(pixels[idx + 2] + errorB[y * width + x]);
            const a = pixels[idx + 3];
            
            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));
            
            if (a < 128) {
                pixels[idx] = pixels[idx + 1] = pixels[idx + 2] = 0;
                pixels[idx + 3] = 0;
                continue;
            }
            
            let minDist = Infinity;
            let closestColor = palette;
            
            for (let color of palette) {
                const dist = colorDistance(r, g, b, color.r, color.g, color.b);
                if (dist < minDist) {
                    minDist = dist;
                    closestColor = color;
                }
            }
            
            const errR = r - closestColor.r;
            const errG = g - closestColor.g;
            const errB = b - closestColor.b;
            
            const diffusionWeights = [
                { dx: 1, dy: 0, weight: 1/8 },
                { dx: 2, dy: 0, weight: 1/8 },
                { dx: -1, dy: 1, weight: 1/8 },
                { dx: 0, dy: 1, weight: 1/8 },
                { dx: 1, dy: 1, weight: 1/8 },
                { dx: 0, dy: 2, weight: 1/8 }
            ];
            
            for (const { dx, dy, weight } of diffusionWeights) {
                const nx = x + dx;
                const ny = y + dy;
                
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const nidx = ny * width + nx;
                    errorR[nidx] += errR * weight;
                    errorG[nidx] += errG * weight;
                    errorB[nidx] += errB * weight;
                }
            }
            
            pixels[idx] = closestColor.r;
            pixels[idx + 1] = closestColor.g;
            pixels[idx + 2] = closestColor.b;
        }
    }
    
    return imageData;
}

// ============================================================
// FILTRES D'IMAGE
// ============================================================

function applyBrightness(imageData, amount) {
    const pixels = imageData.data;
    const brightness = Math.round(amount);
    
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = Math.max(0, Math.min(255, pixels[i] + brightness));
        pixels[i + 1] = Math.max(0, Math.min(255, pixels[i + 1] + brightness));
        pixels[i + 2] = Math.max(0, Math.min(255, pixels[i + 2] + brightness));
    }
}

function applyContrast(imageData, amount) {
    const pixels = imageData.data;
    const factor = (259 * (amount + 255)) / (255 * (259 - amount));
    
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = Math.max(0, Math.min(255, factor * (pixels[i] - 128) + 128));
        pixels[i + 1] = Math.max(0, Math.min(255, factor * (pixels[i + 1] - 128) + 128));
        pixels[i + 2] = Math.max(0, Math.min(255, factor * (pixels[i + 2] - 128) + 128));
    }
}

function applySaturation(imageData, amount) {
    const pixels = imageData.data;
    const factor = 1 + amount / 100;
    
    for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        
        pixels[i] = Math.max(0, Math.min(255, gray + (r - gray) * factor));
        pixels[i + 1] = Math.max(0, Math.min(255, gray + (g - gray) * factor));
        pixels[i + 2] = Math.max(0, Math.min(255, gray + (b - gray) * factor));
    }
}

function applyGrayscale(imageData) {
    const pixels = imageData.data;
    
    for (let i = 0; i < pixels.length; i += 4) {
        const gray = 0.299 * pixels[i] + 0.587 * pixels[i + 1] + 0.114 * pixels[i + 2];
        pixels[i] = gray;
        pixels[i + 1] = gray;
        pixels[i + 2] = gray;
    }
}

function applyInvert(imageData) {
    const pixels = imageData.data;
    
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 255 - pixels[i];
        pixels[i + 1] = 255 - pixels[i + 1];
        pixels[i + 2] = 255 - pixels[i + 2];
    }
}
