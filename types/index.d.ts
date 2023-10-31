import type * as Prisma from '@prisma/client';

export interface IGqlContext {
  user?: Prisma.User | null;
  isAdmin?: boolean;
}

export interface DoubleDropdown {
  type: 'DoubleDropdown';
  doubleOptions: {
    [x: string]: string[];
  };
  label: string;
  label2: string;
  id: string;
  id2: string;
  section: string;
  name: string;
}

export interface FilterDoubleDropdown extends DoubleDropdown {
  type: 'doubledropdown';
  advanceFilter: boolean;
  homepageFilter: boolean;
}

export type DynamicSectionsResponse =
  | {
      type: 'checkbox';
      label: string;
      section: string;
      name: string;
    }
  | {
      type: 'text';
      label: string;
      section: string;
      addon?: string;
      name: string;
    }
  | {
      type: 'select';
      label: string;
      section: string;
      options: string[];
      name: string;
    }
  | DoubleDropdown;

export type DynamicFiltersResponse =
  | {
      type: 'checkbox';
      label: string;
      section: string;
      name: string;
    }
  | {
      type: 'text';
      label: string;
      section: string;
      addon?: string;
      name: string;
    }
  | {
      type: 'select';
      label: string;
      section: string;
      options: string[];
      name: string;
    }
  | {
      type: 'minmax';
      label: string;
      name: string;
      name2: string;
      addon: string;
    }
  | FilterDoubleDropdown;

declare module 'graphql-client';
