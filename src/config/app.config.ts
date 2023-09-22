interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Gym Member'],
  customerRoles: [],
  tenantRoles: ['Gym Member'],
  tenantName: 'Gym',
  applicationName: 'TestFitness',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage personal information', 'Book gym sessions', 'View gym information', 'Review gym services'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bbf81cb6-37ec-4934-8e2c-0964490e8eeb',
};
