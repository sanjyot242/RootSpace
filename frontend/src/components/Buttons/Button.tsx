
import { useReducer } from "react";

interface Props {
  socialMediaIcon?: null;
  rightIcon?: null;
  leftIcon?: null;
  size: "large" | "x-small" | "medium" | "small";
  theme:
    | "destructive-secondary"
    | "secondary"
    | "primary"
    | "destructive-primary"
    | "link"
    | "destructive-link";
  stateProp: "disabled" | "hover" | "normal";
  className?: string;
  children: string;
  onClick?: any;
}

export const Button = ({
  //  socialMediaIcon = null,
  //  rightIcon = null,
  //  leftIcon = null,
  size,
  theme,
  stateProp,
  className,
  children,
  onClick,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "large",
    theme: theme || "primary",
    state: stateProp || "normal",
  });

  return (
    <div
      className={`inline-flex items-center rounded-[var(--spacing-tokens-radius-radius-xxs)] justify-center relative ${
        state.theme === "secondary"
          ? "border-[0.5px] border-solid"
          : state.theme === "destructive-secondary"
          ? "border border-solid"
          : ""
      } ${
        (state.size === "medium" &&
          state.state === "hover" &&
          state.theme === "secondary") ||
        (state.size === "small" &&
          state.state === "hover" &&
          state.theme === "secondary") ||
        (state.size === "x-small" &&
          state.state === "hover" &&
          state.theme === "secondary") ||
        (state.state === "normal" && state.theme === "secondary")
          ? "border-[color:var(--semantic-stroke-stroke-primary)]"
          : state.theme === "destructive-secondary"
          ? "border-semantic-stroke-stroke-destructive"
          : state.theme === "secondary" &&
            state.state === "hover" &&
            state.size === "large"
          ? "border-[color:var(--semantic-stroke-stroke-primary-hover)]"
          : state.theme === "secondary" && state.state === "disabled"
          ? "border-[color:var(--semantic-stroke-stroke-disabled)]"
          : ""
      } ${
        state.size === "small" &&
        state.theme === "destructive-link" &&
        ["disabled", "hover"].includes(state.state)
          ? "gap-[var(--primitive-spacers-0)]"
          : "gap-[var(--primitive-spacers-8)]"
      } ${
        [
          "destructive-primary",
          "destructive-secondary",
          "primary",
          "secondary",
        ].includes(state.theme)
          ? "shadow-shadow-button-shadow"
          : ""
      } ${
        (state.size === "large" && state.theme === "destructive-primary") ||
        (state.size === "large" && state.theme === "destructive-secondary") ||
        (state.size === "large" && state.theme === "primary") ||
        (state.size === "large" && state.theme === "secondary")
          ? "pt-[var(--spacing-tokens-padding-padding-12)] pr-[var(--spacing-tokens-padding-padding-24)] pb-[var(--spacing-tokens-padding-padding-12)] pl-[var(--spacing-tokens-padding-padding-24)]"
          : (state.size === "medium" &&
              state.theme === "destructive-primary") ||
            (state.size === "medium" &&
              state.theme === "destructive-secondary") ||
            (state.size === "medium" && state.theme === "primary") ||
            (state.size === "medium" && state.theme === "secondary")
          ? "pt-[var(--spacing-tokens-padding-padding-10)] pr-[var(--spacing-tokens-padding-padding-20)] pb-[var(--spacing-tokens-padding-padding-10)] pl-[var(--spacing-tokens-padding-padding-20)]"
          : (state.size === "small" && state.theme === "destructive-primary") ||
            (state.size === "small" &&
              state.theme === "destructive-secondary") ||
            (state.size === "small" && state.theme === "primary") ||
            (state.size === "small" && state.theme === "secondary")
          ? "pt-[var(--primitive-spacers-6)] pr-[var(--primitive-spacers-10)] pb-[var(--primitive-spacers-6)] pl-[var(--primitive-spacers-10)]"
          : (state.size === "x-small" &&
              state.theme === "destructive-primary") ||
            (state.size === "x-small" &&
              state.theme === "destructive-secondary") ||
            (state.size === "x-small" && state.theme === "primary") ||
            (state.size === "x-small" && state.theme === "secondary")
          ? "pt-[var(--spacing-tokens-padding-padding-4)] pr-[var(--spacing-tokens-padding-padding-8)] pb-[var(--spacing-tokens-padding-padding-4)] pl-[var(--spacing-tokens-padding-padding-8)]"
          : ""
      } ${
        state.theme === "primary" && state.state === "normal"
          ? "bg-semantic-button-button-primary-base"
          : state.theme === "destructive-primary" && state.state === "normal"
          ? "bg-semantic-button-button-destructive"
          : state.state === "normal" &&
            ["destructive-secondary", "secondary"].includes(state.theme)
          ? "bg-semantic-button-button-base-inverse"
          : state.theme === "primary" && state.state === "hover"
          ? "bg-semantic-button-button-primary-hover"
          : state.theme === "destructive-primary" && state.state === "hover"
          ? "bg-semantic-button-button-destructive-hover"
          : state.theme === "secondary" && state.state === "hover"
          ? "bg-[color:var(--semantic-button-button-secondary-hover)]"
          : state.theme === "destructive-secondary" &&
            ["disabled", "hover"].includes(state.state)
          ? "bg-semantic-button-button-destructive-secondary-hover"
          : state.state === "disabled" &&
            ["primary", "secondary"].includes(state.theme)
          ? "bg-semantic-button-button-disabled"
          : state.state === "disabled" && state.theme === "destructive-primary"
          ? "bg-semantic-button-button-destructive-disabled"
          : ""
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        onClick();
      }}
    >
      <div
        className={`w-fit whitespace-nowrap relative ${
          state.size === "large" &&
          state.theme === "destructive-link" &&
          ["hover", "normal"].includes(state.state)
            ? "font-paragraph-medium-regular"
            : state.size === "x-small"
            ? "font-paragraph-xsmall-regular"
            : "font-paragraph-small-regular"
        } ${
          [
            "destructive-link",
            "destructive-primary",
            "destructive-secondary",
            "link",
            "primary",
          ].includes(state.theme)
            ? "mt-[-1.00px]"
            : ""
        } ${
          state.size === "large" &&
          state.theme === "destructive-link" &&
          ["hover", "normal"].includes(state.state)
            ? "tracking-[var(--paragraph-medium-regular-letter-spacing)]"
            : state.size === "x-small"
            ? "tracking-[var(--paragraph-xsmall-regular-letter-spacing)]"
            : "tracking-[var(--paragraph-small-regular-letter-spacing)]"
        } ${
          state.size === "large" &&
          state.theme === "destructive-link" &&
          ["hover", "normal"].includes(state.state)
            ? "text-[length:var(--paragraph-medium-regular-font-size)]"
            : state.size === "x-small"
            ? "text-[length:var(--paragraph-xsmall-regular-font-size)]"
            : "text-[length:var(--paragraph-small-regular-font-size)]"
        } ${
          state.size === "large" &&
          state.theme === "destructive-link" &&
          ["hover", "normal"].includes(state.state)
            ? "[font-style:var(--paragraph-medium-regular-font-style)]"
            : state.size === "x-small"
            ? "[font-style:var(--paragraph-xsmall-regular-font-style)]"
            : "[font-style:var(--paragraph-small-regular-font-style)]"
        } ${
          (state.state === "hover" && state.theme === "destructive-primary") ||
          (state.state === "hover" && state.theme === "primary") ||
          (state.state === "normal" && state.theme === "destructive-primary") ||
          (state.state === "normal" && state.theme === "primary")
            ? "text-[color:var(--semantic-text-text-inverse)]"
            : (state.state === "hover" && state.theme === "secondary") ||
              (state.state === "normal" && state.theme === "secondary") ||
              (state.state === "normal" && state.theme === "link")
            ? "text-[color:var(--semantic-text-text-primary)]"
            : (state.state === "disabled" &&
                state.theme === "destructive-primary") ||
              (state.state === "hover" &&
                state.theme === "destructive-secondary") ||
              (state.state === "normal" &&
                state.theme === "destructive-link") ||
              (state.state === "normal" &&
                state.theme === "destructive-secondary")
            ? "text-[color:var(--semantic-text-text-destructive)]"
            : state.theme === "link" && state.state === "hover"
            ? "text-[color:var(--semantic-text-text-tertiary)]"
            : state.theme === "destructive-link" && state.state === "hover"
            ? "text-[color:var(--semantic-text-text-destructive-hover)]"
            : "text-[color:var(--semantic-text-text-disabled)]"
        } ${
          state.size === "large" &&
          state.theme === "destructive-link" &&
          ["hover", "normal"].includes(state.state)
            ? "font-[number:var(--paragraph-medium-regular-font-weight)]"
            : state.size === "x-small"
            ? "font-[number:var(--paragraph-xsmall-regular-font-weight)]"
            : "font-[number:var(--paragraph-small-regular-font-weight)]"
        } ${
          state.size === "large" &&
          state.theme === "destructive-link" &&
          ["hover", "normal"].includes(state.state)
            ? "leading-[var(--paragraph-medium-regular-line-height)]"
            : state.size === "x-small"
            ? "leading-[var(--paragraph-xsmall-regular-line-height)]"
            : "leading-[var(--paragraph-small-regular-line-height)]"
        }`}
      >
        {((state.size === "large" &&
          state.state === "disabled" &&
          state.theme === "link") ||
          (state.size === "large" &&
            state.state === "disabled" &&
            state.theme === "primary") ||
          (state.size === "large" &&
            state.state === "normal" &&
            state.theme === "link") ||
          (state.size === "large" &&
            state.state === "normal" &&
            state.theme === "primary") ||
          (state.size === "large" && state.theme === "destructive-link") ||
          (state.size === "large" && state.theme === "destructive-primary") ||
          (state.size === "large" && state.theme === "destructive-secondary") ||
          (state.size === "large" && state.theme === "secondary") ||
          (state.size === "medium" && state.state === "disabled") ||
          (state.size === "medium" &&
            state.state === "hover" &&
            state.theme === "destructive-link") ||
          (state.size === "medium" &&
            state.state === "hover" &&
            state.theme === "destructive-primary") ||
          (state.size === "medium" &&
            state.state === "hover" &&
            state.theme === "destructive-secondary") ||
          (state.size === "medium" &&
            state.state === "hover" &&
            state.theme === "secondary") ||
          (state.size === "medium" && state.state === "normal") ||
          (state.size === "small" &&
            state.state === "disabled" &&
            state.theme === "link") ||
          (state.size === "small" &&
            state.state === "disabled" &&
            state.theme === "primary") ||
          (state.size === "small" &&
            state.state === "disabled" &&
            state.theme === "secondary") ||
          (state.size === "small" &&
            state.state === "hover" &&
            state.theme === "secondary") ||
          (state.size === "small" &&
            state.state === "normal" &&
            state.theme === "link") ||
          (state.size === "small" &&
            state.state === "normal" &&
            state.theme === "primary") ||
          (state.size === "small" && state.theme === "destructive-link") ||
          (state.size === "small" && state.theme === "destructive-primary") ||
          (state.size === "small" && state.theme === "destructive-secondary") ||
          (state.size === "x-small" &&
            state.state === "disabled" &&
            state.theme === "link") ||
          (state.size === "x-small" &&
            state.state === "disabled" &&
            state.theme === "primary") ||
          (state.size === "x-small" &&
            state.state === "normal" &&
            state.theme === "link") ||
          (state.size === "x-small" &&
            state.state === "normal" &&
            state.theme === "primary") ||
          (state.size === "x-small" && state.theme === "destructive-link") ||
          (state.size === "x-small" && state.theme === "destructive-primary") ||
          (state.size === "x-small" &&
            state.theme === "destructive-secondary") ||
          (state.size === "x-small" && state.theme === "secondary") ||
          (state.state === "hover" && state.theme === "link") ||
          (state.state === "hover" && state.theme === "primary")) && (
          <>{children}</>
        )}

        {state.theme === "secondary" &&
          state.size === "small" &&
          state.state === "normal" && <>{children}</>}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "normal",
      };
  }

  return state;
}
