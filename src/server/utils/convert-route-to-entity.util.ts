const mapping: Record<string, string> = {
  gyms: 'gym',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
