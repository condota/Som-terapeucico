
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 500 500" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Definição de gradientes para as agulhas (Ouro) */}
    <defs>
      <linearGradient id="needleGold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C5A059" />
        <stop offset="50%" stopColor="#E2C185" />
        <stop offset="100%" stopColor="#B08944" />
      </linearGradient>
    </defs>

    {/* ONDAS DO LOGO */}
    <g id="artwork-waves">
      {/* Onda Teal (Esquerda) */}
      <path 
        d="M142 165C105 230 115 360 250 415C180 380 120 280 142 165Z" 
        fill="#2D5A5A" 
        opacity="0.85"
      />
      <path 
        d="M125 180C90 245 100 350 220 400C160 370 110 280 125 180Z" 
        fill="#1B3A3A" 
        opacity="0.4"
      />

      {/* Onda Verde (Direita) */}
      <path 
        d="M358 185C395 240 385 365 250 415C340 380 390 280 358 185Z" 
        fill="#5E8B61" 
        opacity="0.85"
      />
      
      {/* Onda Cobre / Marrom (Base ondulada) */}
      <path 
        d="M105 315C160 290 280 370 385 285C370 340 280 425 180 415C125 410 105 360 105 315Z" 
        fill="#A66A3D" 
      />
      
      {/* Detalhe de sobreposição inferior */}
      <path 
        d="M170 355C210 345 270 370 320 350C290 385 230 395 170 355Z" 
        fill="#143D3B" 
        opacity="0.3"
      />
    </g>

    {/* AGULHAS (3 Unidades) */}
    <g id="needles-group">
      {/* Agulha Central */}
      <g transform="translate(250, 130)">
        <path d="M0 15V170" stroke="#B8914B" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Cabo com textura/espiral */}
        <path d="M-4 0C-4 -2 -2 -4 0 -4C2 -4 4 -2 4 0V45H-4V0Z" fill="url(#needleGold)"/>
        <rect x="-4" y="5" width="8" height="1" fill="#8B6B2D" opacity="0.3"/>
        <rect x="-4" y="10" width="8" height="1" fill="#8B6B2D" opacity="0.3"/>
        <rect x="-4" y="15" width="8" height="1" fill="#8B6B2D" opacity="0.3"/>
        <rect x="-4" y="20" width="8" height="1" fill="#8B6B2D" opacity="0.3"/>
        <rect x="-4" y="25" width="8" height="1" fill="#8B6B2D" opacity="0.3"/>
        <rect x="-4" y="30" width="8" height="1" fill="#8B6B2D" opacity="0.3"/>
        <rect x="-4" y="35" width="8" height="1" fill="#8B6B2D" opacity="0.3"/>
        {/* Olho da agulha */}
        <circle cx="0" cy="5" r="1.5" fill="#FFF" opacity="0.4"/>
      </g>

      {/* Agulha Esquerda */}
      <g transform="translate(195, 175) rotate(-15)">
        <path d="M0 15V150" stroke="#B8914B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M-3.5 0C-3.5 -2 -1.5 -3.5 0 -3.5C1.5 -3.5 3.5 -2 3.5 0V40H-3.5V0Z" fill="url(#needleGold)"/>
        {[...Array(8)].map((_, i) => (
          <rect key={i} x="-3.5" y={5 + i*4} width="7" height="0.8" fill="#8B6B2D" opacity="0.3"/>
        ))}
        <circle cx="0" cy="5" r="1.2" fill="#FFF" opacity="0.4"/>
      </g>

      {/* Agulha Direita */}
      <g transform="translate(305, 175) rotate(15)">
        <path d="M0 15V150" stroke="#B8914B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M-3.5 0C-3.5 -2 -1.5 -3.5 0 -3.5C1.5 -3.5 3.5 -2 3.5 0V40H-3.5V0Z" fill="url(#needleGold)"/>
        {[...Array(8)].map((_, i) => (
          <rect key={i} x="-3.5" y={5 + i*4} width="7" height="0.8" fill="#8B6B2D" opacity="0.3"/>
        ))}
        <circle cx="0" cy="5" r="1.2" fill="#FFF" opacity="0.4"/>
      </g>
    </g>
  </svg>
);

export default Logo;
