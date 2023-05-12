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
    "../esmd/npm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
      (function(global2, factory) {
        if (typeof define == "function" && define.amd)
          define("webextension-polyfill", ["module"], factory);
        else if (typeof exports2 < "u")
          factory(module2);
        else {
          var mod = {
            exports: {}
          };
          factory(mod), global2.browser = mod.exports;
        }
      })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : exports2, function(module22) {
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
              let cache2 = /* @__PURE__ */ Object.create(null), handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache2;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache2)
                    return cache2[prop];
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
                    return Object.defineProperty(cache2, prop, {
                      configurable: !0,
                      enumerable: !0,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    }), value;
                  return cache2[prop] = value, value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  return prop in cache2 ? cache2[prop] = value : target[prop] = value, !0;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache2, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache2, prop);
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
          module22.exports = wrapAPIs(chrome);
        } else
          module22.exports = globalThis.browser;
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

  // https://esm.sh/stable/preact@10.11.0/deno/preact.mjs
  var P, d, $, Y, S, F, B, T = {}, V = [], Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function k(e, t2) {
    for (var _2 in t2)
      e[_2] = t2[_2];
    return e;
  }
  function j(e) {
    var t2 = e.parentNode;
    t2 && t2.removeChild(e);
  }
  function ee(e, t2, _2) {
    var r, l2, o2, s4 = {};
    for (o2 in t2)
      o2 == "key" ? r = t2[o2] : o2 == "ref" ? l2 = t2[o2] : s4[o2] = t2[o2];
    if (arguments.length > 2 && (s4.children = arguments.length > 3 ? P.call(arguments, 2) : _2), typeof e == "function" && e.defaultProps != null)
      for (o2 in e.defaultProps)
        s4[o2] === void 0 && (s4[o2] = e.defaultProps[o2]);
    return w(e, s4, r, l2, null);
  }
  function w(e, t2, _2, r, l2) {
    var o2 = { type: e, props: t2, key: _2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l2 ?? ++$ };
    return l2 == null && d.vnode != null && d.vnode(o2), o2;
  }
  function L(e) {
    return e.children;
  }
  function U(e, t2) {
    this.props = e, this.context = t2;
  }
  function C(e, t2) {
    if (t2 == null)
      return e.__ ? C(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var _2; t2 < e.__k.length; t2++)
      if ((_2 = e.__k[t2]) != null && _2.__e != null)
        return _2.__e;
    return typeof e.type == "function" ? C(e) : null;
  }
  function z(e) {
    var t2, _2;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t2 = 0; t2 < e.__k.length; t2++)
        if ((_2 = e.__k[t2]) != null && _2.__e != null) {
          e.__e = e.__c.base = _2.__e;
          break;
        }
      return z(e);
    }
  }
  function M(e) {
    (!e.__d && (e.__d = !0) && S.push(e) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
  }
  function D() {
    for (var e; D.__r = S.length; )
      e = S.sort(function(t2, _2) {
        return t2.__v.__b - _2.__v.__b;
      }), S = [], e.some(function(t2) {
        var _2, r, l2, o2, s4, f3;
        t2.__d && (s4 = (o2 = (_2 = t2).__v).__e, (f3 = _2.__P) && (r = [], (l2 = k({}, o2)).__v = o2.__v + 1, W(f3, o2, l2, _2.__n, f3.ownerSVGElement !== void 0, o2.__h != null ? [s4] : null, r, s4 ?? C(o2), o2.__h), K(r, o2), o2.__e != s4 && z(o2)));
      });
  }
  function G(e, t2, _2, r, l2, o2, s4, f3, p4, a3) {
    var n2, h2, c3, i2, u2, b3, v4, y = r && r.__k || V, g4 = y.length;
    for (_2.__k = [], n2 = 0; n2 < t2.length; n2++)
      if ((i2 = _2.__k[n2] = (i2 = t2[n2]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? w(null, i2, null, null, i2) : Array.isArray(i2) ? w(L, { children: i2 }, null, null, null) : i2.__b > 0 ? w(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) != null) {
        if (i2.__ = _2, i2.__b = _2.__b + 1, (c3 = y[n2]) === null || c3 && i2.key == c3.key && i2.type === c3.type)
          y[n2] = void 0;
        else
          for (h2 = 0; h2 < g4; h2++) {
            if ((c3 = y[h2]) && i2.key == c3.key && i2.type === c3.type) {
              y[h2] = void 0;
              break;
            }
            c3 = null;
          }
        W(e, i2, c3 = c3 || T, l2, o2, s4, f3, p4, a3), u2 = i2.__e, (h2 = i2.ref) && c3.ref != h2 && (v4 || (v4 = []), c3.ref && v4.push(c3.ref, null, i2), v4.push(h2, i2.__c || u2, i2)), u2 != null ? (b3 == null && (b3 = u2), typeof i2.type == "function" && i2.__k === c3.__k ? i2.__d = p4 = q(i2, p4, e) : p4 = J(e, i2, c3, y, u2, p4), typeof _2.type == "function" && (_2.__d = p4)) : p4 && c3.__e == p4 && p4.parentNode != e && (p4 = C(c3));
      }
    for (_2.__e = b3, n2 = g4; n2--; )
      y[n2] != null && (typeof _2.type == "function" && y[n2].__e != null && y[n2].__e == _2.__d && (_2.__d = C(r, n2 + 1)), X(y[n2], y[n2]));
    if (v4)
      for (n2 = 0; n2 < v4.length; n2++)
        Q(v4[n2], v4[++n2], v4[++n2]);
  }
  function q(e, t2, _2) {
    for (var r, l2 = e.__k, o2 = 0; l2 && o2 < l2.length; o2++)
      (r = l2[o2]) && (r.__ = e, t2 = typeof r.type == "function" ? q(r, t2, _2) : J(_2, r, r, l2, r.__e, t2));
    return t2;
  }
  function J(e, t2, _2, r, l2, o2) {
    var s4, f3, p4;
    if (t2.__d !== void 0)
      s4 = t2.__d, t2.__d = void 0;
    else if (_2 == null || l2 != o2 || l2.parentNode == null)
      e:
        if (o2 == null || o2.parentNode !== e)
          e.appendChild(l2), s4 = null;
        else {
          for (f3 = o2, p4 = 0; (f3 = f3.nextSibling) && p4 < r.length; p4 += 2)
            if (f3 == l2)
              break e;
          e.insertBefore(l2, o2), s4 = o2;
        }
    return s4 !== void 0 ? s4 : l2.nextSibling;
  }
  function _e(e, t2, _2, r, l2) {
    var o2;
    for (o2 in _2)
      o2 === "children" || o2 === "key" || o2 in t2 || N(e, o2, null, _2[o2], r);
    for (o2 in t2)
      l2 && typeof t2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || _2[o2] === t2[o2] || N(e, o2, t2[o2], _2[o2], r);
  }
  function I(e, t2, _2) {
    t2[0] === "-" ? e.setProperty(t2, _2) : e[t2] = _2 == null ? "" : typeof _2 != "number" || Z.test(t2) ? _2 : _2 + "px";
  }
  function N(e, t2, _2, r, l2) {
    var o2;
    e:
      if (t2 === "style")
        if (typeof _2 == "string")
          e.style.cssText = _2;
        else {
          if (typeof r == "string" && (e.style.cssText = r = ""), r)
            for (t2 in r)
              _2 && t2 in _2 || I(e.style, t2, "");
          if (_2)
            for (t2 in _2)
              r && _2[t2] === r[t2] || I(e.style, t2, _2[t2]);
        }
      else if (t2[0] === "o" && t2[1] === "n")
        o2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e ? t2.toLowerCase().slice(2) : t2.slice(2), e.l || (e.l = {}), e.l[t2 + o2] = _2, _2 ? r || e.addEventListener(t2, o2 ? R : O, o2) : e.removeEventListener(t2, o2 ? R : O, o2);
      else if (t2 !== "dangerouslySetInnerHTML") {
        if (l2)
          t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t2 !== "href" && t2 !== "list" && t2 !== "form" && t2 !== "tabIndex" && t2 !== "download" && t2 in e)
          try {
            e[t2] = _2 ?? "";
            break e;
          } catch {
          }
        typeof _2 == "function" || (_2 != null && (_2 !== !1 || t2[0] === "a" && t2[1] === "r") ? e.setAttribute(t2, _2) : e.removeAttribute(t2));
      }
  }
  function O(e) {
    this.l[e.type + !1](d.event ? d.event(e) : e);
  }
  function R(e) {
    this.l[e.type + !0](d.event ? d.event(e) : e);
  }
  function W(e, t2, _2, r, l2, o2, s4, f3, p4) {
    var a3, n2, h2, c3, i2, u2, b3, v4, y, g4, x3, H4, E3, m3 = t2.type;
    if (t2.constructor !== void 0)
      return null;
    _2.__h != null && (p4 = _2.__h, f3 = t2.__e = _2.__e, t2.__h = null, o2 = [f3]), (a3 = d.__b) && a3(t2);
    try {
      e:
        if (typeof m3 == "function") {
          if (v4 = t2.props, y = (a3 = m3.contextType) && r[a3.__c], g4 = a3 ? y ? y.props.value : a3.__ : r, _2.__c ? b3 = (n2 = t2.__c = _2.__c).__ = n2.__E : ("prototype" in m3 && m3.prototype.render ? t2.__c = n2 = new m3(v4, g4) : (t2.__c = n2 = new U(v4, g4), n2.constructor = m3, n2.render = oe), y && y.sub(n2), n2.props = v4, n2.state || (n2.state = {}), n2.context = g4, n2.__n = r, h2 = n2.__d = !0, n2.__h = []), n2.__s == null && (n2.__s = n2.state), m3.getDerivedStateFromProps != null && (n2.__s == n2.state && (n2.__s = k({}, n2.__s)), k(n2.__s, m3.getDerivedStateFromProps(v4, n2.__s))), c3 = n2.props, i2 = n2.state, h2)
            m3.getDerivedStateFromProps == null && n2.componentWillMount != null && n2.componentWillMount(), n2.componentDidMount != null && n2.__h.push(n2.componentDidMount);
          else {
            if (m3.getDerivedStateFromProps == null && v4 !== c3 && n2.componentWillReceiveProps != null && n2.componentWillReceiveProps(v4, g4), !n2.__e && n2.shouldComponentUpdate != null && n2.shouldComponentUpdate(v4, n2.__s, g4) === !1 || t2.__v === _2.__v) {
              n2.props = v4, n2.state = n2.__s, t2.__v !== _2.__v && (n2.__d = !1), n2.__v = t2, t2.__e = _2.__e, t2.__k = _2.__k, t2.__k.forEach(function(A3) {
                A3 && (A3.__ = t2);
              }), n2.__h.length && s4.push(n2);
              break e;
            }
            n2.componentWillUpdate != null && n2.componentWillUpdate(v4, n2.__s, g4), n2.componentDidUpdate != null && n2.__h.push(function() {
              n2.componentDidUpdate(c3, i2, u2);
            });
          }
          if (n2.context = g4, n2.props = v4, n2.__v = t2, n2.__P = e, x3 = d.__r, H4 = 0, "prototype" in m3 && m3.prototype.render)
            n2.state = n2.__s, n2.__d = !1, x3 && x3(t2), a3 = n2.render(n2.props, n2.state, n2.context);
          else
            do
              n2.__d = !1, x3 && x3(t2), a3 = n2.render(n2.props, n2.state, n2.context), n2.state = n2.__s;
            while (n2.__d && ++H4 < 25);
          n2.state = n2.__s, n2.getChildContext != null && (r = k(k({}, r), n2.getChildContext())), h2 || n2.getSnapshotBeforeUpdate == null || (u2 = n2.getSnapshotBeforeUpdate(c3, i2)), E3 = a3 != null && a3.type === L && a3.key == null ? a3.props.children : a3, G(e, Array.isArray(E3) ? E3 : [E3], t2, _2, r, l2, o2, s4, f3, p4), n2.base = t2.__e, t2.__h = null, n2.__h.length && s4.push(n2), b3 && (n2.__E = n2.__ = null), n2.__e = !1;
        } else
          o2 == null && t2.__v === _2.__v ? (t2.__k = _2.__k, t2.__e = _2.__e) : t2.__e = ne(_2.__e, t2, _2, r, l2, o2, s4, p4);
      (a3 = d.diffed) && a3(t2);
    } catch (A3) {
      t2.__v = null, (p4 || o2 != null) && (t2.__e = f3, t2.__h = !!p4, o2[o2.indexOf(f3)] = null), d.__e(A3, t2, _2);
    }
  }
  function K(e, t2) {
    d.__c && d.__c(t2, e), e.some(function(_2) {
      try {
        e = _2.__h, _2.__h = [], e.some(function(r) {
          r.call(_2);
        });
      } catch (r) {
        d.__e(r, _2.__v);
      }
    });
  }
  function ne(e, t2, _2, r, l2, o2, s4, f3) {
    var p4, a3, n2, h2 = _2.props, c3 = t2.props, i2 = t2.type, u2 = 0;
    if (i2 === "svg" && (l2 = !0), o2 != null) {
      for (; u2 < o2.length; u2++)
        if ((p4 = o2[u2]) && "setAttribute" in p4 == !!i2 && (i2 ? p4.localName === i2 : p4.nodeType === 3)) {
          e = p4, o2[u2] = null;
          break;
        }
    }
    if (e == null) {
      if (i2 === null)
        return document.createTextNode(c3);
      e = l2 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c3.is && c3), o2 = null, f3 = !1;
    }
    if (i2 === null)
      h2 === c3 || f3 && e.data === c3 || (e.data = c3);
    else {
      if (o2 = o2 && P.call(e.childNodes), a3 = (h2 = _2.props || T).dangerouslySetInnerHTML, n2 = c3.dangerouslySetInnerHTML, !f3) {
        if (o2 != null)
          for (h2 = {}, u2 = 0; u2 < e.attributes.length; u2++)
            h2[e.attributes[u2].name] = e.attributes[u2].value;
        (n2 || a3) && (n2 && (a3 && n2.__html == a3.__html || n2.__html === e.innerHTML) || (e.innerHTML = n2 && n2.__html || ""));
      }
      if (_e(e, c3, h2, l2, f3), n2)
        t2.__k = [];
      else if (u2 = t2.props.children, G(e, Array.isArray(u2) ? u2 : [u2], t2, _2, r, l2 && i2 !== "foreignObject", o2, s4, o2 ? o2[0] : _2.__k && C(_2, 0), f3), o2 != null)
        for (u2 = o2.length; u2--; )
          o2[u2] != null && j(o2[u2]);
      f3 || ("value" in c3 && (u2 = c3.value) !== void 0 && (u2 !== e.value || i2 === "progress" && !u2 || i2 === "option" && u2 !== h2.value) && N(e, "value", u2, h2.value, !1), "checked" in c3 && (u2 = c3.checked) !== void 0 && u2 !== e.checked && N(e, "checked", u2, h2.checked, !1));
    }
    return e;
  }
  function Q(e, t2, _2) {
    try {
      typeof e == "function" ? e(t2) : e.current = t2;
    } catch (r) {
      d.__e(r, _2);
    }
  }
  function X(e, t2, _2) {
    var r, l2;
    if (d.unmount && d.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Q(r, null, t2)), (r = e.__c) != null) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (o2) {
          d.__e(o2, t2);
        }
      r.base = r.__P = null, e.__c = void 0;
    }
    if (r = e.__k)
      for (l2 = 0; l2 < r.length; l2++)
        r[l2] && X(r[l2], t2, typeof e.type != "function");
    _2 || e.__e == null || j(e.__e), e.__ = e.__e = e.__d = void 0;
  }
  function oe(e, t2, _2) {
    return this.constructor(e, _2);
  }
  function re(e, t2, _2) {
    var r, l2, o2;
    d.__ && d.__(e, t2), l2 = (r = typeof _2 == "function") ? null : _2 && _2.__k || t2.__k, o2 = [], W(t2, e = (!r && _2 || t2).__k = ee(L, null, [e]), l2 || T, T, t2.ownerSVGElement !== void 0, !r && _2 ? [_2] : l2 ? null : t2.firstChild ? P.call(t2.childNodes) : null, o2, !r && _2 ? _2 : l2 ? l2.__e : t2.firstChild, r), K(o2, e);
  }
  function ce(e, t2) {
    var _2 = { __c: t2 = "__cC" + B++, __: e, Consumer: function(r, l2) {
      return r.children(l2);
    }, Provider: function(r) {
      var l2, o2;
      return this.getChildContext || (l2 = [], (o2 = {})[t2] = this, this.getChildContext = function() {
        return o2;
      }, this.shouldComponentUpdate = function(s4) {
        this.props.value !== s4.value && l2.some(M);
      }, this.sub = function(s4) {
        l2.push(s4);
        var f3 = s4.componentWillUnmount;
        s4.componentWillUnmount = function() {
          l2.splice(l2.indexOf(s4), 1), f3 && f3.call(s4);
        };
      }), r.children;
    } };
    return _2.Provider.__ = _2.Consumer.contextType = _2;
  }
  P = V.slice, d = { __e: function(e, t2, _2, r) {
    for (var l2, o2, s4; t2 = t2.__; )
      if ((l2 = t2.__c) && !l2.__)
        try {
          if ((o2 = l2.constructor) && o2.getDerivedStateFromError != null && (l2.setState(o2.getDerivedStateFromError(e)), s4 = l2.__d), l2.componentDidCatch != null && (l2.componentDidCatch(e, r || {}), s4 = l2.__d), s4)
            return l2.__E = l2;
        } catch (f3) {
          e = f3;
        }
    throw e;
  } }, $ = 0, Y = function(e) {
    return e != null && e.constructor === void 0;
  }, U.prototype.setState = function(e, t2) {
    var _2;
    _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e == "function" && (e = e(k({}, _2), this.props)), e && k(_2, e), e != null && this.__v && (t2 && this.__h.push(t2), M(this));
  }, U.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), M(this));
  }, U.prototype.render = L, S = [], D.__r = 0, B = 0;

  // https://esm.sh/stable/preact@10.11.0/deno/hooks.js
  var i, n, d2, N2, f = 0, q2 = [], l = [], V2 = d.__b, g = d.__r, b = d.diffed, C2 = d.__c, A = d.unmount;
  function a(_2, t2) {
    d.__h && d.__h(n, _2, f || t2), f = 0;
    var u2 = n.__H || (n.__H = { __: [], __h: [] });
    return _2 >= u2.__.length && u2.__.push({ __V: l }), u2.__[_2];
  }
  function P2(_2) {
    return f = 1, B2(D2, _2);
  }
  function B2(_2, t2, u2) {
    var o2 = a(i++, 2);
    if (o2.t = _2, !o2.__c && (o2.__ = [u2 ? u2(t2) : D2(void 0, t2), function(v4) {
      var s4 = o2.__N ? o2.__N[0] : o2.__[0], h2 = o2.t(s4, v4);
      s4 !== h2 && (o2.__N = [h2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = n, !n.u)) {
      n.u = !0;
      var r = n.shouldComponentUpdate;
      n.shouldComponentUpdate = function(v4, s4, h2) {
        if (!o2.__c.__H)
          return !0;
        var y = o2.__c.__H.__.filter(function(c3) {
          return c3.__c;
        });
        if (y.every(function(c3) {
          return !c3.__N;
        }))
          return !r || r.call(this, v4, s4, h2);
        var E3 = !1;
        return y.forEach(function(c3) {
          if (c3.__N) {
            var k3 = c3.__[0];
            c3.__ = c3.__N, c3.__N = void 0, k3 !== c3.__[0] && (E3 = !0);
          }
        }), !!E3 && (!r || r.call(this, v4, s4, h2));
      };
    }
    return o2.__N || o2.__;
  }
  function j2(_2, t2) {
    var u2 = a(i++, 3);
    !d.__s && H(u2.__H, t2) && (u2.__ = _2, u2.i = t2, n.__H.__h.push(u2));
  }
  function w2(_2) {
    return f = 5, x(function() {
      return { current: _2 };
    }, []);
  }
  function x(_2, t2) {
    var u2 = a(i++, 7);
    return H(u2.__H, t2) ? (u2.__V = _2(), u2.i = t2, u2.__h = _2, u2.__V) : u2.__;
  }
  function L2(_2, t2) {
    return f = 8, x(function() {
      return _2;
    }, t2);
  }
  function M2(_2) {
    var t2 = n.context[_2.__c], u2 = a(i++, 9);
    return u2.c = _2, t2 ? (u2.__ == null && (u2.__ = !0, t2.sub(n)), t2.props.value) : _2.__;
  }
  function R2() {
    for (var _2; _2 = q2.shift(); )
      if (_2.__P && _2.__H)
        try {
          _2.__H.__h.forEach(m), _2.__H.__h.forEach(p), _2.__H.__h = [];
        } catch (t2) {
          _2.__H.__h = [], d.__e(t2, _2.__v);
        }
  }
  d.__b = function(_2) {
    typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
  }, d.__r = function(_2) {
    g && g(_2), i = 0;
    var t2 = (n = _2.__c).__H;
    t2 && (d2 === n ? (t2.__h = [], n.__h = [], t2.__.forEach(function(u2) {
      u2.__N && (u2.__ = u2.__N), u2.__V = l, u2.__N = u2.i = void 0;
    })) : (t2.__h.forEach(m), t2.__h.forEach(p), t2.__h = [])), d2 = n;
  }, d.diffed = function(_2) {
    b && b(_2);
    var t2 = _2.__c;
    t2 && t2.__H && (t2.__H.__h.length && (q2.push(t2) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t2.__H.__.forEach(function(u2) {
      u2.i && (u2.__H = u2.i), u2.__V !== l && (u2.__ = u2.__V), u2.i = void 0, u2.__V = l;
    })), d2 = n = null;
  }, d.__c = function(_2, t2) {
    t2.some(function(u2) {
      try {
        u2.__h.forEach(m), u2.__h = u2.__h.filter(function(o2) {
          return !o2.__ || p(o2);
        });
      } catch (o2) {
        t2.some(function(r) {
          r.__h && (r.__h = []);
        }), t2 = [], d.__e(o2, u2.__v);
      }
    }), C2 && C2(_2, t2);
  }, d.unmount = function(_2) {
    A && A(_2);
    var t2, u2 = _2.__c;
    u2 && u2.__H && (u2.__H.__.forEach(function(o2) {
      try {
        m(o2);
      } catch (r) {
        t2 = r;
      }
    }), u2.__H = void 0, t2 && d.__e(t2, u2.__v));
  };
  var F2 = typeof requestAnimationFrame == "function";
  function S2(_2) {
    var t2, u2 = function() {
      clearTimeout(o2), F2 && cancelAnimationFrame(t2), setTimeout(_2);
    }, o2 = setTimeout(u2, 100);
    F2 && (t2 = requestAnimationFrame(u2));
  }
  function m(_2) {
    var t2 = n, u2 = _2.__c;
    typeof u2 == "function" && (_2.__c = void 0, u2()), n = t2;
  }
  function p(_2) {
    var t2 = n;
    _2.__c = _2.__(), n = t2;
  }
  function H(_2, t2) {
    return !_2 || _2.length !== t2.length || t2.some(function(u2, o2) {
      return u2 !== _2[o2];
    });
  }
  function D2(_2, t2) {
    return typeof t2 == "function" ? t2(_2) : t2;
  }

  // utils/source_language_url_pattern.ts
  function handleSourceLanguageUrlPattern(url, language, currentSourceLanguageUrlPattern) {
    let currentMatches = [];
    currentSourceLanguageUrlPattern || (currentSourceLanguageUrlPattern = {}), language !== "auto" && !currentSourceLanguageUrlPattern[language] && (currentSourceLanguageUrlPattern[language] = {
      matches: [],
      excludeMatches: []
    }), currentMatches = language !== "auto" ? currentSourceLanguageUrlPattern[language].matches : [];
    let urlToLanguage = {}, allKeys = Object.keys(currentSourceLanguageUrlPattern);
    for (let key of allKeys) {
      let urlKeys = currentSourceLanguageUrlPattern[key].matches;
      for (let urlKey of urlKeys)
        urlToLanguage[urlKey] || (urlToLanguage[urlKey] = []), urlToLanguage[urlKey].push(key);
    }
    let currentMatchedlanguages = urlToLanguage[url];
    if (currentMatchedlanguages && currentMatchedlanguages.length > 0)
      for (let currentMatchedlanguage of currentMatchedlanguages)
        currentSourceLanguageUrlPattern[currentMatchedlanguage].matches.indexOf(url) > -1 && (currentSourceLanguageUrlPattern[currentMatchedlanguage] = {
          ...currentSourceLanguageUrlPattern[currentMatchedlanguage],
          matches: currentSourceLanguageUrlPattern[currentMatchedlanguage].matches.filter(
            (item) => item !== url
          )
        });
    let currentMatchSet = new Set(currentMatches);
    if (language === "auto")
      return {
        ...currentSourceLanguageUrlPattern
      };
    currentMatchSet.add(url);
    let newMatches = Array.from(currentMatchSet);
    return {
      ...currentSourceLanguageUrlPattern,
      [language]: {
        ...currentSourceLanguageUrlPattern[language],
        matches: newMatches
      }
    };
  }

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
  function isDeno() {
    return typeof Deno < "u";
  }
  function isFirefox() {
    return isBrowser(FIREFOX);
  }
  function isTouchDevice() {
    return !!navigator.maxTouchPoints || "ontouchstart" in document.documentElement;
  }
  function isMouseSupport() {
    return !!globalThis.matchMedia("(pointer:fine)").matches;
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
  var brandName = "Immersive Translate", brandId = "immersive-translate", pdfViewerUrl = "pdf/index.html", htmlViewerUrl = "html/index.html", subtitleBuilderUrl = "subtitle/index.html";
  var brandIdForJs = "immersiveTranslate";
  var GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow";
  var AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", iframeMessageRateIdentifier = brandIdForJs + "WaitForRateLimit", documentMessageTypeIdentifierForAsk = brandIdForJs + "DocumentMessageAsk", documentMessageTypeIdentifierForTellThirdParty = brandIdForJs + "DocumentMessageTellThirdParty", documentMessageTypeIdentifierForThirdPartyTell = brandIdForJs + "DocumentMessageThirdPartyTell", documentMessageTypeIdentifierForHandler = brandIdForJs + "DocumentMessageHandler", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`, buildinConfigStorageKey = "buildinConfig", localConfigStorageKey = "localConfig";
  var pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
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
  ], langMap = {
    af: "Afrikaans",
    am: "Amharic",
    ar: "Arabic",
    auto: "Detect Language",
    az: "Azerbaijani",
    be: "Belarusian",
    bg: "Bulgarian",
    tn: "Zana",
    bn: "Bengali",
    bs: "Bosnian",
    ca: "Catalan",
    ceb: "Cebuano",
    co: "Corsican",
    cs: "Czech",
    cy: "Welsh",
    da: "Danish",
    de: "German",
    el: "Greek",
    en: "English",
    eo: "Esperanto",
    es: "Spanish",
    et: "Estonian",
    eu: "Basque",
    fa: "Farsi",
    fi: "Finnish",
    fil: "Filipino",
    fj: "Fijian",
    fr: "French",
    fy: "Frisian",
    ga: "Irish",
    gd: "Scottish Gaelic",
    gl: "Galician",
    gu: "Gujarati",
    ha: "Hausa",
    haw: "Hawaiian",
    he: "Hebrew",
    hi: "Hindi",
    hmn: "Hmong",
    hr: "Croatian",
    ht: "Haitian Creole",
    hu: "Hungarian",
    hy: "Armenian",
    id: "Indonesian",
    ig: "Igbo",
    is: "Icelandic",
    it: "Italian",
    ja: "\u65E5\u672C\u8A9E",
    jw: "Javanese",
    ka: "Georgian",
    kk: "Kazakh",
    km: "Khmer",
    kn: "Kannada",
    ko: "Korean",
    ku: "Kurdish",
    ky: "Kyrgyz",
    la: "Latin",
    lb: "Luxembourgish",
    lo: "Lao",
    lt: "Lithuanian",
    lv: "Latvian",
    mg: "Malagash",
    mi: "Maori",
    mk: "Macedonian",
    ml: "Malayalam",
    mn: "Mongolian",
    mr: "Marathi",
    ms: "Malay",
    mt: "Maltese",
    mww: "Bai Miao",
    my: "Burmese",
    ne: "Nepali",
    nl: "Dutch",
    no: "Norwegian",
    ny: "Nyanza (Chichewa)",
    otq: "Quer\xE9taro Otomi",
    pa: "Punjabi",
    pl: "Polish",
    ps: "Pashto",
    pt: "Portuguese (Portugal, Brazil)",
    ro: "Romanian",
    ru: "Russian",
    sd: "Sindhi",
    si: "Sinhala",
    sk: "Slovak",
    sl: "Slovenian",
    sm: "Samoan",
    sn: "Shona",
    so: "Somali",
    sq: "Albanian",
    sr: "Serbian",
    "sr-Cyrl": "Serbian (Cyrillic)",
    "sr-Latn": "Serbian (Latin)",
    st: "Sesotho",
    su: "Sundanese",
    sv: "Swedish",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    tg: "Tajik",
    th: "Thai",
    tlh: "Klingon",
    "tlh-Qaak": "Klingon (piqaD)",
    to: "Tongan",
    tr: "Turkish",
    ty: "Tahiti",
    ug: "Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    vi: "Vietnamese",
    wyw: "\u6587\u8A00\u6587",
    xh: "Bantu",
    yi: "Yiddish",
    yo: "Yoruba",
    yua: "Yucatan Mayan",
    yue: "Cantonese (Traditional)",
    "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
    "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
    zu: "Zulu",
    // @ts-ignore: it's ok
    "<all>": "All Languages"
  };
  var buildinExcludeUrls = [
    "https://immersive-translate.owenyoung.com/options/",
    "https://immersive-translate.owenyoung.com/auth-done/",
    "http://localhost:8000/dist/userscript/options/",
    "http://localhost:8000/auth-done/",
    "http://192.168.50.9:8000/dist/userscript/options/",
    "https://www.deepl.com/translator",
    "translate.google.com",
    "http://localhost:8000/options/",
    "http://192.168.50.9:8000/options/"
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
  }, childFrameToRootFrameIdentifier = { type: brandIdForJs + "ChildFrameToRootFrameIdentifier" }, MouseTranslateTriggerMechanism = [
    "Alt",
    "Ctrl",
    "Shift",
    "Auto",
    "Off",
    "OtherCustom",
    "Other"
  ];

  // utils/get_pdf_viewer_url.ts
  function formatToPdfViewerUrl(url) {
    let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl), pdfViewUrlObj = new URL(pdfViewerRuntimeUrl);
    return (url.startsWith("http") || !isFirefox()) && pdfViewUrlObj.searchParams.set(
      "file",
      url
    ), pdfViewUrlObj.href;
  }

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
        for (let i2 = 0; i2 < this.#yields.length; i2++) {
          let { iterator, value } = this.#yields[i2];
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
  function clampAndTruncate(n2, max = 255, min = 0) {
    return Math.trunc(Math.max(Math.min(n2, max), min));
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
    for (let i2 = 0; i2 < options.maxAttempts; i2++)
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
  var __global$ = globalThis || (typeof window < "u" ? window : self), P3 = Object.create, I2 = Object.defineProperty, D3 = Object.getOwnPropertyDescriptor, G2 = Object.getOwnPropertyNames, H2 = Object.getPrototypeOf, U2 = Object.prototype.hasOwnProperty, X2 = (e, t2) => () => (t2 || e((t2 = { exports: {} }).exports, t2), t2.exports), q3 = (e, t2) => {
    for (var n2 in t2)
      I2(e, n2, { get: t2[n2], enumerable: !0 });
  }, v = (e, t2, n2, f3) => {
    if (t2 && typeof t2 == "object" || typeof t2 == "function")
      for (let i2 of G2(t2))
        !U2.call(e, i2) && i2 !== n2 && I2(e, i2, { get: () => t2[i2], enumerable: !(f3 = D3(t2, i2)) || f3.enumerable });
    return e;
  }, s2 = (e, t2, n2) => (v(e, t2, "default"), n2 && v(n2, t2, "default")), L3 = (e, t2, n2) => (n2 = e != null ? P3(H2(e)) : {}, v(t2 || !e || !e.__esModule ? I2(n2, "default", { value: e, enumerable: !0 }) : n2, e)), h = X2((ge, N5) => {
    var M4 = "Expected a function", W3 = NaN, z4 = "[object Symbol]", J3 = /^\s+|\s+$/g, K3 = /^[-+]0x[0-9a-f]+$/i, Q4 = /^0b[01]+$/i, V5 = /^0o[0-7]+$/i, Y3 = parseInt, Z2 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, w3 = typeof self == "object" && self && self.Object === Object && self, ee2 = Z2 || w3 || Function("return this")(), te = Object.prototype, ne2 = te.toString, re2 = Math.max, ie = Math.min, O3 = function() {
      return ee2.Date.now();
    };
    function fe(e, t2, n2) {
      var f3, i2, b3, l2, a3, u2, d4 = 0, S5 = !1, g4 = !1, T3 = !0;
      if (typeof e != "function")
        throw new TypeError(M4);
      t2 = C4(t2) || 0, p4(n2) && (S5 = !!n2.leading, g4 = "maxWait" in n2, b3 = g4 ? re2(C4(n2.maxWait) || 0, t2) : b3, T3 = "trailing" in n2 ? !!n2.trailing : T3);
      function j4(r) {
        var o2 = f3, m3 = i2;
        return f3 = i2 = void 0, d4 = r, l2 = e.apply(m3, o2), l2;
      }
      function A3(r) {
        return d4 = r, a3 = setTimeout(y, t2), S5 ? j4(r) : l2;
      }
      function B6(r) {
        var o2 = r - u2, m3 = r - d4, k3 = t2 - o2;
        return g4 ? ie(k3, b3 - m3) : k3;
      }
      function E3(r) {
        var o2 = r - u2, m3 = r - d4;
        return u2 === void 0 || o2 >= t2 || o2 < 0 || g4 && m3 >= b3;
      }
      function y() {
        var r = O3();
        if (E3(r))
          return _2(r);
        a3 = setTimeout(y, B6(r));
      }
      function _2(r) {
        return a3 = void 0, T3 && f3 ? j4(r) : (f3 = i2 = void 0, l2);
      }
      function F4() {
        a3 !== void 0 && clearTimeout(a3), d4 = 0, f3 = u2 = i2 = a3 = void 0;
      }
      function R5() {
        return a3 === void 0 ? l2 : _2(O3());
      }
      function x3() {
        var r = O3(), o2 = E3(r);
        if (f3 = arguments, i2 = this, u2 = r, o2) {
          if (a3 === void 0)
            return A3(u2);
          if (g4)
            return a3 = setTimeout(y, t2), j4(u2);
        }
        return a3 === void 0 && (a3 = setTimeout(y, t2)), l2;
      }
      return x3.cancel = F4, x3.flush = R5, x3;
    }
    function ae(e, t2, n2) {
      var f3 = !0, i2 = !0;
      if (typeof e != "function")
        throw new TypeError(M4);
      return p4(n2) && (f3 = "leading" in n2 ? !!n2.leading : f3, i2 = "trailing" in n2 ? !!n2.trailing : i2), fe(e, t2, { leading: f3, maxWait: t2, trailing: i2 });
    }
    function p4(e) {
      var t2 = typeof e;
      return !!e && (t2 == "object" || t2 == "function");
    }
    function oe2(e) {
      return !!e && typeof e == "object";
    }
    function ue(e) {
      return typeof e == "symbol" || oe2(e) && ne2.call(e) == z4;
    }
    function C4(e) {
      if (typeof e == "number")
        return e;
      if (ue(e))
        return W3;
      if (p4(e)) {
        var t2 = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = p4(t2) ? t2 + "" : t2;
      }
      if (typeof e != "string")
        return e === 0 ? e : +e;
      e = e.replace(J3, "");
      var n2 = Q4.test(e);
      return n2 || V5.test(e) ? Y3(e.slice(2), n2 ? 2 : 8) : K3.test(e) ? W3 : +e;
    }
    N5.exports = ae;
  }), c = {};
  q3(c, { default: () => se });
  var ce2 = L3(h());
  s2(c, L3(h()));
  var { default: $2, ...le } = ce2, se = $2 !== void 0 ? $2 : le;

  // https://esm.sh/v119/notie@4.3.1/deno/notie.mjs
  var Oe = Object.create, ve = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, De = Object.getOwnPropertyNames, Ie = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty, Ne = (v4, i2) => () => (i2 || v4((i2 = { exports: {} }).exports, i2), i2.exports), Pe = (v4, i2) => {
    for (var l2 in i2)
      ve(v4, l2, { get: i2[l2], enumerable: !0 });
  }, me = (v4, i2, l2, x3) => {
    if (i2 && typeof i2 == "object" || typeof i2 == "function")
      for (let b3 of De(i2))
        !je.call(v4, b3) && b3 !== l2 && ve(v4, b3, { get: () => i2[b3], enumerable: !(x3 = Ae(i2, b3)) || x3.enumerable });
    return v4;
  }, X3 = (v4, i2, l2) => (me(v4, i2, "default"), l2 && me(l2, i2, "default")), ke = (v4, i2, l2) => (l2 = v4 != null ? Oe(Ie(v4)) : {}, me(i2 || !v4 || !v4.__esModule ? ve(l2, "default", { value: v4, enumerable: !0 }) : l2, v4)), xe = Ne((oe2, be) => {
    (function(v4, i2) {
      typeof oe2 == "object" && typeof be == "object" ? be.exports = i2() : typeof define == "function" && define.amd ? define([], i2) : typeof oe2 == "object" ? oe2.notie = i2() : v4.notie = i2();
    })(oe2, function() {
      return function(v4) {
        function i2(x3) {
          if (l2[x3])
            return l2[x3].exports;
          var b3 = l2[x3] = { i: x3, l: !1, exports: {} };
          return v4[x3].call(b3.exports, b3, b3.exports, i2), b3.l = !0, b3.exports;
        }
        var l2 = {};
        return i2.m = v4, i2.c = l2, i2.i = function(x3) {
          return x3;
        }, i2.d = function(x3, b3, re2) {
          i2.o(x3, b3) || Object.defineProperty(x3, b3, { configurable: !1, enumerable: !0, get: re2 });
        }, i2.n = function(x3) {
          var b3 = x3 && x3.__esModule ? function() {
            return x3.default;
          } : function() {
            return x3;
          };
          return i2.d(b3, "a", b3), b3;
        }, i2.o = function(x3, b3) {
          return Object.prototype.hasOwnProperty.call(x3, b3);
        }, i2.p = "", i2(i2.s = 1);
      }([function(v4, i2) {
        v4.exports = function(l2) {
          return l2.webpackPolyfill || (l2.deprecate = function() {
          }, l2.paths = [], l2.children || (l2.children = []), Object.defineProperty(l2, "loaded", { enumerable: !0, get: function() {
            return l2.l;
          } }), Object.defineProperty(l2, "id", { enumerable: !0, get: function() {
            return l2.i;
          } }), l2.webpackPolyfill = 1), l2;
        };
      }, function(v4, i2, l2) {
        "use strict";
        (function(x3) {
          var b3, re2, de, $4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A3) {
            return typeof A3;
          } : function(A3) {
            return A3 && typeof Symbol == "function" && A3.constructor === Symbol && A3 !== Symbol.prototype ? "symbol" : typeof A3;
          };
          (function(A3, p4) {
            $4(i2) === "object" && $4(x3) === "object" ? x3.exports = p4() : (re2 = [], b3 = p4, de = typeof b3 == "function" ? b3.apply(i2, re2) : b3, de !== void 0 && (x3.exports = de));
          })(void 0, function() {
            return function(A3) {
              function p4(g4) {
                if (ee2[g4])
                  return ee2[g4].exports;
                var T3 = ee2[g4] = { i: g4, l: !1, exports: {} };
                return A3[g4].call(T3.exports, T3, T3.exports, p4), T3.l = !0, T3.exports;
              }
              var ee2 = {};
              return p4.m = A3, p4.c = ee2, p4.i = function(g4) {
                return g4;
              }, p4.d = function(g4, T3, J3) {
                p4.o(g4, T3) || Object.defineProperty(g4, T3, { configurable: !1, enumerable: !0, get: J3 });
              }, p4.n = function(g4) {
                var T3 = g4 && g4.__esModule ? function() {
                  return g4.default;
                } : function() {
                  return g4;
                };
                return p4.d(T3, "a", T3), T3;
              }, p4.o = function(g4, T3) {
                return Object.prototype.hasOwnProperty.call(g4, T3);
              }, p4.p = "", p4(p4.s = 0);
            }([function(A3, p4, ee2) {
              function g4(t2, o2) {
                var s4 = {};
                for (var u2 in t2)
                  o2.indexOf(u2) >= 0 || Object.prototype.hasOwnProperty.call(t2, u2) && (s4[u2] = t2[u2]);
                return s4;
              }
              Object.defineProperty(p4, "__esModule", { value: !0 });
              var T3 = typeof Symbol == "function" && $4(Symbol.iterator) === "symbol" ? function(t2) {
                return typeof t2 > "u" ? "undefined" : $4(t2);
              } : function(t2) {
                return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2 > "u" ? "undefined" : $4(t2);
              }, J3 = Object.assign || function(t2) {
                for (var o2 = 1; o2 < arguments.length; o2++) {
                  var s4 = arguments[o2];
                  for (var u2 in s4)
                    Object.prototype.hasOwnProperty.call(s4, u2) && (t2[u2] = s4[u2]);
                }
                return t2;
              }, R5 = { top: "top", bottom: "bottom" }, e = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: R5.top, force: R5.top, confirm: R5.top, input: R5.top, select: R5.bottom, date: R5.top } }, Ee = p4.setOptions = function(t2) {
                e = J3({}, e, t2, { classes: J3({}, e.classes, t2.classes), ids: J3({}, e.ids, t2.ids), positions: J3({}, e.positions, t2.positions) });
              }, ye = function() {
                return new Promise(function(t2) {
                  return setTimeout(t2, 0);
                });
              }, le2 = function(t2) {
                return new Promise(function(o2) {
                  return setTimeout(o2, 1e3 * t2);
                });
              }, W3 = function() {
                document.activeElement && document.activeElement.blur();
              }, K3 = function() {
                var t2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o2) {
                  var s4 = 16 * Math.random() | 0, u2 = o2 === "x" ? s4 : 3 & s4 | 8;
                  return u2.toString(16);
                });
                return "notie-" + t2;
              }, ue = { 1: e.classes.backgroundSuccess, success: e.classes.backgroundSuccess, 2: e.classes.backgroundWarning, warning: e.classes.backgroundWarning, 3: e.classes.backgroundError, error: e.classes.backgroundError, 4: e.classes.backgroundInfo, info: e.classes.backgroundInfo, 5: e.classes.backgroundNeutral, neutral: e.classes.backgroundNeutral }, Le = function() {
                return e.transitionSelector + " " + e.transitionDuration + "s " + e.transitionCurve;
              }, te = function(t2) {
                return t2.keyCode === 13;
              }, ne2 = function(t2) {
                return t2.keyCode === 27;
              }, Z2 = function(t2, o2) {
                t2.classList.add(e.classes.container), t2.style[o2] = "-10000px", document.body.appendChild(t2), t2.style[o2] = "-" + t2.offsetHeight + "px", t2.listener && window.addEventListener("keydown", t2.listener), ye().then(function() {
                  t2.style.transition = Le(), t2.style[o2] = 0;
                });
              }, O3 = function(t2, o2) {
                var s4 = document.getElementById(t2);
                s4 && (s4.style[o2] = "-" + s4.offsetHeight + "px", s4.listener && window.removeEventListener("keydown", s4.listener), le2(e.transitionDuration).then(function() {
                  s4.parentNode && s4.parentNode.removeChild(s4);
                }));
              }, se2 = function(t2, o2) {
                var s4 = document.createElement("div");
                s4.id = e.ids.overlay, s4.classList.add(e.classes.overlay), s4.classList.add(e.classes.backgroundOverlay), s4.style.opacity = 0, t2 && e.overlayClickDismiss && (s4.onclick = function() {
                  O3(t2.id, o2), j4();
                }), document.body.appendChild(s4), ye().then(function() {
                  s4.style.transition = Le(), s4.style.opacity = e.overlayOpacity;
                });
              }, j4 = function() {
                var t2 = document.getElementById(e.ids.overlay);
                t2.style.opacity = 0, le2(e.transitionDuration).then(function() {
                  t2.parentNode && t2.parentNode.removeChild(t2);
                });
              }, F4 = p4.hideAlerts = function(t2) {
                var o2 = document.getElementsByClassName(e.classes.alert);
                if (o2.length) {
                  for (var s4 = 0; s4 < o2.length; s4++) {
                    var u2 = o2[s4];
                    O3(u2.id, u2.position);
                  }
                  t2 && le2(e.transitionDuration).then(function() {
                    return t2();
                  });
                }
              }, Te = p4.alert = function(t2) {
                var o2 = t2.type, s4 = o2 === void 0 ? 4 : o2, u2 = t2.text, c3 = t2.time, k3 = c3 === void 0 ? e.alertTime : c3, H4 = t2.stay, S5 = H4 !== void 0 && H4, h2 = t2.position, f3 = h2 === void 0 ? e.positions.alert || f3.top : h2;
                W3(), F4();
                var d4 = document.createElement("div"), m3 = K3();
                d4.id = m3, d4.position = f3, d4.classList.add(e.classes.textbox), d4.classList.add(ue[s4]), d4.classList.add(e.classes.alert), d4.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>", d4.onclick = function() {
                  return O3(m3, f3);
                }, d4.listener = function(n2) {
                  (te(n2) || ne2(n2)) && F4();
                }, Z2(d4, f3), k3 && k3 < 1 && (k3 = 1), !S5 && k3 && le2(k3).then(function() {
                  return O3(m3, f3);
                });
              }, Me = p4.force = function(t2, o2) {
                var s4 = t2.type, u2 = s4 === void 0 ? 5 : s4, c3 = t2.text, k3 = t2.buttonText, H4 = k3 === void 0 ? "OK" : k3, S5 = t2.callback, h2 = t2.position, f3 = h2 === void 0 ? e.positions.force || f3.top : h2;
                W3(), F4();
                var d4 = document.createElement("div"), m3 = K3();
                d4.id = m3;
                var n2 = document.createElement("div");
                n2.classList.add(e.classes.textbox), n2.classList.add(e.classes.backgroundInfo), n2.innerHTML = '<div class="' + e.classes.textboxInner + '">' + c3 + "</div>";
                var r = document.createElement("div");
                r.classList.add(e.classes.button), r.classList.add(ue[u2]), r.innerHTML = H4, r.onclick = function() {
                  O3(m3, f3), j4(), S5 ? S5() : o2 && o2();
                }, d4.appendChild(n2), d4.appendChild(r), d4.listener = function(C4) {
                  te(C4) && r.click();
                }, Z2(d4, f3), se2();
              }, He = p4.confirm = function(t2, o2, s4) {
                var u2 = t2.text, c3 = t2.submitText, k3 = c3 === void 0 ? "Yes" : c3, H4 = t2.cancelText, S5 = H4 === void 0 ? "Cancel" : H4, h2 = t2.submitCallback, f3 = t2.cancelCallback, d4 = t2.position, m3 = d4 === void 0 ? e.positions.confirm || m3.top : d4;
                W3(), F4();
                var n2 = document.createElement("div"), r = K3();
                n2.id = r;
                var C4 = document.createElement("div");
                C4.classList.add(e.classes.textbox), C4.classList.add(e.classes.backgroundInfo), C4.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
                var y = document.createElement("div");
                y.classList.add(e.classes.button), y.classList.add(e.classes.elementHalf), y.classList.add(e.classes.backgroundSuccess), y.innerHTML = k3, y.onclick = function() {
                  O3(r, m3), j4(), h2 ? h2() : o2 && o2();
                };
                var a3 = document.createElement("div");
                a3.classList.add(e.classes.button), a3.classList.add(e.classes.elementHalf), a3.classList.add(e.classes.backgroundError), a3.innerHTML = S5, a3.onclick = function() {
                  O3(r, m3), j4(), f3 ? f3() : s4 && s4();
                }, n2.appendChild(C4), n2.appendChild(y), n2.appendChild(a3), n2.listener = function(E3) {
                  te(E3) ? y.click() : ne2(E3) && a3.click();
                }, Z2(n2, m3), se2(n2, m3);
              }, ge = function(t2, o2, s4) {
                var u2 = t2.text, c3 = t2.submitText, k3 = c3 === void 0 ? "Submit" : c3, H4 = t2.cancelText, S5 = H4 === void 0 ? "Cancel" : H4, h2 = t2.submitCallback, f3 = t2.cancelCallback, d4 = t2.position, m3 = d4 === void 0 ? e.positions.input || m3.top : d4, n2 = g4(t2, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                W3(), F4();
                var r = document.createElement("div"), C4 = K3();
                r.id = C4;
                var y = document.createElement("div");
                y.classList.add(e.classes.textbox), y.classList.add(e.classes.backgroundInfo), y.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
                var a3 = document.createElement("input");
                a3.classList.add(e.classes.inputField), a3.setAttribute("autocapitalize", n2.autocapitalize || "none"), a3.setAttribute("autocomplete", n2.autocomplete || "off"), a3.setAttribute("autocorrect", n2.autocorrect || "off"), a3.setAttribute("autofocus", n2.autofocus || "true"), a3.setAttribute("inputmode", n2.inputmode || "verbatim"), a3.setAttribute("max", n2.max || ""), a3.setAttribute("maxlength", n2.maxlength || ""), a3.setAttribute("min", n2.min || ""), a3.setAttribute("minlength", n2.minlength || ""), a3.setAttribute("placeholder", n2.placeholder || ""), a3.setAttribute("spellcheck", n2.spellcheck || "default"), a3.setAttribute("step", n2.step || "any"), a3.setAttribute("type", n2.type || "text"), a3.value = n2.value || "", n2.allowed && (a3.oninput = function() {
                  var M4 = void 0;
                  if (Array.isArray(n2.allowed)) {
                    for (var w3 = "", _2 = n2.allowed, P5 = 0; P5 < _2.length; P5++)
                      _2[P5] === "an" ? w3 += "0-9a-zA-Z" : _2[P5] === "a" ? w3 += "a-zA-Z" : _2[P5] === "n" && (w3 += "0-9"), _2[P5] === "s" && (w3 += " ");
                    M4 = new RegExp("[^" + w3 + "]", "g");
                  } else
                    T3(n2.allowed) === "object" && (M4 = n2.allowed);
                  a3.value = a3.value.replace(M4, "");
                });
                var E3 = document.createElement("div");
                E3.classList.add(e.classes.button), E3.classList.add(e.classes.elementHalf), E3.classList.add(e.classes.backgroundSuccess), E3.innerHTML = k3, E3.onclick = function() {
                  O3(C4, m3), j4(), h2 ? h2(a3.value) : o2 && o2(a3.value);
                };
                var D6 = document.createElement("div");
                D6.classList.add(e.classes.button), D6.classList.add(e.classes.elementHalf), D6.classList.add(e.classes.backgroundError), D6.innerHTML = S5, D6.onclick = function() {
                  O3(C4, m3), j4(), f3 ? f3(a3.value) : s4 && s4(a3.value);
                }, r.appendChild(y), r.appendChild(a3), r.appendChild(E3), r.appendChild(D6), r.listener = function(M4) {
                  te(M4) ? E3.click() : ne2(M4) && D6.click();
                }, Z2(r, m3), a3.focus(), se2(r, m3);
              };
              p4.input = ge;
              var Se = p4.select = function(t2, o2) {
                var s4 = t2.text, u2 = t2.cancelText, c3 = u2 === void 0 ? "Cancel" : u2, k3 = t2.cancelCallback, H4 = t2.choices, S5 = t2.position, h2 = S5 === void 0 ? e.positions.select || h2.top : S5;
                W3(), F4();
                var f3 = document.createElement("div"), d4 = K3();
                f3.id = d4;
                var m3 = document.createElement("div");
                m3.classList.add(e.classes.textbox), m3.classList.add(e.classes.backgroundInfo), m3.innerHTML = '<div class="' + e.classes.textboxInner + '">' + s4 + "</div>", f3.appendChild(m3), H4.forEach(function(r, C4) {
                  var y = r.type, a3 = y === void 0 ? 1 : y, E3 = r.text, D6 = r.handler, M4 = document.createElement("div");
                  M4.classList.add(ue[a3]), M4.classList.add(e.classes.button), M4.classList.add(e.classes.selectChoice);
                  var w3 = H4[C4 + 1];
                  w3 && !w3.type && (w3.type = 1), w3 && w3.type === a3 && M4.classList.add(e.classes.selectChoiceRepeated), M4.innerHTML = E3, M4.onclick = function() {
                    O3(d4, h2), j4(), D6();
                  }, f3.appendChild(M4);
                });
                var n2 = document.createElement("div");
                n2.classList.add(e.classes.backgroundNeutral), n2.classList.add(e.classes.button), n2.innerHTML = c3, n2.onclick = function() {
                  O3(d4, h2), j4(), k3 ? k3() : o2 && o2();
                }, f3.appendChild(n2), f3.listener = function(r) {
                  ne2(r) && n2.click();
                }, Z2(f3, h2), se2(f3, h2);
              }, we = p4.date = function(t2, o2, s4) {
                var u2 = t2.value, c3 = u2 === void 0 ? /* @__PURE__ */ new Date() : u2, k3 = t2.submitText, H4 = k3 === void 0 ? "OK" : k3, S5 = t2.cancelText, h2 = S5 === void 0 ? "Cancel" : S5, f3 = t2.submitCallback, d4 = t2.cancelCallback, m3 = t2.position, n2 = m3 === void 0 ? e.positions.date || n2.top : m3;
                W3(), F4();
                var r = "&#9662", C4 = document.createElement("div"), y = document.createElement("div"), a3 = document.createElement("div"), E3 = function(L6) {
                  C4.innerHTML = e.dateMonths[L6.getMonth()], y.innerHTML = L6.getDate(), a3.innerHTML = L6.getFullYear();
                }, D6 = function(L6) {
                  var N5 = new Date(c3.getFullYear(), c3.getMonth() + 1, 0).getDate(), V5 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(V5) > N5 && (V5 = N5.toString()), L6.target.textContent = V5, Number(V5) < 1 && (V5 = "1"), c3.setDate(Number(V5));
                }, M4 = function(L6) {
                  var N5 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L6.target.textContent = N5, c3.setFullYear(Number(N5));
                }, w3 = function(L6) {
                  E3(c3);
                }, _2 = function(L6) {
                  var N5 = new Date(c3.getFullYear(), c3.getMonth() + L6 + 1, 0).getDate();
                  c3.getDate() > N5 && c3.setDate(N5), c3.setMonth(c3.getMonth() + L6), E3(c3);
                }, P5 = function(L6) {
                  c3.setDate(c3.getDate() + L6), E3(c3);
                }, he = function(L6) {
                  var N5 = c3.getFullYear() + L6;
                  N5 < 0 ? c3.setFullYear(0) : c3.setFullYear(c3.getFullYear() + L6), E3(c3);
                }, Y3 = document.createElement("div"), pe = K3();
                Y3.id = pe;
                var fe = document.createElement("div");
                fe.classList.add(e.classes.backgroundInfo);
                var I4 = document.createElement("div");
                I4.classList.add(e.classes.dateSelectorInner);
                var q5 = document.createElement("div");
                q5.classList.add(e.classes.button), q5.classList.add(e.classes.elementThird), q5.classList.add(e.classes.dateSelectorUp), q5.innerHTML = r;
                var G4 = document.createElement("div");
                G4.classList.add(e.classes.button), G4.classList.add(e.classes.elementThird), G4.classList.add(e.classes.dateSelectorUp), G4.innerHTML = r;
                var Q4 = document.createElement("div");
                Q4.classList.add(e.classes.button), Q4.classList.add(e.classes.elementThird), Q4.classList.add(e.classes.dateSelectorUp), Q4.innerHTML = r, C4.classList.add(e.classes.element), C4.classList.add(e.classes.elementThird), C4.innerHTML = e.dateMonths[c3.getMonth()], y.classList.add(e.classes.element), y.classList.add(e.classes.elementThird), y.setAttribute("contentEditable", !0), y.addEventListener("input", D6), y.addEventListener("blur", w3), y.innerHTML = c3.getDate(), a3.classList.add(e.classes.element), a3.classList.add(e.classes.elementThird), a3.setAttribute("contentEditable", !0), a3.addEventListener("input", M4), a3.addEventListener("blur", w3), a3.innerHTML = c3.getFullYear();
                var ae = document.createElement("div");
                ae.classList.add(e.classes.button), ae.classList.add(e.classes.elementThird), ae.innerHTML = r;
                var ie = document.createElement("div");
                ie.classList.add(e.classes.button), ie.classList.add(e.classes.elementThird), ie.innerHTML = r;
                var ce3 = document.createElement("div");
                ce3.classList.add(e.classes.button), ce3.classList.add(e.classes.elementThird), ce3.innerHTML = r, q5.onclick = function() {
                  return _2(1);
                }, G4.onclick = function() {
                  return P5(1);
                }, Q4.onclick = function() {
                  return he(1);
                }, ae.onclick = function() {
                  return _2(-1);
                }, ie.onclick = function() {
                  return P5(-1);
                }, ce3.onclick = function() {
                  return he(-1);
                };
                var z4 = document.createElement("div");
                z4.classList.add(e.classes.button), z4.classList.add(e.classes.elementHalf), z4.classList.add(e.classes.backgroundSuccess), z4.innerHTML = H4, z4.onclick = function() {
                  O3(pe, n2), j4(), f3 ? f3(c3) : o2 && o2(c3);
                };
                var U6 = document.createElement("div");
                U6.classList.add(e.classes.button), U6.classList.add(e.classes.elementHalf), U6.classList.add(e.classes.backgroundError), U6.innerHTML = h2, U6.onclick = function() {
                  O3(pe, n2), j4(), d4 ? d4(c3) : s4 && s4(c3);
                }, I4.appendChild(q5), I4.appendChild(G4), I4.appendChild(Q4), I4.appendChild(C4), I4.appendChild(y), I4.appendChild(a3), I4.appendChild(ae), I4.appendChild(ie), I4.appendChild(ce3), fe.appendChild(I4), Y3.appendChild(fe), Y3.appendChild(z4), Y3.appendChild(U6), Y3.listener = function(L6) {
                  te(L6) ? z4.click() : ne2(L6) && U6.click();
                }, Z2(Y3, n2), se2(Y3, n2);
              };
              p4.default = { alert: Te, force: Me, confirm: He, input: ge, select: Se, date: we, setOptions: Ee, hideAlerts: F4 };
            }]);
          });
        }).call(i2, l2(0)(v4));
      }]);
    });
  }), B3 = {};
  Pe(B3, { default: () => Ye });
  var Fe = ke(xe());
  X3(B3, ke(xe()));
  var { default: Ce, ..._e2 } = Fe, Ye = Ce !== void 0 ? Ce : _e2;

  // https://esm.sh/v119/nanostores@0.7.4/deno/nanostores.mjs
  var S3 = Symbol("clean");
  var m2 = Symbol();

  // https://esm.sh/v119/@nanostores/i18n@0.7.1/deno/i18n.mjs
  function g2(r, n2) {
    if (typeof r == "string")
      return n2(r);
    {
      let e = {};
      for (let t2 in r)
        e[t2] = g2(r[t2], n2);
      return e;
    }
  }
  function p2(r) {
    return (n2) => {
      if (n2.transform) {
        let e = n2.transform;
        return n2 = n2.input, { input: n2, transform(t2, o2, s4) {
          let f3 = r(t2, o2, ...s4);
          return (...l2) => e(t2, f3, l2);
        } };
      } else
        return { input: n2, transform(e, t2, o2) {
          return r(e, t2, ...o2);
        } };
    };
  }
  var N3 = p2((r, n2, e) => g2(n2, (t2) => {
    for (let o2 in e)
      t2 = t2.replace(new RegExp(`{${o2}}`, "g"), e[o2]);
    return t2;
  })), R3 = p2((r, n2, e) => {
    let t2 = new Intl.PluralRules(r).select(e);
    return t2 in n2 || (t2 = "many"), g2(n2[t2], (o2) => o2.replace(/{count}/g, e));
  });

  // https://esm.sh/v119/hotkeys-js@3.10.1/deno/hotkeys-js.mjs
  var M3 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
  function P4(e, t2, i2, r) {
    e.addEventListener ? e.addEventListener(t2, i2, r) : e.attachEvent && e.attachEvent("on".concat(t2), function() {
      i2(window.event);
    });
  }
  function T2(e, t2) {
    for (var i2 = t2.slice(0, t2.length - 1), r = 0; r < i2.length; r++)
      i2[r] = e[i2[r].toLowerCase()];
    return i2;
  }
  function U3(e) {
    typeof e != "string" && (e = ""), e = e.replace(/\s/g, "");
    for (var t2 = e.split(","), i2 = t2.lastIndexOf(""); i2 >= 0; )
      t2[i2 - 1] += ",", t2.splice(i2, 1), i2 = t2.lastIndexOf("");
    return t2;
  }
  function G3(e, t2) {
    for (var i2 = e.length >= t2.length ? e : t2, r = e.length >= t2.length ? t2 : e, n2 = !0, a3 = 0; a3 < i2.length; a3++)
      r.indexOf(i2[a3]) === -1 && (n2 = !1);
    return n2;
  }
  var b2 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M3 ? 173 : 189, "=": M3 ? 61 : 187, ";": M3 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g3 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L4 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u = { 16: !1, 18: !1, 17: !1, 91: !1 }, s3 = {};
  for (O2 = 1; O2 < 20; O2++)
    b2["f".concat(O2)] = 111 + O2;
  var O2, f2 = [], A2 = !1, D4 = "all", H3 = [], C3 = function(t2) {
    return b2[t2.toLowerCase()] || g3[t2.toLowerCase()] || t2.toUpperCase().charCodeAt(0);
  }, R4 = function(t2) {
    return Object.keys(b2).find(function(i2) {
      return b2[i2] === t2;
    });
  }, V3 = function(t2) {
    return Object.keys(g3).find(function(i2) {
      return g3[i2] === t2;
    });
  };
  function F3(e) {
    D4 = e || "all";
  }
  function E() {
    return D4 || "all";
  }
  function X4() {
    return f2.slice(0);
  }
  function $3() {
    return f2.map(function(e) {
      return R4(e) || V3(e) || String.fromCharCode(e);
    });
  }
  function q4(e) {
    var t2 = e.target || e.srcElement, i2 = t2.tagName, r = !0;
    return (t2.isContentEditable || (i2 === "INPUT" || i2 === "TEXTAREA" || i2 === "SELECT") && !t2.readOnly) && (r = !1), r;
  }
  function z3(e) {
    return typeof e == "string" && (e = C3(e)), f2.indexOf(e) !== -1;
  }
  function J2(e, t2) {
    var i2, r;
    e || (e = E());
    for (var n2 in s3)
      if (Object.prototype.hasOwnProperty.call(s3, n2))
        for (i2 = s3[n2], r = 0; r < i2.length; )
          i2[r].scope === e ? i2.splice(r, 1) : r++;
    E() === e && F3(t2 || "all");
  }
  function N4(e) {
    var t2 = e.keyCode || e.which || e.charCode, i2 = f2.indexOf(t2);
    if (i2 >= 0 && f2.splice(i2, 1), e.key && e.key.toLowerCase() === "meta" && f2.splice(0, f2.length), (t2 === 93 || t2 === 224) && (t2 = 91), t2 in u) {
      u[t2] = !1;
      for (var r in g3)
        g3[r] === t2 && (v2[r] = !1);
    }
  }
  function Q2(e) {
    if (typeof e > "u")
      Object.keys(s3).forEach(function(o2) {
        return delete s3[o2];
      });
    else if (Array.isArray(e))
      e.forEach(function(o2) {
        o2.key && S4(o2);
      });
    else if (typeof e == "object")
      e.key && S4(e);
    else if (typeof e == "string") {
      for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), r = 1; r < t2; r++)
        i2[r - 1] = arguments[r];
      var n2 = i2[0], a3 = i2[1];
      typeof n2 == "function" && (a3 = n2, n2 = ""), S4({ key: e, scope: n2, method: a3, splitKey: "+" });
    }
  }
  var S4 = function(t2) {
    var i2 = t2.key, r = t2.scope, n2 = t2.method, a3 = t2.splitKey, o2 = a3 === void 0 ? "+" : a3, l2 = U3(i2);
    l2.forEach(function(c3) {
      var p4 = c3.split(o2), m3 = p4.length, y = p4[m3 - 1], d4 = y === "*" ? "*" : C3(y);
      if (s3[d4]) {
        r || (r = E());
        var K3 = m3 > 1 ? T2(g3, p4) : [];
        s3[d4] = s3[d4].filter(function(h2) {
          var w3 = n2 ? h2.method === n2 : !0;
          return !(w3 && h2.scope === r && G3(h2.mods, K3));
        });
      }
    });
  };
  function _(e, t2, i2, r) {
    if (t2.element === r) {
      var n2;
      if (t2.scope === i2 || t2.scope === "all") {
        n2 = t2.mods.length > 0;
        for (var a3 in u)
          Object.prototype.hasOwnProperty.call(u, a3) && (!u[a3] && t2.mods.indexOf(+a3) > -1 || u[a3] && t2.mods.indexOf(+a3) === -1) && (n2 = !1);
        (t2.mods.length === 0 && !u[16] && !u[18] && !u[17] && !u[91] || n2 || t2.shortcut === "*") && t2.method(e, t2) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0));
      }
    }
  }
  function k2(e, t2) {
    var i2 = s3["*"], r = e.keyCode || e.which || e.charCode;
    if (v2.filter.call(this, e)) {
      if ((r === 93 || r === 224) && (r = 91), f2.indexOf(r) === -1 && r !== 229 && f2.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h2) {
        var w3 = L4[h2];
        e[h2] && f2.indexOf(w3) === -1 ? f2.push(w3) : !e[h2] && f2.indexOf(w3) > -1 ? f2.splice(f2.indexOf(w3), 1) : h2 === "metaKey" && e[h2] && f2.length === 3 && (e.ctrlKey || e.shiftKey || e.altKey || (f2 = f2.slice(f2.indexOf(w3))));
      }), r in u) {
        u[r] = !0;
        for (var n2 in g3)
          g3[n2] === r && (v2[n2] = !0);
        if (!i2)
          return;
      }
      for (var a3 in u)
        Object.prototype.hasOwnProperty.call(u, a3) && (u[a3] = e[L4[a3]]);
      e.getModifierState && !(e.altKey && !e.ctrlKey) && e.getModifierState("AltGraph") && (f2.indexOf(17) === -1 && f2.push(17), f2.indexOf(18) === -1 && f2.push(18), u[17] = !0, u[18] = !0);
      var o2 = E();
      if (i2)
        for (var l2 = 0; l2 < i2.length; l2++)
          i2[l2].scope === o2 && (e.type === "keydown" && i2[l2].keydown || e.type === "keyup" && i2[l2].keyup) && _(e, i2[l2], o2, t2);
      if (r in s3) {
        for (var c3 = 0; c3 < s3[r].length; c3++)
          if ((e.type === "keydown" && s3[r][c3].keydown || e.type === "keyup" && s3[r][c3].keyup) && s3[r][c3].key) {
            for (var p4 = s3[r][c3], m3 = p4.splitKey, y = p4.key.split(m3), d4 = [], K3 = 0; K3 < y.length; K3++)
              d4.push(C3(y[K3]));
            d4.sort().join("") === f2.sort().join("") && _(e, p4, o2, t2);
          }
      }
    }
  }
  function W2(e) {
    return H3.indexOf(e) > -1;
  }
  function v2(e, t2, i2) {
    f2 = [];
    var r = U3(e), n2 = [], a3 = "all", o2 = document, l2 = 0, c3 = !1, p4 = !0, m3 = "+", y = !1;
    for (i2 === void 0 && typeof t2 == "function" && (i2 = t2), Object.prototype.toString.call(t2) === "[object Object]" && (t2.scope && (a3 = t2.scope), t2.element && (o2 = t2.element), t2.keyup && (c3 = t2.keyup), t2.keydown !== void 0 && (p4 = t2.keydown), t2.capture !== void 0 && (y = t2.capture), typeof t2.splitKey == "string" && (m3 = t2.splitKey)), typeof t2 == "string" && (a3 = t2); l2 < r.length; l2++)
      e = r[l2].split(m3), n2 = [], e.length > 1 && (n2 = T2(g3, e)), e = e[e.length - 1], e = e === "*" ? "*" : C3(e), e in s3 || (s3[e] = []), s3[e].push({ keyup: c3, keydown: p4, scope: a3, mods: n2, shortcut: r[l2], method: i2, key: r[l2], splitKey: m3, element: o2 });
    typeof o2 < "u" && !W2(o2) && window && (H3.push(o2), P4(o2, "keydown", function(d4) {
      k2(d4, o2);
    }, y), A2 || (A2 = !0, P4(window, "focus", function() {
      f2 = [];
    }, y)), P4(o2, "keyup", function(d4) {
      k2(d4, o2), N4(d4);
    }, y));
  }
  function Y2(e) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
    Object.keys(s3).forEach(function(i2) {
      var r = s3[i2].filter(function(n2) {
        return n2.scope === t2 && n2.shortcut === e;
      });
      r.forEach(function(n2) {
        n2 && n2.method && n2.method();
      });
    });
  }
  var j3 = { getPressedKeyString: $3, setScope: F3, getScope: E, deleteScope: J2, getPressedKeyCodes: X4, isPressed: z3, filter: q4, trigger: Y2, unbind: Q2, keyMap: b2, modifier: g3, modifierMap: L4 };
  for (x2 in j3)
    Object.prototype.hasOwnProperty.call(j3, x2) && (v2[x2] = j3[x2]);
  var x2;
  typeof document < "u" && (B5 = window.hotkeys, v2.noConflict = function(e) {
    return e && window.hotkeys === v2 && (window.hotkeys = B5), v2;
  }, window.hotkeys = v2);
  var B5;

  // https://esm.sh/v119/immersive-translate@1.0.9/deno/immersive-translate.mjs
  var v3 = class {
    #e = performance.now();
    reset() {
      this.#e = performance.now();
    }
    stop(e) {
      let t2 = performance.now(), n2 = Math.round(t2 - this.#e);
      this.#e = t2;
    }
  }, D5 = class {
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
  }, E2 = new D5(), L5 = "poegempjloogba", I3 = "ension://";
  var U4 = "rome-ext";
  var V4 = "ch" + U4 + I3 + "cofdb" + L5 + "gkncekinflcnj";

  // deps.ts
  var toast = Ye.alert;

  // log.ts
  var theConsole = console, Timing = class {
    #t = performance.now();
    reset() {
      this.#t = performance.now();
    }
    stop(message) {
      let now = performance.now(), d4 = Math.round(now - this.#t), cf = colors_exports.green;
      d4 > 1e4 ? cf = colors_exports.red : d4 > 1e3 && (cf = colors_exports.yellow), theConsole.debug(
        colors_exports.dim(brandName + " TIMING:"),
        message,
        "in",
        cf(d4 + "ms")
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

  // utils/url_match.ts
  var matchAll = ["*://*/*", "*", "*://*"], placeholder = "immersive-translate-wildcard-placeholder.com";
  function getMatchedUrl(rawUrl, rawMatches) {
    let matches = [];
    if (!rawMatches || (rawMatches && !Array.isArray(rawMatches) ? matches = [rawMatches] : matches = rawMatches, matches.length === 0))
      return null;
    if (matches.some((m3) => matchAll.includes(m3)))
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

  // utils/array.ts
  function arrayOrGenericToArray(arrayOrGeneric) {
    return Array.isArray(arrayOrGeneric) ? arrayOrGeneric : arrayOrGeneric ? [arrayOrGeneric] : [];
  }
  function addToUniqueArray(item, array) {
    return array ? (Array.isArray(array) || (array = [array]), Array.from(/* @__PURE__ */ new Set([...array, item]))) : [item];
  }
  function removeFromArray(item, array) {
    return array ? (Array.isArray(item) || (item = [item]), Array.isArray(array) || (array = [array]), array.filter((i2) => !item.includes(i2))) : [];
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

  // libs/sha256.js
  var ERROR = "input is invalid type", WINDOW = typeof window == "object", root = WINDOW ? window : {};
  root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
  var WEB_WORKER = !WINDOW && typeof self == "object", NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
  NODE_JS ? root = global : WEB_WORKER && (root = self);
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module == "object" && module.exports, AMD = typeof define == "function" && define.amd, ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [-2147483648, 8388608, 32768, 128], SHIFT = [24, 16, 8, 0], K2 = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ], OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"], blocks = [];
  (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  });
  ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(obj) {
    return typeof obj == "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
  });
  var createOutputMethod = function(outputType, is224) {
    return function(message) {
      return new Sha256(is224, !0).update(message)[outputType]();
    };
  }, createMethod = function(is224) {
    var method = createOutputMethod("hex", is224);
    method.create = function() {
      return new Sha256(is224);
    }, method.update = function(message) {
      return method.create().update(message);
    };
    for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
      var type = OUTPUT_TYPES[i2];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  }, createHmacOutputMethod = function(outputType, is224) {
    return function(key, message) {
      return new HmacSha256(key, is224, !0).update(message)[outputType]();
    };
  }, createHmacMethod = function(is224) {
    var method = createHmacOutputMethod("hex", is224);
    method.create = function(key) {
      return new HmacSha256(key, is224);
    }, method.update = function(key, message) {
      return method.create(key).update(message);
    };
    for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
      var type = OUTPUT_TYPES[i2];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };
  function Sha256(is224, sharedMemory) {
    sharedMemory ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], is224 ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = is224;
  }
  Sha256.prototype.update = function(message) {
    if (!this.finalized) {
      var notString, type = typeof message;
      if (type !== "string") {
        if (type === "object") {
          if (message === null)
            throw new Error(ERROR);
          if (ARRAY_BUFFER && message.constructor === ArrayBuffer)
            message = new Uint8Array(message);
          else if (!Array.isArray(message) && (!ARRAY_BUFFER || !ArrayBuffer.isView(message)))
            throw new Error(ERROR);
        } else
          throw new Error(ERROR);
        notString = !0;
      }
      for (var code2, index = 0, i2, length = message.length, blocks2 = this.blocks; index < length; ) {
        if (this.hashed && (this.hashed = !1, blocks2[0] = this.block, blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0), notString)
          for (i2 = this.start; index < length && i2 < 64; ++index)
            blocks2[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
        else
          for (i2 = this.start; index < length && i2 < 64; ++index)
            code2 = message.charCodeAt(index), code2 < 128 ? blocks2[i2 >> 2] |= code2 << SHIFT[i2++ & 3] : code2 < 2048 ? (blocks2[i2 >> 2] |= (192 | code2 >> 6) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 & 63) << SHIFT[i2++ & 3]) : code2 < 55296 || code2 >= 57344 ? (blocks2[i2 >> 2] |= (224 | code2 >> 12) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 & 63) << SHIFT[i2++ & 3]) : (code2 = 65536 + ((code2 & 1023) << 10 | message.charCodeAt(++index) & 1023), blocks2[i2 >> 2] |= (240 | code2 >> 18) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 >> 12 & 63) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 & 63) << SHIFT[i2++ & 3]);
        this.lastByteIndex = i2, this.bytes += i2 - this.start, i2 >= 64 ? (this.block = blocks2[16], this.start = i2 - 64, this.hash(), this.hashed = !0) : this.start = i2;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }
  };
  Sha256.prototype.finalize = function() {
    if (!this.finalized) {
      this.finalized = !0;
      var blocks2 = this.blocks, i2 = this.lastByteIndex;
      blocks2[16] = this.block, blocks2[i2 >> 2] |= EXTRA[i2 & 3], this.block = blocks2[16], i2 >= 56 && (this.hashed || this.hash(), blocks2[0] = this.block, blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0), blocks2[14] = this.hBytes << 3 | this.bytes >>> 29, blocks2[15] = this.bytes << 3, this.hash();
    }
  };
  Sha256.prototype.hash = function() {
    var a3 = this.h0, b3 = this.h1, c3 = this.h2, d4 = this.h3, e = this.h4, f3 = this.h5, g4 = this.h6, h2 = this.h7, blocks2 = this.blocks, j4, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
    for (j4 = 16; j4 < 64; ++j4)
      t1 = blocks2[j4 - 15], s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3, t1 = blocks2[j4 - 2], s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10, blocks2[j4] = blocks2[j4 - 16] + s0 + blocks2[j4 - 7] + s1 << 0;
    for (bc = b3 & c3, j4 = 0; j4 < 64; j4 += 4)
      this.first ? (this.is224 ? (ab = 300032, t1 = blocks2[0] - 1413257819, h2 = t1 - 150054599 << 0, d4 = t1 + 24177077 << 0) : (ab = 704751109, t1 = blocks2[0] - 210244248, h2 = t1 - 1521486534 << 0, d4 = t1 + 143694565 << 0), this.first = !1) : (s0 = (a3 >>> 2 | a3 << 30) ^ (a3 >>> 13 | a3 << 19) ^ (a3 >>> 22 | a3 << 10), s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7), ab = a3 & b3, maj = ab ^ a3 & c3 ^ bc, ch = e & f3 ^ ~e & g4, t1 = h2 + s1 + ch + K2[j4] + blocks2[j4], t2 = s0 + maj, h2 = d4 + t1 << 0, d4 = t1 + t2 << 0), s0 = (d4 >>> 2 | d4 << 30) ^ (d4 >>> 13 | d4 << 19) ^ (d4 >>> 22 | d4 << 10), s1 = (h2 >>> 6 | h2 << 26) ^ (h2 >>> 11 | h2 << 21) ^ (h2 >>> 25 | h2 << 7), da = d4 & a3, maj = da ^ d4 & b3 ^ ab, ch = h2 & e ^ ~h2 & f3, t1 = g4 + s1 + ch + K2[j4 + 1] + blocks2[j4 + 1], t2 = s0 + maj, g4 = c3 + t1 << 0, c3 = t1 + t2 << 0, s0 = (c3 >>> 2 | c3 << 30) ^ (c3 >>> 13 | c3 << 19) ^ (c3 >>> 22 | c3 << 10), s1 = (g4 >>> 6 | g4 << 26) ^ (g4 >>> 11 | g4 << 21) ^ (g4 >>> 25 | g4 << 7), cd = c3 & d4, maj = cd ^ c3 & a3 ^ da, ch = g4 & h2 ^ ~g4 & e, t1 = f3 + s1 + ch + K2[j4 + 2] + blocks2[j4 + 2], t2 = s0 + maj, f3 = b3 + t1 << 0, b3 = t1 + t2 << 0, s0 = (b3 >>> 2 | b3 << 30) ^ (b3 >>> 13 | b3 << 19) ^ (b3 >>> 22 | b3 << 10), s1 = (f3 >>> 6 | f3 << 26) ^ (f3 >>> 11 | f3 << 21) ^ (f3 >>> 25 | f3 << 7), bc = b3 & c3, maj = bc ^ b3 & d4 ^ cd, ch = f3 & g4 ^ ~f3 & h2, t1 = e + s1 + ch + K2[j4 + 3] + blocks2[j4 + 3], t2 = s0 + maj, e = a3 + t1 << 0, a3 = t1 + t2 << 0;
    this.h0 = this.h0 + a3 << 0, this.h1 = this.h1 + b3 << 0, this.h2 = this.h2 + c3 << 0, this.h3 = this.h3 + d4 << 0, this.h4 = this.h4 + e << 0, this.h5 = this.h5 + f3 << 0, this.h6 = this.h6 + g4 << 0, this.h7 = this.h7 + h2 << 0;
  };
  Sha256.prototype.hex = function() {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
    return this.is224 || (hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15]), hex;
  };
  Sha256.prototype.toString = Sha256.prototype.hex;
  Sha256.prototype.digest = function() {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, arr = [
      h0 >> 24 & 255,
      h0 >> 16 & 255,
      h0 >> 8 & 255,
      h0 & 255,
      h1 >> 24 & 255,
      h1 >> 16 & 255,
      h1 >> 8 & 255,
      h1 & 255,
      h2 >> 24 & 255,
      h2 >> 16 & 255,
      h2 >> 8 & 255,
      h2 & 255,
      h3 >> 24 & 255,
      h3 >> 16 & 255,
      h3 >> 8 & 255,
      h3 & 255,
      h4 >> 24 & 255,
      h4 >> 16 & 255,
      h4 >> 8 & 255,
      h4 & 255,
      h5 >> 24 & 255,
      h5 >> 16 & 255,
      h5 >> 8 & 255,
      h5 & 255,
      h6 >> 24 & 255,
      h6 >> 16 & 255,
      h6 >> 8 & 255,
      h6 & 255
    ];
    return this.is224 || arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255), arr;
  };
  Sha256.prototype.array = Sha256.prototype.digest;
  Sha256.prototype.arrayBuffer = function() {
    this.finalize();
    var buffer = new ArrayBuffer(this.is224 ? 28 : 32), dataView = new DataView(buffer);
    return dataView.setUint32(0, this.h0), dataView.setUint32(4, this.h1), dataView.setUint32(8, this.h2), dataView.setUint32(12, this.h3), dataView.setUint32(16, this.h4), dataView.setUint32(20, this.h5), dataView.setUint32(24, this.h6), this.is224 || dataView.setUint32(28, this.h7), buffer;
  };
  function HmacSha256(key, is224, sharedMemory) {
    var i2, type = typeof key;
    if (type === "string") {
      var bytes = [], length = key.length, index = 0, code2;
      for (i2 = 0; i2 < length; ++i2)
        code2 = key.charCodeAt(i2), code2 < 128 ? bytes[index++] = code2 : code2 < 2048 ? (bytes[index++] = 192 | code2 >> 6, bytes[index++] = 128 | code2 & 63) : code2 < 55296 || code2 >= 57344 ? (bytes[index++] = 224 | code2 >> 12, bytes[index++] = 128 | code2 >> 6 & 63, bytes[index++] = 128 | code2 & 63) : (code2 = 65536 + ((code2 & 1023) << 10 | key.charCodeAt(++i2) & 1023), bytes[index++] = 240 | code2 >> 18, bytes[index++] = 128 | code2 >> 12 & 63, bytes[index++] = 128 | code2 >> 6 & 63, bytes[index++] = 128 | code2 & 63);
      key = bytes;
    } else if (type === "object") {
      if (key === null)
        throw new Error(ERROR);
      if (ARRAY_BUFFER && key.constructor === ArrayBuffer)
        key = new Uint8Array(key);
      else if (!Array.isArray(key) && (!ARRAY_BUFFER || !ArrayBuffer.isView(key)))
        throw new Error(ERROR);
    } else
      throw new Error(ERROR);
    key.length > 64 && (key = new Sha256(is224, !0).update(key).array());
    var oKeyPad = [], iKeyPad = [];
    for (i2 = 0; i2 < 64; ++i2) {
      var b3 = key[i2] || 0;
      oKeyPad[i2] = 92 ^ b3, iKeyPad[i2] = 54 ^ b3;
    }
    Sha256.call(this, is224, sharedMemory), this.update(iKeyPad), this.oKeyPad = oKeyPad, this.inner = !0, this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();
  HmacSha256.prototype.finalize = function() {
    if (Sha256.prototype.finalize.call(this), this.inner) {
      this.inner = !1;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(innerHash), Sha256.prototype.finalize.call(this);
    }
  };
  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(!0);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(!0);
  var sha256_default = exports;

  // utils/sha256.ts
  var sha256Fn = sha256_default.sha256;
  function sha256(message) {
    return Promise.resolve(sha256Fn(message));
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

  // dom/util.ts
  var isInUserscript = isMonkey();
  function isMatchSelectors(selectors) {
    return selectors ? typeof selectors == "string" ? document.querySelector(selectors) !== null : selectors.some((selector) => document.querySelector(selector)) : !1;
  }

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
  async function setBuildinConfig(buildinConfig) {
    await browserAPI.storage.local.set({ [buildinConfigStorageKey]: buildinConfig });
  }
  async function getLatestBuildinConfig() {
    let storageBuildInConfig = await browserAPI.storage.local.get(
      buildinConfigStorageKey
    ), finalBuildInConfig = {
      ...getBuildInConfig(),
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
    return finalBuildInConfig;
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

  // dom/current_language.ts
  var currentPageLanguageByClient = "auto";
  function setCurrentPageLanguageByClient(lang) {
    currentPageLanguageByClient = lang;
  }

  // dom/context.ts
  async function getContext(options) {
    let { url, config, state } = options, urlObj = new URL(url), sourceLanguage = "auto", {
      translationParagraphLanguagePattern,
      translationService,
      translationServices,
      translationTheme,
      translationThemePatterns,
      translationUrlPattern,
      targetLanguage,
      sourceLanguageUrlPattern,
      immediateTranslationPattern
    } = config, isDetectParagraphLanguage = isMatched(
      url,
      translationParagraphLanguagePattern
    ), isImmediateTranslate = isMatched(url, immediateTranslationPattern), defaultTranslationService = translationService, services = Object.keys(translationServices);
    for (let service of services) {
      let serviceConfig = translationServices[service];
      if (isMatched(url, serviceConfig)) {
        defaultTranslationService = service;
        break;
      }
    }
    let defaultTheme = translationTheme, themes = Object.keys(translationThemePatterns);
    for (let theme of themes) {
      let themeConfig = translationThemePatterns[theme];
      if (themeConfig && isMatched(url, themeConfig)) {
        defaultTheme = theme;
        break;
      }
    }
    let isTranslateUrl = isMatched(url, translationUrlPattern), isTranslateExcludeUrl = isMatchedExclude(
      url,
      translationUrlPattern
    );
    isTranslateExcludeUrl || (isTranslateExcludeUrl = isMatchUrl(url, buildinExcludeUrls));
    let sourceConfigLanguages = Object.keys(sourceLanguageUrlPattern), sourceLanguageReverseMap = {};
    for (let language of sourceConfigLanguages) {
      let matchPattern = sourceLanguageUrlPattern[language];
      if (matchPattern && matchPattern.matches)
        for (let match of matchPattern.matches)
          sourceLanguageReverseMap[match] = language;
    }
    let sourceUrlMatches = Object.keys(sourceLanguageReverseMap), sourceUrlMatched = getMatchedUrl(url, sourceUrlMatches);
    sourceUrlMatched && (sourceLanguage = sourceLanguageReverseMap[sourceUrlMatched] ?? "auto", sourceLanguageReverseMap[sourceUrlMatched] && sourceLanguageReverseMap[sourceUrlMatched] !== "auto" && setCurrentPageLanguageByClient(
      sourceLanguageReverseMap[sourceUrlMatched]
    ));
    let defaultTargetLanguage = targetLanguage || "zh-CN", hostname2 = urlObj.hostname, encryptedHostname = await sha256(hostname2), pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash, encryptedPath = await sha256(pathAndQueryAndHash), encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`, localConfig = await getLocalConfig(), buildinConfig = await getLatestBuildinConfig(), translationStartMode = config.translationStartMode;
    translationStartMode === "dynamic" && isImmediateTranslate && (translationStartMode = "immediate");
    let ctx = {
      targetLanguage: defaultTargetLanguage,
      config,
      translationService: defaultTranslationService,
      isTranslateUrl,
      sourceLanguage,
      mainFrame: document.body,
      isTranslateExcludeUrl,
      rule: config.generalRule,
      url,
      encryptedUrl,
      state: state ? Object.assign({
        translationArea: config.translationArea,
        translationStartMode,
        immediateTranslationTextCount: config.immediateTranslationTextCount,
        isAutoTranslate: !1,
        translationDebounce: 300,
        isNeedClean: !1,
        isDetectParagraphLanguage,
        cache: config.cache,
        translationTheme: defaultTheme
      }, state) : {
        translationArea: config.translationArea,
        translationStartMode,
        immediateTranslationTextCount: config.immediateTranslationTextCount,
        isAutoTranslate: !1,
        translationDebounce: 300,
        isNeedClean: !1,
        isDetectParagraphLanguage,
        cache: config.cache,
        translationTheme: defaultTheme
      },
      localConfig
    };
    ctx.state.translationArea === "body" && (ctx.config.generalRule.excludeTags = ctx.config.generalRule.excludeTags.filter((tag) => !ctx.config.generalRule.bodyTranslateTags.includes(tag)), ctx.config.generalRule.additionalExcludeSelectors = ctx.config.generalRule.additionalExcludeSelectors.filter(
      (selector) => selector !== ".btn"
    ));
    let translationServiceConfig = config.translationServices[ctx.translationService] || {};
    translationServiceConfig.immediateTranslationTextCount !== void 0 && isNumber(translationServiceConfig.immediateTranslationTextCount) && translationServiceConfig.immediateTranslationTextCount >= 0 && (ctx.state.immediateTranslationTextCount = translationServiceConfig.immediateTranslationTextCount), ctx.translationService === "deepl" && translationServiceConfig && translationServiceConfig.authKey && translationServiceConfig.authKey.startsWith("immersive_") && translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl !== void 0 && translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl >= 0 && (ctx.state.immediateTranslationTextCount = translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl), translationServiceConfig && translationServiceConfig.translationDebounce && typeof translationServiceConfig.translationDebounce == "number" && (ctx.state.translationDebounce = translationServiceConfig.translationDebounce);
    let buildinImmediateTranslationTextCount = buildinConfig.immediateTranslationTextCount;
    config.immediateTranslationTextCount !== buildinImmediateTranslationTextCount && (ctx.state.immediateTranslationTextCount = config.immediateTranslationTextCount);
    let rules = config.rules, rule;
    globalThis.PDFViewerApplication ? rule = rules.find((rule2) => rule2.isPdf) : globalThis.immersiveTranslateEbookViewer ? rule = rules.find((rule2) => rule2.isEbook) : globalThis.immersiveTranslateEbookBuilder ? rule = rules.find((rule2) => rule2.isEbookBuilder) : rule = rules.find((rule2) => isMatched(url, rule2)), ctx.rule.isPdf && (ctx.state.translationArea = "main"), ctx.state.translationArea === "body" && (ctx.rule.paragraphMinTextCount = 1, ctx.rule.paragraphMinWordCount = 1);
    let generalRule = config.generalRule;
    if (rule && (ctx.rule = mergeRule(generalRule, rule)), ctx.state.translationArea === "body" && ctx.rule.excludeTags && (ctx.rule.excludeTags = ctx.rule.excludeTags.filter((tag) => !ctx.rule.bodyTranslateTags.includes(tag) && !ctx.rule.forceTranslateTags.includes(tag))), ctx.rule.mainFrameSelector) {
      let mainFrame = document.querySelector(ctx.rule.mainFrameSelector);
      mainFrame && (ctx.mainFrame = mainFrame);
    }
    return ctx;
  }
  function isMatched(url, matchPattern) {
    if (!matchPattern)
      return !1;
    let { matches, excludeMatches, selectorMatches, excludeSelectorMatches } = matchPattern;
    return excludeMatches && excludeMatches.length > 0 && isMatchUrl(url, excludeMatches) ? !1 : matches && matches.length > 0 && isMatchUrl(url, matches) ? !0 : excludeSelectorMatches && excludeSelectorMatches.length > 0 && isMatchSelectors(excludeSelectorMatches) ? !1 : !!(selectorMatches && selectorMatches.length > 0 && isMatchSelectors(selectorMatches));
  }
  function isMatchedExclude(url, matchPattern) {
    if (!matchPattern)
      return !1;
    let { excludeMatches, excludeSelectorMatches } = matchPattern;
    return !!(excludeMatches && excludeMatches.length > 0 && isMatchUrl(url, excludeMatches) || excludeSelectorMatches && excludeSelectorMatches.length > 0 && isMatchSelectors(excludeSelectorMatches));
  }
  function isNumber(value) {
    return typeof value == "number";
  }

  // utils/is_valid_html_url.ts
  function isValidHtmlUrl(url) {
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch {
      return !1;
    }
    let pathname = urlObj.pathname;
    return pathname.endsWith(".html") || pathname.endsWith(".htm") ? !0 : !(urlObj.protocol !== "http:" && urlObj.protocol !== "https:" && urlObj.protocol !== "file:" && urlObj.protocol !== "data:");
  }

  // libs/use-chrome-storage/storage.ts
  var storage = {
    get: (key, defaultValue, storageArea) => {
      let keyObj = defaultValue === void 0 ? key : { [key]: defaultValue };
      return browserAPI.storage[storageArea].get(
        keyObj
      );
    },
    set: (key, value, storageArea) => browserAPI.storage[storageArea].set({ [key]: value })
  };

  // libs/use-chrome-storage/useChromeStorage.ts
  function useChromeStorage(key, initialValue, storageArea) {
    let [INITIAL_VALUE2] = P2(() => typeof initialValue == "function" ? initialValue() : initialValue), [STORAGE_AREA] = P2(storageArea), [state, setState] = P2(INITIAL_VALUE2), [isPersistent, setIsPersistent] = P2(!1), [error, setError] = P2("");
    j2(() => {
      storage.get(key, INITIAL_VALUE2, STORAGE_AREA).then((res) => {
        res[key] && setState(res[key]), setIsPersistent(!0), setError("");
      }).catch((error2) => {
        setIsPersistent(!1), setError(error2);
      });
    }, [key, INITIAL_VALUE2, STORAGE_AREA]);
    let updateValue = L2(
      // @ts-ignore: npm package is not typed
      (newValue) => {
        let toStore = typeof newValue == "function" ? newValue(state) : newValue;
        log_default.debug("new settings", toStore), storage.set(key, toStore, STORAGE_AREA).then(() => {
          setState(toStore), setIsPersistent(!0), setError("");
        }).catch((error2) => {
          setState(toStore), setIsPersistent(!1), setError(error2);
        });
      },
      [STORAGE_AREA, key, state]
    );
    return [state, updateValue, isPersistent, error];
  }

  // libs/use-chrome-storage/createChromeStorageStateHook.ts
  function createChromeStorageStateHook(key, initialValue, storageArea) {
    let consumers = [];
    return function() {
      let [value, setValue, isPersistent, error] = useChromeStorage(
        key,
        initialValue,
        storageArea
      ), setValueAll = L2((newValue) => {
        for (let consumer of consumers)
          consumer(newValue);
      }, []);
      return j2(() => (consumers.push(setValue), () => {
        consumers.splice(consumers.indexOf(setValue), 1);
      }), [setValue]), [value, setValueAll, isPersistent, error];
    };
  }

  // libs/use-chrome-storage/mod.ts
  function createChromeStorageStateHookSync(key, initialValue) {
    return createChromeStorageStateHook(key, initialValue, "sync");
  }

  // hooks/use_user_config.ts
  var SETTINGS_KEY = "userConfig", INITIAL_VALUE = {}, rawUseUserConfig = createChromeStorageStateHookSync(
    SETTINGS_KEY,
    INITIAL_VALUE
  );
  function useUserConfig() {
    let [value, setValue, isPersistent, error] = rawUseUserConfig(), formatSetValue = L2((newValue) => {
      let toStore = typeof newValue == "function" ? newValue(value) : newValue;
      toStore && (toStore.updatedAt = (/* @__PURE__ */ new Date()).toISOString()), setValue(toStore);
    }, [value]);
    return [value, formatSetValue, isPersistent, error, setValue];
  }

  // errors.ts
  var CommonError = class extends Error {
    constructor(name, message, details) {
      super(message);
      this.name = name, details && (this.details = details);
    }
  };

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
          let { messageHandler, sync } = connectionInfo, messageAuthor = {
            type: fromType,
            name: parsedMessageFrom.name,
            id: tabId,
            url: tabUrl,
            active: tabActive
          };
          if (sync) {
            try {
              let handlerResult = messageHandler(
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
            return messageHandler(
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
    getConnection(name, messageHandler, options) {
      let sync = !1;
      options && options.sync && (sync = !0);
      let fromType = this.fromType, currentListeners = listeners2.get(fromType);
      if (currentListeners.has(name))
        return currentListeners.get(name).connectionInstance;
      {
        let connection2 = new Connection(`${fromType}:${name}`, this.logger);
        return listeners2.get(fromType).set(name, {
          messageHandler,
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

  // popup_message_listener.ts
  var syncMessageHandler = function(payload, author) {
    let { method, data } = payload;
    log_default.debug(`popup received message: ${method}`, data || " ");
    let tabId;
    author.active && (tabId = author.id, globalThis.document.dispatchEvent(
      new CustomEvent(popupReceiveMessageEventName, {
        detail: {
          tabId,
          payload
        }
      })
    ));
  }, connection;
  function setupMessageListeners() {
    getConnection();
  }
  function getConnection() {
    return connection || (connection = new Messager("popup", !1).getConnection("main_sync", syncMessageHandler), connection);
  }

  // utils/click-multiple-times.ts
  function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
    return (cb) => {
      let timer, clicked = 0;
      return (e) => {
        ++clicked == requiredClicks && (cb(e), clicked = 0), clearTimeout(timer), timer = setTimeout(
          () => clicked = 0,
          // reset the number of clicks after a traditional 300ms duration
          timeLimit
        );
      };
    };
  }

  // utils/hostname_to_wild_hostname.ts
  function hostnameToWildHostname(hostname2) {
    let parts = hostname2.split(".");
    return parts.length > 2 ? (parts[0] = "*", parts.join(".")) : null;
  }

  // utils/url_without_hash.ts
  function getUrlWithoutHash(url) {
    let hashIndex = url.indexOf("#");
    return hashIndex === -1 ? url : url.slice(0, hashIndex);
  }

  // manifest.json
  var manifest_default = {
    manifest_version: 3,
    name: "__MSG_brandName__",
    description: "__MSG_brandDescription__",
    version: "0.5.5",
    default_locale: "en",
    background: {
      service_worker: "background.js"
    },
    web_accessible_resources: [
      "styles/inject.css",
      "pdf/index.html",
      "ebook/index.html",
      "ebook/index.html",
      "ebook/make/index.html"
    ],
    content_scripts: [
      {
        matches: [
          "<all_urls>",
          "file:///*",
          "*://*/*"
        ],
        js: [
          "content_script.js"
        ],
        run_at: "document_end",
        all_frames: !0
      }
    ],
    commands: {
      toggleTranslatePage: {
        suggested_key: {
          default: "Alt+A"
        },
        description: "__MSG_toggleTranslatePage__"
      },
      toggleTranslateTheWholePage: {
        suggested_key: {
          default: "Alt+W"
        },
        description: "__MSG_toggleTranslateTheWholePage__"
      },
      toggleTranslateToThePageEndImmediately: {
        description: "__MSG_toggleTranslateToThePageEndImmediately__"
      },
      toggleTranslateTheMainPage: {
        description: "__MSG_toggleTranslateTheMainPage__"
      },
      toggleTranslationMask: {
        description: "__MSG_toggleTranslationMask__"
      }
    },
    options_page: "options.html",
    options_ui: {
      page: "options.html",
      open_in_tab: !0,
      browser_style: !1
    },
    permissions: [
      "storage",
      "activeTab",
      "contextMenus",
      "webRequest",
      "webRequestBlocking",
      "declarativeNetRequestWithHostAccess",
      "declarativeNetRequestFeedback",
      "declarativeNetRequest"
    ],
    host_permissions: [
      "<all_urls>"
    ],
    declarative_net_request: {
      rule_resources: [{
        id: "ruleset_1",
        enabled: !0,
        path: "rules/request_modifier_rule.json"
      }]
    },
    action: {
      default_popup: "popup.html",
      default_icon: {
        "32": "icons/32.png",
        "48": "icons/48.png",
        "64": "icons/64.png",
        "128": "icons/128.png",
        "256": "icons/256.png"
      }
    },
    browser_action: {
      default_icon: "icons/32.png",
      default_popup: "popup.html",
      theme_icons: [{
        dark: "icons/32.png",
        light: "icons/dark-32.png",
        size: 32
      }, {
        dark: "icons/48.png",
        light: "icons/dark-48.png",
        size: 48
      }, {
        dark: "icons/64.png",
        light: "icons/dark-64.png",
        size: 64
      }, {
        dark: "icons/128.png",
        light: "icons/dark-128.png",
        size: 128
      }, {
        dark: "icons/256.png",
        light: "icons/dark-256.png",
        size: 256
      }]
    },
    icons: {
      "32": "icons/32.png",
      "48": "icons/48.png",
      "64": "icons/64.png",
      "128": "icons/128.png",
      "256": "icons/256.png"
    },
    browser_specific_settings: {
      gecko: {
        id: "{5efceaa7-f3a2-4e59-a54b-85319448e305}",
        strict_min_version: "63.0"
      }
    },
    key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"
  };

  // browser/version.ts
  function getVersion() {
    return manifest_default.version;
  }

  // https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
  var a2 = 0;
  function p3(n2, s4, t2, f3, u2) {
    var r, o2, _2 = {};
    for (o2 in s4)
      o2 == "ref" ? r = s4[o2] : _2[o2] = s4[o2];
    var e = { type: n2, props: _2, key: t2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a2, __source: u2, __self: f3 };
    if (typeof n2 == "function" && (r = n2.defaultProps))
      for (o2 in r)
        _2[o2] === void 0 && (_2[o2] = r[o2]);
    return d.vnode && d.vnode(e), e;
  }

  // components/select_link.tsx
  function SelectLink(props) {
    let { items, maxWidth } = props;
    return maxWidth = maxWidth || 128, /* @__PURE__ */ p3(
      "select",
      {
        autoComplete: "off",
        class: "min-select",
        style: { maxWidth: `${maxWidth}px` },
        value: items.find((item) => item.selected)?.value,
        onChange: (e) => {
          let value = e.target.value, item = items.find((item2) => item2.value === value);
          item && item.onSelected(item);
        },
        children: items.map((item, index) => /* @__PURE__ */ p3(
          "option",
          {
            value: item.value,
            selected: item.selected,
            children: item.label
          },
          "selectlink" + index
        ))
      }
    );
  }

  // components/button_drop_down.tsx
  var DEFAULT_VALUE = "DROP_DOWN_DEFAULT_VALUE";
  function SelectDropDown(props) {
    let { showArrow, onSelected, className, menus, maxWidth } = props;
    className = className || "", showArrow = showArrow ?? !0, maxWidth = maxWidth || 60;
    let ref = w2(null);
    return /* @__PURE__ */ p3(
      "select",
      {
        ref,
        autoComplete: "off",
        class: `min-select ${showArrow ? "" : "min-select-no-arrow"} ${className || ""}`,
        value: DEFAULT_VALUE,
        style: { maxWidth: `${maxWidth}px` },
        onChange: (e) => {
          e.preventDefault();
          let value = e.target.value;
          if (ref.current && value !== DEFAULT_VALUE) {
            ref.current.value = DEFAULT_VALUE, ref.current?.dispatchEvent(new Event("change"));
            let item = menus.find((item2) => item2.value === value);
            item && onSelected(item);
          }
        },
        children: [
          {
            value: DEFAULT_VALUE,
            label: props.label
          }
        ].concat(menus).map((item, index) => /* @__PURE__ */ p3("option", { value: item.value, children: item.label }, "option-" + index))
      }
    );
  }

  // libs/preact-translation/utils.ts
  function getResourceUrl(root2, lang) {
    return [root2, !root2 || root2.endsWith("/") ? "" : "/", lang, ".json"].join("");
  }
  function format(str, params) {
    let result = str;
    return params && Object.keys(params).forEach((key) => {
      let rawValue = params[key], keyIsNumber = isNumber2(key);
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
  function isNumber2(value) {
    if (typeof value == "number")
      return !0;
    if (value) {
      let num = parseInt(value);
      return !isNaN(num);
    } else
      return !1;
  }

  // libs/preact-translation/useTranslate.tsx
  var cache = {}, defaultOptions = {
    root: "",
    lang: "en",
    fallbackLang: "en"
  };
  function useTranslate(rawOptions, translations2) {
    let options = Object.assign(
      {},
      defaultOptions,
      rawOptions
    );
    cache = translations2 || cache;
    let [lang, setLang] = P2(options.lang), [data, setData] = P2(cache), [isReady, setReady] = P2(!1), loadData = (langKey) => {
      if (data.hasOwnProperty(langKey))
        return;
      setReady(!1);
      let url = getResourceUrl(options.root || "", langKey);
      options.getUrl && (url = options.getUrl(options.root || "", langKey), fetch(url).then((results) => results.json()).then((resource) => {
        cache[langKey] = resource, setData({ ...cache }), setReady(!0);
      }).catch((error) => {
        setData({ ...cache }), setReady(!0);
      }));
    };
    return j2(() => {
      loadData(options.fallbackLang || "en"), loadData(lang);
    }, [lang]), { lang, setLang, t: (key, params) => {
      if (!data.hasOwnProperty(lang))
        return key;
      let value = getValue(data, lang, key);
      return value === key && lang !== options.fallbackLang && (value = getValue(data, options.fallbackLang, key)), format(value, params);
    }, isReady };
  }

  // libs/preact-translation/translateProvider.tsx
  var TranslateContext = ce(null), defaultOptions2 = {
    root: "assets",
    lang: "en",
    fallbackLang: "en"
  }, TranslateProvider = (props) => {
    let { t: t2, setLang, lang, isReady } = useTranslate(
      {
        root: props.root || defaultOptions2.root,
        lang: props.lang || defaultOptions2.lang,
        fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
        getUrl: props.getUrl
      },
      props.translations
    );
    return /* @__PURE__ */ p3(
      TranslateContext.Provider,
      {
        value: {
          t: t2,
          setLang,
          lang,
          isReady
        },
        children: props.children
      }
    );
  };

  // hooks/use_i18n.ts
  function useI18n() {
    return M2(TranslateContext);
  }

  // components/popup_field.tsx
  function PopupField(props) {
    let { field, onChange, value } = props;
    value = value || field.default || "";
    let { t: t2 } = useI18n(), finalLabel = field.name;
    return field.label && (finalLabel = field.label), field.labelKey && (finalLabel = t2(field.labelKey)), field.type === "select" ? /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
      /* @__PURE__ */ p3("label", { class: "inline-block", children: [
        finalLabel,
        "\uFF1A"
      ] }),
      /* @__PURE__ */ p3(
        SelectLink,
        {
          items: field.options.map(
            (fieldOption) => ({
              label: `${fieldOption.label ? t2(fieldOption.label) : fieldOption.value}`,
              value: fieldOption.value,
              selected: value === fieldOption.value,
              onSelected: () => {
                onChange(fieldOption.value);
              }
            })
          )
        }
      )
    ] }) : null;
  }

  // services/util.ts
  function formatTranslationService(key, ctx) {
    let service = PureTranslationServices[key], translationConfig = ctx.config.translationServices[key] || {}, ok = !0, allProps = service.allProps || [], explicitProps = [], optionalProps = [];
    if (allProps.length > 0) {
      let requiredProps = allProps.filter((prop) => prop.required);
      if (requiredProps.length > 0) {
        for (let prop of requiredProps)
          if (!translationConfig[prop.name] && !prop.default) {
            ok = !1;
            break;
          }
      }
      allProps.forEach((prop) => {
        prop.optional ? optionalProps.push(prop) : explicitProps.push(prop);
      });
    }
    return {
      ...service,
      id: key,
      selected: ctx.translationService === key,
      ok,
      config: translationConfig,
      props: service.props || [],
      allProps,
      optionalProps,
      explicitProps
    };
  }
  var getTranslationServices = (ctx) => {
    let { config } = ctx, alpha = config.alpha, beta = config.beta, canary = config.canary, debug = config.debug;
    return Object.keys(
      PureTranslationServices
    ).filter((key) => {
      let service = PureTranslationServices[key];
      if (key.startsWith("mock"))
        return debug ? !0 : key === ctx.config.translationService;
      if (key === ctx.config.translationService)
        return !0;
      let isCanaryFeature = !!service.canary, isAlphaFeature = !!service.alpha, isBetaFeature = !!service.beta;
      return key === ctx.translationService || isCanaryFeature && canary || isAlphaFeature && (alpha || canary) || isBetaFeature && (beta || alpha || canary) ? !0 : !isAlphaFeature && !isBetaFeature && !isCanaryFeature;
    }).map((key) => formatTranslationService(key, ctx));
  };

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
  }, locales_default = finalTranslations;
  var getLanguageName = (lang, interfaceLanguage, useOriginal) => {
    let translation = t(
      finalTranslations,
      `languages.${lang}`,
      interfaceLanguage,
      "en"
    );
    return useOriginal ? langMap[lang] || lang : translation !== `languages.${lang}` ? translation : langMap[lang];
  };

  // utils/compare_version.ts
  function isAVersionGreaterOrEqualWithB(a3, b3) {
    return a3.localeCompare(b3, void 0, {
      numeric: !0,
      sensitivity: "base"
    }) >= 0;
  }

  // components/sync_latest.tsx
  var SyncSuccess = ({ date }) => {
    let { t: t2 } = useI18n(), [isHide, setIsHide] = P2(!1);
    return j2(() => {
      setTimeout(() => {
        setIsHide(!0);
      }, 5e3);
    }, []), isHide ? null : /* @__PURE__ */ p3("p", { class: "text-sm", children: [
      t2("Successfully synchronized with the latest official rules:"),
      " ",
      new Date(date).toLocaleString()
    ] });
  }, LocalVersionIsTooOld = ({ minVersion }) => {
    let { t: t2 } = useI18n();
    return /* @__PURE__ */ p3("p", { class: "text-sm", children: t2("localVersionIsTooOld", {
      minVersion
    }) });
  }, BadUserscriptBrowser = () => {
    let { t: t2 } = useI18n();
    return /* @__PURE__ */ p3(
      "p",
      {
        class: "text-sm",
        dangerouslySetInnerHTML: {
          __html: t2("badUserscriptBrowser", {
            1: "https://immersive-translate.owenyoung.com/installation.html"
          })
        }
      }
    );
  }, SyncFailed = ({
    message,
    handleSyncing,
    date
  }) => {
    let { t: t2 } = useI18n();
    return /* @__PURE__ */ p3("p", { class: "text-sm", children: [
      t2("failToSyncRules"),
      " ",
      /* @__PURE__ */ p3("a", { onClick: handleSyncing, children: t2("retry") }),
      /* @__PURE__ */ p3("br", {}),
      t2("failedReason"),
      "\uFF1A",
      message,
      /* @__PURE__ */ p3("br", {}),
      t2("currentRuleVersion"),
      "\uFF1A",
      date
    ] });
  };
  function SyncLatest(props) {
    let { request: request2 } = props, [localBuildinConfigUpdatedAt, setLocalBuildinConfigUpdatedAt] = P2(null), { t: t2 } = useI18n(), [remoteConfig, setRemoteConfig] = P2(null), [isNeedUpdate, setIsNeedUpdate] = P2(null), [syncErrorMessage, setSyncErrorMessage] = P2(""), [isSyncSuccess, setIsSyncSuccess] = P2(!1), [isInvalidLocalVersion, setIsInvalidLocalVersion] = P2(!1), [isBadUserscriptBrowser, setIsBadUserscriptBrowser] = P2(!1), [config, setConfig] = P2(null), [_isLatestVersion, setIsLatestVersion] = P2(null), version = getVersion(), handleSyncing = async () => {
      setSyncErrorMessage("");
      let finalRemoteConfig = remoteConfig;
      if (remoteConfig === null)
        try {
          let response = await request2({
            url: buildinConfigSyncUrl
          });
          response ? (setRemoteConfig(response), finalRemoteConfig = response, setIsSyncSuccess(!0)) : (setSyncErrorMessage(t2("unknownError")), setIsNeedUpdate(null));
        } catch (e) {
          setIsNeedUpdate(null), setSyncErrorMessage(e.message);
          return;
        }
      finalRemoteConfig !== null ? (props.setStorageBuildinConfig(finalRemoteConfig), setIsNeedUpdate(!1), setLocalBuildinConfigUpdatedAt(finalRemoteConfig.buildinConfigUpdatedAt)) : (setSyncErrorMessage(t2("canNotFetchRemoteRule")), setIsNeedUpdate(null));
    };
    return j2(() => {
      getConfig().then((localConfig) => {
        let localConfigUpdatedAtIsoString = localConfig.buildinConfigUpdatedAt;
        setConfig(localConfig);
        let localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
        if (setLocalBuildinConfigUpdatedAt(localConfigUpdatedAtIsoString), version === "0.0.0") {
          setIsBadUserscriptBrowser(!0);
          return;
        }
        request2({
          url: buildinConfigSyncUrl
        }).then((response) => {
          let data = response, remoteMinVersion = data.minVersion, localVersion = version;
          setRemoteConfig(data);
          let remoteVersion = data.latestVersion;
          if (remoteVersion && (isAVersionGreaterOrEqualWithB(localVersion, remoteVersion) ? setIsLatestVersion(!0) : setIsLatestVersion(!1)), isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion)) {
            let latestIsoTime = data.buildinConfigUpdatedAt;
            new Date(latestIsoTime) > localConfigUpdatedAt ? (setIsNeedUpdate(!0), handleSyncing()) : setIsNeedUpdate(!1);
          } else
            setIsInvalidLocalVersion(!0), setIsNeedUpdate(null);
        }).catch((e) => {
          setIsNeedUpdate(null), setSyncErrorMessage(e.message);
        });
      });
    }, []), j2(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, [localBuildinConfigUpdatedAt]), config ? /* @__PURE__ */ p3("div", { class: "text-sm mt-2", style: { maxWidth: 218 }, children: isBadUserscriptBrowser ? /* @__PURE__ */ p3(BadUserscriptBrowser, {}) : syncErrorMessage ? /* @__PURE__ */ p3(
      SyncFailed,
      {
        handleSyncing,
        message: syncErrorMessage,
        date: localBuildinConfigUpdatedAt || ""
      }
    ) : isInvalidLocalVersion ? /* @__PURE__ */ p3(LocalVersionIsTooOld, { minVersion: remoteConfig.minVersion }) : isNeedUpdate === null || isNeedUpdate === !0 ? null : isSyncSuccess ? /* @__PURE__ */ p3(SyncSuccess, { date: localBuildinConfigUpdatedAt }) : null }) : null;
  }

  // components/popup.tsx
  function Popup(props) {
    let version = getVersion(), {
      onTranslateTheMainPage,
      onUserConfigChange,
      request: request2,
      onTranslateLocalHtmlFile,
      onTranslateLocalSubtitleFile,
      onSetBuildinConfig,
      pageStatus,
      openEbookBuilderPage,
      openEbookViewerPage,
      config,
      openAboutPage,
      onTranslateTheWholePage,
      onToggleEnabled,
      openOptionsPage,
      ontranslateToThePageEndImmediately,
      onSetPageLanguage,
      onToggleTranslate,
      onTranslateLocalPdfFile,
      onTranslatePdf,
      onRestorePage,
      ctx,
      currentUrl,
      currentLang,
      onClose,
      onTranslatePage,
      onSetLocalConfig,
      onMouseTriggerChanged
    } = props, setSettings = onUserConfigChange, [message, setMessage] = P2(""), [errorMessage, _setErrorMessage] = P2(""), { t: t2 } = useI18n(), isAlwaysTranslateDomain = null, isAlwaysTranslateWildDomain = null, isNeverTranslaateDomain = null, isNeverTranslateWildDomain = null, isAlwaysTranslateLang = null, isAlwaysTranslateUrl = null, isNeverTranslateUrl = null, curentTranslationServiceItem = null, currentUrlObj = null, currentWildHostname = null, currentUrlWithoutHash = null, currentTranslationServiceConfig = null, isShowPricing = !0;
    if (config) {
      isSafari() && config && (isShowPricing = config.generalRule.showSponsorOnSafari);
      let { translationService, translationServices, translationUrlPattern } = config;
      if (PureTranslationServices[translationService] && (curentTranslationServiceItem = formatTranslationService(
        translationService,
        ctx
      )), translationServices && translationServices[translationService] ? currentTranslationServiceConfig = translationServices[translationService] || {} : currentTranslationServiceConfig = {}, currentUrl && isValidHtmlUrl(currentUrl)) {
        currentUrlObj = new URL(currentUrl), currentWildHostname = hostnameToWildHostname(currentUrlObj.hostname), currentUrlWithoutHash = getUrlWithoutHash(currentUrl);
        let { matches, excludeMatches } = translationUrlPattern;
        isAlwaysTranslateWildDomain = matches.includes(currentWildHostname), isAlwaysTranslateDomain = matches.includes(currentUrlObj.hostname), isNeverTranslateWildDomain = excludeMatches.includes(
          currentWildHostname
        ), isNeverTranslaateDomain = excludeMatches.includes(
          currentUrlObj.hostname
        ), isAlwaysTranslateUrl = matches.includes(currentUrlWithoutHash), isNeverTranslateUrl = excludeMatches.includes(currentUrlWithoutHash);
      }
    }
    if (config && currentLang && currentLang !== "auto") {
      let { translationLanguagePattern } = config, { matches } = translationLanguagePattern;
      matches.includes(currentLang) ? isAlwaysTranslateLang = !0 : isAlwaysTranslateLang = !1;
    }
    let handleOpenOptions = (e) => {
      e.preventDefault(), openOptionsPage();
    }, handleToggleAlpha = (_e3) => {
      setSettings((settings) => (settings.alpha ? setMessage("Success disable alpha!") : setMessage("Success enable alpha!"), {
        ...settings,
        alpha: !settings.alpha
      }));
    }, handleChangeToTranslateTheWholePage = () => {
      setSettings((state) => ({
        ...state,
        translationArea: "body"
      })), onTranslateTheWholePage();
    }, handleChangeToTranslateTheMainPage = () => {
      setSettings((state) => ({
        ...state,
        translationArea: "main"
      })), onTranslateTheMainPage();
    }, handleTranslationUrlPatternSelected = (value, matchString, reverseRemoveStrings, removeStrings) => {
      if (value === "default") {
        setSettings((state) => {
          let translationUrlPattern = { ...state.translationUrlPattern };
          return {
            ...state,
            translationUrlPattern: {
              ...state.translationUrlPattern,
              matches: removeFromArray(
                [currentUrlObj?.hostname, currentWildHostname, currentUrl],
                translationUrlPattern.matches
              ),
              excludeMatches: removeFromArray(
                [currentUrlObj?.hostname, currentWildHostname, currentUrl],
                translationUrlPattern.excludeMatches
              )
            }
          };
        });
        return;
      }
      let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
      currentUrlObj && setSettings((state) => {
        let translationUrlPattern = { ...state.translationUrlPattern };
        return translationUrlPattern[name] = addToUniqueArray(
          matchString,
          translationUrlPattern[name]
        ), removeStrings.length > 0 && (translationUrlPattern[name] = removeFromArray(
          removeStrings,
          translationUrlPattern[name]
        )), translationUrlPattern[reverseName] = removeFromArray(
          reverseRemoveStrings,
          translationUrlPattern[reverseName]
        ), {
          ...state,
          translationUrlPattern: {
            ...state.translationUrlPattern,
            ...translationUrlPattern
          }
        };
      }), name === "matches" && pageStatus === "Original" ? setTimeout(() => {
        onTranslatePage(), onClose();
      }, 100) : name === "excludeMatches" && pageStatus === "Translated" && setTimeout(() => {
        onRestorePage(), onClose();
      }, 100);
    }, handleTranslationLanguagePatternSelected = (value) => {
      if (!value) {
        setSettings((state) => {
          let translationLanguagePattern = {
            ...state.translationLanguagePattern
          };
          return {
            ...state,
            translationLanguagePattern: {
              ...state.translationLanguagePattern,
              matches: removeFromArray(
                currentLang,
                translationLanguagePattern.matches
              ),
              excludeMatches: removeFromArray(
                currentLang,
                translationLanguagePattern.excludeMatches
              )
            }
          };
        });
        return;
      }
      let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
      currentLang && setSettings((state) => {
        let translationLanguagePattern = {
          ...state.translationLanguagePattern
        };
        return translationLanguagePattern[name] = addToUniqueArray(
          currentLang,
          translationLanguagePattern[name]
        ), translationLanguagePattern[reverseName] = removeFromArray(
          currentLang,
          translationLanguagePattern[reverseName]
        ), {
          ...state,
          translationLanguagePattern: {
            ...state.translationLanguagePattern,
            ...translationLanguagePattern
          }
        };
      }), name === "matches" && pageStatus === "Original" && setTimeout(() => {
        onTranslatePage(), onClose();
      }, 100);
    }, isPdfUrl = currentUrlObj?.pathname.toLowerCase().endsWith(".pdf"), buttonLabel = t2("translate");
    pageStatus === "Translated" || pageStatus === "Error" ? buttonLabel = t2("show-original") : pageStatus === "Original" ? isPdfUrl ? isFirefox() && currentUrlObj.protocol === "file:" ? buttonLabel = t2("translate-firefox-local-pdf") : isMonkey() ? buttonLabel = t2("noSupportTranslate-pdf") : buttonLabel = t2("translate-pdf") : buttonLabel = t2("translate") : buttonLabel = t2(pageStatus);
    let translateToThePageEndImmediatelyLabel = t2(
      "translateToThePageEndImmediately"
    );
    (pageStatus === "Original" || pageStatus === "Translated") && (config.shortcuts.toggleTranslatePage && (isTouchDevice() && ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 ? buttonLabel += ` (${t2(
      `fingers.${ctx.rule.fingerCountToToggleTranslagePageWhenTouching}`
    )})` : buttonLabel += ` (${config.shortcuts.toggleTranslatePage})`), config.shortcuts.toggleTranslateToThePageEndImmediately && (translateToThePageEndImmediatelyLabel += ` (${config.shortcuts.toggleTranslateToThePageEndImmediately})`));
    let translationServiceItems = [];
    ctx && (translationServiceItems = getTranslationServices(ctx));
    let handleClosePopup = (e) => {
      e.preventDefault(), onClose();
    };
    return /* @__PURE__ */ p3("div", { class: "p-3", children: [
      /* @__PURE__ */ p3("div", { class: "text-sm", children: [
        /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p3("label", { class: "inline-block", children: [
            t2("popupSourceLanguage"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p3(
            SelectLink,
            {
              items: languages.map((code2) => ({
                label: getLanguageName(code2, config.interfaceLanguage),
                value: code2,
                selected: code2 === currentLang,
                onSelected: (item) => {
                  onSetPageLanguage(item.value);
                }
              }))
            }
          )
        ] }),
        config && config.targetLanguage && /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p3("label", { class: "inline-block", children: [
            t2("popupTarget"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p3(
            SelectLink,
            {
              items: languages.filter((code2) => code2 !== "auto").map((code2) => ({
                label: getLanguageName(code2, config.interfaceLanguage),
                value: code2,
                selected: code2 === config.targetLanguage,
                onSelected: (item) => {
                  setSettings((state) => ({
                    ...state,
                    targetLanguage: item.value
                  }));
                }
              }))
            }
          )
        ] }),
        curentTranslationServiceItem && translationServiceItems.length > 0 && /* @__PURE__ */ p3(L, { children: [
          /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
            /* @__PURE__ */ p3("label", { class: "inline-block", children: [
              t2("popupService"),
              "\uFF1A"
            ] }),
            /* @__PURE__ */ p3(
              SelectLink,
              {
                items: translationServiceItems.map((translationServiceItem) => ({
                  label: `${t2(
                    "translationServices." + translationServiceItem.id
                  )}${translationServiceItem.ok ? "" : " " + t2("needAction")}`,
                  value: translationServiceItem.id,
                  selected: translationServiceItem.selected,
                  onSelected: (option) => {
                    let selectedItem = translationServiceItems.find(
                      (item) => item.id === option.value
                    );
                    selectedItem.ok ? (setSettings((state) => ({
                      ...state,
                      translationService: selectedItem.id
                    })), selectedItem.props.length === 0 ? setTimeout(() => {
                      onTranslatePage();
                    }, 1) : setTimeout(() => {
                      onRestorePage();
                    }, 1)) : (setSettings((state) => ({
                      ...state,
                      translationService: selectedItem.id
                    })), setTimeout(() => {
                      openOptionsPage();
                    }, 100));
                  }
                }))
              }
            )
          ] }),
          currentTranslationServiceConfig && curentTranslationServiceItem.props.length > 0 && curentTranslationServiceItem.props.map((prop, index) => /* @__PURE__ */ p3("div", { class: "pl-4 text-sm", children: /* @__PURE__ */ p3(
            PopupField,
            {
              field: prop,
              value: currentTranslationServiceConfig[prop.name],
              onChange: (value) => {
                setSettings((state) => {
                  let currentServices = state.translationServices || {}, currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
                  return setTimeout(() => {
                    onRestorePage();
                  }, 1), {
                    ...state,
                    translationServices: {
                      ...currentServices,
                      [curentTranslationServiceItem.id]: {
                        ...currentServiceConfig,
                        [prop.name]: value
                      }
                    }
                  };
                });
              }
            },
            "field-" + index
          ) }, "service" + index))
        ] }),
        currentUrlObj && /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p3("label", { class: "inline-block", children: t2("forThisSite") }),
          /* @__PURE__ */ p3(
            SelectLink,
            {
              items: [
                {
                  label: t2("default"),
                  value: "default",
                  selected: isAlwaysTranslateDomain === !1 && isNeverTranslaateDomain === !1 && !isAlwaysTranslateWildDomain && !isNeverTranslateWildDomain && !isAlwaysTranslateUrl && !isNeverTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "default",
                      currentUrlObj.hostname,
                      [],
                      []
                    );
                    let currentDomain = currentUrlObj.hostname, currentTempTranslationDomains = ctx.localConfig.tempTranslationUrlMatches || [], filteredDomains = currentTempTranslationDomains.filter(
                      (item) => item.match !== currentDomain
                    ), isChanged = !1;
                    filteredDomains.length !== currentTempTranslationDomains.length && (isChanged = !0), isChanged && onSetLocalConfig({
                      ...ctx.localConfig,
                      tempTranslationUrlMatches: [...filteredDomains]
                    });
                  }
                },
                currentUrlWithoutHash && {
                  label: t2("alwaysTranslateSomeSite", {
                    hostname: t2("currentUrl")
                  }),
                  value: "matchesUrl",
                  selected: isAlwaysTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "matches",
                      currentUrlWithoutHash,
                      [currentUrlWithoutHash],
                      []
                    );
                  }
                },
                {
                  label: t2("alwaysTranslateSomeSite", {
                    hostname: currentUrlObj.hostname
                  }),
                  value: "matches",
                  selected: isAlwaysTranslateDomain,
                  onSelected: (item) => {
                    handleTranslationUrlPatternSelected(
                      item.value,
                      currentUrlObj.hostname,
                      [
                        currentUrlObj.hostname,
                        currentWildHostname,
                        currentUrlWithoutHash
                      ],
                      [currentWildHostname]
                    );
                  }
                },
                currentWildHostname && {
                  label: t2("alwaysTranslateSomeSite", {
                    hostname: currentWildHostname
                  }),
                  value: "matchesWild",
                  selected: isAlwaysTranslateWildDomain,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "matches",
                      currentWildHostname,
                      [
                        currentUrlWithoutHash,
                        currentUrlObj.hostname,
                        currentWildHostname
                      ],
                      [currentUrlObj.hostname]
                    );
                  }
                },
                currentUrlWithoutHash && {
                  label: t2("neverTranslateSomeSite", {
                    hostname: t2("currentUrl")
                  }),
                  value: "excludeMatchesUrl",
                  selected: isNeverTranslateUrl,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "excludeMatches",
                      currentUrlWithoutHash,
                      [currentUrlWithoutHash],
                      []
                    );
                  }
                },
                {
                  label: t2("neverTranslateSomeSite", {
                    hostname: currentUrlObj.hostname
                  }),
                  value: "excludeMatches",
                  selected: isNeverTranslaateDomain,
                  onSelected: (item) => {
                    handleTranslationUrlPatternSelected(
                      item.value,
                      currentUrlObj.hostname,
                      [
                        currentUrlObj.hostname,
                        currentWildHostname,
                        currentUrlWithoutHash
                      ],
                      [currentWildHostname]
                    );
                  }
                },
                currentWildHostname && {
                  label: t2("neverTranslateSomeSite", {
                    hostname: currentWildHostname
                  }),
                  value: "excludeMatchesWild",
                  selected: isNeverTranslateWildDomain,
                  onSelected: () => {
                    handleTranslationUrlPatternSelected(
                      "excludeMatches",
                      currentWildHostname,
                      [
                        currentUrlObj.hostname,
                        currentUrlWithoutHash,
                        currentWildHostname
                      ],
                      [currentUrlObj.hostname]
                    );
                  }
                }
              ].filter(Boolean)
            }
          )
        ] }),
        onMouseTriggerChanged && isMouseSupport() && /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p3("label", { class: "inline-block", children: [
            t2("mouse-translate"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p3(
            SelectLink,
            {
              items: MouseTranslateTriggerMechanism.filter((code2) => !(MouseTranslateTriggerMechanism.includes(
                config.generalRule.mouseHoverHoldKey
              ) && code2 === "OtherCustom")).map((code2) => {
                let label = t2("mouseHoldKey", {
                  key: code2
                }), isBuildinKey = MouseTranslateTriggerMechanism.includes(
                  config.generalRule.mouseHoverHoldKey
                ), isSelected = code2 === config.generalRule.mouseHoverHoldKey;
                return code2 === "Auto" ? label = t2("mouseHoldKeyAuto") : code2 === "Off" ? label = t2("mouseHoldKeyOff") : code2 === "OtherCustom" ? label = isBuildinKey ? t2("mouseHoldKeyOther") : t2("mouseHoldKeyCustomKey", {
                  key: config.generalRule.mouseHoverHoldKey
                }) : code2 === "Other" && (label = t2("mouseHoldKeyOther")), isBuildinKey || code2 === "OtherCustom" && (isSelected = !0), {
                  // Note: translate the code label
                  label,
                  value: code2,
                  selected: isSelected,
                  onSelected: (item) => {
                    item.value === "Other" ? openOptionsPage("#interface") : onMouseTriggerChanged(item.value);
                  }
                };
              })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p3("div", { class: "", children: /* @__PURE__ */ p3(
        "button",
        {
          class: "py-2 mt-1 mb-2 main-button ",
          onClick: () => {
            isPdfUrl ? onTranslatePdf && onTranslatePdf() : onToggleTranslate();
          },
          "aria-busy": pageStatus === "Translating",
          disabled: pageStatus === "Translating",
          children: buttonLabel
        }
      ) }),
      /* @__PURE__ */ p3("div", { class: "flex justify-between", children: [
        currentLang && currentLang !== "auto" ? /* @__PURE__ */ p3("label", { for: "alwaysTranslateThisLanugage", class: "text-sm", children: [
          /* @__PURE__ */ p3(
            "input",
            {
              type: "checkbox",
              id: "alwaysTranslateThisLanugage",
              name: "alwaysTranslateThisLanugage",
              checked: !!isAlwaysTranslateLang,
              onChange: (e) => {
                let checked = e.target.checked;
                handleTranslationLanguagePatternSelected(
                  checked ? "matches" : void 0
                );
              }
            }
          ),
          t2("alwaysTranslateSomeLanguage", {
            language: getLanguageName(
              currentLang,
              config.interfaceLanguage
            )
          })
        ] }) : /* @__PURE__ */ p3("span", {}),
        /* @__PURE__ */ p3(
          SelectDropDown,
          {
            label: t2("more"),
            showArrow: !0,
            onSelected: (item) => {
              item.value === "translateTheWholePage" ? onTranslateTheWholePage() : item.value === "translateToThePageEndImmediately" ? ontranslateToThePageEndImmediately() : item.value === "translateTheMainPage" ? onTranslateTheMainPage() : item.value === "showTranslationOnly" || (item.value === "translateLocalPdfFile" ? onTranslateLocalPdfFile && onTranslateLocalPdfFile() : item.value === "translateLocalHtmlFile" ? onTranslateLocalHtmlFile && onTranslateLocalHtmlFile() : item.value === "translateLocalSubtitleFile" ? onTranslateLocalSubtitleFile && onTranslateLocalSubtitleFile() : item.value === "donate" ? (globalThis.open(config.donateUrl), onClose()) : item.value === "feedback" ? (globalThis.open(config.feedbackUrl), onClose()) : item.value === "options" ? (openOptionsPage(), onClose()) : item.value === "changeToTranslateTheWholePage" ? handleChangeToTranslateTheWholePage() : item.value === "changeToTranslateTheMainPage" ? handleChangeToTranslateTheMainPage() : item.value === "about" ? openAboutPage() : item.value === "toggleEnabled" ? onToggleEnabled() : item.value === "openEbookViewer" ? openEbookViewerPage() : item.value === "openEbookBuilder" && openEbookBuilderPage());
            },
            menus: [
              config.translationArea === "main" && {
                label: "\u{1F480} " + t2("changeToTranslateTheWholePage"),
                value: "changeToTranslateTheWholePage"
              },
              config.translationArea === "body" && {
                label: "\u{1F4D6} " + t2("changeToTranslateTheMainPage"),
                value: "changeToTranslateTheMainPage"
              },
              {
                label: "\u26A1 " + translateToThePageEndImmediatelyLabel,
                value: "translateToThePageEndImmediately"
              },
              {
                label: "\u{1F4D8} " + t2("browser.openEbookViewer"),
                value: "openEbookViewer"
              },
              {
                label: "\u{1F4DA} " + t2("browser.openEbookBuilder"),
                value: "openEbookBuilder"
              },
              !isMonkey() && {
                label: "\u{1F4C1} " + t2("browser.translateLocalPdfFile"),
                value: "translateLocalPdfFile"
              },
              !isMonkey() && {
                label: "\u{1F310} " + t2("browser.translateLocalHtmlFile"),
                value: "translateLocalHtmlFile"
              },
              {
                label: "\u{1F4FA} " + t2("browser.translateLocalSubtitleFile"),
                value: "translateLocalSubtitleFile"
              },
              {
                label: (config.enabled ? "\u{1F6AB} " : "\u{1F44B} ") + (config.enabled ? t2("clickToDisableExtension") : t2("clickToEnableExtension")),
                value: "toggleEnabled"
              },
              {
                label: "\u2764\uFE0F " + t2(isShowPricing ? "aboutLabel" : "aboutLabelWithoutSponsor"),
                value: "about"
              }
            ].filter(Boolean)
          }
        )
      ] }),
      /* @__PURE__ */ p3("div", { class: "text-sm", children: message }),
      /* @__PURE__ */ p3("div", { class: "text-sm", children: errorMessage }),
      /* @__PURE__ */ p3("footer", { children: [
        /* @__PURE__ */ p3(
          SyncLatest,
          {
            request: request2,
            setStorageBuildinConfig: onSetBuildinConfig
          }
        ),
        /* @__PURE__ */ p3("div", { class: "mt-3 text-sm flex justify-between", children: [
          /* @__PURE__ */ p3("a", { href: "#", class: "secondary", onClick: handleOpenOptions, children: t2("options") }),
          isMonkey() && /* @__PURE__ */ p3("a", { href: "#", class: "secondary", onClick: handleClosePopup, children: t2("close") }),
          /* @__PURE__ */ p3(
            "span",
            {
              class: "immersive-translate-no-select muted",
              onClick: onClickMultipleTimes(7)(handleToggleAlpha),
              children: [
                "V",
                version,
                config.enabled ? null : /* @__PURE__ */ p3("a", { href: "#", onClick: onToggleEnabled, children: [
                  " ",
                  "(",
                  t2("hasBeenDisabled"),
                  ")"
                ] })
              ]
            }
          )
        ] })
      ] })
    ] });
  }

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
      } catch (_e3) {
        log_default.error("parse response failed", _e3);
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

  // pages/popup.tsx
  var callbacksWhenReady = {}, readyTabs = {};
  function callWhenReady(tabId, callback) {
    if (readyTabs[tabId])
      try {
        callback();
      } catch (e) {
        log_default.error("run callback failed", e);
      }
    else
      callbacksWhenReady[tabId] || (callbacksWhenReady[tabId] = []), callbacksWhenReady[tabId].push(callback);
  }
  function runCallbacksWhenReady(tabId) {
    if (callbacksWhenReady[tabId] && callbacksWhenReady[tabId].length) {
      let callbacks = [...callbacksWhenReady[tabId]];
      callbacksWhenReady[tabId] = [], callbacks.forEach((cb) => cb());
    }
  }
  function Popup2() {
    let [pageStatus, setPageStatus] = P2("Original"), [settings, setSettings, _isPersistent, _error] = useUserConfig(), [config, setConfig] = P2(null), [currentUrl, setCurrentUrl] = P2(null), [currentTabId, setCurrentTabId] = P2(null), [currentLang, setCurrentLang] = P2("auto"), [ctx, setContext] = P2(null), messageHandler = (e) => {
      let { tabId, payload } = e.detail, { method, data } = payload;
      log_default.debug("popup received message", method, data || " "), method === "setPageStatus" && tabId && setPageStatus(data);
    }, handleToggleEnabled = () => {
      setSettings((state) => ({
        ...state,
        enabled: !state.enabled
      })), setTimeout(() => {
        handleClose();
      }, 50);
    };
    j2(() => {
      let c3 = getConnection();
      return browserAPI.tabs.query({
        currentWindow: !0,
        active: !0
      }).then((tabs) => {
        let tabId = tabs[0].id;
        setCurrentTabId(tabId);
        let tabUrl = tabs[0].url;
        browserAPI.tabs.onUpdated.addListener((tabId2, _changeInfo, tab) => {
          tabId2 === tabId2 && tab.url && currentUrl && tab.url !== currentUrl && (setCurrentUrl(tab.url), window.location.reload());
        }), globalThis.document.addEventListener(
          popupReceiveMessageEventName,
          messageHandler
        ), tabUrl && setCurrentUrl(tabUrl), tabUrl && isValidHtmlUrl(tabUrl) && (setCurrentUrl(tabUrl), c3.sendMessage(`content_script:main_sync:${tabId}`, {
          method: "ping"
        }).then((_response) => {
          readyTabs[tabId] = !0, runCallbacksWhenReady(tabId);
        }).catch((_e3) => {
          log_default.debug(
            "ping failed, but it is ok. cause maybe content is not injected",
            _e3
          );
        }), callWhenReady(tabId, async () => {
          let result = await c3.sendMessage(
            `content_script:main_sync:${tabId}`,
            {
              method: "getPageStatus"
            }
          );
          setPageStatus(result);
        }), callWhenReady(tabId, async () => {
          let result = await getConfig();
          setConfig(result);
        }), callWhenReady(tabId, async () => {
          let lang = await c3.sendMessage(
            `content_script:main_sync:${tabId}`,
            {
              method: "getCurrentPageLanguage"
            }
          );
          setCurrentLang(lang);
        }));
      }), () => {
        globalThis.document.removeEventListener(
          popupReceiveMessageEventName,
          messageHandler
        );
      };
    }, []), j2(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, [settings]), j2(() => {
      currentUrl && config && getContext({
        url: currentUrl,
        config
      }).then((ctx2) => {
        setContext(ctx2);
      });
    }, [currentUrl, config]);
    let handleSendMessageToContent = (method, isClose = !0) => async () => {
      let c3 = getConnection(), tabId = (await browserAPI.tabs.query({
        currentWindow: !0,
        active: !0
      }))[0].id;
      c3.sendMessage(`content_script:main:${tabId}`, {
        method
      }), isClose && setTimeout(() => {
        globalThis.close();
      }, 10);
    }, handleTranslateLocalPdfFile = () => {
      let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl);
      browserAPI.tabs.create({
        url: pdfViewerRuntimeUrl
      }), globalThis.close();
    }, handleTranslateLocalHtmlFile = () => {
      let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(htmlViewerUrl);
      browserAPI.tabs.create({
        url: pdfViewerRuntimeUrl
      }), globalThis.close();
    }, handleTranslateLocalSubtitleFile = () => {
      let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(subtitleBuilderUrl);
      isSafari() && (pdfViewerRuntimeUrl = getEnv().SUBTITLE_BUILDER_URL), browserAPI.tabs.create({
        url: pdfViewerRuntimeUrl
      }), globalThis.close();
    }, handleTranslatePdf = () => {
      currentUrl && currentTabId && (browserAPI.tabs.update(currentTabId, {
        url: formatToPdfViewerUrl(currentUrl)
      }), globalThis.close());
    }, handleSetPageLanguage = (lang) => {
      let c3 = getConnection();
      if (setCurrentLang(lang), currentTabId && currentUrl) {
        let newSourceLanguageUrlPattern = handleSourceLanguageUrlPattern(
          currentUrl,
          lang,
          config.sourceLanguageUrlPattern
        );
        setSettings((state) => ({
          ...state,
          sourceLanguageUrlPattern: newSourceLanguageUrlPattern
        })), callWhenReady(currentTabId, () => {
          c3.sendMessage(`content_script:main:${currentTabId}`, {
            method: "setCurrentPageLanguageByClient",
            data: lang
          });
        });
      }
    }, handleClose = () => {
      globalThis.close();
    }, handleOpenOptionsPage = (pageRoute = "") => {
      if (isSafari()) {
        let optionsUrl = getEnv().OPTIONS_URL;
        browserAPI.tabs.create({
          url: optionsUrl + pageRoute
        });
      } else {
        let optionsUrl = browserAPI.runtime.getURL("options.html");
        browserAPI.tabs.create({
          url: optionsUrl + pageRoute
        });
      }
      setTimeout(() => {
        globalThis.close();
      }, 50);
    }, handleOpenAboutPage = () => {
      if (isSafari()) {
        let optionsUrl = getEnv().OPTIONS_URL;
        browserAPI.tabs.create({
          url: optionsUrl + "#about"
        });
      } else
        browserAPI.tabs.create({
          url: browserAPI.runtime.getURL("options.html#about")
        });
      setTimeout(() => {
        globalThis.close();
      }, 50);
    }, handleOpenEbookBuilderPage = () => {
      let url = browserAPI.runtime.getURL("ebook/make/index.html");
      isSafari() && (url = getEnv().EBOOK_BUILDER_URL), browserAPI.tabs.create({
        url
      }), setTimeout(() => {
        globalThis.close();
      }, 50);
    }, handleOpenEbookViewerPage = () => {
      browserAPI.tabs.create({
        url: browserAPI.runtime.getURL("ebook/index.html")
      }), setTimeout(() => {
        globalThis.close();
      }, 50);
    }, handleMouseTranslateTriggerConfig = (trigger) => {
      setSettings((state) => ({
        ...state,
        generalRule: {
          ...state.generalRule,
          mouseHoverHoldKey: trigger
        }
      }));
    };
    return !config || !ctx ? null : /* @__PURE__ */ p3(
      Popup,
      {
        onClose: handleClose,
        onToggleTranslate: handleSendMessageToContent("toggleTranslatePage"),
        openEbookBuilderPage: handleOpenEbookBuilderPage,
        openEbookViewerPage: handleOpenEbookViewerPage,
        onTranslateLocalSubtitleFile: handleTranslateLocalSubtitleFile,
        onTranslateLocalHtmlFile: handleTranslateLocalHtmlFile,
        onToggleEnabled: handleToggleEnabled,
        openOptionsPage: handleOpenOptionsPage,
        openAboutPage: handleOpenAboutPage,
        onTranslatePdf: handleTranslatePdf,
        onTranslateLocalPdfFile: handleTranslateLocalPdfFile,
        onTranslateTheMainPage: handleSendMessageToContent(
          "translateTheMainPage"
        ),
        onTranslateTheWholePage: handleSendMessageToContent(
          "translateTheWholePage"
        ),
        ontranslateToThePageEndImmediately: handleSendMessageToContent(
          "translateToThePageEndImmediately"
        ),
        onTranslatePage: handleSendMessageToContent("translatePage"),
        onRestorePage: handleSendMessageToContent("restorePage", !1),
        onSetPageLanguage: handleSetPageLanguage,
        onUserConfigChange: setSettings,
        config,
        pageStatus,
        ctx,
        currentUrl,
        currentLang,
        onSetLocalConfig: setLocalConfig,
        onSetBuildinConfig: setBuildinConfig,
        request,
        onMouseTriggerChanged: handleMouseTranslateTriggerConfig
      }
    );
  }

  // popup.tsx
  var mountPoint = document.getElementById("mount");
  setupMessageListeners();
  mountPoint && (async () => {
    let config = await getConfig();
    config.debug && log_default.setLevel("debug"), re(
      /* @__PURE__ */ p3(
        TranslateProvider,
        {
          lang: config.interfaceLanguage,
          translations: locales_default,
          fallbackLang: "zh-CN",
          children: /* @__PURE__ */ p3(Popup2, {})
        }
      ),
      mountPoint
    );
  })();
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
