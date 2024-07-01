interface PanelConfig {
   title: string;
   showTitle?: boolean;
   dataApi: string;
   dataApiConfig?: RequestInit;
   configApi: string;
   configApiConfig?: RequestInit;
}

export default PanelConfig;
