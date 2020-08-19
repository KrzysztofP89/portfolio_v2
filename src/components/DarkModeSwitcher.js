import React from 'react'
import styled, { keyframes, useColorMode } from '@xstyled/styled-components'

const blink = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
`

const Switcher = styled.button`
  width: 60;
  height: 30;
  position: relative;
  border-radius: 20;
  display: flex;
  align-items: center;
  padding: 0 6rpx;
  background-color: #dadbd3;
  border: 0;
  opacity: 0;
  cursor: pointer;
  transition: opacity 200ms;

  &.ready {
    opacity: 1;
    transition: all 0.2s linear;

    .star {
      transition: all 0.2s linear;
    }

    .round-btn {
      transition: all 0.2s linear;

      .moon-mode {
        transition: all 0.3s linear;
      }
    }
  }

  &:focus {
    outline: none;
    appearance: none;
    box-shadow: glow;
  }

  .star {
    position: absolute;
    background-color: white;
    clip-path: circle(45%);
  }



  .round-btn {
    width: 20;
    height: 20;
    clip-path: circle(50% at 50% 50%);
    background-color: white;
    border-radius: 50%;
    border: 1px solid transparent;

    .moon-mode {
      width: 18;
      height: 18;
      border-radius: 30%;
      background: #232a63;
      position: absolute;
      left: -4;
      top: 0;
      opacity: 0;
    }
  }

  &.dark {
    background: #232a63;
  }

  &.dark .star {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }

  &.dark .round-btn {
    transform: translateX(30px) rotate(20deg);
    border-color: #00134c;
  }

  &.dark .round-btn .moon-mode {
    opacity: 1;
  }
`

export function DarkModeSwitcher() {
  const [mode, setMode] = useColorMode()
  const [ready, setReady] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 10)
  }, [])
  return (
    <Switcher
      type="button"
      aria-label="Color mode"
      className={`switcher ${mode} ${ready ? 'ready' : ''}`}
      onClick={() => setMode((mode) => (mode === 'light' ? 'dark' : 'light'))}
    >
      <div className="star star1" />
      <div className="star star2" />
      <div className="star star3" />
      <div className="round-btn">
        <div className="moon-mode" />
      </div>
    </Switcher>
  )
}
