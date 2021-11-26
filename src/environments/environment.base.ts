import {Environment} from "./environment.model";

/**
 * Base environment gets inherited by all other targets.
 */
export const environmentBase: Environment = {
  production: false,
  convertApiKey: 'ADD_API_KEY_HERE',
  convertApiServer: "https://free.currconv.com"
}
