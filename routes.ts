/***
 *
 * Un tableau de routes qui sont accessible publiquement
 * Ces routes ne requierent pas une authentification
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/***
 *
 * Un tableau de routes qui sont utilisés pour l'authentification
 * Ces routes redirigent les utilisateurs vers /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/***
 *
 *Routes qui commencent par ce préfixe sont utilisés pour l'authentification
 * @type {string[]}
 */

export const apiAuthPrefix = "/api/auth";

/***
 *
 *La route de redirection après le login
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";
