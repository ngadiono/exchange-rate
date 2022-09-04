type State = {
  rates: any[];
  symbols: object;
  selectRates: string[];
};

enum ActionKind {
  Rates = 'RATES',
  Symbols = 'SYMBOLS',
  RateDelete = 'RATE_DELETE',
  RateSelect = 'RATE_SELECT',
  RateAdd = 'RATE_ADD',
}

type Action = {
  type: ActionKind;
  payload: any;
};

export const initialRateState: State = {
  rates: [],
  symbols: {},
  selectRates: ['CAD', 'CHF', 'INR', 'MYR', 'JPY', 'KRW'],
};

// Action rate list
export const ratesAction: (obj: any) => Action = (payload: object) => ({
  type: ActionKind.Rates,
  payload,
});

// Action symbol list
export const symbolsAction: (obj: any) => Action = (payload: object) => ({
  type: ActionKind.Symbols,
  payload,
});

// Action rate delete
export const rateDeleteAction: (obj: any) => Action = (payload: string) => ({
  type: ActionKind.RateDelete,
  payload,
});

// Action rate select dropdown
export const rateSelectAction: (obj: any) => Action = (payload: string[]) => ({
  type: ActionKind.RateSelect,
  payload,
});

// Action rate add
export const rateAddAction: (obj: any) => Action = (payload: object) => ({
  type: ActionKind.RateAdd,
  payload,
});

const convertObjToArrObj = (obj: any) => {
  return Object.keys(obj).map((key) => ({ symbol: key, rate: obj[key] }));
};

export const rateReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.Rates: {
      return {
        ...state,
        rates: convertObjToArrObj(payload),
      };
    }

    case ActionKind.Symbols: {
      return {
        ...state,
        symbols: payload,
      };
    }

    case ActionKind.RateDelete: {
      const idx = state.rates.findIndex((t) => t.symbol === payload);
      const rates = [...state.rates];
      rates.splice(idx, 1);
      return {
        ...state,
        rates: rates,
        selectRates: [...state.selectRates, payload],
      };
    }

    case ActionKind.RateSelect: {
      return {
        ...state,
        selectRates: [...state.selectRates, ...payload],
      };
    }

    case ActionKind.RateAdd: {
      return {
        ...state,
        rates: [...state.rates, convertObjToArrObj(payload)[0]],
        selectRates: state.selectRates.filter((e) => e !== Object.keys(payload)[0]),
      };
    }

    default:
      return state;
  }
};
