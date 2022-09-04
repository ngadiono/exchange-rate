type State = {
  rates: any[];
  symbols: object;
};

enum ActionKind {
  Rates = 'RATES',
  Symbols = 'SYMBOLS',
  RateDelete = 'RATE_DELETE',
}

type Action = {
  type: ActionKind;
  payload: any;
};

export const initialRateState: State = {
  rates: [],
  symbols: {},
};

export const ratesAction: (obj: any) => Action = (payload: object) => ({
  type: ActionKind.Rates,
  payload,
});

export const symbolsAction: (obj: any) => Action = (payload: object) => ({
  type: ActionKind.Symbols,
  payload,
});

export const deleteRateAction: (obj: any) => Action = (payload: number | string) => ({
  type: ActionKind.RateDelete,
  payload,
});

export const rateReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.Rates: {
      return {
        ...state,
        rates: Object.keys(payload).map((key, idx) => ({ id: idx + 1, symbol: key, rate: payload[key] })),
      };
    }

    case ActionKind.Symbols: {
      return {
        ...state,
        symbols: payload,
      };
    }

    case ActionKind.RateDelete: {
      const idx = state.rates.findIndex((t) => t.id === payload);
      const rates = [...state.rates];
      rates.splice(idx, 1);
      return {
        ...state,
        rates: rates,
      };
    }

    default:
      return state;
  }
};
