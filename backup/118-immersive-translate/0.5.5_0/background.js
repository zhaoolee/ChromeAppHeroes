(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  };

  // <define:process.env>
  var define_process_env_default = { BUILD_TIME: "2023-05-10T06:33:00.404Z", VERSION: "0.5.5", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `:root {
  --immersive-translate-theme-underline-borderColor: #72ece9;
  --immersive-translate-theme-nativeUnderline-borderColor: #72ece9;
  --immersive-translate-theme-nativeDashed-borderColor: #72ece9;
  --immersive-translate-theme-nativeDotted-borderColor: #72ece9;
  --immersive-translate-theme-highlight-backgroundColor: #ffff00;
  --immersive-translate-theme-dashed-borderColor: #59c1bd;
  --immersive-translate-theme-blockquote-borderColor: #cc3355;
  --immersive-translate-theme-thinDashed-borderColor: #ff374f;
  --immersive-translate-theme-dashedBorder-borderColor: #94a3b8;
  --immersive-translate-theme-dashedBorder-borderRadius: 0;
  --immersive-translate-theme-solidBorder-borderColor: #94a3b8;
  --immersive-translate-theme-solidBorder-borderRadius: 0;
  --immersive-translate-theme-dotted-borderColor: #94a3b8;
  --immersive-translate-theme-wavy-borderColor: #72ece9;
  --immersive-translate-theme-dividingLine-borderColor: #94a3b8;
  --immersive-translate-theme-grey-textColor: #2f4f4f;
  --immersive-translate-theme-marker-backgroundColor: #fbda41;
  --immersive-translate-theme-marker-backgroundColor-rgb: 251, 218, 65;
  --immersive-translate-theme-marker2-backgroundColor: #ffff00;
}

.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}
.immersive-translate-pdf-target-container .immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container
  .immersive-translate-target-wrapper
  font {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: block;
}

.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}
.immersive-translate-target-translation-theme-grey-inner {
  color: var(--immersive-translate-theme-grey-textColor);
}

.immersive-translate-target-translation-inline-wrapper {
}

.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid
    var(--immersive-translate-theme-underline-borderColor) !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline
    var(--immersive-translate-theme-nativeUnderline-borderColor) !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline
    var(--immersive-translate-theme-nativeDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed
    var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    var(--immersive-translate-theme-dotted-borderColor) 30%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}
.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline
    var(--immersive-translate-theme-nativeDotted-borderColor) !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline
    var(--immersive-translate-theme-wavy-borderColor) !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      var(--immersive-translate-theme-dashed-borderColor) 0%,
      var(--immersive-translate-theme-dashed-borderColor) 50%,
      transparent 50%,
      transparent 100%
    )
    repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed
    var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: var(--immersive-translate-theme-highlight-backgroundColor);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker2-inner {
  font-weight: bold;
  text-shadow: 10px 0px 3px
      var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(
    to right,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.1),
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 3%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 35%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 70%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.8) 95%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.3)
  );
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.618 !important;
}

.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid var(--immersive-translate-theme-blockquote-borderColor) !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner:hover {
  filter: none !important;
}
/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(10%) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner {
  filter: opacity(10%)  !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner:hover {
  filter: none !important;
}
/* opacity theme end */

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
}

.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error {
  color: red;
}
.immersive-translate-clickable-button {
  align-items: normal;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 238);
  border-style: none;
  box-sizing: content-box;
  color: rgb(0, 0, 238);
  cursor: pointer;
  display: inline;
  font: inherit;
  height: auto;
  padding: 0;
  perspective-origin: 0 0;
  text-align: start;
  transform-origin: 0 0;
  width: auto;
  -moz-appearance: none;
  appearance: none;
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(9, 105, 218, 0.5) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}

.immersive-translate-loading-text:before {
  content: "...";
}

.immersive-translate-loading-none {
}
/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}
.immersive-translate-tooltip:before {
  content: attr(data-immersive-translate-tooltip-text); /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}
.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`, IMMERSIVE_TRANSLATE_PICO_CSS: `@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
`, IMMERSIVE_TRANSLATE_COMMON_CSS: `#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 4px;
  max-width: 128px;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  background-position: center right 0;
  background-size: 16px auto;
  text-overflow: ellipsis;
  text-align: right;
  color: var(--color);
}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`, IMMERSIVE_TRANSLATE_POPUP_CSS: `html {
  font-size: 17px;
  --font-size: 17px;
}

body {
  max-width: 100%;
  padding: 0;
  margin: 0;
  min-width: 250px;
  border-radius: 10px;
}
.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}
.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}
#mount {
  min-width: 250px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
}

.pt-4 {
  padding-top: 24px;
}
.p-2 {
  padding: 8px;
}
.pl-5 {
  padding-left: 48px;
}
.p-0 {
  padding: 0;
}
.pl-2 {
  padding-left: 8px;
}
.pl-4 {
  padding-left: 24px;
}
.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}
.text-sm {
  font-size: 14px;
}

.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}
.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}
.ml-4 {
  margin-left: 24px;
}
.ml-3 {
  margin-left: 16px;
}
.ml-2 {
  margin-left: 8px;
}
.mr-1 {
  margin-right: 4px;
}
.pl-3 {
  padding-left: 12px;
}
.pr-3 {
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}
.mt-4 {
  margin-top: 24px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}
.max-h-30 {
  max-height: 120px;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-2 {
  flex: 2;
}
.mt-3 {
  margin-top: 16px;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}
.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.pt-3 {
  padding-top: 12px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.pt-2 {
  padding-top: 8px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.pt-1 {
  padding-top: 4px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.pb-2 {
  padding-bottom: 8px;
}
.justify-end {
  justify-content: flex-end;
}
.w-auto {
  width: auto;
}
`, IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS: `html {
  font-size: 17px;
}
.immersive-translate-popup-container {
  position: fixed;
  padding: 0;
  z-index: 999999;
  right: 0;
  top: 335px;
  width: 36px;
}
.immersive-translate-popup-btn {
  display: inline-block;
  background-color: #ea4c89;
  font-size: 18px;
  opacity: 0.5;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
  border: none;
  padding: 0;
}
.immersive-translate-popup-btn > svg {
}
#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}
`, IMMERSIVE_TRANSLATE_POPUP_HTML: `<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`, MOCK: "0", DEBUG: "0" };

  // https://esm.sh/v119/webextension-polyfill@0.10.0/deno/webextension-polyfill.development.mjs
  var __create = Object.create, __defProp2 = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  }, __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  }, __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default")), __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  )), require_browser_polyfill = __commonJS({
    "../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
      (function(global, factory) {
        if (typeof define == "function" && define.amd)
          define("webextension-polyfill", ["module"], factory);
        else if (typeof exports < "u")
          factory(module);
        else {
          var mod = {
            exports: {}
          };
          factory(mod), global.browser = mod.exports;
        }
      })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : exports, function(module2) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id)
          throw new Error("This script should only be loaded in a browser extension.");
        if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          let CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.", wrapAPIs = (extensionAPIs) => {
            let apiMetadata = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: !1
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: !0
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0)
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items), this.createItem = createItem;
              }
              get(key) {
                return this.has(key) || this.set(key, this.createItem(key)), super.get(key);
              }
            }
            let isThenable = (value) => value && typeof value == "object" && typeof value.then == "function", makeCallback = (promise, metadata) => (...callbackArgs) => {
              extensionAPIs.runtime.lastError ? promise.reject(new Error(extensionAPIs.runtime.lastError.message)) : metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== !1 ? promise.resolve(callbackArgs[0]) : promise.resolve(callbackArgs);
            }, pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments", wrapAsyncFunction = (name, metadata) => function(target, ...args) {
              if (args.length < metadata.minArgs)
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs)
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise((resolve, reject) => {
                if (metadata.fallbackToNoCallback)
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch {
                    target[name](...args), metadata.fallbackToNoCallback = !1, metadata.noCallback = !0, resolve();
                  }
                else
                  metadata.noCallback ? (target[name](...args), resolve()) : target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
              });
            }, wrapMethod = (target, method, wrapper) => new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            }), hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty), wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null), handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache)
                    return cache[prop];
                  if (!(prop in target))
                    return;
                  let value = target[prop];
                  if (typeof value == "function")
                    if (typeof wrappers[prop] == "function")
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else
                      value = value.bind(target);
                  else if (typeof value == "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop)))
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  else if (hasOwnProperty(metadata, "*"))
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  else
                    return Object.defineProperty(cache, prop, {
                      configurable: !0,
                      enumerable: !0,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    }), value;
                  return cache[prop] = value, value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  return prop in cache ? cache[prop] = value : target[prop] = value, !0;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              }, proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            }, wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            }), onRequestFinishedWrappers = new DefaultWeakMap((listener) => typeof listener != "function" ? listener : function(req) {
              let wrappedReq = wrapObject(
                req,
                {},
                {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                }
              );
              listener(wrappedReq);
            }), onMessageWrappers = new DefaultWeakMap((listener) => typeof listener != "function" ? listener : function(message, sender, sendResponse) {
              let didCallSendResponse = !1, wrappedSendResponse, sendResponsePromise = new Promise((resolve) => {
                wrappedSendResponse = function(response) {
                  didCallSendResponse = !0, resolve(response);
                };
              }), result;
              try {
                result = listener(message, sender, wrappedSendResponse);
              } catch (err) {
                result = Promise.reject(err);
              }
              let isResultThenable = result !== !0 && isThenable(result);
              if (result !== !0 && !isResultThenable && !didCallSendResponse)
                return !1;
              let sendPromisedResult = (promise) => {
                promise.then((msg) => {
                  sendResponse(msg);
                }, (error) => {
                  let message2;
                  error && (error instanceof Error || typeof error.message == "string") ? message2 = error.message : message2 = "An unexpected error occurred", sendResponse({
                    __mozWebExtensionPolyfillReject__: !0,
                    message: message2
                  });
                }).catch((err) => {
                });
              };
              return sendPromisedResult(isResultThenable ? result : sendResponsePromise), !0;
            }), wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              extensionAPIs.runtime.lastError ? extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE ? resolve() : reject(new Error(extensionAPIs.runtime.lastError.message)) : reply && reply.__mozWebExtensionPolyfillReject__ ? reject(new Error(reply.message)) : resolve(reply);
            }, wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs)
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs)
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise((resolve, reject) => {
                let wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb), apiNamespaceObj.sendMessage(...args);
              });
            }, staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            }, settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            return apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            }, wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module2.exports = wrapAPIs(chrome);
        } else
          module2.exports = globalThis.browser;
      });
    }
  }), webextension_polyfill_0_10_exports = {};
  __export2(webextension_polyfill_0_10_exports, {
    default: () => webextension_polyfill_0_10_default
  });
  var __module = __toESM(require_browser_polyfill());
  __reExport(webextension_polyfill_0_10_exports, __toESM(require_browser_polyfill()));
  var { default: __default, ...__rest } = __module, webextension_polyfill_0_10_default = __default !== void 0 ? __default : __rest;

  // browser/import_browser_polyfill.ts
  globalThis.immersiveTranslateBrowserAPI = webextension_polyfill_0_10_default;

  // https://deno.land/std@0.171.0/async/deferred.ts
  function deferred() {
    let methods, state = "pending", promise = new Promise((resolve, reject) => {
      methods = {
        async resolve(value) {
          await value, state = "fulfilled", resolve(value);
        },
        // deno-lint-ignore no-explicit-any
        reject(reason) {
          state = "rejected", reject(reason);
        }
      };
    });
    return Object.defineProperty(promise, "state", { get: () => state }), Object.assign(promise, methods);
  }

  // https://deno.land/std@0.171.0/async/delay.ts
  function delay(ms, options = {}) {
    let { signal, persistent } = options;
    return signal?.aborted ? Promise.reject(new DOMException("Delay was aborted.", "AbortError")) : new Promise((resolve, reject) => {
      let abort = () => {
        clearTimeout(i), reject(new DOMException("Delay was aborted.", "AbortError"));
      }, i = setTimeout(() => {
        signal?.removeEventListener("abort", abort), resolve();
      }, ms);
      if (signal?.addEventListener("abort", abort, { once: !0 }), persistent === !1)
        try {
          Deno.unrefTimer(i);
        } catch (error) {
          if (!(error instanceof ReferenceError))
            throw error;
        }
    });
  }

  // https://deno.land/std@0.171.0/async/mux_async_iterator.ts
  var MuxAsyncIterator = class {
    #iteratorCount = 0;
    #yields = [];
    // deno-lint-ignore no-explicit-any
    #throws = [];
    #signal = deferred();
    add(iterable) {
      ++this.#iteratorCount, this.#callIteratorNext(iterable[Symbol.asyncIterator]());
    }
    async #callIteratorNext(iterator) {
      try {
        let { value, done } = await iterator.next();
        done ? --this.#iteratorCount : this.#yields.push({ iterator, value });
      } catch (e) {
        this.#throws.push(e);
      }
      this.#signal.resolve();
    }
    async *iterate() {
      for (; this.#iteratorCount > 0; ) {
        await this.#signal;
        for (let i = 0; i < this.#yields.length; i++) {
          let { iterator, value } = this.#yields[i];
          yield value, this.#callIteratorNext(iterator);
        }
        if (this.#throws.length) {
          for (let e of this.#throws)
            throw e;
          this.#throws.length = 0;
        }
        this.#yields.length = 0, this.#signal = deferred();
      }
    }
    [Symbol.asyncIterator]() {
      return this.iterate();
    }
  };

  // https://deno.land/std@0.167.0/fmt/colors.ts
  var colors_exports = {};
  __export(colors_exports, {
    bgBlack: () => bgBlack,
    bgBlue: () => bgBlue,
    bgBrightBlack: () => bgBrightBlack,
    bgBrightBlue: () => bgBrightBlue,
    bgBrightCyan: () => bgBrightCyan,
    bgBrightGreen: () => bgBrightGreen,
    bgBrightMagenta: () => bgBrightMagenta,
    bgBrightRed: () => bgBrightRed,
    bgBrightWhite: () => bgBrightWhite,
    bgBrightYellow: () => bgBrightYellow,
    bgCyan: () => bgCyan,
    bgGreen: () => bgGreen,
    bgMagenta: () => bgMagenta,
    bgRed: () => bgRed,
    bgRgb24: () => bgRgb24,
    bgRgb8: () => bgRgb8,
    bgWhite: () => bgWhite,
    bgYellow: () => bgYellow,
    black: () => black,
    blue: () => blue,
    bold: () => bold,
    brightBlack: () => brightBlack,
    brightBlue: () => brightBlue,
    brightCyan: () => brightCyan,
    brightGreen: () => brightGreen,
    brightMagenta: () => brightMagenta,
    brightRed: () => brightRed,
    brightWhite: () => brightWhite,
    brightYellow: () => brightYellow,
    cyan: () => cyan,
    dim: () => dim,
    getColorEnabled: () => getColorEnabled,
    gray: () => gray,
    green: () => green,
    hidden: () => hidden,
    inverse: () => inverse,
    italic: () => italic,
    magenta: () => magenta,
    red: () => red,
    reset: () => reset,
    rgb24: () => rgb24,
    rgb8: () => rgb8,
    setColorEnabled: () => setColorEnabled,
    strikethrough: () => strikethrough,
    stripColor: () => stripColor,
    underline: () => underline,
    white: () => white,
    yellow: () => yellow
  });
  var { Deno: Deno2 } = globalThis, noColor = typeof Deno2?.noColor == "boolean" ? Deno2.noColor : !0, enabled = !noColor;
  function setColorEnabled(value) {
    noColor || (enabled = value);
  }
  function getColorEnabled() {
    return enabled;
  }
  function code(open, close) {
    return {
      open: `\x1B[${open.join(";")}m`,
      close: `\x1B[${close}m`,
      regexp: new RegExp(`\\x1b\\[${close}m`, "g")
    };
  }
  function run(str, code2) {
    return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
  }
  function reset(str) {
    return run(str, code([0], 0));
  }
  function bold(str) {
    return run(str, code([1], 22));
  }
  function dim(str) {
    return run(str, code([2], 22));
  }
  function italic(str) {
    return run(str, code([3], 23));
  }
  function underline(str) {
    return run(str, code([4], 24));
  }
  function inverse(str) {
    return run(str, code([7], 27));
  }
  function hidden(str) {
    return run(str, code([8], 28));
  }
  function strikethrough(str) {
    return run(str, code([9], 29));
  }
  function black(str) {
    return run(str, code([30], 39));
  }
  function red(str) {
    return run(str, code([31], 39));
  }
  function green(str) {
    return run(str, code([32], 39));
  }
  function yellow(str) {
    return run(str, code([33], 39));
  }
  function blue(str) {
    return run(str, code([34], 39));
  }
  function magenta(str) {
    return run(str, code([35], 39));
  }
  function cyan(str) {
    return run(str, code([36], 39));
  }
  function white(str) {
    return run(str, code([37], 39));
  }
  function gray(str) {
    return brightBlack(str);
  }
  function brightBlack(str) {
    return run(str, code([90], 39));
  }
  function brightRed(str) {
    return run(str, code([91], 39));
  }
  function brightGreen(str) {
    return run(str, code([92], 39));
  }
  function brightYellow(str) {
    return run(str, code([93], 39));
  }
  function brightBlue(str) {
    return run(str, code([94], 39));
  }
  function brightMagenta(str) {
    return run(str, code([95], 39));
  }
  function brightCyan(str) {
    return run(str, code([96], 39));
  }
  function brightWhite(str) {
    return run(str, code([97], 39));
  }
  function bgBlack(str) {
    return run(str, code([40], 49));
  }
  function bgRed(str) {
    return run(str, code([41], 49));
  }
  function bgGreen(str) {
    return run(str, code([42], 49));
  }
  function bgYellow(str) {
    return run(str, code([43], 49));
  }
  function bgBlue(str) {
    return run(str, code([44], 49));
  }
  function bgMagenta(str) {
    return run(str, code([45], 49));
  }
  function bgCyan(str) {
    return run(str, code([46], 49));
  }
  function bgWhite(str) {
    return run(str, code([47], 49));
  }
  function bgBrightBlack(str) {
    return run(str, code([100], 49));
  }
  function bgBrightRed(str) {
    return run(str, code([101], 49));
  }
  function bgBrightGreen(str) {
    return run(str, code([102], 49));
  }
  function bgBrightYellow(str) {
    return run(str, code([103], 49));
  }
  function bgBrightBlue(str) {
    return run(str, code([104], 49));
  }
  function bgBrightMagenta(str) {
    return run(str, code([105], 49));
  }
  function bgBrightCyan(str) {
    return run(str, code([106], 49));
  }
  function bgBrightWhite(str) {
    return run(str, code([107], 49));
  }
  function clampAndTruncate(n, max = 255, min = 0) {
    return Math.trunc(Math.max(Math.min(n, max), min));
  }
  function rgb8(str, color) {
    return run(str, code([38, 5, clampAndTruncate(color)], 39));
  }
  function bgRgb8(str, color) {
    return run(str, code([48, 5, clampAndTruncate(color)], 49));
  }
  function rgb24(str, color) {
    return typeof color == "number" ? run(
      str,
      code(
        [38, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        39
      )
    ) : run(
      str,
      code(
        [
          38,
          2,
          clampAndTruncate(color.r),
          clampAndTruncate(color.g),
          clampAndTruncate(color.b)
        ],
        39
      )
    );
  }
  function bgRgb24(str, color) {
    return typeof color == "number" ? run(
      str,
      code(
        [48, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
        49
      )
    ) : run(
      str,
      code(
        [
          48,
          2,
          clampAndTruncate(color.r),
          clampAndTruncate(color.g),
          clampAndTruncate(color.b)
        ],
        49
      )
    );
  }
  var ANSI_PATTERN = new RegExp(
    [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|"),
    "g"
  );
  function stripColor(string) {
    return string.replace(ANSI_PATTERN, "");
  }

  // https://deno.land/std@0.170.0/async/retry.ts
  var RetryError = class extends Error {
    constructor(cause, count) {
      super(`Exceeded max retry count (${count})`), this.name = "RetryError", this.cause = cause;
    }
  }, defaultRetryOptions = {
    multiplier: 2,
    maxTimeout: 6e4,
    maxAttempts: 5,
    minTimeout: 1e3
  };
  async function retry(fn, opts) {
    let options = {
      ...defaultRetryOptions,
      ...opts
    };
    if (options.maxTimeout >= 0 && options.minTimeout > options.maxTimeout)
      throw new RangeError("minTimeout is greater than maxTimeout");
    let timeout = options.minTimeout, error;
    for (let i = 0; i < options.maxAttempts; i++)
      try {
        return await fn();
      } catch (err) {
        await new Promise((r) => setTimeout(r, timeout)), timeout *= options.multiplier, timeout = Math.max(timeout, options.minTimeout), options.maxTimeout >= 0 && (timeout = Math.min(timeout, options.maxTimeout)), error = err;
      }
    throw new RetryError(error, options.maxAttempts);
  }

  // https://esm.sh/v119/memoize-one@6.0.0/deno/memoize-one.mjs
  var s = Number.isNaN || function(r) {
    return typeof r == "number" && r !== r;
  };

  // https://esm.sh/v119/lodash.throttle@4.1.1/deno/lodash.throttle.mjs
  var __global$ = globalThis || (typeof window < "u" ? window : self), P = Object.create, I = Object.defineProperty, D = Object.getOwnPropertyDescriptor, G = Object.getOwnPropertyNames, H = Object.getPrototypeOf, U = Object.prototype.hasOwnProperty, X = (e, t3) => () => (t3 || e((t3 = { exports: {} }).exports, t3), t3.exports), q = (e, t3) => {
    for (var n in t3)
      I(e, n, { get: t3[n], enumerable: !0 });
  }, v = (e, t3, n, f2) => {
    if (t3 && typeof t3 == "object" || typeof t3 == "function")
      for (let i of G(t3))
        !U.call(e, i) && i !== n && I(e, i, { get: () => t3[i], enumerable: !(f2 = D(t3, i)) || f2.enumerable });
    return e;
  }, s2 = (e, t3, n) => (v(e, t3, "default"), n && v(n, t3, "default")), L = (e, t3, n) => (n = e != null ? P(H(e)) : {}, v(t3 || !e || !e.__esModule ? I(n, "default", { value: e, enumerable: !0 }) : n, e)), h = X((ge, N3) => {
    var M2 = "Expected a function", W2 = NaN, z3 = "[object Symbol]", J2 = /^\s+|\s+$/g, K = /^[-+]0x[0-9a-f]+$/i, Q3 = /^0b[01]+$/i, V3 = /^0o[0-7]+$/i, Y2 = parseInt, Z = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, w = typeof self == "object" && self && self.Object === Object && self, ee = Z || w || Function("return this")(), te = Object.prototype, ne = te.toString, re = Math.max, ie = Math.min, O2 = function() {
      return ee.Date.now();
    };
    function fe(e, t3, n) {
      var f2, i, b2, l, a, u2, d2 = 0, S3 = !1, g3 = !1, T2 = !0;
      if (typeof e != "function")
        throw new TypeError(M2);
      t3 = C2(t3) || 0, p2(n) && (S3 = !!n.leading, g3 = "maxWait" in n, b2 = g3 ? re(C2(n.maxWait) || 0, t3) : b2, T2 = "trailing" in n ? !!n.trailing : T2);
      function j2(r) {
        var o2 = f2, m2 = i;
        return f2 = i = void 0, d2 = r, l = e.apply(m2, o2), l;
      }
      function A2(r) {
        return d2 = r, a = setTimeout(y, t3), S3 ? j2(r) : l;
      }
      function B4(r) {
        var o2 = r - u2, m2 = r - d2, k2 = t3 - o2;
        return g3 ? ie(k2, b2 - m2) : k2;
      }
      function E3(r) {
        var o2 = r - u2, m2 = r - d2;
        return u2 === void 0 || o2 >= t3 || o2 < 0 || g3 && m2 >= b2;
      }
      function y() {
        var r = O2();
        if (E3(r))
          return _2(r);
        a = setTimeout(y, B4(r));
      }
      function _2(r) {
        return a = void 0, T2 && f2 ? j2(r) : (f2 = i = void 0, l);
      }
      function F2() {
        a !== void 0 && clearTimeout(a), d2 = 0, f2 = u2 = i = a = void 0;
      }
      function R3() {
        return a === void 0 ? l : _2(O2());
      }
      function x2() {
        var r = O2(), o2 = E3(r);
        if (f2 = arguments, i = this, u2 = r, o2) {
          if (a === void 0)
            return A2(u2);
          if (g3)
            return a = setTimeout(y, t3), j2(u2);
        }
        return a === void 0 && (a = setTimeout(y, t3)), l;
      }
      return x2.cancel = F2, x2.flush = R3, x2;
    }
    function ae(e, t3, n) {
      var f2 = !0, i = !0;
      if (typeof e != "function")
        throw new TypeError(M2);
      return p2(n) && (f2 = "leading" in n ? !!n.leading : f2, i = "trailing" in n ? !!n.trailing : i), fe(e, t3, { leading: f2, maxWait: t3, trailing: i });
    }
    function p2(e) {
      var t3 = typeof e;
      return !!e && (t3 == "object" || t3 == "function");
    }
    function oe(e) {
      return !!e && typeof e == "object";
    }
    function ue(e) {
      return typeof e == "symbol" || oe(e) && ne.call(e) == z3;
    }
    function C2(e) {
      if (typeof e == "number")
        return e;
      if (ue(e))
        return W2;
      if (p2(e)) {
        var t3 = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = p2(t3) ? t3 + "" : t3;
      }
      if (typeof e != "string")
        return e === 0 ? e : +e;
      e = e.replace(J2, "");
      var n = Q3.test(e);
      return n || V3.test(e) ? Y2(e.slice(2), n ? 2 : 8) : K.test(e) ? W2 : +e;
    }
    N3.exports = ae;
  }), c = {};
  q(c, { default: () => se });
  var ce = L(h());
  s2(c, L(h()));
  var { default: $, ...le } = ce, se = $ !== void 0 ? $ : le;

  // https://esm.sh/v119/notie@4.3.1/deno/notie.mjs
  var Oe = Object.create, ve = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, De = Object.getOwnPropertyNames, Ie = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty, Ne = (v4, i) => () => (i || v4((i = { exports: {} }).exports, i), i.exports), Pe = (v4, i) => {
    for (var l in i)
      ve(v4, l, { get: i[l], enumerable: !0 });
  }, me = (v4, i, l, x2) => {
    if (i && typeof i == "object" || typeof i == "function")
      for (let b2 of De(i))
        !je.call(v4, b2) && b2 !== l && ve(v4, b2, { get: () => i[b2], enumerable: !(x2 = Ae(i, b2)) || x2.enumerable });
    return v4;
  }, X2 = (v4, i, l) => (me(v4, i, "default"), l && me(l, i, "default")), ke = (v4, i, l) => (l = v4 != null ? Oe(Ie(v4)) : {}, me(i || !v4 || !v4.__esModule ? ve(l, "default", { value: v4, enumerable: !0 }) : l, v4)), xe = Ne((oe, be) => {
    (function(v4, i) {
      typeof oe == "object" && typeof be == "object" ? be.exports = i() : typeof define == "function" && define.amd ? define([], i) : typeof oe == "object" ? oe.notie = i() : v4.notie = i();
    })(oe, function() {
      return function(v4) {
        function i(x2) {
          if (l[x2])
            return l[x2].exports;
          var b2 = l[x2] = { i: x2, l: !1, exports: {} };
          return v4[x2].call(b2.exports, b2, b2.exports, i), b2.l = !0, b2.exports;
        }
        var l = {};
        return i.m = v4, i.c = l, i.i = function(x2) {
          return x2;
        }, i.d = function(x2, b2, re) {
          i.o(x2, b2) || Object.defineProperty(x2, b2, { configurable: !1, enumerable: !0, get: re });
        }, i.n = function(x2) {
          var b2 = x2 && x2.__esModule ? function() {
            return x2.default;
          } : function() {
            return x2;
          };
          return i.d(b2, "a", b2), b2;
        }, i.o = function(x2, b2) {
          return Object.prototype.hasOwnProperty.call(x2, b2);
        }, i.p = "", i(i.s = 1);
      }([function(v4, i) {
        v4.exports = function(l) {
          return l.webpackPolyfill || (l.deprecate = function() {
          }, l.paths = [], l.children || (l.children = []), Object.defineProperty(l, "loaded", { enumerable: !0, get: function() {
            return l.l;
          } }), Object.defineProperty(l, "id", { enumerable: !0, get: function() {
            return l.i;
          } }), l.webpackPolyfill = 1), l;
        };
      }, function(v4, i, l) {
        "use strict";
        (function(x2) {
          var b2, re, de, $3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A2) {
            return typeof A2;
          } : function(A2) {
            return A2 && typeof Symbol == "function" && A2.constructor === Symbol && A2 !== Symbol.prototype ? "symbol" : typeof A2;
          };
          (function(A2, p2) {
            $3(i) === "object" && $3(x2) === "object" ? x2.exports = p2() : (re = [], b2 = p2, de = typeof b2 == "function" ? b2.apply(i, re) : b2, de !== void 0 && (x2.exports = de));
          })(void 0, function() {
            return function(A2) {
              function p2(g3) {
                if (ee[g3])
                  return ee[g3].exports;
                var T2 = ee[g3] = { i: g3, l: !1, exports: {} };
                return A2[g3].call(T2.exports, T2, T2.exports, p2), T2.l = !0, T2.exports;
              }
              var ee = {};
              return p2.m = A2, p2.c = ee, p2.i = function(g3) {
                return g3;
              }, p2.d = function(g3, T2, J2) {
                p2.o(g3, T2) || Object.defineProperty(g3, T2, { configurable: !1, enumerable: !0, get: J2 });
              }, p2.n = function(g3) {
                var T2 = g3 && g3.__esModule ? function() {
                  return g3.default;
                } : function() {
                  return g3;
                };
                return p2.d(T2, "a", T2), T2;
              }, p2.o = function(g3, T2) {
                return Object.prototype.hasOwnProperty.call(g3, T2);
              }, p2.p = "", p2(p2.s = 0);
            }([function(A2, p2, ee) {
              function g3(t3, o2) {
                var s4 = {};
                for (var u2 in t3)
                  o2.indexOf(u2) >= 0 || Object.prototype.hasOwnProperty.call(t3, u2) && (s4[u2] = t3[u2]);
                return s4;
              }
              Object.defineProperty(p2, "__esModule", { value: !0 });
              var T2 = typeof Symbol == "function" && $3(Symbol.iterator) === "symbol" ? function(t3) {
                return typeof t3 > "u" ? "undefined" : $3(t3);
              } : function(t3) {
                return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3 > "u" ? "undefined" : $3(t3);
              }, J2 = Object.assign || function(t3) {
                for (var o2 = 1; o2 < arguments.length; o2++) {
                  var s4 = arguments[o2];
                  for (var u2 in s4)
                    Object.prototype.hasOwnProperty.call(s4, u2) && (t3[u2] = s4[u2]);
                }
                return t3;
              }, R3 = { top: "top", bottom: "bottom" }, e = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: R3.top, force: R3.top, confirm: R3.top, input: R3.top, select: R3.bottom, date: R3.top } }, Ee = p2.setOptions = function(t3) {
                e = J2({}, e, t3, { classes: J2({}, e.classes, t3.classes), ids: J2({}, e.ids, t3.ids), positions: J2({}, e.positions, t3.positions) });
              }, ye = function() {
                return new Promise(function(t3) {
                  return setTimeout(t3, 0);
                });
              }, le2 = function(t3) {
                return new Promise(function(o2) {
                  return setTimeout(o2, 1e3 * t3);
                });
              }, W2 = function() {
                document.activeElement && document.activeElement.blur();
              }, K = function() {
                var t3 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o2) {
                  var s4 = 16 * Math.random() | 0, u2 = o2 === "x" ? s4 : 3 & s4 | 8;
                  return u2.toString(16);
                });
                return "notie-" + t3;
              }, ue = { 1: e.classes.backgroundSuccess, success: e.classes.backgroundSuccess, 2: e.classes.backgroundWarning, warning: e.classes.backgroundWarning, 3: e.classes.backgroundError, error: e.classes.backgroundError, 4: e.classes.backgroundInfo, info: e.classes.backgroundInfo, 5: e.classes.backgroundNeutral, neutral: e.classes.backgroundNeutral }, Le = function() {
                return e.transitionSelector + " " + e.transitionDuration + "s " + e.transitionCurve;
              }, te = function(t3) {
                return t3.keyCode === 13;
              }, ne = function(t3) {
                return t3.keyCode === 27;
              }, Z = function(t3, o2) {
                t3.classList.add(e.classes.container), t3.style[o2] = "-10000px", document.body.appendChild(t3), t3.style[o2] = "-" + t3.offsetHeight + "px", t3.listener && window.addEventListener("keydown", t3.listener), ye().then(function() {
                  t3.style.transition = Le(), t3.style[o2] = 0;
                });
              }, O2 = function(t3, o2) {
                var s4 = document.getElementById(t3);
                s4 && (s4.style[o2] = "-" + s4.offsetHeight + "px", s4.listener && window.removeEventListener("keydown", s4.listener), le2(e.transitionDuration).then(function() {
                  s4.parentNode && s4.parentNode.removeChild(s4);
                }));
              }, se2 = function(t3, o2) {
                var s4 = document.createElement("div");
                s4.id = e.ids.overlay, s4.classList.add(e.classes.overlay), s4.classList.add(e.classes.backgroundOverlay), s4.style.opacity = 0, t3 && e.overlayClickDismiss && (s4.onclick = function() {
                  O2(t3.id, o2), j2();
                }), document.body.appendChild(s4), ye().then(function() {
                  s4.style.transition = Le(), s4.style.opacity = e.overlayOpacity;
                });
              }, j2 = function() {
                var t3 = document.getElementById(e.ids.overlay);
                t3.style.opacity = 0, le2(e.transitionDuration).then(function() {
                  t3.parentNode && t3.parentNode.removeChild(t3);
                });
              }, F2 = p2.hideAlerts = function(t3) {
                var o2 = document.getElementsByClassName(e.classes.alert);
                if (o2.length) {
                  for (var s4 = 0; s4 < o2.length; s4++) {
                    var u2 = o2[s4];
                    O2(u2.id, u2.position);
                  }
                  t3 && le2(e.transitionDuration).then(function() {
                    return t3();
                  });
                }
              }, Te = p2.alert = function(t3) {
                var o2 = t3.type, s4 = o2 === void 0 ? 4 : o2, u2 = t3.text, c3 = t3.time, k2 = c3 === void 0 ? e.alertTime : c3, H3 = t3.stay, S3 = H3 !== void 0 && H3, h2 = t3.position, f2 = h2 === void 0 ? e.positions.alert || f2.top : h2;
                W2(), F2();
                var d2 = document.createElement("div"), m2 = K();
                d2.id = m2, d2.position = f2, d2.classList.add(e.classes.textbox), d2.classList.add(ue[s4]), d2.classList.add(e.classes.alert), d2.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>", d2.onclick = function() {
                  return O2(m2, f2);
                }, d2.listener = function(n) {
                  (te(n) || ne(n)) && F2();
                }, Z(d2, f2), k2 && k2 < 1 && (k2 = 1), !S3 && k2 && le2(k2).then(function() {
                  return O2(m2, f2);
                });
              }, Me = p2.force = function(t3, o2) {
                var s4 = t3.type, u2 = s4 === void 0 ? 5 : s4, c3 = t3.text, k2 = t3.buttonText, H3 = k2 === void 0 ? "OK" : k2, S3 = t3.callback, h2 = t3.position, f2 = h2 === void 0 ? e.positions.force || f2.top : h2;
                W2(), F2();
                var d2 = document.createElement("div"), m2 = K();
                d2.id = m2;
                var n = document.createElement("div");
                n.classList.add(e.classes.textbox), n.classList.add(e.classes.backgroundInfo), n.innerHTML = '<div class="' + e.classes.textboxInner + '">' + c3 + "</div>";
                var r = document.createElement("div");
                r.classList.add(e.classes.button), r.classList.add(ue[u2]), r.innerHTML = H3, r.onclick = function() {
                  O2(m2, f2), j2(), S3 ? S3() : o2 && o2();
                }, d2.appendChild(n), d2.appendChild(r), d2.listener = function(C2) {
                  te(C2) && r.click();
                }, Z(d2, f2), se2();
              }, He = p2.confirm = function(t3, o2, s4) {
                var u2 = t3.text, c3 = t3.submitText, k2 = c3 === void 0 ? "Yes" : c3, H3 = t3.cancelText, S3 = H3 === void 0 ? "Cancel" : H3, h2 = t3.submitCallback, f2 = t3.cancelCallback, d2 = t3.position, m2 = d2 === void 0 ? e.positions.confirm || m2.top : d2;
                W2(), F2();
                var n = document.createElement("div"), r = K();
                n.id = r;
                var C2 = document.createElement("div");
                C2.classList.add(e.classes.textbox), C2.classList.add(e.classes.backgroundInfo), C2.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
                var y = document.createElement("div");
                y.classList.add(e.classes.button), y.classList.add(e.classes.elementHalf), y.classList.add(e.classes.backgroundSuccess), y.innerHTML = k2, y.onclick = function() {
                  O2(r, m2), j2(), h2 ? h2() : o2 && o2();
                };
                var a = document.createElement("div");
                a.classList.add(e.classes.button), a.classList.add(e.classes.elementHalf), a.classList.add(e.classes.backgroundError), a.innerHTML = S3, a.onclick = function() {
                  O2(r, m2), j2(), f2 ? f2() : s4 && s4();
                }, n.appendChild(C2), n.appendChild(y), n.appendChild(a), n.listener = function(E3) {
                  te(E3) ? y.click() : ne(E3) && a.click();
                }, Z(n, m2), se2(n, m2);
              }, ge = function(t3, o2, s4) {
                var u2 = t3.text, c3 = t3.submitText, k2 = c3 === void 0 ? "Submit" : c3, H3 = t3.cancelText, S3 = H3 === void 0 ? "Cancel" : H3, h2 = t3.submitCallback, f2 = t3.cancelCallback, d2 = t3.position, m2 = d2 === void 0 ? e.positions.input || m2.top : d2, n = g3(t3, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                W2(), F2();
                var r = document.createElement("div"), C2 = K();
                r.id = C2;
                var y = document.createElement("div");
                y.classList.add(e.classes.textbox), y.classList.add(e.classes.backgroundInfo), y.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
                var a = document.createElement("input");
                a.classList.add(e.classes.inputField), a.setAttribute("autocapitalize", n.autocapitalize || "none"), a.setAttribute("autocomplete", n.autocomplete || "off"), a.setAttribute("autocorrect", n.autocorrect || "off"), a.setAttribute("autofocus", n.autofocus || "true"), a.setAttribute("inputmode", n.inputmode || "verbatim"), a.setAttribute("max", n.max || ""), a.setAttribute("maxlength", n.maxlength || ""), a.setAttribute("min", n.min || ""), a.setAttribute("minlength", n.minlength || ""), a.setAttribute("placeholder", n.placeholder || ""), a.setAttribute("spellcheck", n.spellcheck || "default"), a.setAttribute("step", n.step || "any"), a.setAttribute("type", n.type || "text"), a.value = n.value || "", n.allowed && (a.oninput = function() {
                  var M2 = void 0;
                  if (Array.isArray(n.allowed)) {
                    for (var w = "", _2 = n.allowed, P3 = 0; P3 < _2.length; P3++)
                      _2[P3] === "an" ? w += "0-9a-zA-Z" : _2[P3] === "a" ? w += "a-zA-Z" : _2[P3] === "n" && (w += "0-9"), _2[P3] === "s" && (w += " ");
                    M2 = new RegExp("[^" + w + "]", "g");
                  } else
                    T2(n.allowed) === "object" && (M2 = n.allowed);
                  a.value = a.value.replace(M2, "");
                });
                var E3 = document.createElement("div");
                E3.classList.add(e.classes.button), E3.classList.add(e.classes.elementHalf), E3.classList.add(e.classes.backgroundSuccess), E3.innerHTML = k2, E3.onclick = function() {
                  O2(C2, m2), j2(), h2 ? h2(a.value) : o2 && o2(a.value);
                };
                var D4 = document.createElement("div");
                D4.classList.add(e.classes.button), D4.classList.add(e.classes.elementHalf), D4.classList.add(e.classes.backgroundError), D4.innerHTML = S3, D4.onclick = function() {
                  O2(C2, m2), j2(), f2 ? f2(a.value) : s4 && s4(a.value);
                }, r.appendChild(y), r.appendChild(a), r.appendChild(E3), r.appendChild(D4), r.listener = function(M2) {
                  te(M2) ? E3.click() : ne(M2) && D4.click();
                }, Z(r, m2), a.focus(), se2(r, m2);
              };
              p2.input = ge;
              var Se = p2.select = function(t3, o2) {
                var s4 = t3.text, u2 = t3.cancelText, c3 = u2 === void 0 ? "Cancel" : u2, k2 = t3.cancelCallback, H3 = t3.choices, S3 = t3.position, h2 = S3 === void 0 ? e.positions.select || h2.top : S3;
                W2(), F2();
                var f2 = document.createElement("div"), d2 = K();
                f2.id = d2;
                var m2 = document.createElement("div");
                m2.classList.add(e.classes.textbox), m2.classList.add(e.classes.backgroundInfo), m2.innerHTML = '<div class="' + e.classes.textboxInner + '">' + s4 + "</div>", f2.appendChild(m2), H3.forEach(function(r, C2) {
                  var y = r.type, a = y === void 0 ? 1 : y, E3 = r.text, D4 = r.handler, M2 = document.createElement("div");
                  M2.classList.add(ue[a]), M2.classList.add(e.classes.button), M2.classList.add(e.classes.selectChoice);
                  var w = H3[C2 + 1];
                  w && !w.type && (w.type = 1), w && w.type === a && M2.classList.add(e.classes.selectChoiceRepeated), M2.innerHTML = E3, M2.onclick = function() {
                    O2(d2, h2), j2(), D4();
                  }, f2.appendChild(M2);
                });
                var n = document.createElement("div");
                n.classList.add(e.classes.backgroundNeutral), n.classList.add(e.classes.button), n.innerHTML = c3, n.onclick = function() {
                  O2(d2, h2), j2(), k2 ? k2() : o2 && o2();
                }, f2.appendChild(n), f2.listener = function(r) {
                  ne(r) && n.click();
                }, Z(f2, h2), se2(f2, h2);
              }, we = p2.date = function(t3, o2, s4) {
                var u2 = t3.value, c3 = u2 === void 0 ? /* @__PURE__ */ new Date() : u2, k2 = t3.submitText, H3 = k2 === void 0 ? "OK" : k2, S3 = t3.cancelText, h2 = S3 === void 0 ? "Cancel" : S3, f2 = t3.submitCallback, d2 = t3.cancelCallback, m2 = t3.position, n = m2 === void 0 ? e.positions.date || n.top : m2;
                W2(), F2();
                var r = "&#9662", C2 = document.createElement("div"), y = document.createElement("div"), a = document.createElement("div"), E3 = function(L4) {
                  C2.innerHTML = e.dateMonths[L4.getMonth()], y.innerHTML = L4.getDate(), a.innerHTML = L4.getFullYear();
                }, D4 = function(L4) {
                  var N3 = new Date(c3.getFullYear(), c3.getMonth() + 1, 0).getDate(), V3 = L4.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(V3) > N3 && (V3 = N3.toString()), L4.target.textContent = V3, Number(V3) < 1 && (V3 = "1"), c3.setDate(Number(V3));
                }, M2 = function(L4) {
                  var N3 = L4.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L4.target.textContent = N3, c3.setFullYear(Number(N3));
                }, w = function(L4) {
                  E3(c3);
                }, _2 = function(L4) {
                  var N3 = new Date(c3.getFullYear(), c3.getMonth() + L4 + 1, 0).getDate();
                  c3.getDate() > N3 && c3.setDate(N3), c3.setMonth(c3.getMonth() + L4), E3(c3);
                }, P3 = function(L4) {
                  c3.setDate(c3.getDate() + L4), E3(c3);
                }, he = function(L4) {
                  var N3 = c3.getFullYear() + L4;
                  N3 < 0 ? c3.setFullYear(0) : c3.setFullYear(c3.getFullYear() + L4), E3(c3);
                }, Y2 = document.createElement("div"), pe = K();
                Y2.id = pe;
                var fe = document.createElement("div");
                fe.classList.add(e.classes.backgroundInfo);
                var I3 = document.createElement("div");
                I3.classList.add(e.classes.dateSelectorInner);
                var q3 = document.createElement("div");
                q3.classList.add(e.classes.button), q3.classList.add(e.classes.elementThird), q3.classList.add(e.classes.dateSelectorUp), q3.innerHTML = r;
                var G3 = document.createElement("div");
                G3.classList.add(e.classes.button), G3.classList.add(e.classes.elementThird), G3.classList.add(e.classes.dateSelectorUp), G3.innerHTML = r;
                var Q3 = document.createElement("div");
                Q3.classList.add(e.classes.button), Q3.classList.add(e.classes.elementThird), Q3.classList.add(e.classes.dateSelectorUp), Q3.innerHTML = r, C2.classList.add(e.classes.element), C2.classList.add(e.classes.elementThird), C2.innerHTML = e.dateMonths[c3.getMonth()], y.classList.add(e.classes.element), y.classList.add(e.classes.elementThird), y.setAttribute("contentEditable", !0), y.addEventListener("input", D4), y.addEventListener("blur", w), y.innerHTML = c3.getDate(), a.classList.add(e.classes.element), a.classList.add(e.classes.elementThird), a.setAttribute("contentEditable", !0), a.addEventListener("input", M2), a.addEventListener("blur", w), a.innerHTML = c3.getFullYear();
                var ae = document.createElement("div");
                ae.classList.add(e.classes.button), ae.classList.add(e.classes.elementThird), ae.innerHTML = r;
                var ie = document.createElement("div");
                ie.classList.add(e.classes.button), ie.classList.add(e.classes.elementThird), ie.innerHTML = r;
                var ce2 = document.createElement("div");
                ce2.classList.add(e.classes.button), ce2.classList.add(e.classes.elementThird), ce2.innerHTML = r, q3.onclick = function() {
                  return _2(1);
                }, G3.onclick = function() {
                  return P3(1);
                }, Q3.onclick = function() {
                  return he(1);
                }, ae.onclick = function() {
                  return _2(-1);
                }, ie.onclick = function() {
                  return P3(-1);
                }, ce2.onclick = function() {
                  return he(-1);
                };
                var z3 = document.createElement("div");
                z3.classList.add(e.classes.button), z3.classList.add(e.classes.elementHalf), z3.classList.add(e.classes.backgroundSuccess), z3.innerHTML = H3, z3.onclick = function() {
                  O2(pe, n), j2(), f2 ? f2(c3) : o2 && o2(c3);
                };
                var U5 = document.createElement("div");
                U5.classList.add(e.classes.button), U5.classList.add(e.classes.elementHalf), U5.classList.add(e.classes.backgroundError), U5.innerHTML = h2, U5.onclick = function() {
                  O2(pe, n), j2(), d2 ? d2(c3) : s4 && s4(c3);
                }, I3.appendChild(q3), I3.appendChild(G3), I3.appendChild(Q3), I3.appendChild(C2), I3.appendChild(y), I3.appendChild(a), I3.appendChild(ae), I3.appendChild(ie), I3.appendChild(ce2), fe.appendChild(I3), Y2.appendChild(fe), Y2.appendChild(z3), Y2.appendChild(U5), Y2.listener = function(L4) {
                  te(L4) ? z3.click() : ne(L4) && U5.click();
                }, Z(Y2, n), se2(Y2, n);
              };
              p2.default = { alert: Te, force: Me, confirm: He, input: ge, select: Se, date: we, setOptions: Ee, hideAlerts: F2 };
            }]);
          });
        }).call(i, l(0)(v4));
      }]);
    });
  }), B = {};
  Pe(B, { default: () => Ye });
  var Fe = ke(xe());
  X2(B, ke(xe()));
  var { default: Ce, ..._e } = Fe, Ye = Ce !== void 0 ? Ce : _e;

  // https://esm.sh/v119/nanostores@0.7.4/deno/nanostores.mjs
  var S = Symbol("clean");
  var m = Symbol();

  // https://esm.sh/v119/@nanostores/i18n@0.7.1/deno/i18n.mjs
  function g(r, n) {
    if (typeof r == "string")
      return n(r);
    {
      let e = {};
      for (let t3 in r)
        e[t3] = g(r[t3], n);
      return e;
    }
  }
  function p(r) {
    return (n) => {
      if (n.transform) {
        let e = n.transform;
        return n = n.input, { input: n, transform(t3, o2, s4) {
          let f2 = r(t3, o2, ...s4);
          return (...l) => e(t3, f2, l);
        } };
      } else
        return { input: n, transform(e, t3, o2) {
          return r(e, t3, ...o2);
        } };
    };
  }
  var N = p((r, n, e) => g(n, (t3) => {
    for (let o2 in e)
      t3 = t3.replace(new RegExp(`{${o2}}`, "g"), e[o2]);
    return t3;
  })), R = p((r, n, e) => {
    let t3 = new Intl.PluralRules(r).select(e);
    return t3 in n || (t3 = "many"), g(n[t3], (o2) => o2.replace(/{count}/g, e));
  });

  // https://esm.sh/v119/hotkeys-js@3.10.1/deno/hotkeys-js.mjs
  var M = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
  function P2(e, t3, i, r) {
    e.addEventListener ? e.addEventListener(t3, i, r) : e.attachEvent && e.attachEvent("on".concat(t3), function() {
      i(window.event);
    });
  }
  function T(e, t3) {
    for (var i = t3.slice(0, t3.length - 1), r = 0; r < i.length; r++)
      i[r] = e[i[r].toLowerCase()];
    return i;
  }
  function U2(e) {
    typeof e != "string" && (e = ""), e = e.replace(/\s/g, "");
    for (var t3 = e.split(","), i = t3.lastIndexOf(""); i >= 0; )
      t3[i - 1] += ",", t3.splice(i, 1), i = t3.lastIndexOf("");
    return t3;
  }
  function G2(e, t3) {
    for (var i = e.length >= t3.length ? e : t3, r = e.length >= t3.length ? t3 : e, n = !0, a = 0; a < i.length; a++)
      r.indexOf(i[a]) === -1 && (n = !1);
    return n;
  }
  var b = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M ? 173 : 189, "=": M ? 61 : 187, ";": M ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g2 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L2 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u = { 16: !1, 18: !1, 17: !1, 91: !1 }, s3 = {};
  for (O = 1; O < 20; O++)
    b["f".concat(O)] = 111 + O;
  var O, f = [], A = !1, D2 = "all", H2 = [], C = function(t3) {
    return b[t3.toLowerCase()] || g2[t3.toLowerCase()] || t3.toUpperCase().charCodeAt(0);
  }, R2 = function(t3) {
    return Object.keys(b).find(function(i) {
      return b[i] === t3;
    });
  }, V = function(t3) {
    return Object.keys(g2).find(function(i) {
      return g2[i] === t3;
    });
  };
  function F(e) {
    D2 = e || "all";
  }
  function E() {
    return D2 || "all";
  }
  function X3() {
    return f.slice(0);
  }
  function $2() {
    return f.map(function(e) {
      return R2(e) || V(e) || String.fromCharCode(e);
    });
  }
  function q2(e) {
    var t3 = e.target || e.srcElement, i = t3.tagName, r = !0;
    return (t3.isContentEditable || (i === "INPUT" || i === "TEXTAREA" || i === "SELECT") && !t3.readOnly) && (r = !1), r;
  }
  function z2(e) {
    return typeof e == "string" && (e = C(e)), f.indexOf(e) !== -1;
  }
  function J(e, t3) {
    var i, r;
    e || (e = E());
    for (var n in s3)
      if (Object.prototype.hasOwnProperty.call(s3, n))
        for (i = s3[n], r = 0; r < i.length; )
          i[r].scope === e ? i.splice(r, 1) : r++;
    E() === e && F(t3 || "all");
  }
  function N2(e) {
    var t3 = e.keyCode || e.which || e.charCode, i = f.indexOf(t3);
    if (i >= 0 && f.splice(i, 1), e.key && e.key.toLowerCase() === "meta" && f.splice(0, f.length), (t3 === 93 || t3 === 224) && (t3 = 91), t3 in u) {
      u[t3] = !1;
      for (var r in g2)
        g2[r] === t3 && (v2[r] = !1);
    }
  }
  function Q(e) {
    if (typeof e > "u")
      Object.keys(s3).forEach(function(o2) {
        return delete s3[o2];
      });
    else if (Array.isArray(e))
      e.forEach(function(o2) {
        o2.key && S2(o2);
      });
    else if (typeof e == "object")
      e.key && S2(e);
    else if (typeof e == "string") {
      for (var t3 = arguments.length, i = new Array(t3 > 1 ? t3 - 1 : 0), r = 1; r < t3; r++)
        i[r - 1] = arguments[r];
      var n = i[0], a = i[1];
      typeof n == "function" && (a = n, n = ""), S2({ key: e, scope: n, method: a, splitKey: "+" });
    }
  }
  var S2 = function(t3) {
    var i = t3.key, r = t3.scope, n = t3.method, a = t3.splitKey, o2 = a === void 0 ? "+" : a, l = U2(i);
    l.forEach(function(c3) {
      var p2 = c3.split(o2), m2 = p2.length, y = p2[m2 - 1], d2 = y === "*" ? "*" : C(y);
      if (s3[d2]) {
        r || (r = E());
        var K = m2 > 1 ? T(g2, p2) : [];
        s3[d2] = s3[d2].filter(function(h2) {
          var w = n ? h2.method === n : !0;
          return !(w && h2.scope === r && G2(h2.mods, K));
        });
      }
    });
  };
  function _(e, t3, i, r) {
    if (t3.element === r) {
      var n;
      if (t3.scope === i || t3.scope === "all") {
        n = t3.mods.length > 0;
        for (var a in u)
          Object.prototype.hasOwnProperty.call(u, a) && (!u[a] && t3.mods.indexOf(+a) > -1 || u[a] && t3.mods.indexOf(+a) === -1) && (n = !1);
        (t3.mods.length === 0 && !u[16] && !u[18] && !u[17] && !u[91] || n || t3.shortcut === "*") && t3.method(e, t3) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0));
      }
    }
  }
  function k(e, t3) {
    var i = s3["*"], r = e.keyCode || e.which || e.charCode;
    if (v2.filter.call(this, e)) {
      if ((r === 93 || r === 224) && (r = 91), f.indexOf(r) === -1 && r !== 229 && f.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h2) {
        var w = L2[h2];
        e[h2] && f.indexOf(w) === -1 ? f.push(w) : !e[h2] && f.indexOf(w) > -1 ? f.splice(f.indexOf(w), 1) : h2 === "metaKey" && e[h2] && f.length === 3 && (e.ctrlKey || e.shiftKey || e.altKey || (f = f.slice(f.indexOf(w))));
      }), r in u) {
        u[r] = !0;
        for (var n in g2)
          g2[n] === r && (v2[n] = !0);
        if (!i)
          return;
      }
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (u[a] = e[L2[a]]);
      e.getModifierState && !(e.altKey && !e.ctrlKey) && e.getModifierState("AltGraph") && (f.indexOf(17) === -1 && f.push(17), f.indexOf(18) === -1 && f.push(18), u[17] = !0, u[18] = !0);
      var o2 = E();
      if (i)
        for (var l = 0; l < i.length; l++)
          i[l].scope === o2 && (e.type === "keydown" && i[l].keydown || e.type === "keyup" && i[l].keyup) && _(e, i[l], o2, t3);
      if (r in s3) {
        for (var c3 = 0; c3 < s3[r].length; c3++)
          if ((e.type === "keydown" && s3[r][c3].keydown || e.type === "keyup" && s3[r][c3].keyup) && s3[r][c3].key) {
            for (var p2 = s3[r][c3], m2 = p2.splitKey, y = p2.key.split(m2), d2 = [], K = 0; K < y.length; K++)
              d2.push(C(y[K]));
            d2.sort().join("") === f.sort().join("") && _(e, p2, o2, t3);
          }
      }
    }
  }
  function W(e) {
    return H2.indexOf(e) > -1;
  }
  function v2(e, t3, i) {
    f = [];
    var r = U2(e), n = [], a = "all", o2 = document, l = 0, c3 = !1, p2 = !0, m2 = "+", y = !1;
    for (i === void 0 && typeof t3 == "function" && (i = t3), Object.prototype.toString.call(t3) === "[object Object]" && (t3.scope && (a = t3.scope), t3.element && (o2 = t3.element), t3.keyup && (c3 = t3.keyup), t3.keydown !== void 0 && (p2 = t3.keydown), t3.capture !== void 0 && (y = t3.capture), typeof t3.splitKey == "string" && (m2 = t3.splitKey)), typeof t3 == "string" && (a = t3); l < r.length; l++)
      e = r[l].split(m2), n = [], e.length > 1 && (n = T(g2, e)), e = e[e.length - 1], e = e === "*" ? "*" : C(e), e in s3 || (s3[e] = []), s3[e].push({ keyup: c3, keydown: p2, scope: a, mods: n, shortcut: r[l], method: i, key: r[l], splitKey: m2, element: o2 });
    typeof o2 < "u" && !W(o2) && window && (H2.push(o2), P2(o2, "keydown", function(d2) {
      k(d2, o2);
    }, y), A || (A = !0, P2(window, "focus", function() {
      f = [];
    }, y)), P2(o2, "keyup", function(d2) {
      k(d2, o2), N2(d2);
    }, y));
  }
  function Y(e) {
    var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
    Object.keys(s3).forEach(function(i) {
      var r = s3[i].filter(function(n) {
        return n.scope === t3 && n.shortcut === e;
      });
      r.forEach(function(n) {
        n && n.method && n.method();
      });
    });
  }
  var j = { getPressedKeyString: $2, setScope: F, getScope: E, deleteScope: J, getPressedKeyCodes: X3, isPressed: z2, filter: q2, trigger: Y, unbind: Q, keyMap: b, modifier: g2, modifierMap: L2 };
  for (x in j)
    Object.prototype.hasOwnProperty.call(j, x) && (v2[x] = j[x]);
  var x;
  typeof document < "u" && (B3 = window.hotkeys, v2.noConflict = function(e) {
    return e && window.hotkeys === v2 && (window.hotkeys = B3), v2;
  }, window.hotkeys = v2);
  var B3;

  // https://esm.sh/v119/immersive-translate@1.0.9/deno/immersive-translate.mjs
  var v3 = class {
    #e = performance.now();
    reset() {
      this.#e = performance.now();
    }
    stop(e) {
      let t3 = performance.now(), n = Math.round(t3 - this.#e);
      this.#e = t3;
    }
  }, D3 = class {
    #e = 1;
    get level() {
      return this.#e;
    }
    setLevel(e) {
      switch (e) {
        case "debug":
          this.#e = 0;
          break;
        case "info":
          this.#e = 1;
          break;
        case "warn":
          this.#e = 2;
          break;
        case "error":
          this.#e = 3;
          break;
        case "fatal":
          this.#e = 4;
          break;
      }
    }
    debug(...e) {
      this.#e <= 0;
    }
    v(...e) {
      this.#e <= 0;
    }
    info(...e) {
      this.#e <= 1;
    }
    l(...e) {
      this.#e <= 1;
    }
    warn(...e) {
      this.#e <= 2;
    }
    error(...e) {
      this.#e <= 3;
    }
    fatal(...e) {
      this.#e <= 4;
    }
    timing() {
      return this.level === 0 ? new v3() : { reset: () => {
      }, stop: () => {
      } };
    }
  }, E2 = new D3(), L3 = "poegempjloogba", I2 = "ension://";
  var U3 = "rome-ext";
  var V2 = "ch" + U3 + I2 + "cofdb" + L3 + "gkncekinflcnj";

  // deps.ts
  var toast = Ye.alert;

  // locales/zh-CN.json
  var zh_CN_default = {
    lineBreakMaxTextCount: "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
    "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
    "noSupportTranslate-pdf": "\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6",
    "translate-firefox-local-pdf": "\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",
    enableLineBreak: "\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
    sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",
    help: "\u5E2E\u52A9",
    browserShortcutsNoteForFirefox: "Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",
    browserShortcutsNoteForChrome: "\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",
    browserShortcutsSucks: "\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A\uFF1A",
    enableLineBreakDescription: "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
    "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8BD1",
    "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
    "browser.toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    "browser.toggleTranslateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587",
    "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587",
    "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
    "browser.openOptionsPage": "\u6253\u5F00\u8BBE\u7F6E\u9875",
    "browser.toggleTranslationMask": "\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
    "browser.translateLocalPdfFile": "\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",
    "browser.openEbookViewer": "\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66",
    "browser.openEbookBuilder": "\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66",
    "browser.translateLocalHtmlFile": "\u7FFB\u8BD1 HTML/txt \u6587\u4EF6",
    "browser.donateContext": "\u4E86\u89E3\u8D5E\u52A9\u798F\u5229",
    "browser.translateLocalSubtitleFile": "\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",
    confirmResetConfig: "\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",
    translationLineBreakSettingTitle: "\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",
    smartLineBreak: "\u667A\u80FD\u6362\u884C",
    alwaysLineBreak: "\u603B\u662F\u6362\u884C",
    isShowContextMenu: "\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",
    toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
    betaDescription: "\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",
    translationLineBreakSettingDescription: "\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",
    tempTranslateDomainTitle: "\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",
    tempTranslateDomainDescription: "\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",
    xMinutes: "{count} \u5206\u949F",
    disabled: "\u7981\u7528",
    changelog: "\u66F4\u65B0\u65E5\u5FD7",
    toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
    addUrlDescription: "\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
    general: "\u57FA\u672C\u8BBE\u7F6E",
    clickToExpandConfig: "\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",
    import: "\u4ECE\u6587\u4EF6\u5BFC\u5165",
    export: "\u5BFC\u51FA\u5230\u6587\u4EF6",
    toggleDebug: "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
    "fingers.0": "\u5173\u95ED",
    "fingers.2": "\u53CC\u6307\u89E6\u6478",
    "fingers.3": "\u4E09\u6307\u89E6\u6478",
    "fingers.4": "\u56DB\u6307\u89E6\u6478",
    "fingers.5": "\u4E94\u6307\u89E6\u6478",
    mouseHoldKey: "+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",
    mouseHoldKeyAuto: "\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",
    mouseHoldKeyOff: "\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",
    mouseHoldKeyOther: "\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",
    mouseHoldKeyCustomKey: "{key} \u7FFB\u8BD1\u8BE5\u6BB5",
    mouseHoverHoldKey: "\u9F20\u6807\u6ED1\u8FC7\u540C\u65F6\u6309\u4E0B X \u952E\u7FFB\u8BD1\u6BB5\u843D",
    "mouse-translate": "\u5F53\u9F20\u6807\u6ED1\u8FC7",
    document: "\u6587\u6863",
    resetSuccess: "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
    resetThisSuccess: "\u91CD\u7F6E\u6210\u529F",
    saved: "\u4FDD\u5B58\u6210\u529F",
    successImportConfig: "\u6210\u529F\u5BFC\u5165\u914D\u7F6E",
    goAdvancedSettings: "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
    goAdvancedInterfaceSettings: "\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",
    advanced: "\u8FDB\u9636\u8BBE\u7F6E",
    advancedDescription: "\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",
    developer: "\u5F00\u53D1\u8005\u8BBE\u7F6E",
    donateCafe: "\u4EF7\u683C",
    "translate to the bottom of the page": "\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",
    feedback: "\u95EE\u9898\u53CD\u9988",
    toggleTranslatePage: "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
    translateToThePageEndImmediatelyDescription: "\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
    "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
    translationAreaDescription: "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
    "the number of characters to be translated first": "\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF",
    "interface language": "\u754C\u9762\u8BED\u8A00",
    "display both the original text and the translation": "\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587",
    "keyboard shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
    modify: "\u4FEE\u6539\u5FEB\u6377\u952E",
    reset: "\u91CD\u7F6E",
    close: "\u5173\u95ED",
    homepage: "\u4E3B\u9875",
    more: "\u66F4\u591A",
    moreOptions: "\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",
    translateTheWholePage: "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",
    changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",
    changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
    translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",
    translateTheMainPage: "\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
    "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
    "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
    "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
    "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
    localVersionIsTooOld: "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",
    badUserscriptBrowser: "\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",
    foundNewVersion: "\u53D1\u73B0\u65B0\u7248\u672C",
    theLocalExtensionIsUpToUpdate: "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
    failToSyncRules: "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
    retry: "\u70B9\u6B64\u91CD\u8BD5",
    failedReason: "\u5931\u8D25\u539F\u56E0",
    currentRuleVersion: "\u5F53\u524D\u89C4\u5219\u7248\u672C",
    calculating: "\u8BA1\u7B97\u4E2D",
    unknownError: "\u672A\u77E5\u9519\u8BEF",
    canNotFetchRemoteRule: "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
    enableAlphaSuccess: "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
    disableAlphaSuccess: "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
    cacheSize: "\u7F13\u5B58\u5927\u5C0F\uFF1A",
    cleaning: "\u6E05\u7406\u4E2D",
    cleanCache: "\u6E05\u9664\u7F13\u5B58",
    options: "\u8BBE\u7F6E",
    about: "\u5173\u4E8E",
    service: "\u7FFB\u8BD1\u670D\u52A1",
    needAction: "(\u53BB\u8BBE\u7F6E)",
    goSettings: "\u53BB\u8BBE\u7F6E",
    needActionForOptions: "(\u9700\u8BBE\u7F6E)",
    translationEngine: "\u5F15\u64CE\u9009\u9879",
    sourceLanguage: "\u539F\u6587\u8BED\u8A00",
    target: "\u76EE\u6807\u8BED\u8A00",
    popupSourceLanguage: "\u539F\u6587\u8BED\u8A00",
    popupTarget: "\u76EE\u6807\u8BED\u8A00",
    popupService: "\u7FFB\u8BD1\u670D\u52A1",
    forThisSite: "\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",
    alwaysTranslateSomeLanguage: "\u603B\u662F\u7FFB\u8BD1 {language}",
    neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8BD1 {language}",
    alwaysTranslateSomeSite: "\u603B\u662F\u7FFB\u8BD1 {hostname}",
    neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",
    add: "\u6DFB\u52A0",
    default: "\u9ED8\u8BA4",
    forThisLanguage: "\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A",
    "add url": "\u8F93\u5165URL",
    edit: "\u7F16\u8F91",
    "translate other languages into specific language": "\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00",
    "select translation service": "\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",
    language: "\u8BED\u8A00",
    "show-original": "\u663E\u793A\u539F\u6587",
    translate: "\u7FFB\u8BD1",
    Translated: "\u5DF2\u7FFB\u8BD1",
    Translating: "\u7FFB\u8BD1\u4E2D",
    Error: "\u9519\u8BEF",
    allowCacheTranslations: "\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09",
    "translation display": "\u8BD1\u6587\u663E\u793A\u6837\u5F0F",
    "select diplay style": "\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",
    interface: "\u754C\u9762\u8BBE\u7F6E",
    import_export: "\u5BFC\u5165/\u5BFC\u51FA",
    import_export_title: "\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",
    syncToGoogleDrive: "\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",
    previewAllThemes: "\u9884\u89C8\u5168\u90E8\u6837\u5F0F",
    "translationTheme.none": "\u65E0",
    "translationTheme.grey": "\u9ED1\u7070\u8272",
    "translationTheme.dashed": "\u865A\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.dotted": "\u70B9\u72B6\u4E0B\u5212\u7EBF",
    "translationTheme.dashedBorder": "\u865A\u7EBF\u8FB9\u6846",
    "translationTheme.solidBorder": "\u5B9E\u7EBF\u8FB9\u6846",
    "translationTheme.underline": "\u76F4\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
    "translationTheme.opacity": "\u900F\u660E\u6548\u679C",
    "translationTheme.paper": "\u767D\u7EB8\u9634\u5F71\u6548\u679C",
    "translationTheme.dividingLine": "\u5206\u5272\u7EBF",
    "translationTheme.highlight": "\u9AD8\u4EAE",
    "translationTheme.marker": "\u9A6C\u514B\u7B14",
    "translationTheme.marker2": "\u9A6C\u514B\u7B142",
    "translationTheme.blockquote": "\u5F15\u7528\u6837\u5F0F",
    "translationTheme.weakening": "\u5F31\u5316",
    "translationTheme.italic": "\u659C\u4F53",
    "translationTheme.bold": "\u52A0\u7C97",
    "translationTheme.thinDashed": "\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.nativeDashed": "\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.nativeDotted": "\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF",
    "translationTheme.nativeUnderline": "\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF",
    "translationTheme.wavy": "\u6CE2\u6D6A\u7EBF",
    "translationServices.tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
    "translationServices.tenAlpha": "\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)",
    "translationServices.google": "\u8C37\u6B4C\u7FFB\u8BD1",
    "translationServices.bai": "\u767E\u5EA6(Alpha)",
    "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8BD1",
    "translationServices.aliyun": "\u963F\u91CC\u4E91\u7FFB\u8BD1",
    "translationServices.volc": "\u706B\u5C71\u7FFB\u8BD1",
    "translationServices.deeplx": "DeeplX(Beta)",
    "translationServices.bing": "\u5FAE\u8F6F\u7FFB\u8BD1",
    "translationServices.deepl": "Deepl",
    "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
    "translationServices.azure": "Azure \u7FFB\u8BD1",
    "translationServices.ibm": "IBM Watson",
    "translationServices.aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
    "translationServices.mock": "\u6A21\u62DF\u7FFB\u8BD1",
    "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
    "translationServices.caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
    "translationServices.cai": "\u5F69\u4E91\u5C0F\u8BD1 (Alpha)",
    "translationServices.volcAlpha": "\u706B\u5C71 (Alpha)",
    "translationServices.openl": "OpenL",
    "translationServices.youdao": "\u6709\u9053\u7FFB\u8BD1",
    "translationServices.you": "\u6709\u9053\u7FFB\u8BD1 (Alpha)",
    "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
    "translationServices.niu": "\u5C0F\u725B\u7FFB\u8BD1",
    "translationServices.papago": "Papago \u7FFB\u8BD1",
    "translationServices.d": "D (Alpha)",
    "translationServices.dpro": "D Pro (Canary)",
    "translationServices.openai": "OpenAI",
    "translationServices.chatgpt": "ChatGPT Plus",
    "translate title": "\u7FFB\u8BD1\u9875\u9762\u6807\u9898",
    "always languages": "\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",
    neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",
    neverTranslateTheFollowingLanguagesDescription: "\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",
    enableUserscriptPagePopup: "\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",
    enableUserscriptPagePopupDescription: "\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
    "always translate the following languages": "\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
    "always sites": "\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740",
    "always translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
    "never sites": "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740",
    "never translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1",
    "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
    KeyAndConfigurationTutorial: "\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
    useAboveStyleForTheseSites: "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",
    currentUrl: "\u5F53\u524D\u7F51\u5740",
    confirm: "\u4FDD\u5B58",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    "languages.auto": "\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",
    syncToCloud: "\u540C\u6B65\u5230\u4E91\u7AEF",
    syncToCloudDescription: "\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",
    authFail: "\u6388\u6743\u5931\u8D25",
    syncTitle: "\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",
    import_hint: "\u5BFC\u5165",
    upload: "\u4E0A\u4F20",
    revokeAuth: "\u64A4\u9500\u6388\u6743",
    uploadFail: "\u4E0A\u4F20\u5931\u8D25",
    download: "\u4E0B\u8F7D",
    importSuccess: "\u5BFC\u5165\u6210\u529F",
    importFail: "\u5BFC\u5165\u5931\u8D25",
    deleteFail: "\u5220\u9664\u5931\u8D25",
    backupToCloud: "\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",
    create_new_backup: "\u65B0\u589E\u5907\u4EFD\u8282\u70B9",
    maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",
    backupToCloudDescription: "\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",
    successSyncConfig: "\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",
    syncFail: "\u540C\u6B65\u5931\u8D25",
    updatedAt: "\u66F4\u65B0\u4E8E {date}",
    lastSyncedAt: "\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",
    downloadFail: "\u4E0B\u8F7D\u5931\u8D25",
    clickToDownload: "\u70B9\u51FB\u4E0B\u8F7D",
    aboutLabel: "\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9\u798F\u5229",
    "browser.openAboutPage": "\u5173\u4E8E/\u53CD\u9988",
    aboutLabelWithoutSponsor: "\u5173\u4E8E - \u53CD\u9988",
    aboutIntro: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002<br/><br/>\u514D\u8D39\u5DE5\u5177\u4F5C\u8005\u4F3C\u4E4E\u53EF\u4EE5\u548C\u8D5E\u52A9\u8005\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u79CD\u53CC\u8D62\u7684\u5173\u7CFB\uFF01\u6211\u4E3A\u8D5E\u52A9\u8005\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9650\u65F6\u798F\u5229\uFF0C\u6BD4\u5982<6>DeepL\u7FFB\u8BD1\u670D\u52A1</6>\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u4E86\u89E3\u8D5E\u52A9\u65B9\u6848</2>\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",
    aboutIntroWithoutSponsor: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F ",
    projectHomepage: "\u9879\u76EE\u4E3B\u9875",
    joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",
    joinTelegramChannel: "\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",
    feedbackAndJoin: "\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",
    autoSync: "\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",
    loadingThemeTitle: "Loading \u6837\u5F0F",
    loadingThemeDescription: "\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F",
    "loadingTheme.spinner": "\u8F6C\u5708\u52A8\u753B",
    "loadingTheme.text": "\u9759\u6001\u6587\u5B57 ... ",
    "loadingTheme.none": "\u4E0D\u663E\u793A",
    developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863",
    "edit border color": "\u4FEE\u6539\u8FB9\u6846\u989C\u8272",
    successSyncButNoChange: "\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",
    customTheme: "\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F",
    "customThemeLabel.borderColor": "\u8FB9\u6846\u989C\u8272",
    "customThemeLabel.borderRadius": "\u8FB9\u6846\u5706\u89D2",
    "customThemeLabel.textColor": "\u6587\u5B57\u989C\u8272",
    "customThemeLabel.backgroundColor": "\u80CC\u666F\u989C\u8272",
    "customThemeLabel.zoom": "\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",
    resetToDefaultColor: "\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",
    resetToDefaultSettings: "\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",
    isTranslateTitle: "\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",
    isTranslateTitleDescription: "\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",
    verifyService: "\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",
    verified: "\u9A8C\u8BC1\u6210\u529F",
    "field.model": "\u6A21\u578B",
    "field.translationEngine": "\u7FFB\u8BD1\u5F15\u64CE",
    "field.limitPerMinute": "\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570",
    "field.limitPerSecond": "\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570",
    "field.maxTextLengthPerRequest": "\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6",
    "field.maxTextGroupLengthPerRequest": "\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570",
    "field.apiUrl": "\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740",
    "description.limitPerMinute": "\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C",
    "description.limitPerSecond": "\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C",
    "description.prompt": "\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI",
    "description.maxTextLengthPerRequest": "\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6",
    "description.systemPrompt": "\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00",
    "description.model": "OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49",
    "description.maxTextGroupLengthPerRequest": "\u6BCF\u6B21\u53D1\u9001\u7ED9 OpenAI \u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u8BBE\u7F6E\u4E3A 1 \u4E2A\u6BB5\u843D\u65F6\uFF0C\u4F53\u9A8C\u6700\u597D",
    "description.apiUrl": "\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",
    enabledExtension: "\u542F\u7528\u6269\u5C55",
    clickToDisableExtension: "\u70B9\u51FB\u7981\u7528\u6269\u5C55",
    clickToEnableExtension: "\u70B9\u51FB\u542F\u7528\u6269\u5C55",
    hasBeenDisabled: "\u5DF2\u7981\u7528",
    "show password": "\u663E\u793A\u5BC6\u7801",
    customContent: "\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0"
  };

  // locales/zh-TW.json
  var zh_TW_default = {
    lineBreakMaxTextCount: "\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF",
    "translate-pdf": "\u9EDE\u9078\u7FFB\u8B6F PDF",
    "translate-firefox-local-pdf": "\u9EDE\u9078\u4E0A\u50B3 PDF",
    enableLineBreak: "\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",
    sponsorLabel: "$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",
    help: "\u8AAA\u660E",
    browserShortcutsNoteForFirefox: "Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",
    browserShortcutsNoteForChrome: "Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",
    browserShortcutsSucks: "\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A",
    enableLineBreakDescription: "\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80",
    "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8B6F",
    "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u5957\u4EF6\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u63F4 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u63F4 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
    "browser.toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
    "browser.toggleTranslateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587",
    "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587",
    "browser.toggleTranslateTheMainPage": "\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587",
    "browser.openOptionsPage": "\u958B\u555F\u8A2D\u5B9A\u9801\u9762",
    "browser.toggleTranslationMask": "\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",
    "browser.translateLocalPdfFile": "\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848",
    "browser.openEbookViewer": "\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8",
    "browser.openEbookBuilder": "\u88FD\u4F5C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8",
    "browser.translateLocalHtmlFile": "\u7FFB\u8B6F HTML/txt \u6A94\u6848",
    "browser.translateLocalSubtitleFile": "\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",
    "browser.donateContext": "\u4E86\u89E3\u8D0A\u52A9\u798F\u5229",
    confirmResetConfig: "\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",
    translationLineBreakSettingTitle: "\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",
    smartLineBreak: "\u667A\u6167\u63DB\u884C",
    alwaysLineBreak: "\u7E3D\u662F\u63DB\u884C",
    isShowContextMenu: "\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",
    toggleBeta: "\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",
    betaDescription: "\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",
    translationLineBreakSettingDescription: "\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",
    tempTranslateDomainTitle: "\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",
    tempTranslateDomainDescription: "\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",
    xMinutes: "{count} \u5206\u9418",
    disabled: "\u505C\u7528",
    changelog: "\u66F4\u65B0\u8A18\u9304",
    toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
    toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",
    addUrlDescription: "\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
    general: "\u57FA\u672C\u8A2D\u5B9A",
    clickToExpandConfig: "\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",
    import: "\u5F9E\u6A94\u6848\u532F\u5165",
    export: "\u532F\u51FA\u70BA\u6A94\u6848",
    toggleDebug: "\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304",
    "fingers.0": "\u95DC\u9589",
    "fingers.2": "\u96D9\u6307\u89F8\u6478",
    "fingers.3": "\u4E09\u6307\u89F8\u6478",
    "fingers.4": "\u56DB\u6307\u89F8\u6478",
    "fingers.5": "\u4E94\u6307\u89F8\u6478",
    document: "\u8AAA\u660E\u6587\u4EF6",
    resetSuccess: "\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",
    resetThisSuccess: "\u91CD\u8A2D\u6210\u529F",
    saved: "\u5132\u5B58\u6210\u529F",
    successImportConfig: "\u6210\u529F\u532F\u5165\u8A2D\u5B9A",
    goAdvancedSettings: "\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",
    goAdvancedInterfaceSettings: "\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",
    advanced: "\u9032\u968E\u8A2D\u5B9A",
    advancedDescription: "\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",
    developer: "\u958B\u767C\u8005\u8A2D\u5B9A",
    donateCafe: "\u50F9\u683C",
    "translate to the bottom of the page": "\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",
    feedback: "\u554F\u984C\u56DE\u5831",
    toggleTranslatePage: "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
    "mouse-translate": "\u7576\u9F20\u6A19\u6ED1\u904E",
    mouseHoldKey: "+ {key} \u7FFB\u8B6F\u8A72\u6BB5",
    mouseHoldKeyAuto: "\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",
    mouseHoldKeyOff: "\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",
    mouseHoldKeyOther: "\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",
    mouseHoldKeyCustomKey: "{key} \u7FFB\u8B6F\u8A72\u6BB5",
    mouseHoverHoldKey: "\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D",
    translateToThePageEndImmediatelyDescription: "\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09",
    "translate all areas of the page": "\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",
    translationAreaDescription: "\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)",
    "the number of characters to be translated first": "\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF",
    "interface language": "\u4ECB\u9762\u8A9E\u8A00",
    "display both the original text and the translation": "\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587",
    "keyboard shortcuts": "\u9375\u76E4\u5FEB\u901F\u9375",
    modify: "\u8B8A\u66F4\u5FEB\u901F\u9375",
    reset: "\u91CD\u8A2D",
    close: "\u95DC\u9589",
    homepage: "\u9996\u9801",
    more: "\u66F4\u591A",
    translateTheWholePage: "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",
    changeToTranslateTheWholePage: "\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",
    changeToTranslateTheMainPage: "\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
    translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",
    translateTheMainPage: "\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
    "The local rules are up to date": "\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A",
    "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A",
    "Checking for updates": "\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0",
    "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",
    localVersionIsTooOld: "\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",
    badUserscriptBrowser: "\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",
    foundNewVersion: "\u6709\u65B0\u7248\u672C\u53EF\u7528",
    theLocalExtensionIsUpToUpdate: "\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",
    failToSyncRules: "\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",
    retry: "\u9EDE\u6B64\u91CD\u8A66",
    failedReason: "\u5931\u6557\u539F\u56E0",
    currentRuleVersion: "\u76EE\u524D\u898F\u5247\u7248\u672C",
    calculating: "\u6B63\u5728\u8A08\u7B97",
    unknownError: "\u672A\u77E5\u7684\u932F\u8AA4",
    canNotFetchRemoteRule: "\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",
    enableAlphaSuccess: "\u5DF2\u555F\u7528 Alpha \u529F\u80FD",
    disableAlphaSuccess: "\u5DF2\u505C\u7528 Alpha \u529F\u80FD",
    cacheSize: "\u5FEB\u53D6\u5927\u5C0F\uFF1A",
    cleaning: "\u6B63\u5728\u6E05\u7406",
    cleanCache: "\u6E05\u9664\u5FEB\u53D6",
    options: "\u9078\u9805",
    about: "\u95DC\u65BC",
    service: "\u7FFB\u8B6F\u670D\u52D9",
    needAction: "(\u524D\u5F80\u8A2D\u5B9A)",
    goSettings: "\u524D\u5F80\u8A2D\u5B9A",
    needActionForOptions: "(\u9700\u8A2D\u5B9A)",
    translationEngine: "\u5F15\u64CE\u9078\u9805",
    sourceLanguage: "\u539F\u6587\u8A9E\u8A00",
    target: "\u76EE\u6A19\u8A9E\u8A00",
    popupSourceLanguage: "\u539F\u6587\u8A9E\u8A00",
    popupTarget: "\u76EE\u6A19\u8A9E\u8A00",
    popupService: "\u7FFB\u8B6F\u670D\u52D9",
    forThisSite: "\u91DD\u5C0D\u8A72\u7DB2\u7AD9\uFF1A",
    alwaysTranslateSomeLanguage: "\u7E3D\u662F\u7FFB\u8B6F {language}",
    neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8B6F {language}",
    alwaysTranslateSomeSite: "\u7E3D\u662F\u7FFB\u8B6F {hostname}",
    neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8B6F {hostname}",
    add: "\u65B0\u589E",
    default: "\u9810\u8A2D",
    forThisLanguage: "\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A",
    "add url": "\u8F38\u5165 URL",
    edit: "\u7DE8\u8F2F",
    "translate other languages into specific language": "\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00",
    "select translation service": "\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",
    language: "\u8A9E\u8A00",
    "show-original": "\u986F\u793A\u539F\u6587",
    translate: "\u7FFB\u8B6F",
    Translated: "\u5DF2\u7FFB\u8B6F",
    Translating: "\u6B63\u5728\u7FFB\u8B6F",
    Error: "\u932F\u8AA4",
    allowCacheTranslations: "\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09",
    "translation display": "\u8B6F\u6587\u986F\u793A\u6A23\u5F0F",
    "select diplay style": "\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",
    interface: "\u4ECB\u9762\u8A2D\u5B9A",
    import_export: "\u532F\u5165/\u532F\u51FA",
    import_export_title: "\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",
    syncToGoogleDrive: "\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",
    previewAllThemes: "\u9810\u89BD\u5168\u90E8\u6A23\u5F0F",
    "translationTheme.none": "\u7121",
    "translationTheme.grey": "\u9ED1\u7070\u8272",
    "translationTheme.dashed": "\u7834\u6298\u865F\u5E95\u7DDA",
    "translationTheme.dotted": "\u9EDE\u72C0\u5E95\u7DDA",
    "translationTheme.dashedBorder": "\u865B\u7DDA\u6846\u7DDA",
    "translationTheme.solidBorder": "\u5BE6\u7DDA\u6846\u7DDA",
    "translationTheme.underline": "\u76F4\u7DDA\u5E95\u7DDA",
    "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
    "translationTheme.opacity": "\u900F\u660E\u6548\u679C",
    "translationTheme.paper": "\u767D\u7D19\u9670\u5F71\u6548\u679C",
    "translationTheme.dividingLine": "\u5206\u9694\u7DDA",
    "translationTheme.highlight": "\u9192\u76EE\u63D0\u793A",
    "translationTheme.marker": "\u99AC\u514B\u7B46",
    "translationTheme.marker2": "\u99AC\u514B\u7B462",
    "translationTheme.blockquote": "\u5F15\u7528\u6A23\u5F0F",
    "translationTheme.weakening": "\u5F31\u5316",
    "translationTheme.italic": "\u659C\u9AD4",
    "translationTheme.bold": "\u7C97\u9AD4",
    "translationTheme.thinDashed": "\u7D30\u7834\u6298\u865F\u5E95\u7DDA",
    "translationTheme.nativeDashed": "\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA",
    "translationTheme.nativeDotted": "\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA",
    "translationTheme.nativeUnderline": "\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA",
    "translationTheme.wavy": "\u6CE2\u5F62\u66F2\u7DDA",
    "translationServices.tencent": "\u9A30\u8A0A\u7FFB\u8B6F\u541B",
    "translationServices.tenAlpha": "\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)",
    "translationServices.google": "Google \u7FFB\u8B6F",
    "translationServices.bai": "\u767E\u5EA6(Alpha)",
    "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8B6F",
    "translationServices.aliyun": "\u963F\u91CC\u96F2\u7FFB\u8B6F",
    "translationServices.volc": "\u706B\u5C71\u7FFB\u8B6F",
    "translationServices.deeplx": "DeeplX(Beta)",
    "translationServices.bing": "\u5FAE\u8F6F\u7FFB\u8B6F",
    "translationServices.deepl": "Deepl",
    "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8B6F",
    "translationServices.azure": "Azure \u7FFB\u8B6F",
    "translationServices.ibm": "IBM Watson",
    "translationServices.aws": "\u4E9E\u99AC\u905C\u7FFB\u8B6F",
    "translationServices.mock": "\u6A21\u64EC\u7FFB\u8B6F",
    "translationServices.mock2": "\u6A21\u64EC\u7FFB\u8B6F2",
    "translationServices.caiyun": "\u5F69\u96F2\u5C0F\u8B6F",
    "translationServices.cai": "\u5F69\u96F2\u5C0F\u8B6F (Alpha)",
    "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8B6F(Alpha)",
    "translationServices.openl": "OpenL",
    "translationServices.youdao": "\u6709\u9053\u7FFB\u8B6F",
    "translationServices.you": "\u6709\u9053\u7FFB\u8B6F (Alpha)",
    "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
    "translationServices.niu": "\u5C0F\u725B\u7FFB\u8B6F",
    "translationServices.papago": "Papago \u7FFB\u8B6F",
    "translationServices.d": "Deepl(Alpha)",
    "translationServices.dpro": "D Pro (Canary)",
    "translationServices.openai": "OpenAI",
    "translationServices.chatgpt": "ChatGPT Plus",
    "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
    "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
    neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",
    neverTranslateTheFollowingLanguagesDescription: "\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",
    enableUserscriptPagePopup: "\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",
    enableUserscriptPagePopupDescription: "\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B",
    "always translate the following languages": "\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
    "always sites": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740",
    "always translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
    "never sites": "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
    "never translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F",
    "please refer to": "\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",
    KeyAndConfigurationTutorial: "\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",
    useAboveStyleForTheseSites: "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",
    currentUrl: "\u76EE\u524D\u7DB2\u5740",
    confirm: "\u5132\u5B58",
    cancel: "\u53D6\u6D88",
    delete: "\u522A\u9664",
    "languages.auto": "\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",
    syncToCloud: "\u540C\u6B65\u81F3\u96F2\u7AEF",
    syncToCloudDescription: "\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",
    authFail: "\u6388\u6B0A\u5931\u6557",
    syncTitle: "\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",
    import_hint: "\u532F\u5165",
    upload: "\u4E0A\u50B3",
    revokeAuth: "\u64A4\u92B7\u6388\u6B0A",
    uploadFail: "\u4E0A\u50B3\u5931\u6557",
    download: "\u4E0B\u8F09",
    importSuccess: "\u532F\u5165\u6210\u529F",
    importFail: "\u532F\u5165\u5931\u6557",
    deleteFail: "\u522A\u9664\u5931\u6557",
    backupToCloud: "\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",
    create_new_backup: "\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",
    maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",
    backupToCloudDescription: "\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",
    successSyncConfig: "\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",
    syncFail: "\u540C\u6B65\u5931\u6557",
    updatedAt: "\u66F4\u65B0\u65BC {date}",
    lastSyncedAt: "\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",
    downloadFail: "\u4E0B\u8F09\u5931\u6557",
    clickToDownload: "\u9EDE\u9078\u4E0B\u8F09",
    aboutLabel: "\u95DC\u65BC - \u554F\u984C\u56DE\u5831 - \u8D0A\u52A9",
    aboutLabelWithoutSponsor: "\u95DC\u65BC - \u554F\u984C\u56DE\u5831",
    "browser.openAboutPage": "\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",
    aboutIntro: "\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u63F4\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002<br/><br/>\u514D\u8CBB\u5DE5\u5177\u4F5C\u8005\u4F3C\u4E4E\u53EF\u4EE5\u548C\u8B9A\u52A9\u8005\u4E4B\u9593\u5EFA\u7ACB\u4E00\u7A2E\u96D9\u8D0F\u7684\u95DC\u4FC2\uFF01\u6211\u70BA\u8D0A\u52A9\u8005\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9650\u6642\u798F\u5229\uFF0C\u6BD4\u5982<6>DeepL\u7FFB\u8B6F\u670D\u52D9</6>\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u4E86\u89E3\u8D0A\u52A9\u65B9\u6848</2>\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",
    aboutIntroWithoutSponsor: "\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",
    projectHomepage: "\u5C08\u6848\u9996\u9801",
    joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",
    joinTelegramChannel: "\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",
    feedbackAndJoin: "\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",
    autoSync: "\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",
    loadingThemeTitle: "Loading \u6A23\u5F0F",
    loadingThemeDescription: "\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F",
    "loadingTheme.spinner": "\u8F49\u5708\u52D5\u756B",
    "loadingTheme.text": "\u975C\u614B\u6587\u5B57 ... ",
    "loadingTheme.none": "\u4E0D\u986F\u793A",
    developerDescription: "\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6",
    "edit border color": "\u8B8A\u66F4\u908A\u6846\u8272\u5F69",
    successSyncButNoChange: "\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",
    customTheme: "\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F",
    "customThemeLabel.borderColor": "\u908A\u6846\u8272\u5F69",
    "customThemeLabel.borderRadius": "\u908A\u6846\u5713\u89D2",
    "customThemeLabel.textColor": "\u6587\u5B57\u8272\u5F69",
    "customThemeLabel.backgroundColor": "\u80CC\u666F\u8272\u5F69",
    "customThemeLabel.zoom": "\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)",
    resetToDefaultColor: "\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",
    isTranslateTitle: "\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",
    isTranslateTitleDescription: "\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",
    verifyService: "\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",
    verified: "\u9A57\u8B49\u6210\u529F",
    "field.model": "\u6A21\u578B",
    "field.translationEngine": "\u7FFB\u8B6F\u5F15\u64CE",
    "field.limitPerMinute": "\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578",
    "field.limitPerSecond": "\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578",
    "field.maxTextLengthPerRequest": "\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6",
    "field.apiUrl": "\u81EA\u8A02 API \u4F4D\u5740",
    "description.limitPerMinute": "\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C",
    "description.limitPerSecond": "\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C",
    "description.prompt": "\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI",
    "description.maxTextLengthPerRequest": "\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6",
    enabledExtension: "\u555F\u7528\u5957\u4EF6",
    clickToDisableExtension: "\u9EDE\u9078\u505C\u7528\u5957\u4EF6",
    clickToEnableExtension: "\u9EDE\u9078\u555F\u7528\u5957\u4EF6",
    hasBeenDisabled: "\u5DF2\u505C\u7528",
    "show password": "\u986F\u793A\u5BC6\u78BC",
    customContent: "\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B"
  };

  // locales/en.json
  var en_default = {
    lineBreakMaxTextCount: "Maximum number of characters allowed per sentence after line break",
    "translate-pdf": "Click to translate PDF",
    "translate-firefox-local-pdf": "Click to upload Pdf",
    enableLineBreak: "Whether to turn on automatic line wrapping for long paragraphs",
    sponsorLabel: "Sponsoring developers from $1 (monthly or one-time)",
    help: "Help",
    browserShortcutsNoteForFirefox: `To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,
    browserShortcutsNoteForChrome: "To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",
    browserShortcutsSucks: "Please enter the shortcut key manually in the format:",
    enableLineBreakDescription: "After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading",
    "browser.brandName": "Immersive Translate",
    "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc.",
    "browser.toggleTranslatePage": "Toggle translate webpage ",
    "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
    "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
    "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
    "browser.openOptionsPage": "Open Settings Page",
    "browser.toggleTranslationMask": "Toggle translation mask style",
    "browser.translateLocalPdfFile": "Translate local PDF File",
    "browser.openEbookViewer": "Read local e-book",
    "browser.openEbookBuilder": "Make Dual Epub ebook",
    "browser.translateLocalHtmlFile": "Translate HTML/txt File",
    "browser.donateContext": "Sponsor Benefits",
    "browser.translateLocalSubtitleFile": "Translate Subtitle File",
    confirmResetConfig: "Are you sure you want to reset the settings?",
    translationLineBreakSettingTitle: "Line break setting",
    smartLineBreak: "Smart Wrap",
    alwaysLineBreak: "Always Wrap",
    isShowContextMenu: "Create right button menu",
    toggleBeta: "Enable Beta experimental features",
    betaDescription: "Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",
    translationLineBreakSettingDescription: "The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",
    tempTranslateDomainTitle: "Open the translation time temporarily",
    tempTranslateDomainDescription: "When a page is translated manually, turn it temporarily on as automatic translation",
    xMinutes: "{count} minutes",
    disabled: "Disable",
    changelog: "Change Log",
    toggleTranslatePageWhenThreeFingersOnTheScreen: "Three-finger touch to show/hide translation display",
    toggleTranslationMaskWhenThreeFingersOnTheScreen: "Multi-finger touch to show/hide the blur effect of the translation",
    addUrlDescription: "The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",
    general: "General",
    clickToExpandConfig: "Expand current configuration",
    import: "Import configuration from file",
    export: "Export to file",
    toggleDebug: "Print debug logs on the console",
    "fingers.0": "Close",
    "fingers.2": "Two-finger touch",
    "fingers.3": "Three-finger touch",
    "fingers.4": "Four-finger touch",
    "fingers.5": "Five-finger touch",
    document: "Document",
    resetSuccess: "All settings reset successful",
    resetThisSuccess: "Reset successful",
    saved: "Saved successfully",
    successImportConfig: "Configuration imported successfully",
    goAdvancedSettings: "Go to Advanced Settings Page",
    goAdvancedInterfaceSettings: "Go to Advanced Custom Settings Page",
    advanced: "Advanced",
    advancedDescription: "Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",
    developer: "Developer settings",
    donateCafe: "Pricing",
    "translate to the bottom of the page": "Translate to the bottom of the page immediately after opening the page?",
    feedback: "Feedback",
    toggleTranslatePage: "Toggle Translate",
    "mouse-translate": "Mouse Hover",
    mouseHoldKey: "+ {key} translate this paragraph",
    mouseHoldKeyAuto: "Translate the paragraph directly",
    mouseHoldKeyOff: "Do nothing",
    mouseHoldKeyOther: "Custom shortcut key (open settings)",
    mouseHoldKeyCustomKey: "{key} translate this paragraph",
    mouseHoverHoldKey: "Mouse over and press X key to translate paragraph",
    translateToThePageEndImmediatelyDescription: "Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)",
    "translate all areas of the page": "Whether to translate all areas of the web page",
    translationAreaDescription: "When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)",
    "the number of characters to be translated first": "Directly translate the number of characters in front of the page without waiting to scroll to the visible area",
    "interface language": "Interface language",
    "display both the original text and the translation": "Display both the original text and the translation",
    "keyboard shortcuts": "Keyboard shortcuts",
    modify: "Edit",
    reset: "Reset",
    close: "Close",
    homepage: "Home Page",
    more: "More",
    moreOptions: "Expand more custom settings",
    translateTheWholePage: "Translate the whole page area (different from only the main area)",
    changeToTranslateTheWholePage: "Translate the whole page",
    changeToTranslateTheMainPage: "Translate main only",
    translateToThePageEndImmediately: "Immediately translate to the bottom (different from translating the current visible area)",
    translateTheMainPage: "Main areas of intelligent translation",
    "The local rules are up to date": "Local  rules are up to date:",
    "Successfully synchronized with the latest official rules:": "Successfully synced latest official rules:",
    "Checking for updates": "Checking for update",
    "Rules are being synchronized": "Syncing official rules",
    localVersionIsTooOld: "The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",
    badUserscriptBrowser: "The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",
    foundNewVersion: "New version available",
    theLocalExtensionIsUpToUpdate: "The current extension version is up to date.",
    failToSyncRules: "Failed to sync latest adaptive rules",
    retry: "Retry",
    failedReason: "Failure reason",
    currentRuleVersion: "Current Rule Version",
    calculating: "Calculating",
    unknownError: "Unknown Error",
    canNotFetchRemoteRule: "Unable to fetch remote rule",
    enableAlphaSuccess: "Alpha enabled successfully",
    disableAlphaSuccess: "Alpha has been disabled",
    cacheSize: "Cache size:",
    cleaning: "Cleaning",
    cleanCache: "Clear cache",
    options: "Options",
    about: "About",
    service: "Translation Service",
    needAction: "(to set up)",
    goSettings: "to set up",
    needActionForOptions: "(need to set)",
    translationEngine: "Engine Options",
    sourceLanguage: "Original language",
    target: "Target Language",
    popupSourceLanguage: "Source",
    popupTarget: "Target",
    popupService: "Service",
    forThisSite: "For This Site:",
    alwaysTranslateSomeLanguage: "Always translate {language}",
    neverTranslateSomeLanguage: "Never translate {language}",
    alwaysTranslateSomeSite: "Always translate {hostname}",
    neverTranslateSomeSite: "Never translate {hostname}",
    add: "Add",
    default: "Default",
    forThisLanguage: "For This Language:",
    "add url": "Add URL",
    edit: "Edit",
    "translate other languages into specific language": "Translate other languages into the language you set",
    "select translation service": "Select a translation service",
    language: "Language",
    "show-original": "Show Original",
    translate: "Translate",
    Translated: "Translated",
    Translating: "Translating",
    Error: "Error",
    allowCacheTranslations: "Enable local translation caching (reduce translation requests for duplicate paragraphs)",
    "translation display": "Translation display style",
    "select diplay style": "Please refer to the following examples",
    interface: "Interface Settings",
    import_export: "Import/Export",
    import_export_title: "Import/Export Configuration",
    syncToGoogleDrive: "Sync Now with Google Drive",
    previewAllThemes: "Preview all themes",
    "translationTheme.none": "None",
    "translationTheme.grey": "Black Gray",
    "translationTheme.dashed": "Dashed underline",
    "translationTheme.dotted": "Dotted Underline",
    "translationTheme.dashedBorder": "Dashed Border",
    "translationTheme.solidBorder": "Dashed Border",
    "translationTheme.underline": "Straight underline",
    "translationTheme.mask": "Blur effect",
    "translationTheme.opacity": "Opacity effect",
    "translationTheme.paper": "White paper shadow effect",
    "translationTheme.dividingLine": "Dividing line",
    "translationTheme.highlight": "Highlight",
    "translationTheme.marker": "Marker",
    "translationTheme.marker2": "Maker2",
    "translationTheme.blockquote": "quote style",
    "translationTheme.weakening": "Weakening",
    "translationTheme.italic": "Italic",
    "translationTheme.bold": "Bold",
    "translationTheme.thinDashed": "Thin dashed underline",
    "translationTheme.nativeDashed": "System Dash Underline",
    "translationTheme.nativeDotted": "System Dotted Underline",
    "translationTheme.nativeUnderline": "System Straight Line Underline",
    "translationTheme.wavy": "Squiggle",
    "translationServices.tencent": "Tencent Translator",
    "translationServices.tenAlpha": "Tencent Translator (Alpha)",
    "translationServices.google": "Google Translate",
    "translationServices.bai": "Baidu (Alpha)",
    "translationServices.baidu": "Baidu translation",
    "translationServices.aliyun": "Aliyun Translator",
    "translationServices.volc": "Volcano Translation",
    "translationServices.deeplx": "DeeplX (Alpha)",
    "translationServices.bing": "Microsoft Translator",
    "translationServices.deepl": "DeepL",
    "translationServices.wechat": "Wechat translation",
    "translationServices.azure": "Azure Translator",
    "translationServices.ibm": "IBM Watson",
    "translationServices.aws": "Amazon Translate",
    "translationServices.mock": "Mock translation",
    "translationServices.mock2": "Mock Translation2",
    "translationServices.caiyun": "Caiyun Translation",
    "translationServices.cai": "Caiyun Translation (Alpha)",
    "translationServices.volcAlpha": "Volcano Translation (Alpha)",
    "translationServices.openl": "OpenL",
    "translationServices.youdao": "Youdao Translation",
    "translationServices.you": "Youdao Translation (Alpha)",
    "translationServices.transmart": "Tencent Smart Translation",
    "translationServices.niu": "Niu Translation",
    "translationServices.papago": "Papago Translation",
    "translationServices.d": "DeeplX (Alpha)",
    "translationServices.dpro": "D Pro (Canary)",
    "translationServices.openai": "OpenAI",
    "translationServices.chatgpt": "ChatGPT Plus",
    "translate title": "Translate page title",
    "always languages": "Always translate the following languages",
    neverTranslateLanguagesLabel: "Never Translated Languages",
    neverTranslateTheFollowingLanguagesDescription: "When a paragraph on a page is in one of the following languages, the translation will be skipped",
    enableUserscriptPagePopup: "Always show Popup windows on the page",
    enableUserscriptPagePopupDescription: "Three-finger touch to show the Popup.",
    "always translate the following languages": "The following languages will always be translated",
    "always sites": "Always translate the following sites",
    "always translate the following sites": "The following sites will always be translated",
    "never sites": "Never translate the following sites",
    "never translate the following sites": "The following sites will never be translated",
    "please refer to": "It can only be used after filling in the key. For details, please refer to",
    KeyAndConfigurationTutorial: "Key Application and Configuration Tutorial",
    useAboveStyleForTheseSites: "Sites that always use the {theme} translation style",
    currentUrl: "Current URL",
    confirm: "Save",
    cancel: "Cancel",
    delete: "Delete",
    "languages.auto": "Detect Language",
    syncToCloud: "Sync to cloud",
    syncToCloudDescription: "Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",
    authFail: "Authorization Failed",
    syncTitle: "Please select a file operation",
    import_hint: "Import",
    upload: "Upload",
    revokeAuth: "Revoke Authorization",
    uploadFail: "Upload Failed",
    download: "Download",
    importSuccess: "Upload Success",
    importFail: "Import Failed",
    deleteFail: "Delete Failed",
    backupToCloud: "Manage backup files manually",
    create_new_backup: "Add backup node",
    maxBackupFiles: "Up to{count}different nodes can be backed up. Please delete unneeded nodes",
    backupToCloudDescription: "Upload or restore backup files manually, up to 3 different backups",
    successSyncConfig: "Successfully synced with cloud",
    syncFail: "Synchronization failed",
    updatedAt: "Updated at {date}",
    lastSyncedAt: "Last checked at {date}",
    downloadFail: "Download failed",
    clickToDownload: "Click to download",
    aboutLabel: "About - Feedback - Sponsor",
    aboutLabelWithoutSponsor: "About - Feedback",
    "browser.openAboutPage": "About / Feedback",
    aboutIntro: "The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/>Thanks to these <1>sponsors</1>, thanks to his/her support, more people can use this tool for free. You can <2>sponsor</2> my work by clicking here, and you can also follow my <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",
    aboutIntroWithoutSponsor: "The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",
    projectHomepage: "Project Homepage",
    joinTelegramGroup: "Join Telegram group for feature discussion",
    joinTelegramChannel: "Subscribe to our Telegram channel to get the latest updates",
    feedbackAndJoin: "Issue feedback/group",
    autoSync: "Auto-Time Sync",
    loadingThemeTitle: "Loading Style",
    loadingThemeDescription: "Set the style of waiting for the translation to load",
    "loadingTheme.spinner": "Spinning icon",
    "loadingTheme.text": "Static Text... ",
    "loadingTheme.none": "Disabled",
    developerDescription: "You can click <1>here</1> to see the documentation related to advanced customization",
    "edit border color": "Edit border color",
    successSyncButNoChange: "The current configuration is consistent with that in the cloud server",
    customTheme: "Customize colors and sizes",
    "customThemeLabel.borderColor": "Border color",
    "customThemeLabel.borderRadius": "Border Round Corner",
    "customThemeLabel.textColor": "Text color",
    "customThemeLabel.backgroundColor": "Background color",
    "customThemeLabel.zoom": "Font scale (%)",
    resetToDefaultColor: "Reset to default colors",
    isTranslateTitle: "Enable translate page title",
    isTranslateTitleDescription: "When enabled, the page title will be translated",
    verifyService: "Click on this test service",
    verified: "Successful",
    "field.model": "Model",
    "field.translationEngine": "Translation engine",
    "field.limitPerMinute": "Max requests per minute",
    "field.limitPerSecond": "Max requests per second",
    "field.maxTextLengthPerRequest": "Maximum text length per request",
    "field.apiUrl": "Custom API interface address",
    "description.limitPerMinute": "When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values",
    "description.limitPerSecond": "When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values",
    "description.prompt": "Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message",
    "description.maxTextLengthPerRequest": "By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",
    enabledExtension: "Enable extensions",
    clickToDisableExtension: "Click to disable extension",
    clickToEnableExtension: "Click to enable the extension",
    hasBeenDisabled: "Disabled",
    "show password": "Show password",
    resetToDefaultSettings: "Reset to default settings",
    customContent: "Enter customization content"
  };

  // constant.ts
  var interfaceTranslations = [
    {
      code: "zh-CN",
      messages: zh_CN_default
    },
    {
      code: "zh-TW",
      messages: zh_TW_default
    },
    {
      code: "en",
      messages: en_default
    }
  ];
  var translations = {};
  for (let translation of interfaceTranslations)
    translations[translation.code] = translation.messages;
  var brandName = "Immersive Translate", brandId = "immersive-translate", pdfViewerUrl = "pdf/index.html";
  var subtitleBuilderUrl = "subtitle/index.html", epubViewerUrl = "ebook/index.html", epubBuilderUrl = "ebook/make/index.html", brandIdForJs = "immersiveTranslate", GOOGLE_CLIENT_ID = "759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com", GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow", LATEST_FILE_NAME = "immersive-translate-config-latest.json", AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", iframeMessageRateIdentifier = brandIdForJs + "WaitForRateLimit", documentMessageTypeIdentifierForAsk = brandIdForJs + "DocumentMessageAsk", documentMessageTypeIdentifierForTellThirdParty = brandIdForJs + "DocumentMessageTellThirdParty", documentMessageTypeIdentifierForThirdPartyTell = brandIdForJs + "DocumentMessageThirdPartyTell", documentMessageTypeIdentifierForHandler = brandIdForJs + "DocumentMessageHandler", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`, buildinConfigStorageKey = "buildinConfig", localConfigStorageKey = "localConfig", contextOpenOptionsMenuId = "openOptionsPage";
  var contextTranslateLocalPdfFileMenuId = "translateLocalPdfFile", contextDonateMenuId = "donateContext", contextOpenLocalEbookViewer = "openEbookViewer", contextOpenLocalEbookBuilder = "openEbookBuilder", contextOpenLocalSubtitleBuilder = "openSubtitleBuilder", pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
  var elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`;
  var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`;
  var translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
  var languages = [
    "auto",
    "en",
    "zh-CN",
    "zh-TW",
    "ja",
    "ko",
    "es",
    "de",
    "fr",
    "pt",
    "ru",
    "ar",
    "it",
    "ms",
    "id",
    "vi",
    "af",
    "th",
    "ur",
    "am",
    "az",
    "be",
    "bg",
    "bn",
    "bs",
    "ca",
    "ceb",
    "co",
    "cs",
    "cy",
    "da",
    "el",
    "eo",
    "et",
    "eu",
    "fa",
    "fi",
    "fil",
    "fj",
    "fy",
    "ga",
    "gd",
    "gl",
    "gu",
    "ha",
    "haw",
    "he",
    "hi",
    "hmn",
    "hr",
    "ht",
    "hu",
    "hy",
    "ig",
    "is",
    "jw",
    "ka",
    "kk",
    "km",
    "kn",
    "ku",
    "ky",
    "la",
    "lb",
    "lo",
    "lt",
    "lv",
    "mg",
    "mi",
    "mk",
    "ml",
    "mn",
    "mr",
    "mt",
    "mww",
    "my",
    "ne",
    "nl",
    "no",
    "ny",
    "otq",
    "pa",
    "pl",
    "ps",
    "ro",
    "sd",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sq",
    "sr",
    "sr-Cyrl",
    "sr-Latn",
    "st",
    "su",
    "sv",
    "sw",
    "ta",
    "te",
    "tg",
    "tlh",
    "tlh-Qaak",
    "to",
    "tr",
    "ty",
    "ug",
    "uk",
    "uz",
    "wyw",
    "xh",
    "yi",
    "yo",
    "yua",
    "yue",
    "zu"
  ];
  var fallbackLanguage = "zh-CN";
  var openlProps = [
    {
      type: "select",
      name: "codename",
      labelKey: "field.translationEngine",
      default: "youdao",
      required: !1,
      options: [
        {
          label: "translationServices.google",
          value: "google"
        },
        {
          label: "translationServices.deepl",
          value: "deepl"
        },
        {
          label: "translationServices.youdao",
          value: "youdao"
        },
        {
          label: "translationServices.tencent",
          value: "tencent"
        },
        {
          label: "translationServices.aliyun",
          value: "aliyun"
        },
        {
          label: "translationServices.baidu",
          value: "baidu"
        },
        {
          label: "translationServices.caiyun",
          value: "caiyun"
        },
        {
          label: "translationServices.wechat",
          value: "wechat"
        },
        {
          label: "translationServices.ibm",
          value: "ibm"
        },
        {
          label: "translationServices.azure",
          value: "azure"
        },
        {
          label: "translationServices.aws",
          value: "aws"
        }
      ]
    }
  ], PureTranslationServices = {
    bing: {
      name: "\u5FAE\u8F6F\u7FFB\u8BD1",
      homepage: "https://www.bing.com/translator"
    },
    google: {
      name: "Google",
      homepage: "https://translate.google.com/"
    },
    deepl: {
      name: "DeepL",
      homepage: "https://www.deepl.com/translator",
      docUrl: "https://immersive-translate.owenyoung.com/services/deepL",
      allProps: [
        {
          name: "authKey",
          label: "Auth Key",
          required: !0,
          type: "password"
        }
      ]
    },
    transmart: {
      name: "Transmart",
      homepage: "https://transmart.qq.com/"
    },
    openai: {
      name: "Open AI",
      homepage: "https://openai.com/api/",
      docUrl: "https://immersive-translate.owenyoung.com/services/openai",
      allProps: [
        {
          name: "APIKEY",
          required: !0,
          type: "password"
        },
        {
          name: "model",
          labelKey: "field.model",
          descriptionKey: "description.model",
          required: !1,
          type: "select",
          default: "gpt-3.5-turbo",
          options: [
            {
              label: "gpt-3.5-turbo",
              value: "gpt-3.5-turbo"
            },
            {
              label: "gpt-4",
              value: "gpt-4"
            }
          ]
        },
        {
          name: "limit",
          required: !1,
          labelKey: "field.limitPerSecond",
          descriptionKey: "description.limitPerSecond",
          descriptionLink1: "https://immersive-translate.owenyoung.com/services/openai",
          type: "number",
          default: 5
        },
        {
          name: "maxTextLengthPerRequest",
          required: !1,
          labelKey: "field.maxTextLengthPerRequest",
          descriptionKey: "description.maxTextLengthPerRequest",
          type: "number",
          default: 1200,
          optional: !0
        },
        {
          name: "maxTextGroupLengthPerRequest",
          required: !1,
          labelKey: "field.maxTextGroupLengthPerRequest",
          descriptionKey: "description.maxTextGroupLengthPerRequest",
          type: "number",
          default: 1,
          optional: !0
        },
        {
          name: "apiUrl",
          labelKey: "field.apiUrl",
          required: !1,
          type: "text",
          default: "https://api.openai.com/v1/chat/completions",
          descriptionKey: "description.apiUrl",
          optional: !0
        },
        {
          name: "systemPrompt",
          label: "System Prompt",
          required: !1,
          descriptionKey: "description.systemPrompt",
          type: "text",
          optional: !0,
          default: "You are a translation engine, you can only translate text and cannot interpret it, and do not explain."
        },
        {
          name: "prompt",
          label: "Prompt",
          required: !1,
          descriptionKey: "description.prompt",
          type: "textarea",
          default: `Translate the text below to {{to}}:

{{text}}`,
          optional: !0
        }
      ]
    },
    chatgpt: {
      name: "ChatGPT Plus",
      homepage: "https://chat.openai.com",
      beta: !0
    },
    youdao: {
      name: "Youdao",
      homepage: "https://immersive-translate.owenyoung.com/services/youdao",
      docUrl: "https://immersive-translate.owenyoung.com/services/youdao",
      allProps: [
        {
          name: "appId",
          required: !0,
          type: "text"
        },
        {
          name: "appSecret",
          required: !0,
          type: "password"
        }
      ]
    },
    tencent: {
      name: "Tencent",
      homepage: "https://fanyi.qq.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/tencent",
      allProps: [
        {
          name: "secretId",
          required: !0,
          type: "text"
        },
        {
          name: "secretKey",
          required: !0,
          type: "password"
        }
      ]
    },
    azure: {
      name: "azure",
      homepage: "https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",
      docUrl: "https://immersive-translate.owenyoung.com/services/azure",
      allProps: [
        {
          name: "region",
          required: !0,
          default: "eastasia",
          type: "text"
        },
        {
          name: "APIKEY",
          required: !0,
          type: "password"
        }
      ]
    },
    papago: {
      name: "Papago",
      homepage: "https://translate.google.com/",
      canary: !0
    },
    baidu: {
      name: "Baidu",
      homepage: "https://fanyi.baidu.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/baidu",
      allProps: [
        {
          name: "appid",
          required: !0,
          type: "text"
        },
        {
          name: "key",
          required: !0,
          type: "password"
        }
      ]
    },
    volc: {
      name: "Volc",
      homepage: "https://www.volcengine.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/volcano",
      allProps: [
        {
          name: "accessKeyId",
          required: !0,
          type: "text"
        },
        {
          name: "secretAccessKey",
          required: !0,
          type: "password"
        }
      ]
    },
    caiyun: {
      name: "Caiyun",
      homepage: "https://fanyi.caiyunapp.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/caiyun",
      allProps: [
        {
          name: "token",
          required: !0,
          type: "password"
        }
      ]
    },
    cai: {
      name: "Cai",
      homepage: "https://fanyi.caiyunapp.com/",
      alpha: !0
    },
    mock: {
      name: "Mock",
      homepage: "https://www.google.com"
    },
    mock2: {
      name: "Mock2",
      homepage: "https://www.google.com"
    },
    tenAlpha: {
      name: "TenAlpha",
      homepage: "https://fanyi.qq.com/",
      alpha: !0
    },
    you: {
      name: "You",
      alpha: !0,
      homepage: "https://immersive-translate.owenyoung.com/services/youdao"
    },
    openl: {
      name: "Openl",
      homepage: "https://openl.club/",
      docUrl: "https://immersive-translate.owenyoung.com/services/openL",
      allProps: [
        ...openlProps,
        {
          type: "password",
          name: "apikey",
          required: !0
        }
      ],
      props: openlProps
    },
    volcAlpha: {
      name: "Volc Alpha",
      alpha: !0,
      homepage: "https://www.volcengine.com/"
    },
    d: {
      name: "D () ",
      alpha: !0,
      homepage: "https://www.deepl.com/translator"
    },
    dpro: {
      name: "DPro (Canary) ",
      canary: !0,
      homepage: "https://www.deepl.com/translator"
    },
    deeplx: {
      name: "DeepLX (Beta)",
      beta: !0,
      homepage: "https://www.deepl.com/translator",
      allProps: [
        {
          name: "url",
          label: "API URL",
          required: !0,
          type: "text"
        }
      ]
    },
    niu: {
      name: "niutrans",
      homepage: "https://niutrans.com/",
      docUrl: "https://immersive-translate.owenyoung.com/services/niu",
      allProps: [
        {
          name: "APIKEY",
          required: !0,
          type: "password"
        }
      ]
    }
  }, childFrameToRootFrameIdentifier = { type: brandIdForJs + "ChildFrameToRootFrameIdentifier" };

  // log.ts
  var theConsole = console, Timing = class {
    #t = performance.now();
    reset() {
      this.#t = performance.now();
    }
    stop(message) {
      let now = performance.now(), d2 = Math.round(now - this.#t), cf = colors_exports.green;
      d2 > 1e4 ? cf = colors_exports.red : d2 > 1e3 && (cf = colors_exports.yellow), theConsole.debug(
        colors_exports.dim(brandName + " TIMING:"),
        message,
        "in",
        cf(d2 + "ms")
      ), this.#t = now;
    }
  }, Logger = class {
    #level = 1 /* Info */;
    get level() {
      return this.#level;
    }
    setLevel(level) {
      switch (level) {
        case "debug":
          this.#level = 0 /* Debug */;
          break;
        case "info":
          this.#level = 1 /* Info */;
          break;
        case "warn":
          this.#level = 2 /* Warn */;
          break;
        case "error":
          this.#level = 3 /* Error */;
          break;
        case "fatal":
          this.#level = 4 /* Fatal */;
          break;
      }
    }
    debug(...args) {
      this.#level <= 0 /* Debug */ && theConsole.log(colors_exports.dim(brandName + " DEBUG:"), ...args);
    }
    v(...args) {
      this.#level <= 0 /* Debug */;
    }
    info(...args) {
      this.#level <= 1 /* Info */ && theConsole.log(colors_exports.green(brandName + " INFO:"), ...args);
    }
    l(...args) {
      this.#level <= 1 /* Info */;
    }
    warn(...args) {
      this.#level <= 2 /* Warn */ && theConsole.warn(colors_exports.yellow(brandName + " WARN:"), ...args);
    }
    error(...args) {
      this.#level <= 3 /* Error */ && theConsole.error(colors_exports.red(brandName + " ERROR:"), ...args);
    }
    fatal(...args) {
      this.#level <= 4 /* Fatal */ && theConsole.error(colors_exports.red(brandName + " FATAL:"), ...args);
    }
    timing() {
      return this.level === 0 /* Debug */ ? new Timing() : { reset: () => {
      }, stop: () => {
      } };
    }
  }, log_default = new Logger();

  // utils/format_language.ts
  function formatLanguage(rawLangCode) {
    if (typeof rawLangCode != "string")
      return "auto";
    let lowerCaseLangCode = rawLangCode.toLowerCase();
    if (lowerCaseLangCode === "zh" || lowerCaseLangCode === "zh-hans")
      return "zh-CN";
    if (lowerCaseLangCode === "zh-hant" || lowerCaseLangCode === "zh-hk")
      return "zh-TW";
    if (lowerCaseLangCode === "iw")
      return "he";
    if (lowerCaseLangCode === "jv")
      return "jw";
    let lowerCaseLanguages = languages.map((lang) => lang.toLowerCase()), indexOfLanguages = lowerCaseLanguages.indexOf(
      lowerCaseLangCode
    );
    if (indexOfLanguages === -1)
      if (lowerCaseLangCode.indexOf("-") >= 0) {
        lowerCaseLangCode = lowerCaseLangCode.split("-")[0];
        let firstPartIndex = lowerCaseLanguages.indexOf(lowerCaseLangCode);
        return firstPartIndex === -1 ? "auto" : languages[firstPartIndex];
      } else
        return "auto";
    else
      return languages[indexOfLanguages];
  }

  // env.ts
  function getEnv() {
    return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : define_process_env_default;
  }
  var env = getEnv();
  function isMonkey() {
    return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
  }
  function isSafari() {
    if (env.IMMERSIVE_TRANSLATE_SAFARI === "1")
      return !0;
    if (
      // @ts-ignore: it's ok
      typeof globalThis.immersiveTranslateBrowserAPI < "u" && // @ts-ignore: it's ok
      globalThis.immersiveTranslateBrowserAPI.runtime && // @ts-ignore: it's ok
      globalThis.immersiveTranslateBrowserAPI.runtime.getManifest
    ) {
      let manifest = globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();
      return !!(manifest && manifest._isSafari);
    } else
      return !1;
  }
  function isUserscriptRuntime() {
    if (
      // @ts-ignore: it's ok
      typeof globalThis.immersiveTranslateBrowserAPI < "u" && // @ts-ignore: it's ok
      globalThis.immersiveTranslateBrowserAPI.runtime && // @ts-ignore: it's ok
      globalThis.immersiveTranslateBrowserAPI.runtime.getManifest
    ) {
      let manifest = globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();
      return !!(manifest && (manifest._isUserscript || manifest._isSafari));
    } else
      return !1;
  }

  // buildin_config.json
  var buildin_config_default = {
    minVersion: "0.0.20",
    immediateTranslationTextCount: 5e3,
    interval: 36e5,
    beta: !1,
    cache: !0,
    enabled: !0,
    donateUrl: "https://immersive-translate.owenyoung.com/donate.html",
    feedbackUrl: "https://github.com/immersive-translate/immersive-translate/issues",
    isShowContextMenu: !0,
    blockUrls: [
      "googleads.g.doubleclick.net",
      "s1.hdslb.com",
      "oapi.dingtalk.com",
      "login.dingtalk.com",
      "imasdk.googleapis.com",
      "acdn.adnxs.com",
      "pos.baidu.com",
      "js-sec.indexww.com",
      "g.alicdn.com",
      "ads.pubmatic.com",
      "challenges.cloudflare.com",
      "accounts.google.com",
      "images-na.ssl-images-amazon.com",
      "tpc.googlesyndication.com",
      "js.stripe.com",
      "acdn.adnxs-simple.com",
      "s.union.360.cn",
      "s.amazon-adsystem.com",
      "www.recaptcha.net",
      "s7.addthis.com",
      "z.moatads.com",
      "https://www.marketwatch.com/static_html/daa-min.html",
      "tr.snapchat.com",
      "ct.pinterest.com",
      "*.moatads.com",
      "secure-us.imrworldwide.com",
      "static.noeyeon.click",
      "widgets.outbrain.com",
      "www.dianomi.com/smartads.epl",
      "secure-assets.rubiconproject.com",
      "eus.rubiconproject.com",
      "eus.rubiconproject.com",
      "i.liadm.com",
      "eb2.3lift.com"
    ],
    telemetry: !0,
    loadingTheme: "spinner",
    canary: !1,
    translationServices: {
      volcAlpha: {
        placeholderDelimiters: ["{", "}"]
      },
      volc: {
        placeholderDelimiters: ["{", "}"]
      },
      tencent: {
        placeholderDelimiters: ["{", "}"]
      },
      transmart: {
        placeholderDelimiters: ["#", "#"]
      },
      baidu: {
        placeholderDelimiters: ["#", "#"]
      },
      caiyun: {
        placeholderDelimiters: ["{", "}"]
      },
      youdao: {
        placeholderDelimiters: ["\u{1F6A0}", "\u{1F6A0}"]
      },
      deepl: {
        immediateTranslationTextCountForImmersiveDeepl: 5e4,
        placeholderDelimiters: ["{", "}"]
      },
      bing: {
        maxTextLengthPerRequest: 800
      },
      deeplx: {
        limit: 3
      },
      d: {
        immediateTranslationTextCount: 0
      },
      papago: {
        placeholderDelimiters: ["{", "}"]
      },
      dpro: {
        apiUrl: "https://api.deepl.com/jsonrpc"
      },
      openai: {
        placeholderDelimiters: ["{{", "}}"],
        immediateTranslationTextCount: 3e3,
        translationDebounce: 300,
        limit: 5,
        maxTextGroupLengthPerRequest: 1,
        prompt: `Translate the text to {{to}}:

{{text}}`,
        newlinePlaceholderDelimiters: [
          `

-|`,
          `|-

`,
          `
?
?-\\|\\d+\\|-
?
?`
        ]
      },
      chatgpt: {
        placeholderDelimiters: ["{{", "}}"],
        immediateTranslationTextCount: 2e3,
        maxTextGroupLengthPerRequest: 1,
        maxTextLengthPerRequest: 2e3,
        prompt: `Translate the text to {{to}}:

{{text}}`,
        newlinePlaceholderDelimiters: [
          `

-|`,
          `|-

`,
          `
?
?-\\|\\d+\\|-
?
?`
        ]
      }
    },
    shortcuts: {
      toggleTranslatePage: "Alt+A",
      toggleTranslateTheWholePage: "Alt+W",
      toggleTranslateToThePageEndImmediately: "",
      toggleTranslationMask: ""
    },
    tempTranslateDomainMinutes: 0,
    immediateTranslationPattern: {
      matches: [
        "www.tumblr.com",
        "twitter.com",
        "*.twitter.com",
        "medium.com",
        "*.medium.com",
        "www.facebook.com",
        "www.youtube.com",
        "m.youtube.com",
        "mail.google.com",
        "discord.com",
        "web.telegram.org",
        "instagram.com",
        "*.slack.com",
        "https://old.reddit.com/",
        "https://www.reddit.com/r/popular/",
        "https://www.reddit.com/",
        "https://www.reddit.com/hot/",
        "https://www.reddit.com/new/",
        "https://www.reddit.com/top/",
        "https://www.reddit.com/.compact"
      ],
      excludeMatches: [],
      selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
      selectorExcludeMatches: []
    },
    translationParagraphLanguagePattern: {
      matches: [
        "www.reddit.com",
        "old.reddit.com",
        "twitter.com",
        "www.tumblr.com",
        "*.twitter.com",
        "medium.com",
        "*.medium.com",
        "github.com",
        "gist.github.com",
        "www.facebook.com",
        "www.youtube.com",
        "m.youtube.com",
        "read.readwise.io",
        "www.inoreader.com",
        "mail.google.com",
        "google.com",
        "discord.com",
        "instagram.com",
        "web.telegram.org",
        "*.slack.com"
      ],
      excludeMatches: [],
      selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
      selectorExcludeMatches: []
    },
    sourceLanguageUrlPattern: {},
    generalRule: {
      _comment: "",
      normalizeBody: "",
      useIframePostMessage: !0,
      injectedCss: [],
      isEbook: !1,
      isEbookBuilder: !1,
      showSponsorOnSafari: !1,
      waitForSelectors: [],
      waitForSelectorsTimeout: 3e3,
      pairs: {},
      isSubtitleBuilder: !1,
      minZIndex: 0,
      initTranslationServiceAsSoonAsPossible: !0,
      targetWrapperTag: "font",
      additionalInjectedCss: [],
      isTranslateTitle: !0,
      languageDetectMinTextCount: 50,
      wrapperPrefix: "smart",
      wrapperSuffix: "smart",
      isPdf: !1,
      isTransformPreTagNewLine: !1,
      urlChangeDelay: 20,
      mutationChangeDelay: 10,
      mainFrameMinTextCount: 50,
      mainFrameMinWordCount: 5,
      visibleDelay: 0,
      additionalStayOriginalSelectors: [
        "span.katex",
        ".notranslate",
        ".MathJax_Preview",
        ".MathJax",
        ".mwe-math-element",
        "[translate=no]"
      ],
      translationBlockStyle: "",
      isShowUserscriptPagePopup: !0,
      observeUrlChange: !1,
      paragraphMinTextCount: 18,
      paragraphMinWordCount: 3,
      shadowRootSelectors: [],
      blockMinTextCount: 32,
      blockMinWordCount: 5,
      containerMinTextCount: 18,
      containerMinWordCount: 3,
      lineBreakMaxTextCount: 0,
      globalAttributes: {},
      globalMeta: {},
      globalStyles: {
        ".sr-only": "display:none"
      },
      selectors: [],
      preWhitespaceDetectedTags: ["DIV", "SPAN"],
      stayOriginalSelectors: [],
      additionalSelectors: [
        "h1",
        "section h2",
        "section h3",
        "section h4",
        "main h2",
        "main h3",
        "main h4",
        ".article-title",
        ".article-subtitle",
        ".article_title",
        ".article_subtitle",
        ".article__title",
        ".articleTitle",
        ".Article__content",
        ".titleLink",
        ".summary",
        ".headline",
        ".page-content",
        "aside.note",
        "aside.article-comments",
        "aside.onebox"
      ],
      atomicBlockTags: [],
      excludeSelectors: [],
      additionalExcludeSelectors: [
        ".social-share",
        ".breadcrumbs",
        ".post__footer",
        ".btn",
        ".reference-citations",
        ".share-nav",
        ".o-share",
        "[data-toolbar=share]",
        "rp",
        "rt",
        "[spellcheck=false]",
        ".prism-code",
        "[role=code]",
        "#omni-extension",
        ".omni-item",
        "div[data-paste-markdown-skip]",
        "table.highlight",
        "div[class^=codeBlockContent]",
        "div[class^=codeBlockLines]",
        "div[class^=token-line]",
        "#liuchan-window > .liuchan-container > *"
      ],
      translationClasses: [],
      atomicBlockSelectors: [],
      excludeTags: [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "G",
        "TEXT",
        "NOSCRIPT",
        "INPUT",
        "BUTTON",
        "BASE",
        "SELECT",
        "OPTION",
        "IMG",
        "SUB",
        "SUP",
        "HR",
        "PRE",
        "CODE",
        "KBD",
        "WBR",
        "TT",
        "RT",
        "RP",
        "META",
        "ASIDE",
        "FOOTER",
        "MATH",
        "TTS-SENTENCE",
        "AIO-CODE"
      ],
      bodyTranslateTags: ["FOOTER", "ASIDE", "BUTTON", "NAV"],
      forceTranslateTags: [],
      metaTags: ["META", "SCRIPT", "STYLE", "NOSCRIPT"],
      additionalExcludeTags: [],
      stayOriginalTags: ["CODE", "TT", "IMG", "SUP", "SUB"],
      additionalStayOriginalTags: [],
      inlineTags: [
        "A",
        "ABBR",
        "FONT",
        "ACRONYM",
        "B",
        "INS",
        "DEL",
        "RUBY",
        "RP",
        "RB",
        "BDO",
        "MARK",
        "BIG",
        "RT",
        "NOBR",
        "CITE",
        "DFN",
        "EM",
        "I",
        "LABEL",
        "Q",
        "S",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "U",
        "KBD",
        "TT",
        "VAR",
        "IMG",
        "CODE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "TIME",
        "META",
        "WBR",
        "RELIN-HC",
        "RELIN-HIGHLIGHT",
        "RELIN-ORIGIN",
        "RELIN-TARGET",
        "XQDD_HIGHLIGHT_NEW_WORD",
        "NOBR"
      ],
      additionalInlineTags: [],
      extraInlineSelectors: [],
      additionalInlineSelectors: [".MathJax_Preview", ".MathJax"],
      extraBlockSelectors: [
        "turbo-frame",
        "readme-toc",
        "#hs_cos_wrapper_post_body",
        "#hs_cos_wrapper_post_body"
      ],
      allBlockTags: [
        "HGROUP",
        "CONTENT",
        "ADDRESS",
        "ARTICLE",
        "ASIDE",
        "DETAILS",
        "BLOCKQUOTE",
        "CANVAS",
        "DD",
        "DL",
        "DT",
        "FIELDSET",
        "FIGCAPTION",
        "FIGURE",
        "FOOTER",
        "HEADER",
        "FORM",
        "HR",
        "MAIN",
        "SUMMARY",
        "NAV",
        "OL",
        "NOSCRIPT",
        "PRE",
        "SECTION",
        "TABLE",
        "TFOOT",
        "UL",
        "VIDEO",
        "P",
        "DIV",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "UL",
        "LI",
        "OL",
        "BR",
        "PICTURE",
        "TBODY",
        "TR",
        "TD",
        "TH",
        "SOURCE",
        "C-WIZ",
        "BUTTON",
        "TURBO-FRAME",
        "README-TOC"
      ],
      pdfNewParagraphLineHeight: 2.4,
      pdfNewParagraphIndent: 1.2,
      pdfNewParagraphIndentRightIndentPx: 130,
      fingerCountToToggleTranslagePageWhenTouching: 4,
      fingerCountToToggleTranslationMaskWhenTouching: 0,
      mouseHoverHoldKey: "Alt"
    },
    rules: [
      {
        selectorMatches: "div.simpread-read-root.simpread-read-root-show > sr-read",
        mainFrameSelector: "div.simpread-read-root.simpread-read-root-show > sr-read"
      },
      {
        matches: ["moz-extension://*/pdf/index.html*"],
        isPdf: !0,
        isTranslateTitle: !1,
        wrapperPrefix: "",
        wrapperSuffix: "",
        urlChangeDelay: 0,
        selectors: [".textLayer"],
        excludeSelectors: [".annotationLayer"],
        globalStyles: {
          "div.page": "width: 98%;",
          ".textLayer": "overflow:visible;opacity: 1;"
        }
      },
      {
        matches: ["*://*/*.txt", "file://*/*.txt"],
        selectorMatches: ["body > pre"],
        selectors: ["body"],
        isTransformPreTagNewLine: !0,
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "G",
          "TEXT",
          "NOSCRIPT",
          "INPUT",
          "BUTTON",
          "BASE",
          "SELECT",
          "OPTION",
          "IMG",
          "SUB",
          "SUP",
          "HR",
          "CODE",
          "KBD",
          "WBR",
          "TT",
          "RT",
          "RP",
          "META",
          "ASIDE",
          "FOOTER",
          "MATH",
          "TTS-SENTENCE"
        ]
      },
      {
        matches: [
          "arad.hange.jp",
          "arad.nexon.co.jp",
          "oapi.dingtalk.com",
          "login.dingtalk.com"
        ],
        useIframePostMessage: !1
      },
      {
        matches: [
          "googleads.g.doubleclick.net",
          "https://www.google.com/recaptcha/*",
          "ad.doubanio.com"
        ],
        useIframePostMessage: !1,
        selectors: "#notexistforimmersivetranslate"
      },
      {
        matches: ["mail.jabber.org", "antirez.com"],
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "INPUT",
          "LABEL",
          "IMG",
          "SUB",
          "SUP",
          "BR",
          "CODE",
          "KBD",
          "WBR",
          "TT"
        ]
      },
      {
        matches: "*.wikipedia.org",
        excludeSelectors: [
          ".mw-editsection",
          ".mw-cite-backlink",
          "#mw-panel-toc"
        ],
        stayOriginalSelectors: [
          ".chemf",
          ".mwe-math-element",
          "[role=math]",
          ".nowrap"
        ],
        extraInlineSelectors: [
          ".chemf",
          ".mwe-math-element",
          "[role=math]",
          ".nowrap"
        ]
      },
      {
        matches: [
          "twitter.com",
          "mobile.twitter.com",
          "tweetdeck.twitter.com",
          "https://platform.twitter.com/embed*"
        ],
        isTranslateTitle: !1,
        selectors: [
          '[data-testid="tweetText"]',
          ".tweet-text",
          ".js-quoted-tweet-text",
          "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
          "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
          "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)",
          "[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)",
          "[data-testid='UserDescription']",
          "[data-testid='HoverCard'] div[dir=auto]"
        ],
        excludeSelectors: ["header"],
        observeUrlChange: !1,
        extraInlineSelectors: [
          '[data-testid="tweetText"] div',
          '[data-testid="UserDescription"] div',
          "[data-testid='HoverCard'] div[dir=auto] div"
        ]
      },
      {
        matches: [
          "stackoverflow.com",
          "*.stackexchange.com",
          "superuser.com",
          "askubuntu.com",
          "serverfault.com"
        ],
        extraBlockSelectors: ["span.comment-copy"],
        excludeSelectors: [
          "a.comment-user",
          "span.comment-date",
          "div.s-prose.js-post-body + div",
          ".bottom-notice",
          "div[data-campaign-name=stk]"
        ]
      },
      {
        matches: "developer.apple.com/documentation/*",
        selectors: [".container", "h3.title", "div.content"]
      },
      {
        matches: "news.ycombinator.com",
        selectors: [
          ".titleline > a",
          ".comment > .commtext",
          ".toptext",
          "a.hn-item-title",
          ".hn-comment-text",
          ".hn-story-title"
        ],
        excludeSelectors: [".reply"]
      },
      {
        matches: ["*.quora.com", "quora.com"],
        additionalSelectors: [
          ".puppeteer_test_question_title",
          "p.q-text"
        ],
        globalStyles: {
          ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
        }
      },
      {
        matches: [
          "old.reddit.com/*/.compact",
          "old.reddit.com/.compact",
          "www.reddit.com/*/.compact",
          "www.reddit.com/.compact"
        ],
        selectors: [".title > a", ".usertext-body"],
        detectParagraphLanguage: !0
      },
      {
        matches: "old.reddit.com",
        selectors: ["p.title > a", "[role=main] .md-container"],
        detectParagraphLanguage: !0
      },
      {
        matches: [
          "https://www.reddit.com/r/*/comments/*/*",
          "https://www.reddit.com/",
          "https://www.reddit.com/hot/",
          "https://www.reddit.com/new/",
          "https://www.reddit.com/top/"
        ],
        excludeMatches: ["https://www.reddit.com/r/*/wiki/*"],
        observeUrlChange: !0,
        selectors: [
          "h1",
          ".PostHeader__post-title-line",
          "[data-click-id=body] h3",
          "[data-click-id=background] h3",
          "[data-testid=comment]",
          "[data-adclicklocation='title']",
          "[data-adclicklocation=media]",
          ".PostContent",
          ".post-content",
          ".Comment__body",
          "faceplate-batch .md",
          ".RichTextJSON-root",
          "div[slot=title]",
          "div[slot=text-body]"
        ],
        detectParagraphLanguage: !0,
        globalStyles: {
          "div.XPromoBottomBar": "display:none"
        },
        waitForSelectors: ["[data-testid=post_author_link]"]
      },
      {
        matches: "www.reddit.com",
        selectors: [
          "h1",
          ".PostHeader__post-title-line",
          "[data-click-id=body] h3",
          "[data-click-id=background] h3",
          "[data-testid=comment]",
          "[data-adclicklocation='title']",
          "[data-adclicklocation=media]",
          ".PostContent",
          ".post-content",
          ".Comment__body",
          "faceplate-batch .md",
          "div[slot=title]",
          "div[slot=text-body]"
        ],
        excludeMatches: [
          "https://www.reddit.com/r/*/wiki/*",
          "https://www.reddit.com/settings/*"
        ],
        detectParagraphLanguage: !0,
        globalStyles: {
          "div.XPromoBottomBar": "display:none"
        }
      },
      {
        matches: "www.reuters.com/",
        excludeSelectors: ["header"]
      },
      {
        matches: "github.com",
        observeUrlChange: !0,
        excludeMatches: [
          "https://github.com/*/*/settings",
          "https://github.com/settings/*",
          "https://github.com/sponsors/*"
        ],
        selectors: [
          ".markdown-title",
          ".markdown-body",
          ".Layout-sidebar p",
          "div > span.search-match",
          "li.repo-list-item p",
          "#responsive-meta-container p",
          "article p",
          "div.repo-description p",
          "[itemprop=description]"
        ],
        atomicBlockSelectors: ["[itemprop=description]"],
        excludeSelectors: [
          ".css-truncate",
          "[data-test-selector='commit-tease-commit-message']",
          "[data-test-selector='create-branch.developmentForm']",
          "div.js-details-container.Details",
          "div.Box-header.position-relative",
          "div.blob-wrapper-embedded",
          "div.Box.Box--condensed.my-2",
          "div.jp-CodeCell",
          '[aria-label="Account"] .markdown-title'
        ],
        extraBlockSelectors: [],
        extraInlineSelectors: ["g-emoji"],
        stayOriginalTags: ["CODE", "TT", "G-EMOJI", "IMG", "SUP", "SUB"],
        detectParagraphLanguage: !0
      },
      {
        matches: "notebooks.githubusercontent.com",
        excludeSelectors: ["div.jp-CodeCell"]
      },
      {
        matches: "www.facebook.com",
        selectors: [
          "div[dir=auto][style]",
          "div[dir=auto][class]",
          "span[lang]"
        ],
        atomicBlockSelectors: [
          "div[dir=auto][style]",
          "div[dir=auto][class]",
          "span[lang]"
        ],
        insertPosition: "afterend",
        preWhitespaceDetectedTags: ["DIV", "SPAN"],
        extraBlockSelectors: ["span.x1vvkbs"],
        excludeSelectors: ["[role=button]"],
        translationClasses: ["immersive-translate-text"],
        detectParagraphLanguage: !0
      },
      {
        matches: "m.youtube.com",
        selectors: [
          ".comment-text",
          ".media-item-headline",
          ".slim-video-information-title",
          ".caption-window",
          ".caption-visual-line"
        ],
        wrapperPrefix: "",
        wrapperSuffix: "",
        observeUrlChange: !0,
        atomicBlockSelectors: [".comment-text"],
        globalStyles: {
          ".comment-text": "max-height:unset;",
          ".media-item-headline": "max-height:unset;-webkit-line-clamp:unset;"
        },
        injectedCss: [
          ".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
        ],
        extraBlockSelectors: [
          ".caption-visual-line"
        ]
      },
      {
        matches: "www.youtube.com",
        observeUrlChange: !0,
        selectors: [
          "yt-formatted-string[slot=content].ytd-comment-renderer",
          "yt-formatted-string.ytd-video-renderer",
          "h1 > yt-formatted-string.ytd-watch-metadata",
          "yt-formatted-string#video-title",
          "span#video-title",
          "a#video-title",
          "yt-formatted-string.ytd-transcript-segment-renderer",
          "#description-inline-expander > yt-attributed-string > span",
          "ytd-notification-renderer .message",
          ".caption-window",
          ".caption-visual-line"
        ],
        wrapperPrefix: "",
        wrapperSuffix: "",
        globalStyles: {
          "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;",
          "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
          "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
          "#video-title": "-webkit-line-clamp: unset;max-height: unset;"
        },
        urlChangeDelay: 2e3,
        atomicBlockSelectors: [
          "yt-formatted-string[slot=content].ytd-comment-renderer",
          "h1 > yt-formatted-string.ytd-watch-metadata",
          "yt-formatted-string#video-title",
          "span#video-title",
          "#description-inline-expander > yt-attributed-string > span"
        ],
        excludeSelectors: ["[class^='lln-']"],
        extraBlockSelectors: [
          "yt-formatted-string.ytd-transcript-segment-renderer",
          ".caption-visual-line"
        ],
        detectParagraphLanguage: !0,
        injectedCss: [
          ".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
        ]
      },
      {
        matches: "https://www.instagram.com/*",
        wrapperPrefix: "",
        wrapperSuffix: "",
        selectors: [
          "h1"
        ]
      },
      {
        matches: "1paragraph.app",
        selectors: "#book"
      },
      {
        matches: "https://poeditor.com/projects/*",
        selectors: [".comment-body", ".reference_language .source-string"]
      },
      {
        matches: ["*.substack.com", "newsletter.rootsofprogress.org"],
        selectors: [
          ".post-preview-title",
          ".post-preview-description",
          ".post",
          ".comment-body"
        ],
        excludeSelectors: [
          ".captioned-button-wrap",
          ".subscription-widget-wrap",
          ".tweet-header",
          ".tweet-link-bottom",
          ".expanded-link",
          ".meta-subheader"
        ],
        extraBlockSelectors: [
          ".tweet-link-top",
          ".tweet-link-bottom",
          ".expanded-link"
        ]
      },
      {
        matches: ["seekingalpha.com/article/*", "seekingalpha.com/news/*"],
        selectors: [
          "[data-test-id=card-container]",
          "[data-test-id=comments-section]"
        ],
        excludeSelectors: [
          "[data-test-id=post-page-meta]",
          "header > div:first-child"
        ]
      },
      {
        matches: "hn.algolia.com",
        selectors: [".Story_title > a:first-child", ".Story_comment > span"]
      },
      {
        matches: "read.readwise.io",
        selectors: [
          "div[class^='_titleRow_']",
          "div[class^='_description_']",
          "#document-text-content"
        ],
        detectParagraphLanguage: !0
      },
      {
        matches: ["www.inoreader.com", "*.inoreader.com"],
        selectors: [
          ".article_header_title",
          ".article_title_link",
          ".article_content",
          ".article_magazine_title_link"
        ],
        observeUrlChange: !1,
        globalStyles: {
          ".article_title_link": "-webkit-line-clamp: unset;max-height: unset;"
        }
      },
      {
        matches: "*.ideas.aha.io",
        excludeSelectors: [
          ".comment-header",
          ".vote-status",
          ".idea-meta",
          ".filters-title",
          ".ideas-showing-count",
          ".my-ideas-filters-wrapper",
          ".statuses-filters-wrapper",
          ".categories-filters-wrapper",
          "[class^='attachment']",
          "span[class^='attachment-name']"
        ]
      },
      {
        matches: ["scholar.google.com", "scholar.google.com.hk"],
        wrapperPrefix: `
`,
        selectors: [
          "h3 a[data-clk]",
          "div.gs_rs",
          "td a.gsc_a_at",
          "td div.gs_gray:last-of-type",
          "div.gsc_oci_value"
        ],
        extraInlineSelectors: ["br"],
        atomicBlockSelectors: ["h3 a[data-clk]"]
      },
      {
        matches: "mail.google.com",
        detectParagraphLanguage: !0,
        selectors: [
          "h2[data-thread-perm-id]",
          "span[data-thread-id]",
          "div[data-message-id] div[class='']"
        ]
      },
      {
        matches: "outlook.live.com",
        excludeSelectors: [".jHAG3.XG5Jd", ".OZZZK", ".lDdSm"],
        selectors: ["[role=region]"]
      },
      {
        matches: "www.producthunt.com",
        excludeMatches: "https://www.producthunt.com/stories/*",
        selectors: [
          "h2",
          "div[class^='styles_htmlText__']",
          "[class^='styles_tagline']",
          "a[href^='/discussions/'].fontWeight-600",
          "button[class^='styles_textButton'] > div > span",
          "h5 + p"
        ],
        globalStyles: {
          "h5 + p": "height:unset;"
        },
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "INPUT",
          "LABEL",
          "IMG",
          "SUB",
          "SUP",
          "BR",
          "CODE",
          "KBD",
          "WBR",
          "TT"
        ]
      },
      {
        matches: "*.gitbook.io",
        additionalSelectors: ["main"],
        _comment: "https://midjourney.gitbook.io/docs/user-manual"
      },
      {
        matches: "https://codeforces.com/*",
        stayOriginalTags: ["[class^='MathJax']"]
      },
      {
        matches: "arxiv.org",
        additionalSelectors: ["h1", "blockquote.abstract"]
      },
      {
        matches: "*.labs.arxiv.org/*",
        stayOriginalTags: [
          "math",
          "semantics",
          "mrow",
          "mo",
          "mfrac",
          "msup",
          "mi",
          "mn",
          "msqrt"
        ],
        atomicBlockSelectors: [
          ".ltx_abstract",
          ".ltx_note_content",
          ".ltx_p",
          ".ltx_title"
        ]
      },
      {
        matches: "https://discord.com/channels/*",
        isTranslateTitle: !1,
        selectors: [
          "li[id^=chat-messages] div[id^=message-content]",
          "h3[data-text-variant='heading-lg/semibold']",
          "section[aria-label='Search Results'] div[id^=message-content]"
        ],
        extraBlockSelectors: [
          "[class^='embedFieldValue']",
          "li[class^='card'] div[class^='message']",
          "[data-list-item-id^='forum-channel-list'] div[class^='headerText']"
        ],
        atomicBlockSelectors: [
          "[class^='embedFieldValue']",
          "li[class^='card'] div[class^='message']",
          "[data-list-item-id^='forum-channel-list'] div[class^='headerText']"
        ],
        excludeSelectors: [
          "#channels",
          "div[class^='repliedTextContent']",
          "div[class^='repliedTextPreview']",
          "div[class^='messageAttachment']",
          "div[class^='repliedMessage']",
          "div[class^='reactionTooltip']",
          "div[class*='isSystemMessage']",
          "div[class^='avatarWrapper']",
          "div[class^='container'] [class^='topLine']",
          "div[class^='container'] [class^='bottomLine']",
          "div[class^='container'] [class^='children'] button[class^='component']",
          "div[class^='userPopoutOverlayBackground'] [class^='userTagNoNickname']",
          "div[class^='userPopoutOverlayBackgound'] [class^='userTagNoNickname']",
          "span[class^='botTag']",
          "h3[class^='header']",
          "h2[class^='forumPostTitle']",
          "[class^='title'][aria-label='Channel header']",
          "div[class^='unreadPill']",
          "div[class^='sectionHeader']",
          "article[class^=embedWrapper] [class^=anchor]",
          "article[class^=embedWrapper] [class^=embedProvider]",
          "article[class^=embedWrapper] [class^=embedFooter]",
          "[data-list-item-id^='members'] [class^='username']",
          "[data-list-item-id^='forum-channel-list'] div[class^='tagsContainer']",
          "li[class^='containerDefault'] div[class^='channelInfo']",
          "li[class^='card'] div[class^='tags']",
          "li[class^='card'] div[class^='footer']"
        ],
        globalStyles: {
          "div[class^=headerText]": "max-height: unset;",
          "div[class^=message]": "max-height: unset;",
          "div[class^=text]": "max-height: unset;",
          "h3[data-text-variant='heading-lg/semibold']": "-webkit-line-clamp: none;"
        },
        detectParagraphLanguage: !0,
        wrapperPrefix: "<br />",
        wrapperSuffix: ""
      },
      {
        matches: "web.telegram.org/z/*",
        isTranslateTitle: !1,
        selectors: [
          ".text-content",
          ".message",
          ".reply-markup-button-text",
          ".bot-commands-list-element-description"
        ],
        detectParagraphLanguage: !0
      },
      {
        matches: ["web.telegram.org/k/*", "web.telegram.org/k/"],
        selectors: [
          ".message",
          ".reply-markup-button-text",
          ".bot-commands-list-element-description"
        ],
        detectParagraphLanguage: !0
      },
      {
        matches: "gist.github.com",
        selectors: [".markdown-body", ".readme"],
        detectParagraphLanguage: !0
      },
      {
        matches: "lobste.rs",
        excludeMatches: ["https://lobste.rs/about", "https://lobste.rs/chat"],
        selectors: [".u-repost-of", ".comment_text"]
      },
      {
        matches: "*.slack.com",
        selectors: [".p-rich_text_block"],
        detectParagraphLanguage: !0
      },
      {
        matches: "1paragraph.app",
        additionalSelectors: ["#book"]
      },
      {
        matches: "www.artstation.com/artwork/*",
        excludeSelectors: ".project-description a",
        selectors: [".project-description", "div.project-comment-text"],
        atomicBlockSelectors: "div.project-comment-text",
        detectParagraphLanguage: !0
      },
      {
        matches: "www.artstation.com/learning/courses/*",
        additionalSelectors: [
          "footer.learning-course-description.ng-star-inserted > span"
        ],
        excludeSelectors: ".learning-card-meta"
      },
      {
        matches: [
          "https://www.artstation.com/blogs",
          "https://www.artstation.com/blogs/*"
        ],
        detectParagraphLanguage: !0,
        additionalSelectors: [".comment-item-body"],
        atomicBlockSelectors: [".author-headline", ".author-location"],
        excludeSelectors: [
          "blog-card-thumbnail",
          "blog-card-header",
          ".blog-card-author",
          ".blog-card-meta",
          ".blog-view-header",
          ".blog-grid-title",
          ".post-meta-header"
        ]
      },
      {
        matches: "www.figma.com/community/*",
        normalizeBody: "div.ql-editor[contenteditable='false']",
        excludeSelectors: [
          "div[class*='metadataRight']",
          "div[class*='commentMetaAndOptions']"
        ],
        globalStyles: {
          "div[class*='mini_cardBottomRowSizing']": "height: 3em;"
        },
        additionalSelectors: "div[class*='mini_cardBottomRow_Metadata']",
        atomicBlockSelectors: "div[class*='mini_cardBottomRow_Metadata']",
        stayOriginalSelectors: "[data-tooltip='tooltip-user-info']"
      },
      {
        matches: "www.google.*/search*",
        detectParagraphLanguage: !0,
        excludeSelectors: [
          "a h3 + div",
          "div#sfooter",
          "a[role=presentation] > div > div:first-child",
          ".b5ZQcf",
          ".CEMjEf"
        ],
        wrapperSuffix: "",
        globalStyles: {
          "div[data-content-feature='1'] > div": "-webkit-line-clamp: unset;max-height: unset;",
          "div[style='-webkit-line-clamp:2']": "-webkit-line-clamp: unset;max-height: unset;",
          "div[style='-webkit-line-clamp:3']": "-webkit-line-clamp: unset;max-height: unset;",
          "div[style='-webkit-line-clamp:4']": "-webkit-line-clamp: unset;max-height: unset;",
          ".V82bz": "-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",
          ".uAKcGb": "-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px"
        },
        extraBlockSelectors: [".MUFPAc"]
      },
      {
        matches: "lowendtalk.com",
        selectors: ["[role=heading]", "h1", ".userContent"]
      },
      {
        matches: "www.linkedin.com/jobs/*",
        selectors: ["#job-details > span"]
      },
      {
        matches: "www.linkedin.com",
        additionalSelectors: ["span.break-words > span > span[dir=ltr]"]
      },
      {
        matches: "www.indiehackers.com",
        selectors: [".content", "h1", ".feed-item__title-link"]
      },
      {
        matches: "libreddit.de",
        selectors: ["h2.post_title", ".comment_body > .md"]
      },
      {
        matches: ["notion.site"],
        normalizeBody: "body",
        selectors: ["div[data-block-id]"]
      },
      {
        matches: "www.newyorker.com",
        additionalSelectors: ["h1", "[data-testid=SummaryItemHed]"],
        urlChangeDelay: 2e3
      },
      {
        matches: "start.me",
        selectors: [
          ".rss-article__title",
          ".rss-articles-list__article-link",
          ".rss-showcase__title",
          ".rss-showcase__text"
        ]
      },
      {
        matches: "www.scmp.com",
        additionalSelectors: [".info__subHeadline", ".section-content h2"]
      },
      {
        matches: "www.lesswrong.com",
        extraBlockSelectors: ["span.commentOnSelection"]
      },
      {
        matches: [
          "mastodon.social",
          "mastodon.online",
          "kolektiva.social",
          "indieweb.social",
          "mastodon.world",
          "infosec.exchange"
        ],
        isTranslateTitle: !1,
        selectorMatches: ["div#mastodon"],
        selectors: ["div.status__content__text"],
        detectLanguage: !0
      },
      {
        matches: "www.cnbc.com",
        additionalSelectors: ["div.RenderKeyPoints-list"],
        urlChangeDelay: 1e3,
        globalStyles: {
          "div.Card-titleContainer > div": "-webkit-line-clamp: unset;max-height: unset;"
        }
      },
      {
        matches: "app.daily.dev",
        selectors: [
          "h1",
          ".typo-body",
          "article h3",
          "[class^=markdown_markdown]"
        ],
        globalStyles: {
          ".line-clamp-3": "-webkit-line-clamp: unset"
        }
      },
      {
        matches: "www.aljazeera.com",
        additionalSelectors: ["h1", ".article__subhead"]
      },
      {
        matches: ["*.pornhub.com", "pornhub.com"],
        excludeMatches: ["*.pornhub.com/insights/*", "pornhub.com/insights/*"],
        selectors: [
          ".title >a",
          ".title > span",
          ".thumbnailTitle",
          ".commentMessage > span",
          "h1.floatLeft",
          ".commentText"
        ],
        detectParagraphLanguage: !0,
        wrapperPrefix: `

`,
        wrapperSuffix: `
`,
        globalStyles: {
          ".title": "height: unset; max-height: unset;",
          ".title > a": "height: unset; max-height: unset;",
          ".thumbnailTitle": "height: unset; max-height: unset;"
        }
      },
      {
        matches: ["weibo.com"],
        selectors: ["div[class^='detail_wbtext']"]
      },
      {
        matches: ["medium.com", "*.medium.com"],
        selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
        urlChangeDelay: 2e3,
        selectors: [
          "article section",
          "h2",
          "[aria-hidden='false'] pre",
          "article p"
        ],
        excludeSelectors: ["[aria-label='Post Preview Reading Time']"],
        globalStyles: {
          h2: "-webkit-line-clamp: unset;max-height:unset;",
          "article p": "-webkit-line-clamp: unset;max-height:unset;"
        }
      },
      {
        selectorMatches: ["meta[property='og:site_name'][content='Nitter']"],
        selectors: [".tweet-content", ".quote-text"]
      },
      {
        matches: "*.fandom.com",
        additionalSelectors: [".mcf-card-article__title"]
      },
      {
        matches: ["www.washingtonpost.com"],
        additionalSelectors: ["[data-qa='article-body']"]
      },
      {
        matches: "www.economist.com",
        extraInlineSelectors: "span[data-caps='initial']"
      },
      {
        matches: "www.healthline.com",
        excludeSelectors: ".icon-hl-trusted-source-after"
      },
      {
        matches: "www.amazon.com",
        selectors: [
          "h1",
          "h2 > a > span",
          "[data-a-expander-name='book_description_expander'] > div",
          "[data-feature-name='editorialReviews']",
          '[data-a-expander-name="review_text_read_more"] > div > span',
          '[data-feature-name="featurebullets"]',
          '[data-feature-name="aplus"'
        ],
        excludeBlockSelectors: ["div.reviewText > span"],
        globalStyles: {
          ".s-line-clamp-2": "-webkit-line-clamp: unset;max-height: unset;",
          "[data-a-expander-name='review_text_read_more']": " max-height: unset;"
        }
      },
      {
        matches: "marketplace.visualstudio.com",
        additionalExcludeSelectors: [
          ".core-info-second-row",
          ".core-info-third-row",
          ".meta-data-list",
          ".item-title",
          ".breadcrumb",
          ".itemDetails-right",
          ".ux-user-name",
          ".ux-updated-date",
          ".ux-item-second-row-wrapper",
          ".stats-and-offer",
          ".header-container"
        ],
        atomicBlockSelectors: [".core-info-cell > div.name"],
        globalStyles: {
          ".item-details-control-root.ux-item-shortdesc": "height: unset; overflow: visible; max-height:unset;"
        }
      },
      {
        matches: "www.bloomberg.com",
        urlChangeDelay: 2e3,
        excludeSelectors: [".ticker-bar"]
      },
      {
        matches: "xueshu.baidu.com",
        globalStyles: {
          ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
        }
      },
      {
        matches: "www.sciencedirect.com",
        urlChangeDelay: 2e3,
        stayOriginalSelectors: ["span.display"],
        extraBlockSelectors: ["span.captions", "span[id^=cap]"]
      },
      {
        matches: "www.thehighestofthemountains.com",
        extraBlockSelectors: "div"
      },
      {
        matches: "te.legra.ph",
        normalizeBody: "div.ql-editor[contenteditable='false']",
        urlChangeDelay: 500
      },
      {
        matches: ["telegra.ph"],
        normalizeBody: "div.ql-editor[contenteditable='false']"
      },
      {
        matches: ["*.annas-archive.org", "annas-archive.org"],
        selectors: ["h3.text-xl.font-bold", "div[class='truncate text-sm']"],
        globalStyles: {
          "div[id^='link-index-']": "height: unset; max-height: unset;"
        },
        normalizeBody: "body",
        extraBlockSelectors: ["a.custom-a"]
      },
      {
        matches: ["explainshell.com"],
        selectors: ["[class='help-box']"]
      },
      {
        matches: ["apnews.com"],
        urlChangeDelay: 2e3
      },
      {
        matches: "play.google.com",
        additionalSelectors: ["header[data-review-id] + div"]
      },
      {
        matches: ["www.tumblr.com"],
        selectors: [
          "article h1",
          "article > header + div",
          "[data-testid=notes-root] p",
          "div.k31gt",
          "p",
          "article ul",
          "article h2",
          "article h3",
          "article h4",
          "article h5",
          "article h6",
          "article blockquote",
          "article ol"
        ],
        excludeSelectors: ["div.fAAi8", "div.wvu3V"],
        preWhitespaceDetectedTags: ["DIV", "SPAN", "P"]
      },
      {
        matches: ["mail.qq.com/cgi-bin/frame_html"],
        selectors: ["#thisiddoesnotexists"]
      },
      {
        matches: "https://www.tinytask.net",
        globalStyles: {
          "table > tbody > tr > td > center > table > tbody > tr > td > ul > li": "height: 100%"
        }
      },
      {
        matches: "www.foxnews.com",
        shadowRootSelectors: [
          "[data-spot-im-module-default-area='conversation'] > div"
        ],
        excludeSelectors: [
          ".components-MessageDetails-index__message-details-wrapper",
          "div[class^=SlideDown__container]",
          ".components-MessageActions-index__messageActionsWrapper",
          "span[data-openweb-allow-amp]",
          "div.spcv_typing-users"
        ]
      },
      {
        matches: "www.afreecatv.com",
        globalStyles: {
          "a.title": "max-height:unset;-webkit-line-clamp:unset;"
        }
      },
      {
        matches: "opennet.ru",
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "NOSCRIPT",
          "INPUT",
          "BUTTON",
          "BASE",
          "LABEL",
          "SELECT",
          "OPTION",
          "IMG",
          "SUB",
          "SUP",
          "HR",
          "PRE",
          "CODE",
          "KBD",
          "WBR",
          "TT",
          "RT",
          "RP",
          "META"
        ]
      },
      {
        matches: ["www.construct.net"],
        excludeMatches: ["preview.construct.net", "editor.construct.net"],
        additionalSelectors: ["aside", "div.manualContent"],
        atomicBlockSelectors: [],
        stayOriginalSelectors: ["a.usernameReference"],
        additionalInlineSelectors: ["a.forumLink"],
        additionalExcludeSelectors: [
          "div.topNav",
          "div.usernameLink",
          "ul.authorDetails",
          "ul.tagViewer",
          "ul.breadCrumbNav",
          "ul.subForumForums",
          "ul.postTools",
          "li.comment ul.controls",
          "div.forumTopNavWrap",
          "div.downloadWrap",
          "div.articleLeftMenu",
          "div.usernameTextWrap",
          "div.favouriteWrap",
          "div.bannerWrapper",
          "div.viewAddonRightMenu",
          "div.extendedMenu.addonsSubMenu",
          "#BottomLinks.bottomLinks",
          "div#LeftSide.leftSide",
          "div#BottomWrap.bottomWrap",
          "div.courseListWrap div.overview",
          "div.conversationControls",
          "div.contentWrapper h1",
          "div.conversationControls",
          "td.location a#LocationLink",
          "#TopLevelComments .topBar",
          "#TopLevelComments .controls",
          ".tagViewWrap",
          ".changeCount",
          ".otherStats",
          ".FilterMenu",
          ".mobileTopicStats",
          ".forumControlsWrapper",
          ".forumsBottomNavWrap",
          ".breadCrumbNav",
          ".favouriteWrap",
          ".usernameLink",
          ".followWrapper",
          ".blogPostStats",
          ".manualContent dl dt"
        ],
        globalStyles: {
          "td.location a#LocationLink": "padding-top: 4px;",
          "div.articleMain .tutCourseWrap": "align-items: flex-start;"
        }
      },
      {
        matches: "getpocket.com",
        selectors: ["h2", "div.excerpt p", "article", "h1"],
        globalStyles: {
          "h2.title": "max-height:unset;-webkit-line-clamp:unset;",
          "div.excerpt p": "max-height:unset;-webkit-line-clamp:unset;"
        }
      },
      {
        matches: "*.fandom.com",
        urlChangeDelay: 800,
        normalizeBody: "#mw-content-text",
        globalStyles: {
          "#mw-content-text > div > div:nth-child(1)": "height:100%;"
        },
        additionalExcludeSelectors: [
          "header.fandom-community-header",
          "div.ph-registration-buttons"
        ]
      },
      {
        matches: "huggingface.co",
        globalStyles: {
          ".line-clamp-2": "-webkit-line-clamp:unset;max-height:unset;"
        }
      },
      {
        matches: "www.statista.com",
        globalStyles: {
          ".itemContent__text": "height:unset;max-height:unset;",
          ".itemContent__subline": "height:unset;max-height:unset;"
        }
      },
      {
        matches: "epub-reader.online",
        globalStyles: {
          "span.slide-contents-item-label": "overflow:visible;max-height:unset;white-space:normal;"
        },
        atomicBlockSelectors: "div.slide-contents-item"
      },
      {
        matches: "https://you.com/search",
        globalStyles: {
          h3: "max-height:unset;-webkit-line-clamp:unset;",
          ".caKYaC": "max-height:unset;-webkit-line-clamp:unset;",
          ".dDwDsu": "max-height:unset;-webkit-line-clamp:unset;"
        },
        excludeSelectors: "div.hpIWZO"
      },
      {
        matches: "auth0.openai.com",
        excludeSelectors: ["form", "header > h1"]
      },
      {
        matches: "chat.openai.com",
        excludeSelectors: [
          "div.absolute.bottom-0.left-0.w-full",
          "h1",
          "div#headlessui-portal-root"
        ]
      },
      {
        matches: "glasp.co",
        excludeSelectors: [".home_overview_list_content_wrapper"]
      },
      {
        matches: "developer.chrome.com",
        excludeSelectors: ["web-tabs", "ul.code-sections--summary"]
      },
      {
        matches: "https://rarbg.to/*",
        wrapperPrefix: "",
        wrapperSuffix: "",
        globalStyles: {
          ".lista2 h2": "line-height: 14px;"
        },
        selectors: [
          "#news_content",
          "#top_news > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td",
          "#top_news > table > tbody > tr > td > table > tbody > tr > td > h2",
          "body > table > tbody > tr > td > div > table > tbody > tr > td > b",
          "#newsRight > table> tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td",
          "#newsRight > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > span > b"
        ]
      },
      {
        matches: ["developer.android.google.cn", "developer.android.com"],
        observeUrlChange: !0,
        additionalSelectors: ["aside", "google-codelab-step"]
      },
      {
        matches: "https://apps.microsoft.com/store/detail/*",
        additionalSelectors: ["pre"],
        globalStyles: {
          ".line-clamp": "-webkit-line-clamp:unset;max-height:unset;"
        },
        isTransformPreTagNewLine: !0
      },
      {
        matches: "gitlab.com",
        excludeSelectors: [
          ".tree-content-holder",
          "nav",
          ".home-panel-metadata",
          "div[data-testid=project_topic_list]",
          ".commit"
        ]
      },
      {
        matches: "www.newthingsunderthesun.com",
        additionalSelectors: ["[translate=no]"]
      },
      {
        matches: "https://www.tiktok.com/*/video/*",
        selectors: [
          "[data-e2e^=comment-level]",
          "[data-e2e=browse-video-desc] > span"
        ]
      },
      {
        matches: "www.rfc-editor.org",
        isTransformPreTagNewLine: !0,
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "NOSCRIPT",
          "INPUT",
          "BUTTON",
          "BASE",
          "SELECT",
          "OPTION",
          "IMG",
          "SUB",
          "SUP",
          "HR",
          "CODE",
          "KBD",
          "WBR",
          "TT",
          "RT",
          "RP",
          "META",
          "ASIDE",
          "FOOTER",
          "MATH"
        ]
      },
      {
        matches: "https://steamcommunity.com/app/*",
        globalStyles: {
          ".forum_topic": "height:auto;",
          ".forum_topic_name": "white-space:normal;"
        },
        excludeSelectors: [
          ".forum_paging",
          ".forum_topic_reply_count",
          ".forum_topic_lastpost",
          ".forum_topic_award_count",
          ".discussion_search_pagingcontrols"
        ],
        observeUrlChange: !0
      },
      {
        matches: "store.steampowered.com/app/*",
        selectors: [
          ".game_description_snippet",
          ".game_area_description",
          "#earlyAccessHeader",
          "[id^='ReviewContent'] .content"
        ],
        excludeSelectors: [
          "#global_actions",
          "#store_controls",
          "#foryou_tab",
          "[class*=persona]",
          "[class*=game_title_area]",
          "a.btn_medium",
          ".persona_name",
          ".hours.ellipsis",
          ".checkcol",
          ".postedDate",
          ".dev_row .summary",
          ".already_in_library",
          ".game_header_image_ctn .grid_content",
          ".ds_flag.ds_wishlist_flag",
          ".early_access_review.tooltip",
          ".communitylink_achievement_images",
          ".user_reviews_summary_row.summary",
          ".review_award_ctn",
          ".add_to_wishlist_area",
          ".next_in_queue_content",
          ".glance_tags.popular_tags",
          ".game_purchase_action",
          ".vote_button_ctn",
          "#VoteUpDownBtnCtn",
          "#footer",
          "#ViewAllReviewssummary"
        ],
        atomicBlockSelectors: [
          ".game_area_sys_req_leftCol",
          ".game_area_sys_req_rightCol"
        ],
        extraInlineSelectors: [".pulldown"],
        additionalSelectors: [".game_page_autocollapse_ctn iframe"],
        globalStyles: {
          ".game_description_snippet": "max-height:unset; overflow: scroll;",
          ".game_purchase_area_friends_want": "height: auto; padding-bottom: 6px;",
          ".div.early_access_banner": "height: 84px",
          ".franchise_notice > *": "height: 84px"
        },
        detectParagraphLanguage: !0
      },
      {
        matches: "https://www.nature.com/articles/*",
        excludeSelectors: [
          ".c-header",
          ".c-recommendations-header",
          ".c-recommendations-list-container",
          ".c-article-references__links",
          ".c-article-identifiers",
          ".c-article-author-list",
          ".c-article-metrics-bar__wrapper",
          ".c-article__pill-button",
          "#author-information-content",
          "#article-info-section"
        ]
      },
      {
        matches: "https://www.webofscience.com/wos/woscc/summary/*",
        globalStyles: {
          ".abstract": "height:auto !important;",
          ".show-more-lines": "height:unset !important;"
        },
        excludeSelectors: [
          ".summary-left-panel",
          ".authors",
          "app-summary-authors + div"
        ],
        observeUrlChange: !0,
        mutationChangeDelay: 600
      },
      {
        matches: ["appleinsider.com"],
        excludeSelectors: ["#topic-nav"]
      },
      {
        matches: "https://www.jetbrains.com/help/*",
        extraBlockSelectors: ["[data-test=prompt]"]
      },
      {
        matches: ["https://crates.io/search*"],
        selectors: ["div[class^=_description-box] div[class^=_description]"]
      },
      {
        matches: "www.theverge.com",
        shadowRootSelectors: ["div#coral_thread > div"]
      },
      {
        matches: "https://beta.simp.red/trans*",
        mainFrameSelector: ".simpread-read-root"
      },
      {
        matches: "https://www.lookintobitcoin.com/charts/*",
        excludeSelectors: ["svg"]
      },
      {
        matches: "https://platform.openai.com/account/api-keys*",
        urlChangeDelay: 1500
      },
      {
        matches: "https://pkg.go.dev/std",
        selectors: ["td.UnitDirectories-desktopSynopsis"]
      },
      {
        matches: "https://pkg.go.dev/*",
        selectors: ["div.UnitDetails p"]
      },
      {
        isEbook: !0,
        isTranslateTitle: !1,
        urlChangeDelay: 200,
        selectorMatches: [
          "meta[name='immersive-translate-ebook-viewer'][content='true']"
        ],
        excludeSelectors: [
          "#drop-target",
          "#drop-target h1",
          "#side-bar",
          "h1#side-bar-title"
        ],
        extraInlineSelectors: ["span.dropcaps"],
        paragraphMinTextCount: 1,
        paragraphMinWordCount: 1,
        blockMinTextCount: 1,
        blockMinWordCount: 1,
        containerMinTextCount: 1,
        wrapperPrefix: "<br />",
        targetWrapperTag: "span"
      },
      {
        isEbookBuilder: !0,
        isTranslateTitle: !1,
        targetWrapperTag: "span",
        selectorMatches: [
          "meta[name='immersive-translate-ebook-builder'][content='true']"
        ],
        globalMeta: {},
        excludeSelectors: [
          "h1.notranslate",
          "#drop-target",
          "#drop-target h1",
          "#side-bar",
          "h1#side-bar-title",
          "#tool"
        ],
        paragraphMinTextCount: 1,
        paragraphMinWordCount: 1,
        blockMinTextCount: 1,
        blockMinWordCount: 1,
        containerMinTextCount: 1,
        wrapperPrefix: "<br />"
      },
      {
        matches: ["https://www.explainpaper.com/reader*"],
        isTranslateTitle: !1,
        selectors: [".leading-relaxed", ".chat-messages p", ".text-sm"]
      },
      {
        matches: "https://colab.research.google.com/*",
        excludeSelectors: ["code", "view-line"]
      },
      {
        matches: "www.gatesnotes.com",
        minZIndex: -1
      },
      {
        matches: "page.kakao.com",
        shadowRootSelectors: ["div[style^='visibility: visible'"]
      },
      {
        matches: "coinmarketcap.com",
        extraBlockSelectors: [
          "div[class='sc-3502f6cd-0 JxHqg']"
        ]
      },
      {
        matches: "wandb.ai",
        additionalSelectors: [".report-page-top"],
        additionalStayOriginalSelectors: [
          "span[data-slate-inline=true]"
        ],
        extraInlineSelectors: []
      },
      {
        matches: "paulgraham.com",
        additionalSelectors: [
          "font[face=verdana]"
        ],
        extraBlockSelectors: "font[face=verdana]"
      },
      {
        matches: "https://*.zendesk.com/agent/*",
        selectors: ["[data-test-id*=subject]", ".zd-comment", ".title"]
      },
      {
        matches: "webmail.migadu.com",
        selectors: [".bodyText"]
      },
      {
        matches: "thehackernews.com",
        excludeSelectors: ["span#blog-pager-older-link", "span.h-datetime"],
        additionalSelectors: [".pop-title"]
      },
      {
        isSubtitleBuilder: !0,
        selectorMatches: [
          "meta[name='immersive-translate-subtitle-builder'][content='true']"
        ],
        pairs: {
          ".source-text": ".target-text"
        },
        isTranslateTitle: !1,
        wrapperPrefix: "",
        wrapperSuffix: ""
      },
      {
        matches: "cs.brown.edu",
        excludeSelectors: [
          ".SCodeFlow"
        ]
      },
      {
        matches: "tass.ru",
        globalStyles: {
          "#__next": "font-size: 19px;line-height:28px;"
        }
      },
      {
        matches: "chat.google.com",
        selectors: ["[jsname=bgckF]", "[dir=ltr]"]
      },
      {
        matches: "https://www.fiverr.com/inbox/*",
        selectors: [".message-body"]
      },
      {
        matches: [
          "jira.*.com/browse/*",
          "jira.*.com/projects/*"
        ],
        selectors: [
          "[id=descriptionmodule]",
          "[id=summary-val]",
          "div.action-body",
          "td.stsummary"
        ]
      },
      {
        matches: ["*.aha.io"],
        selectors: [
          "[tabindex='0']",
          "div.user-content",
          "div.comments__body",
          "span.name"
        ]
      },
      {
        matches: "thehill.com",
        injectedCss: [
          ".most-popular-item { max-height: unset !important; }",
          ".most-popular-item__link { -webkit-line-clamp: unset !important; }"
        ],
        excludeSelectors: [
          "div.featured-cards__byline",
          "div.list-item__meta",
          ".tags__item",
          "div.extended-scroll__header",
          ".submitted-by",
          ".site-header--has-alert-banner",
          ".homepage__container__opinion__item__byline",
          ".homepage__container__header",
          ".archive__item__meta"
        ]
      },
      {
        matches: "manpages.ubuntu.com",
        selectors: [
          "pre"
        ],
        atomicBlockTags: [
          "pre"
        ]
      },
      {
        matches: "www.spiedigitallibrary.org",
        excludeTags: [
          "TITLE",
          "SCRIPT",
          "STYLE",
          "TEXTAREA",
          "SVG",
          "svg",
          "G",
          "NOSCRIPT",
          "INPUT",
          "BUTTON",
          "BASE",
          "SELECT",
          "OPTION",
          "IMG",
          "SUB",
          "SUP",
          "HR",
          "PRE",
          "CODE",
          "KBD",
          "WBR",
          "TT",
          "RT",
          "RP",
          "META",
          "ASIDE",
          "FOOTER",
          "MATH",
          "TTS-SENTENCE",
          "AIO-CODE"
        ]
      },
      {
        matches: "www.promptingguide.ai",
        selectors: [
          "article",
          "li"
        ]
      },
      {
        matches: "ground.news",
        globalStyles: {
          ".line-clamp-3": "-webkit-line-clamp: unset !important;"
        }
      },
      {
        matches: "*.ietf.org/doc/html/*",
        additionalSelectors: [
          "pre"
        ],
        isTransformPreTagNewLine: !0,
        preWhitespaceDetectedTags: ["DIV", "SPAN", "PRE"]
      },
      {
        matches: "https://www.newsminimalist.com/",
        extraBlockSelectors: [
          ".inline-flex"
        ]
      }
    ]
  };

  // utils/platform.ts
  var DENO = "DENO", CHROME = "CHROME", FIREFOX = "FIREFOX";
  function isBrowser(toCheck) {
    let currentBrowser = CHROME;
    try {
      let userAgent = navigator?.userAgent || "";
      /firefox/i.test(userAgent) ? currentBrowser = FIREFOX : /deno/i.test(userAgent) && (currentBrowser = DENO);
    } catch {
    }
    return toCheck === CHROME && currentBrowser === CHROME || toCheck === FIREFOX && currentBrowser === FIREFOX || toCheck === DENO && currentBrowser === DENO;
  }
  function isChrome() {
    return isBrowser(CHROME);
  }
  function isDeno() {
    return typeof Deno < "u";
  }
  function isFirefox() {
    return isBrowser(FIREFOX);
  }

  // browser/mock_browser.ts
  var listeners = {
    addListener: () => {
    },
    removeListener: () => {
    },
    hasListener: () => {
    }
  }, mock_browser_default = {
    permissions: {
      contains: () => {
      },
      request: () => {
      }
    },
    runtime: {
      onMessage: listeners,
      openOptionsPage: () => {
      },
      lastError: {
        message: ""
      }
    },
    storage: {
      sync: {
        get: () => {
        },
        set: () => {
        }
      }
    },
    tabs: {
      onUpdated: listeners,
      query: () => {
      },
      sendMessage: () => {
      }
    }
  };

  // browser/browser.ts
  var browserAPI;
  isDeno() ? browserAPI = mock_browser_default : browserAPI = globalThis.immersiveTranslateBrowserAPI;

  // utils/array.ts
  function arrayOrGenericToArray(arrayOrGeneric) {
    return Array.isArray(arrayOrGeneric) ? arrayOrGeneric : arrayOrGeneric ? [arrayOrGeneric] : [];
  }

  // utils/merge_rule.ts
  function mergeRule(generalRule, rule) {
    let arrayKeys = [], allRuleKeys = Object.keys(
      generalRule
    );
    for (let key of allRuleKeys) {
      let value = generalRule[key];
      Array.isArray(value) && arrayKeys.push(key);
    }
    let finalRule = {
      ...generalRule
    };
    return Object.keys(rule).forEach((key) => {
      let value = rule[key];
      if (value !== void 0)
        if (!arrayKeys.includes(key))
          finalRule[key] = value;
        else if (key.startsWith("additional")) {
          let userValue = arrayOrGenericToArray(value);
          finalRule[key] = Array.from(
            // @ts-ignore: ignore type error
            /* @__PURE__ */ new Set([...finalRule[key], ...userValue])
          );
        } else
          finalRule[key] = arrayOrGenericToArray(value);
    }), finalRule;
  }

  // config.ts
  function getEnvUserConfig() {
    if (env.PROD === "1")
      return {};
    let defaultUserConfig = {};
    if (env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID && env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
      let tencentAuthConfig = {
        secretId: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,
        secretKey: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY
      };
      defaultUserConfig.translationServices = {}, defaultUserConfig.translationServices.tencent = tencentAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID && env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY) {
      let baiduAuthConfig = {
        appid: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,
        key: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.baidu = baiduAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN) {
      let caiyunAuthConfig = {
        token: env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.caiyun = caiyunAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY) {
      let openlAuthConfig = {
        apikey: env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.openl = openlAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID && env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET) {
      let youdaoAuthConfig = {
        appId: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,
        appSecret: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.youdao = youdaoAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID && env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY) {
      let volcAuthConfig = {
        accessKeyId: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,
        secretAccessKey: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.volc = volcAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY) {
      let deeplAuthConfig = {
        authKey: env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl = deeplAuthConfig;
    }
    if (env.DEEPL_PROXY_ENDPOINT && (defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl || (defaultUserConfig.translationServices.deepl = {}), defaultUserConfig.translationServices.deepl.immersiveTranslateApiUrl = env.DEEPL_PROXY_ENDPOINT), env.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT && (defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl || (defaultUserConfig.translationServices.deepl = {}), defaultUserConfig.translationServices.deepl.immersiveTranslateDeeplTokenUrl = env.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT), env.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY) {
      let openaiAuthConfig = {
        APIKEY: env.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY
      };
      defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.openai = openaiAuthConfig;
    }
    return env.DEBUG === "1" && (defaultUserConfig.debug = !0, defaultUserConfig.cache = !1, defaultUserConfig.alpha = !0), env.MOCK === "1" && (defaultUserConfig.translationService = "mock"), env.IMMERSIVE_TRANSLATE_SERVICE && (defaultUserConfig.translationService = env.IMMERSIVE_TRANSLATE_SERVICE), defaultUserConfig;
  }
  async function getLocalConfig() {
    let localConfig = await browserAPI.storage.local.get(localConfigStorageKey);
    if (localConfig[localConfigStorageKey]) {
      let currentConfig = localConfig[localConfigStorageKey], currentTempTranslationDomains = currentConfig.tempTranslationUrlMatches || [], newDomains = currentTempTranslationDomains.filter(
        (item) => item.expiredAt > Date.now()
      ), isChanged = !1;
      newDomains.length !== currentTempTranslationDomains.length && (currentTempTranslationDomains = newDomains, isChanged = !0);
      let newLocalConfig = {
        ...currentConfig,
        tempTranslationUrlMatches: [
          ...currentTempTranslationDomains
        ]
      };
      return isChanged && await setLocalConfig(newLocalConfig), newLocalConfig;
    } else
      return {};
  }
  async function setLocalConfig(localConfig) {
    await browserAPI.storage.local.set({ [localConfigStorageKey]: localConfig });
  }
  async function getConfig() {
    let storageBuildInConfig = await browserAPI.storage.local.get(
      buildinConfigStorageKey
    ), finalBuildInConfig = {
      ...buildin_config_default,
      buildinConfigUpdatedAt: env.BUILD_TIME
    };
    if (storageBuildInConfig[buildinConfigStorageKey]) {
      let storageBuildInConfigValue = storageBuildInConfig[buildinConfigStorageKey];
      if (storageBuildInConfigValue && storageBuildInConfigValue.buildinConfigUpdatedAt) {
        let storageBuildinConfigUpdatedAt = new Date(
          storageBuildInConfigValue.buildinConfigUpdatedAt
        ), buildinConfigUpdatedAt = new Date(
          finalBuildInConfig.buildinConfigUpdatedAt
        );
        storageBuildinConfigUpdatedAt > buildinConfigUpdatedAt && (finalBuildInConfig = storageBuildInConfigValue);
      }
    }
    let shortcutsFromBrowser = {};
    if (!isMonkey() && browserAPI.commands && browserAPI.commands.getAll) {
      let commandResult = await browserAPI.commands.getAll();
      for (let command of commandResult)
        command.name && command.shortcut && (shortcutsFromBrowser[command.name] = command.shortcut);
    }
    let defaultConfig = getBuildInConfig(), envUserConfig = getEnvUserConfig(), userConfig = await getUserConfig(), globalUserConfig = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {}, localConfig = await getLocalConfig(), now = /* @__PURE__ */ new Date();
    if (localConfig && localConfig.tempTranslationUrlMatches && localConfig.tempTranslationUrlMatches.length > 0) {
      let validUrlMatches = localConfig.tempTranslationUrlMatches.filter(
        (urlMatch) => new Date(urlMatch.expiredAt) > now
      );
      if (validUrlMatches.length > 0) {
        let currentMatches = userConfig.translationUrlPattern ? userConfig.translationUrlPattern?.matches || [] : [], currentMatchesArray = Array.isArray(currentMatches) ? currentMatches : [currentMatches], finalMatches = Array.from(
          new Set(
            currentMatchesArray.concat(
              validUrlMatches.map((urlMatch) => urlMatch.match)
            )
          )
        );
        userConfig.translationUrlPattern = {
          ...userConfig.translationUrlPattern,
          matches: finalMatches
        };
      }
    }
    let mergedUserConfig = Object.assign(
      {},
      globalUserConfig,
      envUserConfig,
      userConfig
    );
    if (!mergedUserConfig.interfaceLanguage) {
      let defaultInterfaceLanguage = await getBrowserIntefaceLanguage();
      mergedUserConfig.interfaceLanguage = defaultInterfaceLanguage;
    }
    let finalConfig = Object.assign(defaultConfig, finalBuildInConfig), configKeys = Object.keys(finalConfig), assignKeys = [
      "translationUrlPattern",
      "translationLanguagePattern",
      "immediateTranslationPattern",
      "translationBodyAreaPattern",
      "translationParagraphLanguagePattern",
      "translationThemePatterns",
      "translationGeneralConfig",
      "shortcuts"
    ];
    for (let key of configKeys) {
      let configKey = key;
      if (configKey === "generalRule")
        typeof mergedUserConfig[configKey] == "object" && (finalConfig[configKey] = mergeRule(
          defaultConfig[configKey],
          mergedUserConfig[configKey]
        ));
      else if (configKey === "translationServices") {
        let userConfigValue = mergedUserConfig[configKey] || {}, buildInConfigValue = finalBuildInConfig[configKey] || {}, buildInConfigKeys = Object.keys(buildInConfigValue), userConfigKeys = Object.keys(userConfigValue), allUniqueKeys = [
          .../* @__PURE__ */ new Set([...buildInConfigKeys, ...userConfigKeys])
        ], finalConfigValue = {};
        for (let key2 of allUniqueKeys)
          finalConfigValue[key2] = {
            // @ts-ignore: it's ok
            ...buildInConfigValue[key2],
            ...userConfigValue[key2]
          };
        finalConfig[configKey] = finalConfigValue;
      } else if (typeof mergedUserConfig[configKey] != "string" && typeof mergedUserConfig[configKey] != "boolean" && typeof mergedUserConfig[configKey] != "number" && assignKeys.includes(configKey))
        mergedUserConfig[configKey] && (finalConfig[configKey] = Object.assign(
          // @ts-ignore: ignore type error
          finalConfig[configKey],
          mergedUserConfig[configKey]
        )), configKey === "shortcuts" && (isMonkey() || isSafari() ? finalConfig[configKey] = {
          ...finalConfig[configKey],
          ...shortcutsFromBrowser
        } : finalConfig[configKey] = {
          ...shortcutsFromBrowser
        });
      else if (configKey === "rules") {
        if (Array.isArray(mergedUserConfig[configKey]) && (finalConfig[configKey] = [
          ...mergedUserConfig[configKey],
          ...finalConfig[configKey]
        ]), env.PROD === "0" && env.DEV_RULES) {
          let devRules = JSON.parse(env.DEV_RULES);
          finalConfig[configKey] = [
            ...devRules,
            ...finalConfig[configKey]
          ];
        }
      } else
        mergedUserConfig[configKey] !== void 0 && (finalConfig[configKey] = mergedUserConfig[configKey]);
    }
    return finalConfig.donateUrl = finalBuildInConfig.donateUrl, finalConfig.minVersion = finalBuildInConfig.minVersion, finalConfig.feedbackUrl = finalBuildInConfig.feedbackUrl, finalConfig;
  }
  async function getUserConfig() {
    return (await browserAPI.storage.sync.get("userConfig") || {}).userConfig || {};
  }
  async function setUserConfig(config) {
    await browserAPI.storage.sync.set({ userConfig: config });
  }
  var getBrowserIntefaceLanguage = async () => {
    let languages2 = ["zh-CN"];
    try {
      languages2 = await browserAPI.i18n.getAcceptLanguages();
    } catch (e) {
      log_default.warn("get browser language error:", e);
    }
    let defaultInterfaceLanguage = languages2.map((lang) => formatLanguage(lang)).find((lang) => translations[lang]);
    return defaultInterfaceLanguage || "en";
  }, getBuildInConfig = () => {
    let finalBuildInConfig = {
      ...buildin_config_default,
      buildinConfigUpdatedAt: env.BUILD_TIME
    };
    return {
      ...finalBuildInConfig,
      targetLanguage: fallbackLanguage,
      interfaceLanguage: "en",
      debug: !1,
      alpha: !1,
      translationUrlPattern: {
        matches: [],
        excludeMatches: []
      },
      translationLanguagePattern: {
        matches: [],
        excludeMatches: []
      },
      translationThemePatterns: {},
      translationParagraphLanguagePattern: {
        matches: [],
        excludeMatches: [],
        selectorMatches: [],
        excludeSelectorMatches: []
      },
      translationBodyAreaPattern: {
        matches: [],
        excludeMatches: [],
        selectorMatches: [],
        excludeSelectorMatches: []
      },
      translationTheme: "none",
      translationService: "bing",
      translationArea: "main",
      translationStartMode: "dynamic",
      translationServices: {},
      generalRule: {
        ...finalBuildInConfig.generalRule
      },
      translationGeneralConfig: { engine: "bing" },
      rules: []
    };
  };

  // utils/get_pdf_viewer_url.ts
  function formatToPdfViewerUrl(url) {
    let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl), pdfViewUrlObj = new URL(pdfViewerRuntimeUrl);
    return (url.startsWith("http") || !isFirefox()) && pdfViewUrlObj.searchParams.set(
      "file",
      url
    ), pdfViewUrlObj.href;
  }

  // utils/is_pdf_url.ts
  function isPdfUrl(url) {
    return new URL(url)?.pathname.toLowerCase().endsWith(".pdf");
  }

  // errors.ts
  var CommonError = class extends Error {
    constructor(name, message, details) {
      super(message);
      this.name = name, details && (this.details = details);
    }
  };

  // browser/request.ts
  async function request(options) {
    let response;
    if (options && options.retry && options.retry > 0)
      try {
        response = await retry(rawRequest.bind(null, options), {
          multiplier: 2,
          maxAttempts: options.retry
        });
      } catch (e) {
        throw e && e.name === "RetryError" && e.cause ? e.cause : e;
      }
    else
      response = await rawRequest(options);
    return response;
  }
  async function rawRequest(options) {
    options.body;
    let { url, responseType, ...fetchOptions } = options;
    responseType || (responseType = "json"), fetchOptions = {
      mode: "cors",
      ...fetchOptions
    };
    let isNativeFetch = !0;
    options.fetchPolyfill && (isNativeFetch = !1);
    let fetchFn = options.fetchPolyfill || fetch, timeout = 12e4;
    if (options.timeout && (timeout = options.timeout), isNativeFetch) {
      let controller = new AbortController(), signal = controller.signal;
      setTimeout(() => {
        controller.abort();
      }, timeout), fetchOptions.signal = signal;
    }
    let response = await fetchFn(url, fetchOptions);
    if (response.ok && response.status >= 200 && response.status < 400) {
      if (responseType === "json")
        return await response.json();
      if (responseType === "text")
        return await response.text();
      if (responseType === "raw") {
        let data = await response.text(), responseHeaders = Object.fromEntries([
          ...response.headers.entries()
        ]), finalUrl = response.url;
        return finalUrl || (response.headers.get("X-Final-URL") ? finalUrl = response.headers.get("X-Final-URL") : finalUrl = url), {
          body: data,
          headers: responseHeaders,
          status: response.status,
          statusText: response.statusText,
          url: finalUrl
        };
      } else if (responseType === "stream") {
        let buffer = "", answer;
        if (response.body && response.body instanceof ReadableStream)
          for await (let chunk of streamAsyncIterable(response.body)) {
            let str = new TextDecoder().decode(chunk);
            buffer += str;
            let lineEndIndex;
            for (; (lineEndIndex = buffer.indexOf(`
`)) >= 0; ) {
              let line = buffer.slice(0, lineEndIndex).trim();
              if (buffer = buffer.slice(lineEndIndex + 1), line.startsWith("event:") || line === "")
                continue;
              let eventData = "";
              if (line.startsWith("data:") && (eventData = line.slice(5).trim()), eventData === "[DONE]")
                break;
              let data;
              try {
                data = JSON.parse(eventData ?? "");
              } catch (error) {
                log_default.debug("json error", error);
                continue;
              }
              answer = data;
            }
          }
        return answer;
      }
    } else {
      let details;
      try {
        details = await response.text();
      } catch (_e2) {
        log_default.error("parse response failed", _e2);
      }
      details && log_default.error("fail response", details);
      let shortDetail = "";
      throw details && (shortDetail = details.slice(0, 150)), new CommonError(
        "fetchError",
        response.status + ": " + (response.statusText || "") + shortDetail,
        details
      );
    }
  }
  async function* streamAsyncIterable(stream) {
    let reader = stream.getReader();
    try {
      for (; ; ) {
        let { done, value } = await reader.read();
        if (done)
          return;
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }

  // utils/url_match.ts
  var matchAll = ["*://*/*", "*", "*://*"], placeholder = "immersive-translate-wildcard-placeholder.com";
  function getMatchedUrl(rawUrl, rawMatches) {
    let matches = [];
    if (!rawMatches || (rawMatches && !Array.isArray(rawMatches) ? matches = [rawMatches] : matches = rawMatches, matches.length === 0))
      return null;
    if (matches.some((m2) => matchAll.includes(m2)))
      return rawUrl;
    let urlObj = new URL(rawUrl);
    urlObj.hash = "", urlObj.search = "";
    let url = urlObj.href, hostname2 = urlObj.hostname;
    if (matches && matches.length > 0) {
      let matched = matches.find((match) => {
        let rawMatch = match;
        if (match === hostname2)
          return !0;
        if (matchAll.includes(match))
          return !0;
        if (!match.includes("*") && match.includes("://")) {
          try {
            let matchUrl = new URL(match);
            return matchUrl.pathname === "/" && !match.endsWith("/") ? matchUrl.hostname === hostname2 : isTwoUrlMatched(url, match);
          } catch {
          }
          return !1;
        } else {
          let scheme, rawMatch2 = match;
          if (match.includes("://")) {
            let parts = match.split("://");
            scheme = parts[0], scheme === "*" && parts.length > 1 && (scheme = "*", match = "https://" + parts[1]);
          } else
            scheme = "*", match = "https://" + match;
          let validUrlMatch = match.replace(
            /\*/g,
            placeholder
          ), validUrlObj;
          try {
            validUrlObj = new URL(validUrlMatch);
          } catch {
            return log_default.debug(
              "invalid match pattern",
              validUrlMatch,
              "raw match value:",
              rawMatch2
            ), !1;
          }
          let hostname3 = validUrlObj.hostname, pathname = validUrlObj.pathname;
          pathname === "/" && (rawMatch2.replace("://", "").includes("/") || (pathname = "/*"));
          let regex = makeRegExp(
            scheme + ":",
            restorePlaceholderToWildcard(hostname3),
            restorePlaceholderToWildcard(pathname)
          );
          if (regex) {
            let clonedUrl = new URL(url);
            return clonedUrl.port = "", regex.test(clonedUrl.href);
          } else
            return !1;
        }
      });
      if (matched)
        return matched;
    }
    return null;
  }
  function restorePlaceholderToWildcard(str) {
    return str.replaceAll(placeholder, "*");
  }
  function makeRegExp(scheme, host, path) {
    let regex = "^";
    return scheme === "*:" ? regex += "(http:|https:|file:)" : regex += scheme, regex += "//", host && (scheme === "file:" || (host === "*" ? regex += "[^/]+?" : (host.match(/^\*\./) && (regex += "[^/]*?", host = host.substring(2)), regex += host.replace(/\./g, "\\.").replace(/\*/g, "[^/]*")))), path ? path === "*" || path === "/*" ? regex += "(/.*)?" : path.includes("*") ? (regex += path.replace(/\*/g, ".*?"), regex += "/?") : regex += path.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : regex += "/?", regex += "$", new RegExp(regex);
  }
  function isMatchUrl(url, rawMatches) {
    return getMatchedUrl(url, rawMatches) !== null;
  }
  function isTwoUrlMatched(url1, url2) {
    let urlObj1 = new URL(url1), urlObj2 = new URL(url2);
    return urlObj1.hostname === urlObj2.hostname && urlObj1.pathname === urlObj2.pathname && urlObj1.protocol === urlObj2.protocol && urlObj1.port === urlObj2.port;
  }

  // sync/google_drive_api.ts
  var GoogleDriveAPI = class {
    constructor(accessToken) {
      this.accessToken = accessToken;
    }
    async listAll() {
      let result = [], pageToken = "";
      do {
        let { nextPageToken, files } = await this.list(pageToken).catch(
          (error) => {
            throw error;
          }
        );
        result.push(...files), pageToken = nextPageToken || "";
      } while (pageToken);
      return result;
    }
    async getConfig(id) {
      try {
        return await (await fetch(
          `https://www.googleapis.com/drive/v3/files/${id}?alt=media`,
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`
            }
          }
        )).json();
      } catch (_e2) {
        return log_default.error("get config error, use default", _e2), {};
      }
    }
    async delete(id) {
      await fetch(`https://www.googleapis.com/drive/v3/files/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      });
    }
    findByName(fileName) {
      return this.list(void 0, `name = '${fileName}'`);
    }
    uploadConfig(settings, filename = LATEST_FILE_NAME) {
      let blob = new Blob([JSON.stringify(settings, null, 2)], {
        type: "application/json"
      });
      return this.upload(
        {
          name: filename,
          parents: ["appDataFolder"],
          mimeType: "application/json"
        },
        blob
      );
    }
    updateConfig(id, settings) {
      let blob = new Blob([JSON.stringify(settings, null, 2)], {
        type: "application/json"
      });
      return this.updateContent(id, blob);
    }
    async upload(metadata, blob) {
      let data = new FormData();
      data.append(
        "metadata",
        new Blob([JSON.stringify(metadata)], {
          type: "application/json; charset=UTF-8"
        })
      ), data.append("file", blob);
      let res = await fetch(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          },
          body: data
        }
      );
      return res.ok ? await res.json() : Promise.reject(res.text());
    }
    async list(pageToken, query) {
      let url = new URL("https://www.googleapis.com/drive/v3/files");
      pageToken && url.searchParams.append("pageToken", pageToken), query && url.searchParams.append("q", query), url.searchParams.append("spaces", "appDataFolder"), url.searchParams.append(
        "fields",
        "files(id,name,createdTime,modifiedTime,size)"
      ), url.searchParams.append("pageSize", "100"), url.searchParams.append("orderBy", "createdTime desc");
      try {
        return log_default.debug("list api:", url.toString(), this.accessToken), await (await fetch(url.toString(), {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        })).json();
      } catch (e) {
        throw log_default.error("fetch google ip error", e), e;
      }
    }
    async updateContent(id, blob) {
      return await (await fetch(
        `https://www.googleapis.com/upload/drive/v3/files/${id}?uploadType=media`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          },
          body: blob
        }
      )).text();
    }
  };

  // sync/util.ts
  function getAuthUrl(state, redirect_url) {
    let SCOPES = ["https://www.googleapis.com/auth/drive.appdata"];
    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(redirect_url)}&scope=${encodeURIComponent(SCOPES.join(" "))}&state=${encodeURIComponent(JSON.stringify(state))}`;
  }
  function extractAccessToken(redirectUri) {
    let m2 = redirectUri.match(/[#?](.*)/);
    return !m2 || m2.length < 1 ? null : {
      access_token: new URLSearchParams(m2[1].split("#")[0]).get("access_token")
    };
  }
  async function autoSyncStrategy(accessToken, settings, handleChangeValue, handleUpdateLocalConfigLastSyncedAt, handleUpdateSettingUpdateAt, handleSuccess, handleFail) {
    log_default.debug(`autoSyncStrategy accessToken: ${accessToken}`);
    let api = new GoogleDriveAPI(accessToken);
    try {
      let files = (await api.findByName(LATEST_FILE_NAME)).files;
      log_default.debug("files", files);
      let latestFileId = files[0]?.id, latestRemoteConfigResult = null;
      if (latestFileId && (latestRemoteConfigResult = await api.getConfig(latestFileId).then((config) => ({
        fileId: latestFileId,
        config
      }))), latestRemoteConfigResult) {
        let { config: latestRemoteConfig, fileId } = latestRemoteConfigResult, remoteUpdatedAt = latestRemoteConfig.updatedAt ? new Date(latestRemoteConfig.updatedAt) : /* @__PURE__ */ new Date(0), localUpdatedAt = settings.updatedAt ? new Date(settings.updatedAt) : /* @__PURE__ */ new Date(0);
        if (log_default.debug(
          "remoteUpdatedAt",
          remoteUpdatedAt,
          "localUpdatedAt",
          localUpdatedAt
        ), remoteUpdatedAt > localUpdatedAt)
          log_default.debug("remote is newer, update local config", latestRemoteConfig), handleChangeValue(latestRemoteConfig), handleSuccess && handleSuccess(!0);
        else if (remoteUpdatedAt.getTime() === localUpdatedAt.getTime())
          log_default.debug("remote and local are the same, do nothing"), handleSuccess && handleSuccess(!1);
        else if (remoteUpdatedAt < localUpdatedAt)
          log_default.debug("local is newer, update remote config", settings), await api.updateConfig(fileId, settings), handleSuccess && handleSuccess(!0);
        else {
          handleFail && handleFail(": unknown error");
          return;
        }
        handleUpdateLocalConfigLastSyncedAt((/* @__PURE__ */ new Date()).toISOString());
      } else if (latestRemoteConfigResult === null)
        if (settings) {
          if (!settings.updatedAt) {
            let newDate = (/* @__PURE__ */ new Date()).toISOString();
            handleUpdateSettingUpdateAt(newDate), settings.updatedAt = newDate;
          }
          await api.uploadConfig(settings), handleUpdateLocalConfigLastSyncedAt((/* @__PURE__ */ new Date()).toISOString()), handleSuccess && handleSuccess(!0);
        } else
          handleFail && handleFail(": Local Config is empty");
      else
        handleFail && handleFail(": latestConfig is " + latestRemoteConfigResult);
    } catch (e) {
      log_default.error("syncLatestWithDrive error", e), handleFail && handleFail(": " + e.message);
    }
  }

  // sync/google_auth.ts
  var GOOGLE_REVOKE_URL = "https://oauth2.googleapis.com/revoke", GoogleAuth = class {
    constructor(state, redirectUrl) {
      this.CLASSNAME = "GoogleAuth";
      this._state = state, this._redirectUrl = redirectUrl;
    }
    static revoke(token) {
      let url = `${GOOGLE_REVOKE_URL}?token=${token}`;
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(async (res) => (await GoogleAuth.removeAuthInfo(), isUserscriptRuntime() && globalThis.location.reload(), res));
    }
    static async getAuthInfo() {
      let tokenIndex = await browserAPI.storage.local.get(GOOGLE_ACCESS_TOKEN_KEY);
      if (tokenIndex[GOOGLE_ACCESS_TOKEN_KEY])
        return tokenIndex[GOOGLE_ACCESS_TOKEN_KEY];
    }
    static async removeAuthInfo() {
      return await browserAPI.storage.local.remove(GOOGLE_ACCESS_TOKEN_KEY);
    }
    static setAuthInfo(authInfo) {
      return browserAPI.storage.local.set({
        [GOOGLE_ACCESS_TOKEN_KEY]: authInfo
      });
    }
    async auth(userscriptSyncPageStartAuthFlow = !1) {
      let authInfo = await GoogleAuth.getAuthInfo();
      if (log_default.debug(this.CLASSNAME, "token from cache:", authInfo), authInfo && authInfo.access_token && await validate(authInfo.access_token).then((_token) => !0).catch((_err) => !1))
        return Promise.resolve(authInfo);
      let authUrlWithState = getAuthUrl(
        this._state,
        this._redirectUrl
      );
      return log_default.debug(this.CLASSNAME, "auth url: " + authUrlWithState), isUserscriptRuntime() ? this.userscriptAuthWorkflow(
        authUrlWithState,
        userscriptSyncPageStartAuthFlow
      ) : this.extensionAuthWorkflow(authUrlWithState).then((res) => (GoogleAuth.setAuthInfo(res), res));
    }
    async userscriptAuthWorkflow(authUrl, syncPageStartAuthFlow) {
      return syncPageStartAuthFlow && await browserAPI.storage.local.set({ [AUTH_FLOW_FLAG]: !0 }), globalThis.open(authUrl, "_self"), Promise.resolve({});
    }
    extensionAuthWorkflow(authUrl) {
      let _tabId, _success = !1;
      return new Promise((resolve, reject) => {
        let cleanup = () => {
          browserAPI.tabs.onUpdated.removeListener(tabUpdateListener), browserAPI.tabs.onRemoved.removeListener(tabRemovedListener);
        }, tabUpdateListener = (tabId, _changeInfo, tab) => {
          if (log_default.debug(this.CLASSNAME, "create tab onUpdated: " + tab.url), _tabId === tabId) {
            let url = new URL(tab.url || ""), authInfo = extractAccessToken(tab.url);
            url.pathname.startsWith("/auth-done") && authInfo?.access_token && (log_default.debug(this.CLASSNAME, "auth done: " + tab.url), resolve({ access_token: authInfo.access_token }), _success = !0, browserAPI.tabs.remove(tabId), cleanup());
          }
        }, tabRemovedListener = (tabId, _removeInfo) => {
          log_default.debug(this.CLASSNAME, "create tab onRemoved: " + tabId), (tabId === _tabId || !_success) && (cleanup(), reject(new Error("auth failed")));
        }, width = Math.min(500, screen.availWidth), height = Math.min(650, screen.availHeight), newTab;
        browserAPI.windows === void 0 ? newTab = browserAPI.tabs.create({
          url: authUrl
        }).then((tab) => {
          _tabId = tab.id;
        }) : newTab = browserAPI.windows.create({
          url: authUrl,
          type: "popup",
          width,
          height,
          left: Math.round((screen.width - width) / 2),
          top: Math.round((screen.height - height) / 2)
        }).then((window2) => {
          _tabId = window2.tabs[0].id;
        }), newTab.then(() => {
          browserAPI.tabs.onUpdated.addListener(tabUpdateListener), browserAPI.tabs.onRemoved.addListener(tabRemovedListener);
        }).catch((error) => {
          log_default.debug(this.CLASSNAME, "create tab failed: " + error), reject(error);
        });
      });
    }
  };

  // sync/authorize.ts
  var VALIDATION_BASE_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo", CLIENT_ID = GOOGLE_CLIENT_ID, REDIRECT_URL = getEnv().REDIRECT_URL;
  function validate(accessToken) {
    if (!accessToken)
      throw "Authorization failure";
    let validationURL = `${VALIDATION_BASE_URL}?access_token=${accessToken}`, validationRequest = new Request(validationURL, {
      method: "GET"
    });
    function checkResponse(response) {
      return new Promise((resolve, reject) => {
        response.status != 200 && reject("Token validation error"), response.json().then((json) => {
          json.aud && json.aud === CLIENT_ID ? resolve(accessToken) : reject("Token validation error");
        });
      });
    }
    return fetch(validationRequest).then(checkResponse);
  }
  function getAuthInfo(state, userscriptSyncStartAuthFlow = !1) {
    return new GoogleAuth(state, REDIRECT_URL).auth(userscriptSyncStartAuthFlow);
  }

  // sync/sync_latest_config.ts
  async function autoSyncLatestConfig() {
  }

  // utils/format_headers_by_rule.ts
  function formatHeadersByRule(requestHeaders, rules) {
    let ruleMap = /* @__PURE__ */ new Map();
    for (let rule of rules)
      ruleMap.set(rule.header.toLowerCase(), rule);
    let addedHeaders = [], newRequestHeaders = requestHeaders.filter(
      (header) => {
        let rule = ruleMap.get(header.name.toLowerCase());
        if (rule) {
          if (rule.operation === "remove")
            return !1;
          if (rule.operation === "set")
            return !1;
        }
        return !0;
      }
    );
    for (let rule of rules)
      rule.operation === "set" && addedHeaders.push({
        name: rule.header,
        value: rule.value || ""
      });
    return newRequestHeaders.concat(addedHeaders);
  }

  // static/rules/request_modifier_rule.json
  var request_modifier_rule_default = [{
    id: 1,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        {
          header: "Referer",
          operation: "set",
          value: "https://httpstat.us/429"
        },
        {
          header: "origin",
          operation: "set",
          value: "https://httpstat.us/429"
        },
        {
          header: "DNT",
          operation: "set",
          value: "1"
        }
      ]
    },
    condition: {
      urlFilter: "https://httpstat.us/429",
      resourceTypes: ["xmlhttprequest"],
      domainType: "thirdParty",
      initiatorDomains: [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  }, {
    id: 2,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        {
          header: "Referer",
          operation: "set",
          value: "https://www.deepl.com/"
        },
        {
          header: "origin",
          operation: "set",
          value: "https://www.deepl.com"
        },
        {
          header: "DNT",
          operation: "set",
          value: "1"
        },
        { header: "cookie", operation: "remove" }
      ]
    },
    condition: {
      urlFilter: "https://www2.deepl.com/jsonrpc*",
      resourceTypes: ["xmlhttprequest"],
      domainType: "thirdParty",
      initiatorDomains: [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  }, {
    id: 200,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        {
          header: "Referer",
          operation: "set",
          value: "https://www.deepl.com/"
        },
        {
          header: "origin",
          operation: "set",
          value: "chrome-extension://cofdbpoegempjloogbagkncekinflcnj"
        },
        {
          header: "DNT",
          operation: "set",
          value: "1"
        }
      ]
    },
    condition: {
      urlFilter: "https://api.deepl.com/jsonrpc*",
      resourceTypes: ["xmlhttprequest"],
      domainType: "thirdParty",
      initiatorDomains: [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  }, {
    id: 201,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        {
          header: "Referer",
          operation: "set",
          value: "https://www.deepl.com/"
        },
        {
          header: "origin",
          operation: "set",
          value: "chrome-extension://cofdbpoegempjloogbagkncekinflcnj"
        }
      ]
    },
    condition: {
      urlFilter: "https://w.deepl.com/oidc/token",
      resourceTypes: ["xmlhttprequest"],
      domainType: "thirdParty",
      initiatorDomains: [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  }, {
    id: 3,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        {
          header: "origin",
          operation: "set",
          value: "chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"
        }
      ]
    },
    condition: {
      urlFilter: "https://transmart.qq.com/api/imt",
      resourceTypes: ["xmlhttprequest"],
      domainType: "thirdParty",
      initiatorDomains: [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  }, {
    id: 4,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        {
          header: "origin",
          operation: "set",
          value: "chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"
        }
      ]
    },
    condition: {
      urlFilter: "https://translate.volcengine.com/crx/translate/v1/",
      resourceTypes: ["xmlhttprequest"],
      domainType: "thirdParty",
      initiatorDomains: [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  }];

  // messager.ts
  var listeners2 = /* @__PURE__ */ new Map(), Messager = class {
    constructor(fromType, debug = !1) {
      this.logger = new Logger(), debug && this.logger.setLevel("debug"), this.fromType = fromType, listeners2.has(fromType) || (listeners2.set(fromType, /* @__PURE__ */ new Map()), browserAPI.runtime.onMessage.addListener(
        // @ts-ignore: it's ok
        (message, sender, sendResponse) => {
          let from = message.from, to = message.to, tabId, tabUrl, tabActive;
          sender.tab && sender.tab.id && (tabId = sender.tab.id, from = `${from}:${tabId}`, tabUrl = sender.tab.url, tabActive = sender.tab.active), this.logger.debug(
            `${message.to} received message [${message.payload.method}] from ${message.from}`,
            message.payload.data ? message.payload.data : " "
          );
          let parsedTo = parseType(to), { type: toType, name: toName } = parsedTo;
          if (toType !== fromType)
            return !1;
          let parsedMessageFrom = parseType(from), connectionInfo = listeners2.get(toType).get(toName);
          if (!connectionInfo)
            return this.logger.debug(
              `no message handler for ${toType}:${to}, but it's ok`
            ), !1;
          let { messageHandler: messageHandler2, sync } = connectionInfo, messageAuthor = {
            type: fromType,
            name: parsedMessageFrom.name,
            id: tabId,
            url: tabUrl,
            active: tabActive
          };
          if (sync) {
            try {
              let handlerResult = messageHandler2(
                message.payload,
                messageAuthor
              );
              sendResponse({
                ok: !0,
                data: handlerResult
              });
            } catch (e) {
              sendResponse({
                ok: !1,
                errorName: e.name,
                errorMessage: e.message,
                errorDetails: e.details
              });
            }
            return !1;
          } else
            return messageHandler2(
              message.payload,
              messageAuthor
            ).then((data) => {
              sendResponse({
                ok: !0,
                data
              });
            }).catch(
              (e) => {
                sendResponse({
                  ok: !1,
                  errorName: e.name,
                  errorMessage: e.message,
                  errorDetails: e.details
                });
              }
            ), !0;
        }
      ));
    }
    getConnection(name, messageHandler2, options) {
      let sync = !1;
      options && options.sync && (sync = !0);
      let fromType = this.fromType, currentListeners = listeners2.get(fromType);
      if (currentListeners.has(name))
        return currentListeners.get(name).connectionInstance;
      {
        let connection2 = new Connection(`${fromType}:${name}`, this.logger);
        return listeners2.get(fromType).set(name, {
          messageHandler: messageHandler2,
          sync,
          connectionInstance: connection2
        }), connection2;
      }
    }
  }, Connection = class {
    constructor(from, logger) {
      this.from = from, this.logger = logger;
    }
    async sendMessage(to, messagePayload) {
      let parsedTo = parseType(to), { type, id } = parsedTo;
      if (type !== "content_script") {
        let message = {
          to,
          from: this.from,
          payload: messagePayload
        };
        this.logger.debug(
          `${message.from} send message [${message.payload.method}] to ${message.to}`,
          message.payload.data ? message.payload.data : " "
        );
        try {
          let response = await browserAPI.runtime.sendMessage(message);
          return handleResponse(message, response, this.logger);
        } catch (e) {
          if (type === "popup") {
            let errorMessage = `popup ${to} is not active, so the message does not send, ignore this error, ${JSON.stringify(messagePayload)}`;
            return this.logger.debug(
              errorMessage,
              messagePayload,
              to,
              e
            ), Promise.resolve({
              message: errorMessage
            });
          } else
            throw e;
        }
      } else {
        let message = {
          from: this.from,
          to,
          payload: messagePayload
        };
        this.logger.debug(
          `${message.from} send message [${message.payload.method}] to ${message.to}`,
          message.payload.data ? message.payload.data : " "
        );
        let response = await browserAPI.tabs.sendMessage(id, message);
        return handleResponse(message, response, this.logger);
      }
    }
  };
  function handleResponse(message, response, logger) {
    if (response) {
      if (response.ok)
        return logger.debug(
          `${message.from} received response from ${message.to}:`,
          response.data ? response.data : " "
        ), response.data;
      throw new CommonError(
        response.errorName || "UnknownError",
        response.errorMessage || "Unknown error",
        response.errorDetails
      );
    } else
      throw new CommonError(
        "noResponse",
        "Unknown error"
      );
  }
  function parseType(str) {
    let parts = str.split(":");
    if (parts.length < 2)
      throw new Error("not a valid to string");
    let messageTo = {
      type: parts[0],
      name: parts[1]
    };
    if (parts[0] === "content_script") {
      let tabId = parseInt(parts[2]);
      if (!isNaN(tabId))
        messageTo.id = tabId;
      else
        throw new Error("tab id not a valid number");
    }
    return messageTo;
  }

  // utils/md5.js
  function safeAdd(x2, y) {
    var lsw = (x2 & 65535) + (y & 65535), msw = (x2 >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function md5cmn(q3, a, b2, x2, s4, t3) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q3), safeAdd(x2, t3)), s4), b2);
  }
  function md5ff(a, b2, c3, d2, x2, s4, t3) {
    return md5cmn(b2 & c3 | ~b2 & d2, a, b2, x2, s4, t3);
  }
  function md5gg(a, b2, c3, d2, x2, s4, t3) {
    return md5cmn(b2 & d2 | c3 & ~d2, a, b2, x2, s4, t3);
  }
  function md5hh(a, b2, c3, d2, x2, s4, t3) {
    return md5cmn(b2 ^ c3 ^ d2, a, b2, x2, s4, t3);
  }
  function md5ii(a, b2, c3, d2, x2, s4, t3) {
    return md5cmn(c3 ^ (b2 | ~d2), a, b2, x2, s4, t3);
  }
  function binlMD5(x2, len) {
    x2[len >> 5] |= 128 << len % 32, x2[(len + 64 >>> 9 << 4) + 14] = len;
    var i, olda, oldb, oldc, oldd, a = 1732584193, b2 = -271733879, c3 = -1732584194, d2 = 271733878;
    for (i = 0; i < x2.length; i += 16)
      olda = a, oldb = b2, oldc = c3, oldd = d2, a = md5ff(a, b2, c3, d2, x2[i], 7, -680876936), d2 = md5ff(d2, a, b2, c3, x2[i + 1], 12, -389564586), c3 = md5ff(c3, d2, a, b2, x2[i + 2], 17, 606105819), b2 = md5ff(b2, c3, d2, a, x2[i + 3], 22, -1044525330), a = md5ff(a, b2, c3, d2, x2[i + 4], 7, -176418897), d2 = md5ff(d2, a, b2, c3, x2[i + 5], 12, 1200080426), c3 = md5ff(c3, d2, a, b2, x2[i + 6], 17, -1473231341), b2 = md5ff(b2, c3, d2, a, x2[i + 7], 22, -45705983), a = md5ff(a, b2, c3, d2, x2[i + 8], 7, 1770035416), d2 = md5ff(d2, a, b2, c3, x2[i + 9], 12, -1958414417), c3 = md5ff(c3, d2, a, b2, x2[i + 10], 17, -42063), b2 = md5ff(b2, c3, d2, a, x2[i + 11], 22, -1990404162), a = md5ff(a, b2, c3, d2, x2[i + 12], 7, 1804603682), d2 = md5ff(d2, a, b2, c3, x2[i + 13], 12, -40341101), c3 = md5ff(c3, d2, a, b2, x2[i + 14], 17, -1502002290), b2 = md5ff(b2, c3, d2, a, x2[i + 15], 22, 1236535329), a = md5gg(a, b2, c3, d2, x2[i + 1], 5, -165796510), d2 = md5gg(d2, a, b2, c3, x2[i + 6], 9, -1069501632), c3 = md5gg(c3, d2, a, b2, x2[i + 11], 14, 643717713), b2 = md5gg(b2, c3, d2, a, x2[i], 20, -373897302), a = md5gg(a, b2, c3, d2, x2[i + 5], 5, -701558691), d2 = md5gg(d2, a, b2, c3, x2[i + 10], 9, 38016083), c3 = md5gg(c3, d2, a, b2, x2[i + 15], 14, -660478335), b2 = md5gg(b2, c3, d2, a, x2[i + 4], 20, -405537848), a = md5gg(a, b2, c3, d2, x2[i + 9], 5, 568446438), d2 = md5gg(d2, a, b2, c3, x2[i + 14], 9, -1019803690), c3 = md5gg(c3, d2, a, b2, x2[i + 3], 14, -187363961), b2 = md5gg(b2, c3, d2, a, x2[i + 8], 20, 1163531501), a = md5gg(a, b2, c3, d2, x2[i + 13], 5, -1444681467), d2 = md5gg(d2, a, b2, c3, x2[i + 2], 9, -51403784), c3 = md5gg(c3, d2, a, b2, x2[i + 7], 14, 1735328473), b2 = md5gg(b2, c3, d2, a, x2[i + 12], 20, -1926607734), a = md5hh(a, b2, c3, d2, x2[i + 5], 4, -378558), d2 = md5hh(d2, a, b2, c3, x2[i + 8], 11, -2022574463), c3 = md5hh(c3, d2, a, b2, x2[i + 11], 16, 1839030562), b2 = md5hh(b2, c3, d2, a, x2[i + 14], 23, -35309556), a = md5hh(a, b2, c3, d2, x2[i + 1], 4, -1530992060), d2 = md5hh(d2, a, b2, c3, x2[i + 4], 11, 1272893353), c3 = md5hh(c3, d2, a, b2, x2[i + 7], 16, -155497632), b2 = md5hh(b2, c3, d2, a, x2[i + 10], 23, -1094730640), a = md5hh(a, b2, c3, d2, x2[i + 13], 4, 681279174), d2 = md5hh(d2, a, b2, c3, x2[i], 11, -358537222), c3 = md5hh(c3, d2, a, b2, x2[i + 3], 16, -722521979), b2 = md5hh(b2, c3, d2, a, x2[i + 6], 23, 76029189), a = md5hh(a, b2, c3, d2, x2[i + 9], 4, -640364487), d2 = md5hh(d2, a, b2, c3, x2[i + 12], 11, -421815835), c3 = md5hh(c3, d2, a, b2, x2[i + 15], 16, 530742520), b2 = md5hh(b2, c3, d2, a, x2[i + 2], 23, -995338651), a = md5ii(a, b2, c3, d2, x2[i], 6, -198630844), d2 = md5ii(d2, a, b2, c3, x2[i + 7], 10, 1126891415), c3 = md5ii(c3, d2, a, b2, x2[i + 14], 15, -1416354905), b2 = md5ii(b2, c3, d2, a, x2[i + 5], 21, -57434055), a = md5ii(a, b2, c3, d2, x2[i + 12], 6, 1700485571), d2 = md5ii(d2, a, b2, c3, x2[i + 3], 10, -1894986606), c3 = md5ii(c3, d2, a, b2, x2[i + 10], 15, -1051523), b2 = md5ii(b2, c3, d2, a, x2[i + 1], 21, -2054922799), a = md5ii(a, b2, c3, d2, x2[i + 8], 6, 1873313359), d2 = md5ii(d2, a, b2, c3, x2[i + 15], 10, -30611744), c3 = md5ii(c3, d2, a, b2, x2[i + 6], 15, -1560198380), b2 = md5ii(b2, c3, d2, a, x2[i + 13], 21, 1309151649), a = md5ii(a, b2, c3, d2, x2[i + 4], 6, -145523070), d2 = md5ii(d2, a, b2, c3, x2[i + 11], 10, -1120210379), c3 = md5ii(c3, d2, a, b2, x2[i + 2], 15, 718787259), b2 = md5ii(b2, c3, d2, a, x2[i + 9], 21, -343485551), a = safeAdd(a, olda), b2 = safeAdd(b2, oldb), c3 = safeAdd(c3, oldc), d2 = safeAdd(d2, oldd);
    return [a, b2, c3, d2];
  }
  function binl2rstr(input) {
    var i, output = "", length32 = input.length * 32;
    for (i = 0; i < length32; i += 8)
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
    return output;
  }
  function rstr2binl(input) {
    var i, output = [];
    for (output[(input.length >> 2) - 1] = void 0, i = 0; i < output.length; i += 1)
      output[i] = 0;
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8)
      output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
    return output;
  }
  function rstrMD5(s4) {
    return binl2rstr(binlMD5(rstr2binl(s4), s4.length * 8));
  }
  function rstrHMACMD5(key, data) {
    var i, bkey = rstr2binl(key), ipad = [], opad = [], hash;
    for (ipad[15] = opad[15] = void 0, bkey.length > 16 && (bkey = binlMD5(bkey, key.length * 8)), i = 0; i < 16; i += 1)
      ipad[i] = bkey[i] ^ 909522486, opad[i] = bkey[i] ^ 1549556828;
    return hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8), binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }
  function rstr2hex(input) {
    var hexTab = "0123456789abcdef", output = "", x2, i;
    for (i = 0; i < input.length; i += 1)
      x2 = input.charCodeAt(i), output += hexTab.charAt(x2 >>> 4 & 15) + hexTab.charAt(x2 & 15);
    return output;
  }
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }
  function rawMD5(s4) {
    return rstrMD5(str2rstrUTF8(s4));
  }
  function hexMD5(s4) {
    return rstr2hex(rawMD5(s4));
  }
  function rawHMACMD5(k2, d2) {
    return rstrHMACMD5(str2rstrUTF8(k2), str2rstrUTF8(d2));
  }
  function hexHMACMD5(k2, d2) {
    return rstr2hex(rawHMACMD5(k2, d2));
  }
  function md5(string, key, raw) {
    return key ? raw ? rawHMACMD5(key, string) : hexHMACMD5(key, string) : raw ? rawMD5(string) : hexMD5(string);
  }

  // services/util.ts
  function humanReadableSize(bytes) {
    if (Math.abs(bytes) < 1024)
      return bytes + " Byte";
    let units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], u2 = -1;
    do
      bytes /= 1024, ++u2;
    while (Math.abs(bytes) >= 1024 && u2 < units.length - 1);
    return bytes.toFixed(1) + " " + units[u2];
  }

  // services/cache.ts
  var dbNames = [];
  async function openIndexedDB(dbName, _storageName) {
    return await new Promise((resolve, reject) => {
      let name = dbName, version = 1, request2 = indexedDB.open(name, version);
      request2.onsuccess = (_event) => {
        resolve(request2.result);
      }, request2.onerror = (event) => {
        reject();
      }, request2.onupgradeneeded = (_event) => {
        let db = request2.result, storageName = _storageName || "cache";
        db.createObjectStore(storageName, {
          keyPath: "key"
        });
      };
    });
  }
  async function setParagraphCache(payload) {
    let storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
    return await addInDB(storageName, payload);
  }
  async function queryParagraphCache(payload) {
    let payload_hash = md5(payload.originalText), storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
    return await queryInDB(storageName, payload_hash);
  }
  async function queryInDB(dbName, origTextHash) {
    let db = await openIndexedDB(dbName);
    return await new Promise((resolve, reject) => {
      if (!db)
        return reject();
      let storageName = "cache", request2 = db.transaction([storageName], "readonly").objectStore(storageName).get(origTextHash);
      request2.onsuccess = (_event) => {
        db.close();
        let result = request2.result;
        resolve(result);
      }, request2.onerror = (event) => {
        db.close(), reject();
      };
    });
  }
  async function addInDB(dbName, cacheEntry) {
    let db = await openIndexedDB(dbName);
    return (await getAllDBNames()).includes(dbName) || await addCacheList(dbName), await new Promise((resolve) => {
      if (!db)
        return resolve(!1);
      let storageName = "cache", request2 = db.transaction([storageName], "readwrite").objectStore(storageName).put(cacheEntry);
      request2.onsuccess = (_event) => {
        db.close(), resolve(!0);
      }, request2.onerror = (event) => {
        db.close(), resolve(!1);
      };
    });
  }
  async function addCacheList(dbName) {
    let storageName = "cache_list", db = await openIndexedDB(brandId + "-cacheList", storageName), request2 = db.transaction([storageName], "readwrite").objectStore(storageName).put({ key: dbName });
    request2.onsuccess = (_event) => {
      db.close(), dbNames.push(dbName);
    }, request2.onerror = (event) => {
      db.close();
    };
  }
  async function getAllDBNames() {
    if (dbNames && dbNames.length > 0)
      return dbNames;
    let db = await openIndexedDB(brandId + "-cacheList", "cache_list");
    return dbNames = await new Promise((resolve) => {
      let storageName = "cache_list", request2 = db.transaction([storageName], "readonly").objectStore(storageName).getAllKeys();
      request2.onsuccess = (_event) => {
        db.close(), resolve(request2.result);
      }, request2.onerror = (event) => {
        db.close(), resolve([]);
      };
    }), dbNames;
  }
  async function calculateSize() {
    try {
      let promises = [];
      (await getAllDBNames()).forEach((dbName) => {
        promises.push(getDatabaseSize(dbName));
      });
      let results = await Promise.all(promises);
      return humanReadableSize(
        results.reduce((total, size) => total + size, 0)
      );
    } catch {
      return humanReadableSize(0);
    }
  }
  async function getDatabaseSize(dbName) {
    let db = await openIndexedDB(dbName), tableSizeGetters = [...db.objectStoreNames].reduce(
      (acc, tableName) => {
        let tmp = getTableSize(db, tableName);
        return acc.push(tmp), acc;
      },
      []
    ), sizes = await Promise.all(tableSizeGetters);
    return db.close(), sizes.reduce((acc, val) => acc + val, 0);
  }
  async function getTableSize(db, storageName) {
    return await new Promise((resolve, reject) => {
      if (db == null)
        return reject();
      let size = 0, transaction = db.transaction([storageName]).objectStore(storageName).openCursor();
      transaction.onsuccess = (_event) => {
        let cursor = transaction.result;
        if (cursor) {
          let storedObject = cursor.value, json = JSON.stringify(storedObject);
          size += json.length, cursor.continue();
        } else
          resolve(size);
      }, transaction.onerror = (err) => reject("error in " + storageName + ": " + err);
    });
  }

  // background_message_listeners.ts
  var connection, messageHandler = async function(payload, author) {
    let { method, data } = payload;
    if (log_default.debug("background received message", method, data || " "), method === "mock")
      await delay(150);
    else {
      if (method === "queryParagraphCache")
        return queryParagraphCache(data);
      if (method === "setParagraphCache")
        return setParagraphCache(data);
      if (method === "calculateSize")
        return calculateSize();
      if (method === "fetch")
        return request(data);
      if (method === "getConfig")
        return getConfig();
      if (method === "getLocalConfig")
        return getLocalConfig();
      if (method === "openOptionsPage")
        if (isSafari()) {
          let optionsUrl = getEnv().OPTIONS_URL;
          browserAPI.tabs.create({
            url: optionsUrl
          });
        } else {
          let optionsUrl = browserAPI.runtime.getURL("options.html"), pageRoute = data && data.pageRoute ? data.pageRoute : "";
          pageRoute = pageRoute || "", browserAPI.tabs.create({
            url: optionsUrl + pageRoute
          });
        }
      else if (method === "openAboutPage")
        if (isSafari()) {
          let optionsUrl = getEnv().OPTIONS_URL;
          browserAPI.tabs.create({
            url: optionsUrl + "#about"
          });
        } else
          browserAPI.tabs.create({
            url: browserAPI.runtime.getURL("options.html#about")
          });
      else if (method === "openEbookViewerPage")
        browserAPI.tabs.create({
          url: browserAPI.runtime.getURL("ebook/index.html")
        });
      else if (method === "openSubtitleBuilderPage") {
        let url = browserAPI.runtime.getURL("ebook/subtitle/index.html");
        isSafari() && (url = getEnv().SUBTITLE_BUILDER_URL), browserAPI.tabs.create({
          url
        });
      } else if (method === "openEbookBuilderPage") {
        let url = browserAPI.runtime.getURL("ebook/make/index.html");
        isSafari() && (url = getEnv().EBOOK_BUILDER_URL), browserAPI.tabs.create({
          url
        });
      } else if (method === "openPdfViewerPage") {
        let url = browserAPI.runtime.getURL("pdf/index.html");
        browserAPI.tabs.create({
          url
        });
      } else {
        if (method === "setLocalConfig")
          return setLocalConfig(data);
        if (method === "detectLanguage") {
          let { text, minLength } = data;
          if (!minLength && minLength !== 0 && (minLength = 50), text.length <= minLength)
            return "auto";
          if (browserAPI.i18n && browserAPI.i18n.detectLanguage)
            try {
              let result = await browserAPI.i18n.detectLanguage(
                text
              );
              return result.languages.length > 0 ? formatLanguage(result.languages[0].language) : "auto";
            } catch (e) {
              return log_default.debug("detect language error", e), "auto";
            }
          else
            return "auto";
        } else if (method === "detectTabLanguage")
          try {
            let lang = await browserAPI.tabs.detectLanguage(
              author.id
            );
            return formatLanguage(lang);
          } catch (e) {
            return log_default.debug("detect tab language error, use auto ", e), "auto";
          }
        else if (method === "autoSyncLatestConfig") {
          try {
            await autoSyncLatestConfig();
          } catch (e) {
            log_default.debug("auto sync latest config error", e);
          }
          return "";
        }
      }
    }
  };
  function steupMessageListeners() {
    getConnection();
    let manifest = browserAPI.runtime.getManifest();
    if (manifest.manifest_version > 2, manifest.manifest_version === 2 && browserAPI.webRequest && browserAPI.webRequest.onBeforeSendHeaders) {
      let urlsFilter = request_modifier_rule_default.map(
        (item) => item.condition.urlFilter
      ), types = request_modifier_rule_default.reduce((acc, item) => (item.condition.resourceTypes.forEach((type) => {
        acc.includes(type) || acc.push(type);
      }), acc), []);
      browserAPI.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          if (!(details.originUrl && details.originUrl.startsWith("http")) && details.originUrl && details.requestHeaders)
            for (let i = 0; i < urlsFilter.length; i++) {
              let rule = request_modifier_rule_default[i];
              if (rule.condition.urlFilter && isMatchUrl(details.url, rule.condition.urlFilter))
                return { requestHeaders: formatHeadersByRule(
                  details.requestHeaders,
                  rule.action.requestHeaders
                ) };
            }
        },
        // @ts-ignore: it's ok
        { urls: urlsFilter, types },
        ["blocking", "requestHeaders"]
      );
    }
  }
  function getConnection() {
    return connection || (connection = new Messager("background", !1).getConnection("main", messageHandler), connection);
  }

  // background_command_listeners.ts
  function setupCommandListeners() {
    typeof browserAPI.commands < "u" && browserAPI.commands.onCommand.addListener(async (command) => {
      if (log_default.debug(`received command: ${command}`), ["toggleTranslatePage"].includes(command)) {
        let tab = await browserAPI.tabs.query({
          active: !0,
          currentWindow: !0
        });
        if (tab.length === 0 || typeof tab[0].id > "u")
          return;
        let tabUrl = tab[0].url;
        if (isPdfUrl(tabUrl)) {
          browserAPI.tabs.create({
            url: formatToPdfViewerUrl(tabUrl)
          });
          return;
        }
      }
      await sendMessageToContent({
        method: command
      });
    });
  }
  async function sendMessageToContent(request2) {
    let tabId = (await browserAPI.tabs.query({
      currentWindow: !0,
      active: !0
    }))[0].id;
    getConnection().sendMessage(`content_script:main:${tabId}`, request2).catch((e) => {
      log_default.error("send content message request failed", request2, e);
    });
  }

  // libs/preact-translation/utils.ts
  function format(str, params) {
    let result = str;
    return params && Object.keys(params).forEach((key) => {
      let rawValue = params[key], keyIsNumber = isNumber(key);
      if (typeof rawValue == "object" || keyIsNumber) {
        let value = rawValue;
        keyIsNumber && typeof value == "string" && (value = {
          tag: "a",
          href: value,
          target: "_blank"
        });
        let tag = `<${key}>`, tagIndex = result.indexOf(tag);
        if (tagIndex !== -1) {
          let actualTag = value.tag || "a", endIndex = result.indexOf(`</${key}>`);
          if (endIndex !== -1) {
            let html = result.substring(tagIndex + tag.length, endIndex), attrs = Object.keys(value).filter((attr) => attr !== "tag").map((attr) => `${attr}="${value[attr]}"`).join(" ");
            result = result.replace(
              `${tag}${html}</${key}>`,
              `<${actualTag} ${attrs}>${html}</${actualTag}>`
            );
          }
        }
      } else {
        let template = new RegExp("{" + key + "}", "gm");
        result = result.replace(template, rawValue.toString());
      }
    }), result;
  }
  function getValue(languageData, lang, key) {
    let localeData = languageData[lang];
    if (!localeData)
      return key;
    let keys = key.split("."), propKey = "";
    do {
      propKey += keys.shift();
      let value = localeData[propKey];
      value !== void 0 && (typeof value == "object" || !keys.length) ? (localeData = value, propKey = "") : keys.length ? propKey += "." : localeData = key;
    } while (keys.length);
    return localeData;
  }
  function t(data, key, lang, fallbackLang, params) {
    if (!data.hasOwnProperty(lang))
      return key;
    let value = getValue(data, lang, key);
    return value === key && lang !== fallbackLang && (value = getValue(data, fallbackLang, key)), format(value, params);
  }
  function isNumber(value) {
    if (typeof value == "number")
      return !0;
    if (value) {
      let num = parseInt(value);
      return !isNaN(num);
    } else
      return !1;
  }

  // locales.ts
  var internalLocaleMap = {
    "zh-CN": {
      "languages.en": "\u82F1\u8BED",
      "languages.ja": "\u65E5\u8BED",
      "languages.ko": "\u97E9\u8BED",
      "languages.es": "\u897F\u73ED\u7259\u8BED",
      "languages.fr": "\u6CD5\u8BED",
      "languages.de": "\u5FB7\u8BED",
      "languages.it": "\u610F\u5927\u5229\u8BED",
      "languages.pt": "\u8461\u8404\u7259\u8BED",
      "languages.ru": "\u4FC4\u8BED",
      "languages.wyw": "\u6587\u8A00\u6587",
      "languages.<all>": "\u5168\u90E8"
    },
    "zh-TW": {
      "languages.en": "\u82F1\u8A9E",
      "languages.ja": "\u65E5\u8A9E",
      "languages.ko": "\u97D3\u8A9E",
      "languages.es": "\u897F\u73ED\u7259\u8A9E",
      "languages.fr": "\u6CD5\u8A9E",
      "languages.de": "\u5FB7\u8A9E",
      "languages.it": "\u610F\u5927\u5229\u8A9E",
      "languages.pt": "\u8461\u8404\u7259\u8A9E",
      "languages.ru": "\u4FC4\u8A9E",
      "languages.wyw": "\u6587\u8A00\u6587",
      "languages.<all>": "\u5168\u90E8"
    }
  }, finalTranslations = {
    ...translations,
    "zh-CN": {
      ...internalLocaleMap["zh-CN"],
      ...translations["zh-CN"]
    },
    "zh-TW": {
      ...internalLocaleMap["zh-TW"],
      ...translations["zh-TW"]
    }
  };
  function t2(key, interfaceLanguage, params) {
    return t(
      finalTranslations,
      key,
      interfaceLanguage,
      fallbackLanguage,
      params
    );
  }

  // menu.ts
  var actions = isChrome() ? ["action"] : ["browser_action", "page_action"], menus = [
    {
      id: "toggleTranslatePage",
      contexts: ["page", "frame", "selection", ...actions]
    },
    {
      id: contextOpenOptionsMenuId,
      contexts: actions
    },
    {
      id: contextOpenLocalEbookViewer,
      contexts: actions
    },
    {
      id: contextOpenLocalEbookBuilder,
      contexts: actions
    },
    {
      id: contextTranslateLocalPdfFileMenuId,
      contexts: actions
    },
    {
      id: contextDonateMenuId,
      contexts: actions
    }
  ];
  async function createContextMenu(config) {
    log_default.debug("createContextMenu", menus);
    for (let menu of menus) {
      let visible = !0;
      config.isShowContextMenu === !1 && menu.id === "toggleTranslatePage" && (visible = !1);
      try {
        browserAPI.contextMenus.create({
          id: menu.id,
          title: t2(`browser.${menu.id}`, config.interfaceLanguage),
          contexts: menu.contexts,
          visible
        }, () => browserAPI.runtime.lastError);
      } catch (e) {
        log_default.debug(
          "create context menu error, it's ok!!",
          e,
          `menu id: ${menu.id}`
        );
      }
    }
  }
  function setupContextMenuListeners() {
    browserAPI.contextMenus.onClicked.addListener(
      (info) => {
        if (info.menuItemId === contextOpenOptionsMenuId)
          if (isSafari()) {
            let optionsUrl = getEnv().OPTIONS_URL;
            browserAPI.tabs.create({
              url: optionsUrl
            });
          } else
            browserAPI.runtime.openOptionsPage();
        else if (info.menuItemId === contextTranslateLocalPdfFileMenuId) {
          let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl);
          browserAPI.tabs.create({
            url: pdfViewerRuntimeUrl
          });
        } else if (info.menuItemId === contextOpenLocalEbookBuilder) {
          let url = browserAPI.runtime.getURL(epubBuilderUrl);
          isSafari() && (url = getEnv().EBOOK_BUILDER_URL), browserAPI.tabs.create({
            url
          });
        } else if (info.menuItemId === contextOpenLocalEbookViewer)
          browserAPI.tabs.create({
            url: browserAPI.runtime.getURL(epubViewerUrl)
          });
        else if (info.menuItemId === contextOpenLocalSubtitleBuilder) {
          let url = browserAPI.runtime.getURL(subtitleBuilderUrl);
          isSafari() && (url = getEnv().SUBTITLE_BUILDER_URL), browserAPI.tabs.create({
            url
          });
        } else
          info.menuItemId === contextDonateMenuId ? browserAPI.tabs.create({
            url: "https://immersive-translate.owenyoung.com/donate"
          }) : sendMessageToContent({
            method: info.menuItemId
          });
      }
    );
  }

  // store.ts
  var CACHE_KEY_PREFIX = brandIdForJs + "StoreKey_";
  function get(rawKey, defaultValue) {
    let key = CACHE_KEY_PREFIX + rawKey;
    return browserAPI.storage.local.get(key).then((result) => result[key] === void 0 ? defaultValue : result[key]);
  }
  function set(rawKey, value) {
    let key = CACHE_KEY_PREFIX + rawKey;
    return browserAPI.storage.local.set({ [key]: value });
  }

  // browser_updated_listeners.ts
  function onUpdated() {
    tryToCreateContextMenu();
  }
  function tryToCreateContextMenu() {
    getConfig().then((config) => {
      createContextMenu(config);
    }).catch((e) => {
      log_default.error("create menu error", e);
    });
  }
  function setupOnInstalledListener() {
    browserAPI.runtime.onInstalled.addListener((details) => {
      log_default.debug(`onInstalled reason: ${details.reason}`), log_default.debug(details), details.reason == "install" ? (get("hasRun", !1).then(
        (hasRun) => {
          hasRun || (browserAPI.tabs.create({
            url: "https://immersive-translate.owenyoung.com/start/"
          }), set("hasRun", !0).catch((e) => {
            log_default.error("set hasRun error", e);
          }));
        }
      ), onUpdated()) : (details.reason == "update" && browserAPI.runtime.getManifest().version != details.previousVersion, onUpdated());
    });
  }

  // background.ts
  steupMessageListeners();
  setupOnInstalledListener();
  setupCommandListeners();
  browserAPI.contextMenus && setupContextMenuListeners();
  async function mainAsync() {
    browserAPI.contextMenus && tryToCreateContextMenu(), (await getConfig()).debug && log_default.setLevel("debug");
  }
  mainAsync().catch((e) => {
  });
})();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
