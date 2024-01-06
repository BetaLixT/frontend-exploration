export enum Alignment {
  Start = "start",
  End = "end",
  Center = "center",
  Baseline = "baseline",
  Stretch = "stretch",
}

export enum Rounded {
  Minimal = "rounded",
  Medium = "rounded-md",
  Large = "rounded-lg",
  Full = "rounded-full",
  None = "rounded-none",
}

export enum ColorVariant {
  Info = "bg-light-info-500 dark:bg-dark-info-500 text-light-infofg-500 dark:text-infofg-500 fill-light-infofg-500 dark:fill-infofg-500",
  Warn = "bg-light-warn-500 dark:bg-dark-warn-500 text-light-warnfg-500 dark:text-warnfg-500 fill-light-warnfg-500 dark:fill-warnfg-500",
  Fail = "bg-light-danger-500 dark:bg-dark-danger-500 text-light-dangerfg-500 dark:text-dangerfg-500 fill-light-dangerfg-500 dark:fill-dangerfg-500",
  Brand = "bg-light-brand-500 dark:bg-dark-brand-500 text-light-brandfg-500 dark:text-brandfg-500 fill-light-brandfg-500 dark:fill-brandfg-500",
  Background = "bg-light-bg-500 dark:bg-dark-bg-500 text-light-bgfg-500 dark:text-bgfg-500 fill-light-bgfg-500 dark:fill-bgfg-500",
  BackgroundSecondary = "bg-light-bgsec-500 dark:bg-dark-bgsec-500 text-light-fgsec-500 dark:text-fgsec-500 fill-light-fgsec-500 dark:fill-fgsec-500",
  BackgroundHighContrast = "bg-light-hcontrast-500 dark:bg-dark-hcontrast-500 text-light-hcontrastfg-500 dark:text-hcontrastfg-500 fill-light-hcontrastfg-500 dark:fill-hcontrastfg-500",
  // Default = "bg-light-brand-500 dark:bg-dark-brand-500 text-light-brandfg-500 dark:text-brandfg-500 fill-light-brandfg-500 dark:fill-brandfg-500",
  None = "",
}

export enum ColorVariantHover {
  Info = "hover:bg-light-info-400 dark:hover:bg-dark-info-400 hover:text-light-infofg-400 dark:hover:text-dark-infofg-400",
  Warn = "hover:bg-light-warn-400 dark:hover:bg-dark-warn-400 hover:text-light-warnfg-400 dark:hover:text-dark-warnfg-400",
  Fail = "hover:bg-light-danger-400 dark:hover:bg-dark-danger-400 hover:text-light-dangerfg-400 dark:hover:text-dark-dangerfg-400",
  Brand = "hover:bg-light-brand-400 dark:hover:bg-dark-brand-400 hover:text-light-brandfg-400 dark:hover:text-dark-brandfg-400",
  Background = "hover:bg-light-bg-400 dark:hover:bg-dark-bg-400 hover:text-light-fg-400 dark:hover:text-dark-fg-400",
  BackgroundSecondary = "hover:bg-light-bgsec-400 dark:hover:bg-dark-bgsec-400 hover:text-light-fgsec-400 dark:hover:text-dark-fgsec-400",
  BackgroundHighContrast = "hover:bg-light-hcontrast-400 dark:hover:bg-dark-hcontrast-400 hover:text-light-hcontrastfg-400 dark:hover:text-dark-hcontrastfg-400",
  // Default = "hover:bg-light-brand-400 dark:hover:bg-dark-brand-400 hover:text-light-brandfg-400 dark:hover:text-dark-brandfg-400",
  InfoFull = "hover:bg-light-info-500 dark:hover:bg-dark-info-500 hover:text-light-infofg-500 dark:hover:text-dark-infofg-500",
  WarnFull = "hover:bg-light-warn-500 dark:hover:bg-dark-warn-500 hover:text-light-warnfg-500 dark:hover:text-dark-warnfg-500",
  FailFull = "hover:bg-light-danger-500 dark:hover:bg-dark-danger-500 hover:text-light-dangerfg-500 dark:hover:text-dark-dangerfg-500",
  BrandFull = "hover:bg-light-brand-500 dark:hover:bg-dark-brand-500 hover:text-light-brandfg-500 dark:hover:text-dark-brandfg-500",
  BackgroundFull = "hover:bg-light-bg-500 dark:hover:bg-dark-bg-500 hover:text-light-fg-500 dark:hover:text-dark-fg-500",
  BackgroundSecondaryFull = "hover:bg-light-bgsec-500 dark:hover:bg-dark-bgsec-500 hover:text-light-fgsec-500 dark:hover:text-dark-fgsec-500",
  BackgroundHighContrastFull = "hover:bg-light-hcontrast-500 dark:hover:bg-dark-hcontrast-500 hover:text-light-hcontrastfg-500 dark:hover:text-dark-hcontrastfg-500",
  None = "",
}

