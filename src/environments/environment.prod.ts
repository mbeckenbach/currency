import {environmentBase} from "./environment.base";
import {Environment} from "./environment.model";

/**
 * Production environment
 */
export const environment: Environment = {
  ...environmentBase,
  production: true
};
