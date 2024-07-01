interface PanelState {
   data?: unknown;
   columns?: string[];
   loading?: boolean;
   loading_progress?: number;
   error?: string;
}

export default PanelState;
