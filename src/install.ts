// This file configures the runtime environment to increase compatibility with WinterCG.
// https://wintercg.org/
import { polyfillGlobal as installGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";

// Add a well-known shared symbol that doesn't show up in iteration or inspection
// this can be used to detect if the global object abides by the Expo team's documented
// built-in requirements.
const BUILTIN_SYMBOL = Symbol.for("expo.builtin");

// Prevent installing in server runtimes that target native platforms, e.g. Expo RSC.
if (typeof window !== "undefined" && !("TextDecoder" in window)) {
  function addBuiltinSymbol(obj: object) {
    Object.defineProperty(obj, BUILTIN_SYMBOL, {
      value: true,
      enumerable: false,
      configurable: false,
    });
    return obj;
  }

  function install(name: string, getValue: () => any) {
    installGlobal(name, () => addBuiltinSymbol(getValue()));
  }
  install("TextDecoder", () => require("./TextDecoder").TextDecoder);
}
