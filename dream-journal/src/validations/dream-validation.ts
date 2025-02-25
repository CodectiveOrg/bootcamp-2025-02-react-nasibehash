import i18next from "i18next";

import { toast } from "react-toastify";

import { MODAL_CONTAINER_ID } from "../constants/id.ts";

import { Dream } from "../types/dream.ts";

const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 32;
const MAX_DESCRIPTION_LENGTH = 500;

type ValidationRule = {
  isValid: (dream: Dream) => boolean;
  messageKey: string;
};

const validationRules: ValidationRule[] = [
  {
    isValid: (dream) => Boolean(dream.title?.trim()),
    messageKey: "validation.title.required",
  },
  {
    isValid: (dream) => Boolean(dream.description?.trim()),
    messageKey: "validation.description.required",
  },
  {
    isValid: (dream) => Boolean(dream.date),
    messageKey: "validation.date.required",
  },
  {
    isValid: (dream) => Boolean(dream.vibe),
    messageKey: "validation.vibe.required",
  },
  {
    isValid: (dream) =>
      dream.title.length >= MIN_TITLE_LENGTH &&
      dream.title.length <= MAX_TITLE_LENGTH,
    messageKey: "validation.title.length",
  },
  {
    isValid: (dream) => dream.description.length <= MAX_DESCRIPTION_LENGTH,
    messageKey: "validation.description.length",
  },
  {
    isValid: (dream) => dream.vibe === "good" || dream.vibe === "bad",
    messageKey: "validation.vibe.invalid",
  },
  {
    isValid: (dream) => {
      const dreamDate = new Date(dream.date);
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      return dreamDate <= today;
    },
    messageKey: "validation.date.future",
  },
];

function showValidationError(messageKey: string): void {
  const message = i18next.t(messageKey as never, {
    minTitleLength: MIN_TITLE_LENGTH,
    maxTitleLength: MAX_TITLE_LENGTH,
    maxDescriptionLength: MAX_DESCRIPTION_LENGTH,
  });

  toast.error(message, { containerId: MODAL_CONTAINER_ID });
}

export function validateDream(dream: Dream): boolean {
  for (const rule of validationRules) {
    if (!rule.isValid(dream)) {
      showValidationError(rule.messageKey);
      return false;
    }
  }

  return true;
}
