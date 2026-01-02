
class FrequencyOscillator {
  private audioContext: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.gainNode = this.audioContext.createGain();
      this.gainNode.connect(this.audioContext.destination);
      this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    }
  }

  start(frequency: number, volume: number) {
    this.init();
    if (!this.audioContext || !this.gainNode) return;

    if (this.oscillator) {
      this.oscillator.stop();
    }

    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    this.oscillator.connect(this.gainNode);
    
    this.oscillator.start();
    this.gainNode.gain.setTargetAtTime(volume / 100, this.audioContext.currentTime, 0.1);
  }

  stop() {
    if (this.gainNode && this.audioContext) {
      this.gainNode.gain.setTargetAtTime(0, this.audioContext.currentTime, 0.1);
      setTimeout(() => {
        if (this.oscillator) {
          this.oscillator.stop();
          this.oscillator = null;
        }
      }, 200);
    }
  }

  updateVolume(volume: number) {
    if (this.gainNode && this.audioContext) {
      this.gainNode.gain.setTargetAtTime(volume / 100, this.audioContext.currentTime, 0.1);
    }
  }

  setFrequency(frequency: number) {
    if (this.oscillator && this.audioContext) {
      this.oscillator.frequency.setTargetAtTime(frequency, this.audioContext.currentTime, 0.2);
    }
  }
}

export const oscillator = new FrequencyOscillator();