export enum ColorVariantFocus {
  Info = "focus:bg-light-info-400 dark:focus:bg-dark-info-400 focus:text-light-infofg-400 dark:focus:text-dark-infofg-400",
  Warn = "focus:bg-light-warn-400 dark:focus:bg-dark-warn-400 focus:text-light-warnfg-400 dark:focus:text-dark-warnfg-400",
  Fail = "focus:bg-light-danger-400 dark:focus:bg-dark-danger-400 focus:text-light-dangerfg-400 dark:focus:text-dark-dangerfg-400",
  Brand = "focus:bg-light-brand-400 dark:focus:bg-dark-brand-400 focus:text-light-brandfg-400 dark:focus:text-dark-brandfg-400",
  Background = "focus:bg-light-bg-400 dark:focus:bg-dark-bg-400 focus:text-light-fg-400 dark:focus:text-dark-fg-400",
  BackgroundSecondary = "focus:bg-light-bgsec-400 dark:focus:bg-dark-bgsec-400 focus:text-light-fgsec-400 dark:focus:text-dark-fgsec-400",
  BackgroundHighContrast = "focus:bg-light-hcontrast-400 dark:focus:bg-dark-hcontrast-400 focus:text-light-hcontrastfg-400 dark:focus:text-dark-hcontrastfg-400",
  // Default = "focus:bg-light-brand-400 dark:focus:bg-dark-brand-400 focus:text-light-brandfg-400 dark:focus:text-dark-brandfg-400",
  InfoFull = "focus:bg-light-info-500 dark:focus:bg-dark-info-500 focus:text-light-infofg-500 dark:focus:text-dark-infofg-500",
  WarnFull = "focus:bg-light-warn-500 dark:focus:bg-dark-warn-500 focus:text-light-warnfg-500 dark:focus:text-dark-warnfg-500",
  FailFull = "focus:bg-light-danger-500 dark:focus:bg-dark-danger-500 focus:text-light-dangerfg-500 dark:focus:text-dark-dangerfg-500",
  BrandFull = "focus:bg-light-brand-500 dark:focus:bg-dark-brand-500 focus:text-light-brandfg-500 dark:focus:text-dark-brandfg-500",
  BackgroundFull = "focus:bg-light-bg-500 dark:focus:bg-dark-bg-500 focus:text-light-fg-500 dark:focus:text-dark-fg-500",
  BackgroundSecondaryFull = "focus:bg-light-bgsec-500 dark:focus:bg-dark-bgsec-500 focus:text-light-fgsec-500 dark:focus:text-dark-fgsec-500",
  BackgroundHighContrastFull = "focus:bg-light-hcontrast-500 dark:focus:bg-dark-hcontrast-500 focus:text-light-hcontrastfg-500 dark:focus:text-dark-hcontrastfg-500",
  None = "",
}

export enum FocusRingVariant {
  Brand = "focus:outline-none focus:ring focus:ring-light-brand-500 dark:focus:ring-dark-brand-500",
  None = "",
}

export enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}
