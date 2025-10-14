import { CapacitorBarcodeScanner, CapacitorBarcodeScannerAndroidScanningLibrary, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
import { z as attr_class, y as attr, F as attr_style, G as spread_props, J as bind_props, K as stringify, N as ensure_array_like } from './index-DDcBcA9e.js';
import { g as getContext } from './context-R2425nfV.js';

function __0$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " text-dark dark:text-primary" : " text-white dark:text-black";
      } else {
        return theme ? " text-primary dark:text-dark" : " text-black dark:text-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto`)}><svg viewBox="0 0 24 24"${attr_class(`animate-spin${stringify(colorClass())}`)}${attr_style(`color: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}><circle cx="12" cy="12" r="10" stroke-width="4" fill="none" class="opacity-5" stroke="currentColor"></circle><circle cx="12" cy="12" r="10" stroke-width="4" class="opacity-80" stroke="currentColor" fill="none" stroke-dashoffset="46.07669455648491" stroke-dasharray="69.11503837897544" stroke-linecap="round"></circle></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __1$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " border-dark dark:border-primary" : " border-white dark:border-black";
      } else {
        return theme ? " border-primary dark:border-dark" : " border-black dark:border-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto border-2${stringify(colorClass())} animate-spin rounded-full border-t-transparent dark:border-t-transparent`)}${attr_style(`border-color: ${stringify(customColor[0])};border-top-color:transparent;animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div>`);
    bind_props($$props, { speed });
  });
}
function __2$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " border-dark/5 border-l-dark/[1] dark:border-primary/5 dark:border-l-primary/[1]" : " border-white/5 border-l-white/[1] dark:border-black/5 dark:border-l-black/[1]";
      } else {
        return theme ? " border-primary/5 border-l-primary/[1] dark:border-dark/5 dark:border-l-dark/[1]" : " border-black/5 border-l-black/[1] dark:border-white/5 dark:border-l-white/[1]";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto animate-spin rounded-full border-2 ${stringify(colorClass())}`)}${attr_style(`border-color:${stringify(customColor[0] + "0D")};border-left-color:${stringify(customColor[0] + "FF")};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div>`);
    bind_props($$props, { speed });
  });
}
function __3$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " border-dark dark:border-primary" : " border-white dark:border-black";
      } else {
        return theme ? " text-primary dark:text-dark" : " text-black dark:text-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto border-2 rounded-full${stringify(colorClass())} animate-spin border-b-transparent border-t-transparent dark:border-b-transparent dark:border-t-transparent`)}${attr_style(`border-color: ${stringify(customColor[0])};border-top-color:transparent;border-bottom-color:transparent;animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div>`);
    bind_props($$props, { speed });
  });
}
function __4$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " border-dark dark:border-primary" : " border-white dark:border-black";
      } else {
        return theme ? " border-primary dark:border-dark" : " border-black dark:border-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex flex-col justify-center`)}><div${attr_class(`relative m-auto h-8 w-8 border-2 rounded-full${stringify(colorClass())} animate-spin border-b-transparent border-t-transparent dark:border-b-transparent dark:border-t-transparent`)}${attr_style(`border-color: ${stringify(customColor[0])};border-top-color:transparent;border-bottom-color:transparent;animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}><div${attr_class(`absolute${stringify(colorClass())} border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent dark:border-l-transparent dark:border-r-transparent`)}${attr_style(`transform: rotate(225deg);border-color: ${stringify(customColor[0])};border-right-color:transparent;border-left-color:transparent;`)}></div> <div${attr_class(`absolute bottom-0 right-0${stringify(colorClass())} border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent dark:border-l-transparent dark:border-r-transparent`)}${attr_style(`transform: rotate(45deg);border-color: ${stringify(customColor[0])};border-right-color:transparent;border-left-color:transparent;`)}></div></div></div>`);
    bind_props($$props, { speed });
  });
}
function __5$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto rounded-full${stringify(colorClass())}`, "svelte-49j8er")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div>`);
    bind_props($$props, { speed });
  });
}
function __6($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`relative ${stringify(size)} m-auto`, "svelte-1sylqwg")}><div${attr_class(`absolute${stringify(colorClass())} loading1 h-1/3 w-1/3 rounded-full`, "svelte-1sylqwg")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)}></div> <div${attr_class(`absolute${stringify(colorClass())} loading2 h-1/3 w-1/3 rounded-full`, "svelte-1sylqwg")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex items-center`, "svelte-6sg6sx")}><div${attr_class(`flex-1${stringify(colorClass())} loading1 h-1/2 w-1/2 rounded-full`, "svelte-6sg6sx")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div> <div${attr_class(`flex-1${stringify(colorClass())} loading2 h-1/2 w-1/2 rounded-full`, "svelte-6sg6sx")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __8($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading m-auto flex items-center justify-between`, "svelte-1alb46m")}${attr_style(`animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}><div${attr_class(`${stringify(colorClass())} h-2 w-2 rounded-full`, "svelte-1alb46m")}${attr_style(`background: ${stringify(customColor[0])}`)}></div> <div${attr_class(`${stringify(colorClass())} h-2 w-2 rounded-full`, "svelte-1alb46m")}${attr_style(`background: ${stringify(customColor[0])}`)}></div> <div${attr_class(`${stringify(colorClass())} h-2 w-2 rounded-full`, "svelte-1alb46m")}${attr_style(`background: ${stringify(customColor[0])}`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __9($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`relative ${stringify(size)} m-auto`, "svelte-1jirqhb")}><!--[-->`);
    const each_array = ensure_array_like([0, 1, 2]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let i = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`absolute${stringify(colorClass())} loading h-1/3 w-1/3 rounded-full`, "svelte-1jirqhb")}${attr_style(`animation-delay: ${stringify(i - 2)}s;background: ${stringify(customColor[0])};animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __10($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex items-center justify-between`, "svelte-1ixdjs7")}><!--[-->`);
    const each_array = ensure_array_like([0, 1, 2]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let i = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`${stringify(colorClass())} loading h-2 w-2 rounded-full`, "svelte-1ixdjs7")}${attr_style(`animation-delay: ${stringify(i === 1 ? -0.3 : 0)}s;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __11($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-zepxx4")}><!--[-->`);
    const each_array = ensure_array_like([0, 1, 2, 3, 4]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let i = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`absolute -left-1/2 top-1/4${stringify(colorClass())} loading h-4 w-4 rounded-full opacity-60`, "svelte-zepxx4")}${attr_style(`animation-delay: ${stringify(-0.5 * i)}s, ${stringify(-0.5 * (i + 1))}s;top:calc(5);background: ${stringify(customColor[0])};animation-duration: ${stringify(2.5 / speed)}s;-webkit-animation-duration: ${stringify(2.5 / speed)}s;`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __12($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading relative m-auto box-border`, "svelte-mpcm8p")}><div${attr_class(`absolute${stringify(colorClass())} ball rounded-full`, "svelte-mpcm8p")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(speed >= 1 ? 0.6 / speed : 0.6)}s;-webkit-animation-duration: ${stringify(speed >= 1 ? 0.6 / speed : 0.6)}s;`)}></div> <div${attr_class(`absolute top-0 right-0${stringify(colorClass())} steps step1`, "svelte-mpcm8p")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(speed >= 1 ? 1.8 / speed : 1.8)}s;-webkit-animation-duration: ${stringify(speed >= 1 ? 1.8 / speed : 1.8)}s;`)}></div> <div${attr_class(`absolute top-0 right-0${stringify(colorClass())} steps step2`, "svelte-mpcm8p")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(speed >= 1 ? 1.8 / speed : 1.8)}s;-webkit-animation-duration: ${stringify(speed >= 1 ? 1.8 / speed : 1.8)}s;`)}></div> <div${attr_class(`absolute top-0 right-0${stringify(colorClass())} steps step3`, "svelte-mpcm8p")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(speed >= 1 ? 1.8 / speed : 1.8)}s;-webkit-animation-duration: ${stringify(speed >= 1 ? 1.8 / speed : 1.8)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __13($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " border-dark dark:border-primary" : " border-white dark:border-black";
      } else {
        return theme ? " border-primary dark:border-dark" : " border-black dark:border-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto box-border`, "svelte-1uet2wq")}><div${attr_class(`absolute left-1/2 top-1/2 ${stringify(size)} m-auto border-2 !border-l-transparent !border-r-transparent rounded-full${stringify(colorClass())} loading`, "svelte-1uet2wq")}${attr_style(`border-color: ${stringify(customColor[0])};animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)}></div> <div${attr_class(`absolute left-1/2 top-1/2 m-auto h-1/2 w-1/2 border-2 !border-b-transparent !border-t-transparent rounded-full${stringify(colorClass())} loading`, "svelte-1uet2wq")}${attr_style(`animation-direction: reverse;border-color: ${stringify(customColor[0])};animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __14($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const borderClass = () => {
      if (inverse) {
        return theme ? " border-dark dark:border-primary" : " border-white dark:border-black";
      } else {
        return theme ? " border-primary dark:border-dark" : " border-black dark:border-white";
      }
    };
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-zmk4yj")}><div${attr_class(`absolute h-full w-full border-2 !border-l-transparent !border-r-transparent rounded-full${stringify(borderClass())} loading1`, "svelte-zmk4yj")}${attr_style(`border-color: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div> <div${attr_class(`absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded-full${stringify(colorClass())} loading2`, "svelte-zmk4yj")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __15($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-jggrrg")}><div${attr_class(`absolute${stringify(colorClass())} loading1 top-1/2 h-1/4 w-1/4 rounded-full`, "svelte-jggrrg")}${attr_style(`left:0;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div> <div${attr_class(`absolute${stringify(colorClass())} loading2 top-1/2 h-1/4 w-1/4 rounded-full`, "svelte-jggrrg")}${attr_style(`left:25%;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div> <div${attr_class(`absolute${stringify(colorClass())} loading3 top-1/2 h-1/4 w-1/4 rounded-full`, "svelte-jggrrg")}${attr_style(`left:50%;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div> <div${attr_class(`absolute${stringify(colorClass())} loading4 top-1/2 h-1/4 w-1/4 rounded-full`, "svelte-jggrrg")}${attr_style(`left:75%;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div> <div${attr_class(`absolute${stringify(colorClass())} loading5 top-1/2 h-1/4 w-1/4 rounded-full`, "svelte-jggrrg")}${attr_style(`left:100%;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __16($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex items-center justify-between`, "svelte-eaqsx9")}><!--[-->`);
    const each_array = ensure_array_like([0, 1, 2]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let i = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`${stringify(colorClass())} loading h-2 w-2 rounded-full`, "svelte-eaqsx9")}${attr_style(`animation-delay: ${stringify(i * 100 - 300)}ms;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __17($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex items-center justify-between`, "svelte-p04q32")}><!--[-->`);
    const each_array = ensure_array_like([0, 1, 2]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let i = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`${stringify(colorClass())} loading h-2 w-2 rounded-full`, "svelte-p04q32")}${attr_style(`animation-delay: ${stringify(i * 100 - 300)}ms;background: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __18($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      theme = false,
      inverse = false
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto rotate-45`, "svelte-93jqwv")}><div${attr_class(`shape1 absolute left-0 top-0 h-1/3 w-1/3 ${stringify(colorClass())}`, "svelte-93jqwv")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div${attr_class(`shape2 absolute right-0 top-0 h-1/3 w-1/3 ${stringify(colorClass())}`, "svelte-93jqwv")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div${attr_class(`shape3 absolute bottom-0 right-0 h-1/3 w-1/3 ${stringify(colorClass())}`, "svelte-93jqwv")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div${attr_class(`shape4 absolute bottom-0 left-0 h-1/3 w-1/3 ${stringify(colorClass())}`, "svelte-93jqwv")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __19($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      theme = false,
      inverse = false
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading relative m-auto`, "svelte-s6zf0w")}${attr_style(`animation-duration: ${stringify(1.6 / speed)}s;-webkit-animation-duration: ${stringify(1.6 / speed)}s;`)}><div${attr_class(`shape1 absolute h-1/3 w-1/3 rounded-full ${stringify(colorClass())}`, "svelte-s6zf0w")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div${attr_class(`shape2 absolute h-1/3 w-1/3 rounded-full ${stringify(colorClass())}`, "svelte-s6zf0w")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div${attr_class(`shape3 absolute h-1/3 w-1/3 rounded-full ${stringify(colorClass())}`, "svelte-s6zf0w")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div${attr_class(`shape4 absolute h-1/3 w-1/3 rounded-full ${stringify(colorClass())}`, "svelte-s6zf0w")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __20($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      theme = false,
      inverse = false
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " border-dark/5 border-l-dark/[1] dark:border-primary/5 dark:border-l-primary/[1] border-r-dark/[1] dark:border-r-primary/[1]" : " border-white/5 border-l-white/[1] dark:border-black/5 dark:border-l-black/[1] border-r-white/[1] dark:border-r-black/[1]";
      } else {
        return theme ? " border-primary/5 dark:border-dark/5 border-l-primary/[1] dark:border-l-dark/[1] border-r-primary/[1] dark:border-r-dark/[1]" : " border-black/5 dark:border-white/5 border-l-black/[1] dark:border-l-white/[1] border-r-black/[1] dark:border-r-white/[1]";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading m-auto rounded-full border-4 ${stringify(colorClass())}`, "svelte-2lwbms")}${attr_style(`border-color: ${stringify(customColor[0] + "0D")} ${stringify(customColor[0] + "FF")} ${stringify(customColor[0] + "0D")} ${stringify(customColor[0] + "FF")};animation-duration: ${stringify(2 / speed)}s;-webkit-animation-duration: ${stringify(2 / speed)}s;`)}></div>`);
    bind_props($$props, { speed });
  });
}
function __21($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      theme = false,
      inverse = false
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading relative m-auto`, "svelte-t6co57")}${attr_style(`animation-duration: ${stringify(1.2 / speed)}s;-webkit-animation-duration: ${stringify(1.2 / speed)}s;`)}><div${attr_class(`shape1 absolute h-1/2 w-1/2 rounded-tl-full ${stringify(colorClass())}`, "svelte-t6co57")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div${attr_class(`shape2 absolute h-1/2 w-1/2 rounded-tr-full ${stringify(colorClass())}`, "svelte-t6co57")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div${attr_class(`shape3 absolute h-1/2 w-1/2 rounded-br-full ${stringify(colorClass())}`, "svelte-t6co57")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div${attr_class(`shape4 absolute h-1/2 w-1/2 rounded-bl-full ${stringify(colorClass())}`, "svelte-t6co57")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __22($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " text-dark dark:text-primary" : " text-white dark:text-black";
      } else {
        return theme ? " text-primary dark:text-dark" : " text-black dark:text-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto`, "svelte-1pe4tp6")}${attr_style(`animation-duration: ${stringify(2 / speed)}s;-webkit-animation-duration: ${stringify(2 / speed)}s;`)}><svg${attr_class(`container overflow-visible will-change-transform origin-center${stringify(colorClass())}`, "svelte-1pe4tp6")} viewBox="0 0 40 40"${attr_style(`color: ${stringify(customColor[0])}`)}><circle class="track stroke-[5px] opacity-0 svelte-1pe4tp6" stroke="currentColor" cx="20" cy="20" r="17.5" fill="none"></circle><circle class="car stroke-[5px] svelte-1pe4tp6"${attr_style(`animation-duration: ${stringify(2 / speed * 0.75)}s;-webkit-animation-duration: ${stringify(2 / speed * 0.75)}s;`)} stroke="currentColor" cx="20" cy="20" r="17.5" fill="none"></circle></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __23($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto -translate-x-0.5`, "svelte-17oce1")}><!--[-->`);
    const each_array = ensure_array_like(new Array(12));
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<div class="absolute left-1/2 flex h-8 w-[3px] flex-col gap-5 rounded-full bg-transparent svelte-17oce1"${attr_style(`transform: rotate(calc(360deg / -12*${stringify(i)}));`)}><div${attr_class(`h-1/5 rounded-full line${stringify(colorClass())}`, "svelte-17oce1")}${attr_style(`background: ${stringify(customColor[0])};animation-delay: calc( ${stringify(1 / speed)}s / -12 * ${stringify(i)}); animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __24($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " stroke-dark dark:stroke-primary" : " stroke-white dark:stroke-black";
      } else {
        return theme ? " stroke-primary dark:stroke-dark" : " stroke-black dark:stroke-white";
      }
    };
    $$renderer2.push(`<div class="m-auto svelte-yanu54"><svg${attr_class(`${stringify(size)} origin-center overflow-visible`, "svelte-yanu54")} x="0px" y="0px" viewBox="0 0 37 37" preserveAspectRatio="xMidYMid meet"><path${attr_class(`opacity-10 ${stringify(colorClass())}`, "svelte-yanu54")} fill="none"${attr_style(`stroke: ${stringify(customColor[0])};`)} stroke-width="5" pathLength="100" d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"></path><path${attr_class(`car ${stringify(colorClass())}`, "svelte-yanu54")} fill="none"${attr_style(`stroke: ${stringify(customColor[0])}; animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)} stroke-width="5" pathLength="100" d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"></path></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __25($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " stroke-dark dark:stroke-primary" : " stroke-white dark:stroke-black";
      } else {
        return theme ? " stroke-primary dark:stroke-dark" : " stroke-black dark:stroke-white";
      }
    };
    $$renderer2.push(`<div class="m-auto svelte-9yvcj3"><svg${attr_class(`${stringify(size)} origin-center overflow-visible will-change-transform`, "svelte-9yvcj3")} viewBox="0 0 35 35"><rect${attr_class(`opacity-10 ${stringify(colorClass())}`, "svelte-9yvcj3")}${attr_style(`stroke: ${stringify(customColor[0])};`)} x="2.5" y="2.5" fill="none" stroke-width="5px" width="32.5" height="32.5"></rect><rect${attr_class(`car ${stringify(colorClass())}`, "svelte-9yvcj3")}${attr_style(`stroke: ${stringify(customColor[0])}; animation-duration: ${stringify(1.2 / speed)}s;-webkit-animation-duration: ${stringify(1.2 / speed)}s;`)} x="2.5" y="2.5" fill="none" stroke-width="5px" width="32.5" height="32.5" pathLength="100"></rect></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __26($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " stroke-dark dark:stroke-primary" : " stroke-white dark:stroke-black";
      } else {
        return theme ? " stroke-primary dark:stroke-dark" : " stroke-black dark:stroke-white";
      }
    };
    $$renderer2.push(`<div class="m-auto svelte-17m1fu6"><svg${attr_class(`${stringify(size)} origin-center overflow-visible`, "svelte-17m1fu6")} x="0px" y="0px" viewBox="0 0 37 37" height="37" width="37" preserveAspectRatio="xMidYMid meet"><path${attr_class(`opacity-10${stringify(colorClass())}`, "svelte-17m1fu6")} fill="none"${attr_style(`stroke: ${stringify(customColor[0])};`)} stroke-width="5" pathLength="100" d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"></path><path${attr_class(`car${stringify(colorClass())}`, "svelte-17m1fu6")} fill="none"${attr_style(`stroke: ${stringify(customColor[0])}; animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)} stroke-width="5" pathLength="100" d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"></path></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __27($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} container relative m-auto flex items-center`, "svelte-1cawxvx")}${attr_style(`animation-duration: ${stringify(2 / speed)}s;`)}><!--[-->`);
    const each_array = ensure_array_like([0, -0.835, -0.668, -0.501, -0.334, -0.167]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="dot absolute left-0 right-0 flex svelte-1cawxvx"${attr_style(`animation-duration: ${stringify(2 / speed)}s; animation-delay: calc(${stringify(2 / speed)}s * ${stringify(item)} * 0.5);`)}><div${attr_class(`h-1.5 w-1.5 rounded-full${stringify(colorClass())}`, "svelte-1cawxvx")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-delay: calc(${stringify(2 / speed)}s * ${stringify(item)} * 0.5);`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __28($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto flex items-center`, "svelte-13fjlb0")}><!--[-->`);
    const each_array = ensure_array_like([0, -0.875, -0.75, -0.625, -0.5, -0.375, -0.25, -0.125]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div class="absolute left-0 right-0 flex svelte-13fjlb0"${attr_style(`transform: rotate(calc(360deg / 8 * ${stringify(i)})); `)}><div${attr_class(`dot h-1.5 w-1.5 rounded-full${stringify(colorClass())}`, "svelte-13fjlb0")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s ; animation-delay: calc(${stringify(1 / speed)}s * ${stringify(item)});`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __29($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} container relative m-auto flex items-center`, "svelte-109o9tf")}><!--[-->`);
    const each_array = ensure_array_like([0, -0.125, -0.25, -0.375, -0.5, -0.625, -0.75, -0.875]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div class="absolute left-0 right-0 flex svelte-109o9tf"${attr_style(`transform: rotate(${stringify(i * 45)}deg); animation-duration: ${stringify(0.3 / speed)}s`)}><div${attr_class(`dot h-1.5 w-1.5 rounded-full${stringify(colorClass())}`, "svelte-109o9tf")}${attr_style(`background-color: ${stringify(customColor[0])}; transform: translateX(12px); animation-duration: ${stringify(0.9 / speed)}s; animation-delay: calc(${stringify(0.9 / speed)}s * ${stringify(item)});`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __30($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex items-end justify-between`, "svelte-1r7ikud")}><!--[-->`);
    const each_array = ensure_array_like([0, -0.36, -0.2]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="cube h-2 w-2 svelte-1r7ikud"${attr_style(`animation-duration: ${stringify(1.75 / speed)}s; animation-delay: calc(${stringify(1.75 / speed)}s * ${stringify(item)})`)}><div${attr_class(`cube__inner h-2 w-2 rounded-xs${stringify(colorClass())}`, "svelte-1r7ikud")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-duration: ${stringify(1.75 / speed)}s; animation-delay: calc(${stringify(1.75 / speed)}s * ${stringify(item)})`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __31($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex items-center justify-between`, "svelte-108ehfe")}><!--[-->`);
    const each_array = ensure_array_like([-0.45, -0.3, -0.15, 0]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`bar h-full w-[3px]${stringify(colorClass())}`, "svelte-108ehfe")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-duration: ${stringify(1 / speed)}s; animation-delay: ${stringify(1 * item)}s`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __32($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-117ps63")}><div${attr_class(`line1 absolute w-1 h-1${stringify(colorClass())}`, "svelte-117ps63")}${attr_style(`background-color: ${stringify(customColor[0])}; top: calc(50% - 2px); left: calc(50% - 2px); animation-duration: ${stringify(4 / speed)}s;`)}></div> <div${attr_class(`line2 absolute w-1 h-1${stringify(colorClass())}`, "svelte-117ps63")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-duration: ${stringify(4 / speed)}s;`)}></div> <div${attr_class(`line2 absolute w-1 h-1${stringify(colorClass())}`, "svelte-117ps63")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-duration: ${stringify(4 / speed)}s; animation-delay: calc(${stringify(4 / speed)}s * -0.5);`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __33($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} container relative m-auto flex flex-col`, "svelte-1rwbk1k")}${attr_style(`animation-duration: ${stringify(3.5 / speed)}s;`)}><div class="isolation absolute flex h-[13.92px] w-[13.92px] items-center justify-center overflow-hidden svelte-1rwbk1k" style="top: 8.25%; left: 8.25%; border-radius: 50% 50% calc(32px / 15);"><div${attr_class(`absolute left-0 top-0 h-full w-full opacity-10${stringify(colorClass())}`, "svelte-1rwbk1k")}${attr_style(`background-color: ${stringify(customColor[0])};`)}></div> <div${attr_class(`half1 relative w-full origin-bottom-right h-full${stringify(colorClass())}`, "svelte-1rwbk1k")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-duration: ${stringify(3.5 / speed)}s;`)}></div></div> <div class="isolation absolute flex h-[13.92px] w-[13.92px] items-center justify-center overflow-hidden svelte-1rwbk1k" style="bottom: 8.25%; right: 8.25%; transform: rotate(180deg); align-self: flex-end; border-radius: 50% 50% calc(32px / 15);"><div${attr_class(`absolute left-0 top-0 h-full w-full opacity-10${stringify(colorClass())}`, "svelte-1rwbk1k")}${attr_style(`background-color: ${stringify(customColor[0])};`)}></div> <div${attr_class(`half2 relative h-full w-full origin-bottom-right z-10${stringify(colorClass())}`, "svelte-1rwbk1k")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-delay: -${stringify(3.5 / speed / 2)}s; animation-duration: ${stringify(3.5 / speed)}s;`)}></div></div></div>`);
    bind_props($$props, { speed });
  });
}
function __34($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} flex flex-col justify-center`, "svelte-1nz4ont")}><div${attr_class(`${stringify(size)} relative m-auto overflow-hidden rounded-full`, "svelte-1nz4ont")} style="height:4px"><div${attr_class(`absolute h-full w-full opacity-10${stringify(colorClass())}`, "svelte-1nz4ont")}${attr_style(`background-color: ${stringify(customColor[0])};`)}></div> <div${attr_class(`container h-full w-full rounded-full${stringify(colorClass())}`, "svelte-1nz4ont")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-duration: ${stringify(1.5 / speed)}s`)}></div></div></div>`);
    bind_props($$props, { speed });
  });
}
function __35($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} flex flex-col justify-center`, "svelte-1jtne8e")}><div${attr_class(`${stringify(size)} relative m-auto overflow-hidden rounded-full`, "svelte-1jtne8e")} style="height:4px"><div${attr_class(`absolute h-full w-full opacity-10${stringify(colorClass())}`, "svelte-1jtne8e")}${attr_style(`background-color: ${stringify(customColor[0])};`)}></div> <div${attr_class(`container h-full w-full rounded-full${stringify(colorClass())}`, "svelte-1jtne8e")}${attr_style(`background-color: ${stringify(customColor[0])}; animation-duration: ${stringify(2 / speed)}s`)}></div></div></div>`);
    bind_props($$props, { speed });
  });
}
function __36($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " stroke-dark dark:stroke-primary" : " stroke-white dark:stroke-black";
      } else {
        return theme ? " stroke-primary dark:stroke-dark" : " stroke-black dark:stroke-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex flex-col justify-center`, "svelte-1gji24v")}><svg${attr_class(`${stringify(size)} m-auto h-full w-full origin-center overflow-visible`, "svelte-1gji24v")} x="0px" y="0px" viewBox="0 0 55 23.1" preserveAspectRatio="xMidYMid meet"><path${attr_class(`opacity-10${stringify(colorClass())}`, "svelte-1gji24v")} fill="none"${attr_style(`stroke: ${stringify(customColor[0])};`)} stroke-width="5" pathLength="100" d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"></path><path${attr_class(`car${stringify(colorClass())}`, "svelte-1gji24v")} fill="none"${attr_style(`stroke: ${stringify(customColor[0])}; animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)} stroke-width="5" pathLength="100" d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"></path></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __37($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " stroke-dark dark:stroke-primary" : " stroke-white dark:stroke-black";
      } else {
        return theme ? " stroke-primary dark:stroke-dark" : " stroke-black dark:stroke-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto`, "svelte-c9p1vw")}><svg class="h-full w-full origin-center overflow-visible svelte-c9p1vw" x="0px" y="0px" viewBox="0 0 40 40" height="40" width="40" preserveAspectRatio="xMidYMid meet"><path${attr_class(`opacity-10${stringify(colorClass())}`, "svelte-c9p1vw")}${attr_style(`stroke: ${stringify(customColor[0])};`)} fill="none" stroke-width="4" pathLength="100" d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"></path><path${attr_class(`car${stringify(colorClass())}`, "svelte-c9p1vw")}${attr_style(`stroke: ${stringify(customColor[0])}; animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)} fill="none" stroke-width="4" pathLength="100" d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"></path></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __38($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " stroke-dark dark:stroke-primary" : " stroke-white dark:stroke-black";
      } else {
        return theme ? " stroke-primary dark:stroke-dark" : " stroke-black dark:stroke-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto`, "svelte-1c8wyn1")}><svg class="h-full w-full origin-center overflow-visible svelte-1c8wyn1" x="0px" y="0px" viewBox="0 0 50 31.25" height="31.25" width="50" preserveAspectRatio="xMidYMid meet"><path${attr_class(`track opacity-10${stringify(colorClass())}`, "svelte-1c8wyn1")}${attr_style(`stroke: ${stringify(customColor[0])};`)} stroke-width="4" fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"></path><path${attr_class(`car${stringify(colorClass())}`, "svelte-1c8wyn1")}${attr_style(`stroke: ${stringify(customColor[0])}; animation-duration: ${stringify(1.5 / speed)}s;-webkit-animation-duration: ${stringify(1.5 / speed)}s;`)} stroke-width="4" fill="none" pathLength="100" d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"></path></svg></div>`);
    bind_props($$props, { speed });
  });
}
function __39($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex flex-col items-center justify-center`, "svelte-nhw0qa")}><!--[-->`);
    const each_array = ensure_array_like([0, 1, 2, 3, 4, 5]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="relative w-full svelte-nhw0qa" style="height: calc(32px / 6);"><div${attr_class(`slice absolute top-0 h-full rounded-full shrink-0${stringify(colorClass())}`, "svelte-nhw0qa")}${attr_style(`background-color: ${stringify(customColor[0])};left: calc(50% - 32px / 12);width: calc(100% / 6);animation-duration: ${stringify(2.5 / speed)}s;animation-delay: ${stringify(-(2.5 / speed / 6) * item)}s;`)}></div> <div${attr_class(`slice absolute top-0 h-full rounded-full shrink-0${stringify(colorClass())}`, "svelte-nhw0qa")}${attr_style(`background-color: ${stringify(customColor[0])};left: calc(50% - 32px / 12);width: calc(100% / 6);animation-duration: ${stringify(2.5 / speed)}s;animation-delay: ${stringify(-(2.5 / speed / 2) - 2.5 / speed / 6 * item)}s;`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __40($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    const brList = [
      [24, -35],
      [16, -6],
      [8, 23],
      [-1, 51],
      [38, -17.5],
      [30, 10],
      [22, 39],
      [14, 67],
      [53, -0.8],
      [44.5, 27],
      [36, 55.7],
      [28.7, 84.3],
      [66.8, 15],
      [58.8, 43],
      [50, 72],
      [42, 100]
    ];
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto flex items-center`, "svelte-nmsbv6")}><!--[-->`);
    const each_array = ensure_array_like([
      -0.48,
      -0.4,
      -0.32,
      -0.24,
      -0.4,
      -0.32,
      -0.24,
      -0.16,
      -0.32,
      -0.24,
      -0.16,
      -0.08,
      -0.24,
      -0.16,
      -0.08,
      -0
    ]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div${attr_class(`dot absolute h-1 w-1 rounded-full${stringify(colorClass())}`, "svelte-nmsbv6")}${attr_style(`background-color: ${stringify(customColor[0])};bottom: calc(${stringify(brList[i][0])}% + 1.6px);right: calc(${stringify(brList[i][1])}% + 1.6px);animation-duration: ${stringify(1.5 / speed)}s;animation-delay: ${stringify(1.5 / speed * item)}s`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __41($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-132qmdp")}><div${attr_class(`container absolute left-2.5 top-2.5 h-3 w-3 rounded-full${stringify(colorClass())}`, "svelte-132qmdp")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(1.5 / speed)}s;`)}></div> <div${attr_class(`container absolute left-2.5 top-2.5 h-3 w-3 rounded-full${stringify(colorClass())}`, "svelte-132qmdp")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(1.5 / speed)}s;animation-delay: ${stringify(0.75 / speed)}s`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __42($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} container relative m-auto inline-block`, "svelte-1bnnw30")}${attr_style(`animation-duration: ${stringify(1.5 / speed)}s;`)}><!--[-->`);
    const each_array = ensure_array_like([120, -120, 0]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="absolute h-full svelte-1bnnw30"${attr_style(`transform: rotate(${stringify(item)}deg);left: 37.5%;width:25%;`)}><div${attr_class(`dot absolute left-0 top-0 h-0 w-full rounded-full${stringify(colorClass())}`, "svelte-1bnnw30")}${attr_style(`background-color: ${stringify(customColor[0])};padding-bottom: 100%;animation-duration: ${stringify(1.5 / speed)}s;`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __43($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex flex-col justify-center`, "svelte-uk5o8f")}><div class="flex items-center justify-between svelte-uk5o8f"><!--[-->`);
    const each_array = ensure_array_like([-0.45, -0.3, -0.15, 0]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`dot h-1.5 w-1.5 rounded-full${stringify(colorClass())}`, "svelte-uk5o8f")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;animation-delay: ${stringify(1 / speed * item)}s`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { speed });
  });
}
function __44($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-1czddta")}><!--[-->`);
    const each_array = ensure_array_like([0, 0.4, 0.8]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div class="dot absolute left-0 top-0 flex h-full w-full items-center svelte-1czddta"${attr_style(`animation-duration: ${stringify(2.5 / speed)}s;transform: translateX(${stringify(32 * item)}px);animation-delay: ${stringify(2.5 / speed / (-1.5 * i))}s`)}><div${attr_class(`w-2 rounded-full h-2${stringify(colorClass())}`, "svelte-1czddta")}${attr_style(`background-color: ${stringify(customColor[0])};`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __45($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex items-center justify-center`, "svelte-1jkqewp")}><!--[-->`);
    const each_array = ensure_array_like([0, 1, 2, 3]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class("dot relative flex h-full w-1/4 items-center svelte-1jkqewp", void 0, { "dot1": item === 0, "dot2": item === 3 })}${attr_style(`transform-origin: center top;animation-duration: ${stringify(1.5 / speed)}s;`)}><div${attr_class(`h-1/4 w-full rounded-full${stringify(colorClass())}`, "svelte-1jkqewp")}${attr_style(`background-color: ${stringify(customColor[0])};`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __46($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex flex-col justify-center`, "svelte-19nczvc")}><div class="relative flex h-1/5 w-full -translate-x-[10%] items-center justify-between svelte-19nczvc"><!--[-->`);
    const each_array = ensure_array_like([0, -0.2, -0.4, -0.6, -0.8]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`dot absolute h-full w-1/5 rounded-full${stringify(colorClass())}`, "svelte-19nczvc")}${attr_style(`background-color: ${stringify(customColor[0])};animation-delay: ${stringify(2.5 / speed * item)}s;animation-duration: ${stringify(2.5 / speed)}s`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { speed });
  });
}
function __47($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto flex flex-col justify-center`, "svelte-frvugr")}><div class="relative flex items-center justify-between svelte-frvugr"><!--[-->`);
    const each_array = ensure_array_like([-0.375, -0.25, -0.125]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`dot h-2 w-2 rounded-full${stringify(colorClass())}`, "svelte-frvugr")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(1.3 / speed)}s;animation-delay: ${stringify(1.3 / speed * item)}s`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { speed });
  });
}
function __48($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto flex -rotate-90 items-center`, "svelte-1f4socq")}><!--[-->`);
    const each_array = ensure_array_like([1, 0.9, 0.6, 0.4]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div class="dot absolute left-0 flex h-full w-full flex-col items-center svelte-1f4socq"${attr_style(`animation-duration: ${stringify(1.6 / speed)}s;animation-delay: ${stringify(1.6 / speed * -(0.4 - i * 0.09))}s;`)}><div${attr_class(`h-1/4 w-1/4 rounded-full${stringify(colorClass())}`, "svelte-1f4socq")}${attr_style(`background-color: ${stringify(customColor[0])};opacity: ${stringify(item)};transform: scale(${stringify(1 - 0.1 * i)});`)}></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __49($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-1aoytyd")}><!--[-->`);
    const each_array = ensure_array_like([0, -2]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`dot absolute left-0 top-0 h-full w-full rounded-full${stringify(colorClass())}`, "svelte-1aoytyd")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(2 / speed)}s;animation-delay: ${stringify(2 / speed / item)}s;`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __50($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-1lgjbwz")}><!--[-->`);
    const each_array = ensure_array_like([0, -2]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`dot absolute left-0 top-0 h-full w-full rounded-full${stringify(colorClass())}`, "svelte-1lgjbwz")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(2 / speed)}s;animation-delay: ${stringify(2 / speed / item)}s;`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __51($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-z28xzg")}><!--[-->`);
    const each_array = ensure_array_like([0, -0.25, -0.5, -0.75]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`dot absolute left-0 top-0 h-full w-full rounded-full${stringify(colorClass())}`, "svelte-z28xzg")}${attr_style(`background-color: ${stringify(customColor[0])};animation-duration: ${stringify(2 / speed)}s;animation-delay: ${stringify(2 / speed * item)}s`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __52($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-twiz59")}><!--[-->`);
    const each_array = ensure_array_like([
      [-0.375, 1],
      [-0.375, 0.8],
      [-0.3, 0.6],
      [-0.225, 0.4],
      [-0.15, 0.2],
      [-0.075, 0.1]
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`line absolute left-0 h-1 w-full rounded-full${stringify(colorClass())}`, "svelte-twiz59")}${attr_style(`background-color: ${stringify(customColor[0])};top: calc(50% - 2px);animation-duration: ${stringify(0.9 / speed)}s;animation-delay: ${stringify(0.9 / speed * item[0])}s;opacity: ${stringify(item[1])};`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __53($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      theme = false,
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const colorClass = () => {
      if (inverse) {
        return theme ? " bg-dark dark:bg-primary" : " bg-white dark:bg-black";
      } else {
        return theme ? " bg-primary dark:bg-dark" : " bg-black dark:bg-white";
      }
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto`, "svelte-14lwwb2")}><!--[-->`);
    const each_array = ensure_array_like([
      [-0.375, 1],
      [-0.375, 0.8],
      [-0.3, 0.6],
      [-0.225, 0.4],
      [-0.15, 0.2],
      [-0.075, 0.1]
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`line absolute left-0 h-1 w-full rounded-full${stringify(colorClass())}`, "svelte-14lwwb2")}${attr_style(`background-color: ${stringify(customColor[0])};top: 50%;animation-duration: ${stringify(0.9 / speed)}s;animation-delay: ${stringify(0.9 / speed * item[0])}s;opacity: ${stringify(item[1])};`)}></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { speed });
  });
}
function __0$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const outerBorderClass = () => {
      return inverse ? " border-white/10 dark:border-black/10" : " border-black/10 dark:border-white/10";
    };
    const innerColorClass = () => {
      return inverse ? " border-transparent dark:border-transparent border-l-dark dark:border-l-primary" : " border-transparent dark:border-transparent border-l-primary dark:border-l-dark";
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto rounded-full border-2 p-0.5 animate-spin${stringify(outerBorderClass())}`)}${attr_style(`border-color:${stringify(customColor[0])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}><div${attr_class(`h-full w-full border-2 rounded-full${stringify(innerColorClass())}`)}${attr_style(`border-color:${stringify(customColor[1] && "transparent")};border-left-color:${stringify(customColor[1])}`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __1$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      inverse = false,
      size = "w-8 h-8",
      customColor = [],
      speed = 1
    } = $$props;
    const outerBorderClass = () => {
      return inverse ? " border-white/10 dark:border-black/10" : " border-black/10 dark:border-white/10";
    };
    const innerColorClass = () => {
      return inverse ? " border-transparent dark:border-transparent border-l-dark dark:border-l-primary" : " border-transparent dark:border-transparent border-l-primary dark:border-l-dark";
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} m-auto rounded-full border-2 p-0.5 animate-spin${stringify(innerColorClass())}`)}${attr_style(`border-color:${stringify(customColor[1] && "transparent")};border-left-color:${stringify(customColor[1])};animation-duration: ${stringify(1 / speed)}s;-webkit-animation-duration: ${stringify(1 / speed)}s;`)}><div${attr_class(`h-full w-full border-2 rounded-full${stringify(outerBorderClass())}`)}${attr_style(`border-color:${stringify(customColor[0])};`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __2$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      inverse = false
    } = $$props;
    const borderClass = () => {
      return inverse ? "border-white/5 dark:border-black/5 border-l-dark dark:border-l-primary border-r-dark dark:border-r-primary" : "border-black/5 dark:border-white/5 border-l-primary dark:border-l-dark border-r-primary dark:border-r-dark";
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading m-auto rounded-full border-4 ${stringify(borderClass())}`, "svelte-1m0k15d")}${attr_style(`border-color: ${stringify(customColor[0] || (inverse ? "" : ""))} ${stringify(customColor[1] || (inverse ? "" : ""))} ${stringify(customColor[0] || (inverse ? "" : ""))} ${stringify(customColor[1] || (inverse ? "" : ""))};animation-duration: ${stringify(2 / speed)}s;-webkit-animation-duration: ${stringify(2 / speed)}s;`)}></div>`);
    bind_props($$props, { speed });
  });
}
function __3$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      inverse = false
    } = $$props;
    const bgClass = () => {
      return inverse ? "bg-dark dark:bg-primary" : "bg-primary dark:bg-dark";
    };
    const bgClass2 = () => {
      return inverse ? "bg-white/50 dark:bg-black/50" : "bg-black/50 dark:bg-white/50";
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto rotate-45`, "svelte-1lc4cbw")}><div${attr_class(`shape1 absolute left-0 top-0 h-1/3 w-1/3 ${stringify(bgClass())}`, "svelte-1lc4cbw")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div${attr_class(`shape2 absolute right-0 top-0 h-1/3 w-1/3 ${stringify(bgClass2())}`, "svelte-1lc4cbw")}${attr_style(`background: ${stringify(customColor[1])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div${attr_class(`shape3 absolute bottom-0 right-0 h-1/3 w-1/3 ${stringify(bgClass())}`, "svelte-1lc4cbw")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div${attr_class(`shape4 absolute bottom-0 left-0 h-1/3 w-1/3 ${stringify(bgClass2())}`, "svelte-1lc4cbw")}${attr_style(`background: ${stringify(customColor[1])};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      inverse = false
    } = $$props;
    const bgClass = () => {
      return inverse ? "bg-dark dark:bg-primary" : "bg-primary dark:bg-dark";
    };
    const bgClass2 = () => {
      return inverse ? "bg-white/50 dark:bg-black/50" : "bg-black/50 dark:bg-white/50";
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading relative m-auto`, "svelte-1ck9zaj")}${attr_style(`animation-duration: ${stringify(1.6 / speed)}s;-webkit-animation-duration: ${stringify(1.6 / speed)}s;`)}><div${attr_class(`shape1 absolute h-1/3 w-1/3 rounded-full ${stringify(bgClass())}`, "svelte-1ck9zaj")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div${attr_class(`shape2 absolute h-1/3 w-1/3 rounded-full ${stringify(bgClass2())}`, "svelte-1ck9zaj")}${attr_style(`background: ${stringify(customColor[1])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div${attr_class(`shape3 absolute h-1/3 w-1/3 rounded-full ${stringify(bgClass())}`, "svelte-1ck9zaj")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div${attr_class(`shape4 absolute h-1/3 w-1/3 rounded-full ${stringify(bgClass2())}`, "svelte-1ck9zaj")}${attr_style(`background: ${stringify(customColor[1])};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __5($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "w-8 h-8",
      customColor = [],
      speed = 1,
      inverse = false
    } = $$props;
    const bgClass = () => {
      return inverse ? "bg-dark dark:bg-primary" : "bg-primary dark:bg-dark";
    };
    const bgClass2 = () => {
      return inverse ? "bg-white/50 dark:bg-black/50" : "bg-black/50 dark:bg-white/50";
    };
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading relative m-auto`, "svelte-1hx3nye")}${attr_style(`animation-duration: ${stringify(1.2 / speed)}s;-webkit-animation-duration: ${stringify(1.2 / speed)}s;`)}><div${attr_class(`shape1 absolute h-1/2 w-1/2 rounded-tl-full ${stringify(bgClass())}`, "svelte-1hx3nye")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div${attr_class(`shape2 absolute h-1/2 w-1/2 rounded-tr-full ${stringify(bgClass2())}`, "svelte-1hx3nye")}${attr_style(`background: ${stringify(customColor[1])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div${attr_class(`shape3 absolute h-1/2 w-1/2 rounded-br-full ${stringify(bgClass())}`, "svelte-1hx3nye")}${attr_style(`background: ${stringify(customColor[0])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div${attr_class(`shape4 absolute h-1/2 w-1/2 rounded-bl-full ${stringify(bgClass2())}`, "svelte-1hx3nye")}${attr_style(`background: ${stringify(customColor[1])};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __0($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { size = "w-8 h-8", customColor = [], speed = 1 } = $$props;
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading m-auto rounded-full border-4`, "svelte-kh3qux")}${attr_style(`border-color: ${stringify(customColor[0] || "#DA1414")} ${stringify(customColor[1] || "#11BB8D")} ${stringify(customColor[2] || "#7356BF")} ${stringify(customColor[3] || "#FFC043")};animation-duration: ${stringify(2 / speed)}s;-webkit-animation-duration: ${stringify(2 / speed)}s;`)}></div>`);
    bind_props($$props, { speed });
  });
}
function __1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { size = "w-8 h-8", customColor = [], speed = 1 } = $$props;
    $$renderer2.push(`<div${attr_class(`${stringify(size)} relative m-auto rotate-45`, "svelte-15ewgeu")}><div class="shape1 absolute left-0 top-0 h-1/3 w-1/3 svelte-15ewgeu"${attr_style(`background: ${stringify(customColor[0] || "#DA1414")};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div class="shape2 absolute right-0 top-0 h-1/3 w-1/3 svelte-15ewgeu"${attr_style(`background: ${stringify(customColor[1] || "#11BB8D")};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div class="shape3 absolute bottom-0 right-0 h-1/3 w-1/3 svelte-15ewgeu"${attr_style(`background: ${stringify(customColor[2] || "#7356BF")};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div> <div class="shape4 absolute bottom-0 left-0 h-1/3 w-1/3 svelte-15ewgeu"${attr_style(`background: ${stringify(customColor[3] || "#FFC043")};animation-duration: ${stringify(0.5 / speed)}s;-webkit-animation-duration: ${stringify(0.5 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { size = "w-8 h-8", customColor = [], speed = 1 } = $$props;
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading relative m-auto`, "svelte-1rb3ntr")}${attr_style(`animation-duration: ${stringify(1.6 / speed)}s;-webkit-animation-duration: ${stringify(1.6 / speed)}s;`)}><div class="shape1 absolute h-1/3 w-1/3 rounded-full svelte-1rb3ntr"${attr_style(`background: ${stringify(customColor[0] || "#DA1414")};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div class="shape2 absolute h-1/3 w-1/3 rounded-full svelte-1rb3ntr"${attr_style(`background: ${stringify(customColor[1] || "#11BB8D")};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div class="shape3 absolute h-1/3 w-1/3 rounded-full svelte-1rb3ntr"${attr_style(`background: ${stringify(customColor[2] || "#7356BF")};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div> <div class="shape4 absolute h-1/3 w-1/3 rounded-full svelte-1rb3ntr"${attr_style(`background: ${stringify(customColor[3] || "#FFC043")};animation-duration: ${stringify(0.8 / speed)}s;-webkit-animation-duration: ${stringify(0.8 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function __3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { size = "w-8 h-8", customColor = [], speed = 1 } = $$props;
    $$renderer2.push(`<div${attr_class(`${stringify(size)} loading relative m-auto`, "svelte-f9vkbw")}${attr_style(`animation-duration: ${stringify(1.2 / speed)}s;-webkit-animation-duration: ${stringify(1.2 / speed)}s;`)}><div class="shape1 absolute h-1/2 w-1/2 rounded-tl-full svelte-f9vkbw"${attr_style(`background: ${stringify(customColor[0] || "#DA1414")};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div class="shape2 absolute h-1/2 w-1/2 rounded-tr-full svelte-f9vkbw"${attr_style(`background: ${stringify(customColor[1] || "#11BB8D")};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div class="shape3 absolute h-1/2 w-1/2 rounded-br-full svelte-f9vkbw"${attr_style(`background: ${stringify(customColor[2] || "#7356BF")};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div> <div class="shape4 absolute h-1/2 w-1/2 rounded-bl-full svelte-f9vkbw"${attr_style(`background: ${stringify(customColor[3] || "#FFC043")};animation-duration: ${stringify(0.6 / speed)}s;-webkit-animation-duration: ${stringify(0.6 / speed)}s;`)}></div></div>`);
    bind_props($$props, { speed });
  });
}
function Loading($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      type = "1_0",
      height = "8",
      width = "8",
      theme = false,
      inverse = false,
      customColor = [],
      lazyAnimation = true,
      speed = 1
    } = $$props;
    const heightClass = {
      "2": "h-2",
      "4": "h-4",
      "6": "h-6",
      "8": "h-8",
      "12": "h-12",
      "16": "h-16",
      "20": "h-20",
      "28": "h-28",
      "36": "h-36",
      "48": "h-48",
      "56": "h-56",
      "64": "h-64",
      "72": "h-72",
      "80": "h-80",
      "96": "h-96",
      full: "h-full"
    };
    const widthClass = {
      "2": "w-2",
      "4": "w-4",
      "6": "w-6",
      "8": "w-8",
      "12": "w-12",
      "16": "w-16",
      "20": "w-20",
      "28": "w-28",
      "36": "w-36",
      "48": "w-48",
      "56": "w-56",
      "64": "w-64",
      "72": "w-72",
      "80": "w-80",
      "96": "w-96",
      full: "w-full"
    };
    const sizeFunc = (height2, width2) => {
      return heightClass[height2] + " " + widthClass[width2];
    };
    new IntersectionObserver((ele) => {
      ele.forEach((item) => {
        return;
      });
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div>`);
      if (type === "1_0") {
        $$renderer3.push("<!--[-->");
        __0$2($$renderer3, {
          theme,
          inverse,
          size: sizeFunc(height, width),
          customColor,
          get speed() {
            return speed;
          },
          set speed($$value) {
            speed = $$value;
            $$settled = false;
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
        if (type === "1_1") {
          $$renderer3.push("<!--[-->");
          __1$2($$renderer3, {
            theme,
            inverse,
            size: sizeFunc(height, width),
            customColor,
            get speed() {
              return speed;
            },
            set speed($$value) {
              speed = $$value;
              $$settled = false;
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          if (type === "1_2") {
            $$renderer3.push("<!--[-->");
            __2$2($$renderer3, {
              theme,
              inverse,
              size: sizeFunc(height, width),
              customColor,
              get speed() {
                return speed;
              },
              set speed($$value) {
                speed = $$value;
                $$settled = false;
              }
            });
          } else {
            $$renderer3.push("<!--[!-->");
            if (type === "1_3") {
              $$renderer3.push("<!--[-->");
              __3$2($$renderer3, {
                theme,
                inverse,
                size: sizeFunc(height, width),
                customColor,
                get speed() {
                  return speed;
                },
                set speed($$value) {
                  speed = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
              if (type === "1_4") {
                $$renderer3.push("<!--[-->");
                __4$1($$renderer3, {
                  theme,
                  inverse,
                  size: sizeFunc(height, width),
                  customColor,
                  get speed() {
                    return speed;
                  },
                  set speed($$value) {
                    speed = $$value;
                    $$settled = false;
                  }
                });
              } else {
                $$renderer3.push("<!--[!-->");
                if (type === "1_5") {
                  $$renderer3.push("<!--[-->");
                  __5$1($$renderer3, {
                    theme,
                    inverse,
                    size: sizeFunc(height, width),
                    customColor,
                    get speed() {
                      return speed;
                    },
                    set speed($$value) {
                      speed = $$value;
                      $$settled = false;
                    }
                  });
                } else {
                  $$renderer3.push("<!--[!-->");
                  if (type === "1_6") {
                    $$renderer3.push("<!--[-->");
                    __6($$renderer3, {
                      theme,
                      inverse,
                      size: sizeFunc(height, width),
                      customColor,
                      get speed() {
                        return speed;
                      },
                      set speed($$value) {
                        speed = $$value;
                        $$settled = false;
                      }
                    });
                  } else {
                    $$renderer3.push("<!--[!-->");
                    if (type === "1_7") {
                      $$renderer3.push("<!--[-->");
                      __7($$renderer3, {
                        theme,
                        inverse,
                        size: sizeFunc(height, width),
                        customColor,
                        get speed() {
                          return speed;
                        },
                        set speed($$value) {
                          speed = $$value;
                          $$settled = false;
                        }
                      });
                    } else {
                      $$renderer3.push("<!--[!-->");
                      if (type === "1_8") {
                        $$renderer3.push("<!--[-->");
                        __8($$renderer3, {
                          theme,
                          inverse,
                          size: sizeFunc(height, width),
                          customColor,
                          get speed() {
                            return speed;
                          },
                          set speed($$value) {
                            speed = $$value;
                            $$settled = false;
                          }
                        });
                      } else {
                        $$renderer3.push("<!--[!-->");
                        if (type === "1_9") {
                          $$renderer3.push("<!--[-->");
                          __9($$renderer3, {
                            theme,
                            inverse,
                            size: sizeFunc(height, width),
                            customColor,
                            get speed() {
                              return speed;
                            },
                            set speed($$value) {
                              speed = $$value;
                              $$settled = false;
                            }
                          });
                        } else {
                          $$renderer3.push("<!--[!-->");
                          if (type === "1_10") {
                            $$renderer3.push("<!--[-->");
                            __10($$renderer3, {
                              theme,
                              inverse,
                              size: sizeFunc(height, width),
                              customColor,
                              get speed() {
                                return speed;
                              },
                              set speed($$value) {
                                speed = $$value;
                                $$settled = false;
                              }
                            });
                          } else {
                            $$renderer3.push("<!--[!-->");
                            if (type === "1_11") {
                              $$renderer3.push("<!--[-->");
                              __11($$renderer3, {
                                theme,
                                inverse,
                                size: sizeFunc(height, width),
                                customColor,
                                get speed() {
                                  return speed;
                                },
                                set speed($$value) {
                                  speed = $$value;
                                  $$settled = false;
                                }
                              });
                            } else {
                              $$renderer3.push("<!--[!-->");
                              if (type === "1_12") {
                                $$renderer3.push("<!--[-->");
                                __12($$renderer3, {
                                  theme,
                                  inverse,
                                  size: sizeFunc(height, width),
                                  customColor,
                                  get speed() {
                                    return speed;
                                  },
                                  set speed($$value) {
                                    speed = $$value;
                                    $$settled = false;
                                  }
                                });
                              } else {
                                $$renderer3.push("<!--[!-->");
                                if (type === "1_13") {
                                  $$renderer3.push("<!--[-->");
                                  __13($$renderer3, {
                                    theme,
                                    inverse,
                                    size: sizeFunc(height, width),
                                    customColor,
                                    get speed() {
                                      return speed;
                                    },
                                    set speed($$value) {
                                      speed = $$value;
                                      $$settled = false;
                                    }
                                  });
                                } else {
                                  $$renderer3.push("<!--[!-->");
                                  if (type === "1_14") {
                                    $$renderer3.push("<!--[-->");
                                    __14($$renderer3, {
                                      theme,
                                      inverse,
                                      size: sizeFunc(height, width),
                                      customColor,
                                      get speed() {
                                        return speed;
                                      },
                                      set speed($$value) {
                                        speed = $$value;
                                        $$settled = false;
                                      }
                                    });
                                  } else {
                                    $$renderer3.push("<!--[!-->");
                                    if (type === "1_15") {
                                      $$renderer3.push("<!--[-->");
                                      __15($$renderer3, {
                                        theme,
                                        inverse,
                                        size: sizeFunc(height, width),
                                        customColor,
                                        get speed() {
                                          return speed;
                                        },
                                        set speed($$value) {
                                          speed = $$value;
                                          $$settled = false;
                                        }
                                      });
                                    } else {
                                      $$renderer3.push("<!--[!-->");
                                      if (type === "1_16") {
                                        $$renderer3.push("<!--[-->");
                                        __16($$renderer3, {
                                          theme,
                                          inverse,
                                          size: sizeFunc(height, width),
                                          customColor,
                                          get speed() {
                                            return speed;
                                          },
                                          set speed($$value) {
                                            speed = $$value;
                                            $$settled = false;
                                          }
                                        });
                                      } else {
                                        $$renderer3.push("<!--[!-->");
                                        if (type === "1_17") {
                                          $$renderer3.push("<!--[-->");
                                          __17($$renderer3, {
                                            theme,
                                            inverse,
                                            size: sizeFunc(height, width),
                                            customColor,
                                            get speed() {
                                              return speed;
                                            },
                                            set speed($$value) {
                                              speed = $$value;
                                              $$settled = false;
                                            }
                                          });
                                        } else {
                                          $$renderer3.push("<!--[!-->");
                                          if (type === "1_18") {
                                            $$renderer3.push("<!--[-->");
                                            __18($$renderer3, {
                                              theme,
                                              inverse,
                                              size: sizeFunc(height, width),
                                              customColor,
                                              get speed() {
                                                return speed;
                                              },
                                              set speed($$value) {
                                                speed = $$value;
                                                $$settled = false;
                                              }
                                            });
                                          } else {
                                            $$renderer3.push("<!--[!-->");
                                            if (type === "1_19") {
                                              $$renderer3.push("<!--[-->");
                                              __19($$renderer3, {
                                                theme,
                                                inverse,
                                                size: sizeFunc(height, width),
                                                customColor,
                                                get speed() {
                                                  return speed;
                                                },
                                                set speed($$value) {
                                                  speed = $$value;
                                                  $$settled = false;
                                                }
                                              });
                                            } else {
                                              $$renderer3.push("<!--[!-->");
                                              if (type === "1_20") {
                                                $$renderer3.push("<!--[-->");
                                                __20($$renderer3, {
                                                  theme,
                                                  inverse,
                                                  size: sizeFunc(height, width),
                                                  customColor,
                                                  get speed() {
                                                    return speed;
                                                  },
                                                  set speed($$value) {
                                                    speed = $$value;
                                                    $$settled = false;
                                                  }
                                                });
                                              } else {
                                                $$renderer3.push("<!--[!-->");
                                                if (type === "1_21") {
                                                  $$renderer3.push("<!--[-->");
                                                  __21($$renderer3, {
                                                    theme,
                                                    inverse,
                                                    size: sizeFunc(height, width),
                                                    customColor,
                                                    get speed() {
                                                      return speed;
                                                    },
                                                    set speed($$value) {
                                                      speed = $$value;
                                                      $$settled = false;
                                                    }
                                                  });
                                                } else {
                                                  $$renderer3.push("<!--[!-->");
                                                  if (type === "1_22") {
                                                    $$renderer3.push("<!--[-->");
                                                    __22($$renderer3, {
                                                      theme,
                                                      inverse,
                                                      size: sizeFunc(height, width),
                                                      customColor,
                                                      get speed() {
                                                        return speed;
                                                      },
                                                      set speed($$value) {
                                                        speed = $$value;
                                                        $$settled = false;
                                                      }
                                                    });
                                                  } else {
                                                    $$renderer3.push("<!--[!-->");
                                                    if (type === "1_23") {
                                                      $$renderer3.push("<!--[-->");
                                                      __23($$renderer3, {
                                                        theme,
                                                        inverse,
                                                        size: sizeFunc(height, width),
                                                        customColor,
                                                        get speed() {
                                                          return speed;
                                                        },
                                                        set speed($$value) {
                                                          speed = $$value;
                                                          $$settled = false;
                                                        }
                                                      });
                                                    } else {
                                                      $$renderer3.push("<!--[!-->");
                                                      if (type === "1_24") {
                                                        $$renderer3.push("<!--[-->");
                                                        __24($$renderer3, {
                                                          theme,
                                                          inverse,
                                                          size: sizeFunc(height, width),
                                                          customColor,
                                                          get speed() {
                                                            return speed;
                                                          },
                                                          set speed($$value) {
                                                            speed = $$value;
                                                            $$settled = false;
                                                          }
                                                        });
                                                      } else {
                                                        $$renderer3.push("<!--[!-->");
                                                        if (type === "1_25") {
                                                          $$renderer3.push("<!--[-->");
                                                          __25($$renderer3, {
                                                            theme,
                                                            inverse,
                                                            size: sizeFunc(height, width),
                                                            customColor,
                                                            get speed() {
                                                              return speed;
                                                            },
                                                            set speed($$value) {
                                                              speed = $$value;
                                                              $$settled = false;
                                                            }
                                                          });
                                                        } else {
                                                          $$renderer3.push("<!--[!-->");
                                                          if (type === "1_26") {
                                                            $$renderer3.push("<!--[-->");
                                                            __26($$renderer3, {
                                                              theme,
                                                              inverse,
                                                              size: sizeFunc(height, width),
                                                              customColor,
                                                              get speed() {
                                                                return speed;
                                                              },
                                                              set speed($$value) {
                                                                speed = $$value;
                                                                $$settled = false;
                                                              }
                                                            });
                                                          } else {
                                                            $$renderer3.push("<!--[!-->");
                                                            if (type === "1_27") {
                                                              $$renderer3.push("<!--[-->");
                                                              __27($$renderer3, {
                                                                theme,
                                                                inverse,
                                                                size: sizeFunc(height, width),
                                                                customColor,
                                                                get speed() {
                                                                  return speed;
                                                                },
                                                                set speed($$value) {
                                                                  speed = $$value;
                                                                  $$settled = false;
                                                                }
                                                              });
                                                            } else {
                                                              $$renderer3.push("<!--[!-->");
                                                              if (type === "1_28") {
                                                                $$renderer3.push("<!--[-->");
                                                                __28($$renderer3, {
                                                                  theme,
                                                                  inverse,
                                                                  size: sizeFunc(height, width),
                                                                  customColor,
                                                                  get speed() {
                                                                    return speed;
                                                                  },
                                                                  set speed($$value) {
                                                                    speed = $$value;
                                                                    $$settled = false;
                                                                  }
                                                                });
                                                              } else {
                                                                $$renderer3.push("<!--[!-->");
                                                                if (type === "1_29") {
                                                                  $$renderer3.push("<!--[-->");
                                                                  __29($$renderer3, {
                                                                    theme,
                                                                    inverse,
                                                                    size: sizeFunc(height, width),
                                                                    customColor,
                                                                    get speed() {
                                                                      return speed;
                                                                    },
                                                                    set speed($$value) {
                                                                      speed = $$value;
                                                                      $$settled = false;
                                                                    }
                                                                  });
                                                                } else {
                                                                  $$renderer3.push("<!--[!-->");
                                                                  if (type === "1_30") {
                                                                    $$renderer3.push("<!--[-->");
                                                                    __30($$renderer3, {
                                                                      theme,
                                                                      inverse,
                                                                      size: sizeFunc(height, width),
                                                                      customColor,
                                                                      get speed() {
                                                                        return speed;
                                                                      },
                                                                      set speed($$value) {
                                                                        speed = $$value;
                                                                        $$settled = false;
                                                                      }
                                                                    });
                                                                  } else {
                                                                    $$renderer3.push("<!--[!-->");
                                                                    if (type === "1_31") {
                                                                      $$renderer3.push("<!--[-->");
                                                                      __31($$renderer3, {
                                                                        theme,
                                                                        inverse,
                                                                        size: sizeFunc(height, width),
                                                                        customColor,
                                                                        get speed() {
                                                                          return speed;
                                                                        },
                                                                        set speed($$value) {
                                                                          speed = $$value;
                                                                          $$settled = false;
                                                                        }
                                                                      });
                                                                    } else {
                                                                      $$renderer3.push("<!--[!-->");
                                                                      if (type === "1_32") {
                                                                        $$renderer3.push("<!--[-->");
                                                                        __32($$renderer3, {
                                                                          theme,
                                                                          inverse,
                                                                          size: sizeFunc(height, width),
                                                                          customColor,
                                                                          get speed() {
                                                                            return speed;
                                                                          },
                                                                          set speed($$value) {
                                                                            speed = $$value;
                                                                            $$settled = false;
                                                                          }
                                                                        });
                                                                      } else {
                                                                        $$renderer3.push("<!--[!-->");
                                                                        if (type === "1_33") {
                                                                          $$renderer3.push("<!--[-->");
                                                                          __33($$renderer3, {
                                                                            theme,
                                                                            inverse,
                                                                            size: sizeFunc(height, width),
                                                                            customColor,
                                                                            get speed() {
                                                                              return speed;
                                                                            },
                                                                            set speed($$value) {
                                                                              speed = $$value;
                                                                              $$settled = false;
                                                                            }
                                                                          });
                                                                        } else {
                                                                          $$renderer3.push("<!--[!-->");
                                                                          if (type === "1_34") {
                                                                            $$renderer3.push("<!--[-->");
                                                                            __34($$renderer3, {
                                                                              theme,
                                                                              inverse,
                                                                              size: sizeFunc(height, width),
                                                                              customColor,
                                                                              get speed() {
                                                                                return speed;
                                                                              },
                                                                              set speed($$value) {
                                                                                speed = $$value;
                                                                                $$settled = false;
                                                                              }
                                                                            });
                                                                          } else {
                                                                            $$renderer3.push("<!--[!-->");
                                                                            if (type === "1_35") {
                                                                              $$renderer3.push("<!--[-->");
                                                                              __35($$renderer3, {
                                                                                theme,
                                                                                inverse,
                                                                                size: sizeFunc(height, width),
                                                                                customColor,
                                                                                get speed() {
                                                                                  return speed;
                                                                                },
                                                                                set speed($$value) {
                                                                                  speed = $$value;
                                                                                  $$settled = false;
                                                                                }
                                                                              });
                                                                            } else {
                                                                              $$renderer3.push("<!--[!-->");
                                                                              if (type === "1_36") {
                                                                                $$renderer3.push("<!--[-->");
                                                                                __36($$renderer3, {
                                                                                  theme,
                                                                                  inverse,
                                                                                  size: sizeFunc(height, width),
                                                                                  customColor,
                                                                                  get speed() {
                                                                                    return speed;
                                                                                  },
                                                                                  set speed($$value) {
                                                                                    speed = $$value;
                                                                                    $$settled = false;
                                                                                  }
                                                                                });
                                                                              } else {
                                                                                $$renderer3.push("<!--[!-->");
                                                                                if (type === "1_37") {
                                                                                  $$renderer3.push("<!--[-->");
                                                                                  __37($$renderer3, {
                                                                                    theme,
                                                                                    inverse,
                                                                                    size: sizeFunc(height, width),
                                                                                    customColor,
                                                                                    get speed() {
                                                                                      return speed;
                                                                                    },
                                                                                    set speed($$value) {
                                                                                      speed = $$value;
                                                                                      $$settled = false;
                                                                                    }
                                                                                  });
                                                                                } else {
                                                                                  $$renderer3.push("<!--[!-->");
                                                                                  if (type === "1_38") {
                                                                                    $$renderer3.push("<!--[-->");
                                                                                    __38($$renderer3, {
                                                                                      theme,
                                                                                      inverse,
                                                                                      size: sizeFunc(height, width),
                                                                                      customColor,
                                                                                      get speed() {
                                                                                        return speed;
                                                                                      },
                                                                                      set speed($$value) {
                                                                                        speed = $$value;
                                                                                        $$settled = false;
                                                                                      }
                                                                                    });
                                                                                  } else {
                                                                                    $$renderer3.push("<!--[!-->");
                                                                                    if (type === "1_39") {
                                                                                      $$renderer3.push("<!--[-->");
                                                                                      __39($$renderer3, {
                                                                                        theme,
                                                                                        inverse,
                                                                                        size: sizeFunc(height, width),
                                                                                        customColor,
                                                                                        get speed() {
                                                                                          return speed;
                                                                                        },
                                                                                        set speed($$value) {
                                                                                          speed = $$value;
                                                                                          $$settled = false;
                                                                                        }
                                                                                      });
                                                                                    } else {
                                                                                      $$renderer3.push("<!--[!-->");
                                                                                      if (type === "1_40") {
                                                                                        $$renderer3.push("<!--[-->");
                                                                                        __40($$renderer3, {
                                                                                          theme,
                                                                                          inverse,
                                                                                          size: sizeFunc(height, width),
                                                                                          customColor,
                                                                                          get speed() {
                                                                                            return speed;
                                                                                          },
                                                                                          set speed($$value) {
                                                                                            speed = $$value;
                                                                                            $$settled = false;
                                                                                          }
                                                                                        });
                                                                                      } else {
                                                                                        $$renderer3.push("<!--[!-->");
                                                                                        if (type === "1_41") {
                                                                                          $$renderer3.push("<!--[-->");
                                                                                          __41($$renderer3, {
                                                                                            theme,
                                                                                            inverse,
                                                                                            size: sizeFunc(height, width),
                                                                                            customColor,
                                                                                            get speed() {
                                                                                              return speed;
                                                                                            },
                                                                                            set speed($$value) {
                                                                                              speed = $$value;
                                                                                              $$settled = false;
                                                                                            }
                                                                                          });
                                                                                        } else {
                                                                                          $$renderer3.push("<!--[!-->");
                                                                                          if (type === "1_42") {
                                                                                            $$renderer3.push("<!--[-->");
                                                                                            __42($$renderer3, {
                                                                                              theme,
                                                                                              inverse,
                                                                                              size: sizeFunc(height, width),
                                                                                              customColor,
                                                                                              get speed() {
                                                                                                return speed;
                                                                                              },
                                                                                              set speed($$value) {
                                                                                                speed = $$value;
                                                                                                $$settled = false;
                                                                                              }
                                                                                            });
                                                                                          } else {
                                                                                            $$renderer3.push("<!--[!-->");
                                                                                            if (type === "1_43") {
                                                                                              $$renderer3.push("<!--[-->");
                                                                                              __43($$renderer3, {
                                                                                                theme,
                                                                                                inverse,
                                                                                                size: sizeFunc(height, width),
                                                                                                customColor,
                                                                                                get speed() {
                                                                                                  return speed;
                                                                                                },
                                                                                                set speed($$value) {
                                                                                                  speed = $$value;
                                                                                                  $$settled = false;
                                                                                                }
                                                                                              });
                                                                                            } else {
                                                                                              $$renderer3.push("<!--[!-->");
                                                                                              if (type === "1_44") {
                                                                                                $$renderer3.push("<!--[-->");
                                                                                                __44($$renderer3, {
                                                                                                  theme,
                                                                                                  inverse,
                                                                                                  size: sizeFunc(height, width),
                                                                                                  customColor,
                                                                                                  get speed() {
                                                                                                    return speed;
                                                                                                  },
                                                                                                  set speed($$value) {
                                                                                                    speed = $$value;
                                                                                                    $$settled = false;
                                                                                                  }
                                                                                                });
                                                                                              } else {
                                                                                                $$renderer3.push("<!--[!-->");
                                                                                                if (type === "1_45") {
                                                                                                  $$renderer3.push("<!--[-->");
                                                                                                  __45($$renderer3, {
                                                                                                    theme,
                                                                                                    inverse,
                                                                                                    size: sizeFunc(height, width),
                                                                                                    customColor,
                                                                                                    get speed() {
                                                                                                      return speed;
                                                                                                    },
                                                                                                    set speed($$value) {
                                                                                                      speed = $$value;
                                                                                                      $$settled = false;
                                                                                                    }
                                                                                                  });
                                                                                                } else {
                                                                                                  $$renderer3.push("<!--[!-->");
                                                                                                  if (type === "1_46") {
                                                                                                    $$renderer3.push("<!--[-->");
                                                                                                    __46($$renderer3, {
                                                                                                      theme,
                                                                                                      inverse,
                                                                                                      size: sizeFunc(height, width),
                                                                                                      customColor,
                                                                                                      get speed() {
                                                                                                        return speed;
                                                                                                      },
                                                                                                      set speed($$value) {
                                                                                                        speed = $$value;
                                                                                                        $$settled = false;
                                                                                                      }
                                                                                                    });
                                                                                                  } else {
                                                                                                    $$renderer3.push("<!--[!-->");
                                                                                                    if (type === "1_47") {
                                                                                                      $$renderer3.push("<!--[-->");
                                                                                                      __47($$renderer3, {
                                                                                                        theme,
                                                                                                        inverse,
                                                                                                        size: sizeFunc(height, width),
                                                                                                        customColor,
                                                                                                        get speed() {
                                                                                                          return speed;
                                                                                                        },
                                                                                                        set speed($$value) {
                                                                                                          speed = $$value;
                                                                                                          $$settled = false;
                                                                                                        }
                                                                                                      });
                                                                                                    } else {
                                                                                                      $$renderer3.push("<!--[!-->");
                                                                                                      if (type === "1_48") {
                                                                                                        $$renderer3.push("<!--[-->");
                                                                                                        __48($$renderer3, {
                                                                                                          theme,
                                                                                                          inverse,
                                                                                                          size: sizeFunc(height, width),
                                                                                                          customColor,
                                                                                                          get speed() {
                                                                                                            return speed;
                                                                                                          },
                                                                                                          set speed($$value) {
                                                                                                            speed = $$value;
                                                                                                            $$settled = false;
                                                                                                          }
                                                                                                        });
                                                                                                      } else {
                                                                                                        $$renderer3.push("<!--[!-->");
                                                                                                        if (type === "1_49") {
                                                                                                          $$renderer3.push("<!--[-->");
                                                                                                          __49($$renderer3, {
                                                                                                            theme,
                                                                                                            inverse,
                                                                                                            size: sizeFunc(height, width),
                                                                                                            customColor,
                                                                                                            get speed() {
                                                                                                              return speed;
                                                                                                            },
                                                                                                            set speed($$value) {
                                                                                                              speed = $$value;
                                                                                                              $$settled = false;
                                                                                                            }
                                                                                                          });
                                                                                                        } else {
                                                                                                          $$renderer3.push("<!--[!-->");
                                                                                                          if (type === "1_50") {
                                                                                                            $$renderer3.push("<!--[-->");
                                                                                                            __50($$renderer3, {
                                                                                                              theme,
                                                                                                              inverse,
                                                                                                              size: sizeFunc(height, width),
                                                                                                              customColor,
                                                                                                              get speed() {
                                                                                                                return speed;
                                                                                                              },
                                                                                                              set speed($$value) {
                                                                                                                speed = $$value;
                                                                                                                $$settled = false;
                                                                                                              }
                                                                                                            });
                                                                                                          } else {
                                                                                                            $$renderer3.push("<!--[!-->");
                                                                                                            if (type === "1_51") {
                                                                                                              $$renderer3.push("<!--[-->");
                                                                                                              __51($$renderer3, {
                                                                                                                theme,
                                                                                                                inverse,
                                                                                                                size: sizeFunc(height, width),
                                                                                                                customColor,
                                                                                                                get speed() {
                                                                                                                  return speed;
                                                                                                                },
                                                                                                                set speed($$value) {
                                                                                                                  speed = $$value;
                                                                                                                  $$settled = false;
                                                                                                                }
                                                                                                              });
                                                                                                            } else {
                                                                                                              $$renderer3.push("<!--[!-->");
                                                                                                              if (type === "1_52") {
                                                                                                                $$renderer3.push("<!--[-->");
                                                                                                                __52($$renderer3, {
                                                                                                                  theme,
                                                                                                                  inverse,
                                                                                                                  size: sizeFunc(height, width),
                                                                                                                  customColor,
                                                                                                                  get speed() {
                                                                                                                    return speed;
                                                                                                                  },
                                                                                                                  set speed($$value) {
                                                                                                                    speed = $$value;
                                                                                                                    $$settled = false;
                                                                                                                  }
                                                                                                                });
                                                                                                              } else {
                                                                                                                $$renderer3.push("<!--[!-->");
                                                                                                                if (type === "1_53") {
                                                                                                                  $$renderer3.push("<!--[-->");
                                                                                                                  __53($$renderer3, {
                                                                                                                    theme,
                                                                                                                    inverse,
                                                                                                                    size: sizeFunc(height, width),
                                                                                                                    customColor,
                                                                                                                    get speed() {
                                                                                                                      return speed;
                                                                                                                    },
                                                                                                                    set speed($$value) {
                                                                                                                      speed = $$value;
                                                                                                                      $$settled = false;
                                                                                                                    }
                                                                                                                  });
                                                                                                                } else {
                                                                                                                  $$renderer3.push("<!--[!-->");
                                                                                                                  if (type === "2_0") {
                                                                                                                    $$renderer3.push("<!--[-->");
                                                                                                                    __0$1($$renderer3, {
                                                                                                                      inverse,
                                                                                                                      size: sizeFunc(height, width),
                                                                                                                      customColor,
                                                                                                                      get speed() {
                                                                                                                        return speed;
                                                                                                                      },
                                                                                                                      set speed($$value) {
                                                                                                                        speed = $$value;
                                                                                                                        $$settled = false;
                                                                                                                      }
                                                                                                                    });
                                                                                                                  } else {
                                                                                                                    $$renderer3.push("<!--[!-->");
                                                                                                                    if (type === "2_1") {
                                                                                                                      $$renderer3.push("<!--[-->");
                                                                                                                      __1$1($$renderer3, {
                                                                                                                        inverse,
                                                                                                                        size: sizeFunc(height, width),
                                                                                                                        customColor,
                                                                                                                        get speed() {
                                                                                                                          return speed;
                                                                                                                        },
                                                                                                                        set speed($$value) {
                                                                                                                          speed = $$value;
                                                                                                                          $$settled = false;
                                                                                                                        }
                                                                                                                      });
                                                                                                                    } else {
                                                                                                                      $$renderer3.push("<!--[!-->");
                                                                                                                      if (type === "2_2") {
                                                                                                                        $$renderer3.push("<!--[-->");
                                                                                                                        __2$1($$renderer3, {
                                                                                                                          inverse,
                                                                                                                          size: sizeFunc(height, width),
                                                                                                                          customColor,
                                                                                                                          get speed() {
                                                                                                                            return speed;
                                                                                                                          },
                                                                                                                          set speed($$value) {
                                                                                                                            speed = $$value;
                                                                                                                            $$settled = false;
                                                                                                                          }
                                                                                                                        });
                                                                                                                      } else {
                                                                                                                        $$renderer3.push("<!--[!-->");
                                                                                                                        if (type === "2_3") {
                                                                                                                          $$renderer3.push("<!--[-->");
                                                                                                                          __3$1($$renderer3, {
                                                                                                                            inverse,
                                                                                                                            size: sizeFunc(height, width),
                                                                                                                            customColor,
                                                                                                                            get speed() {
                                                                                                                              return speed;
                                                                                                                            },
                                                                                                                            set speed($$value) {
                                                                                                                              speed = $$value;
                                                                                                                              $$settled = false;
                                                                                                                            }
                                                                                                                          });
                                                                                                                        } else {
                                                                                                                          $$renderer3.push("<!--[!-->");
                                                                                                                          if (type === "2_4") {
                                                                                                                            $$renderer3.push("<!--[-->");
                                                                                                                            __4($$renderer3, {
                                                                                                                              inverse,
                                                                                                                              size: sizeFunc(height, width),
                                                                                                                              customColor,
                                                                                                                              get speed() {
                                                                                                                                return speed;
                                                                                                                              },
                                                                                                                              set speed($$value) {
                                                                                                                                speed = $$value;
                                                                                                                                $$settled = false;
                                                                                                                              }
                                                                                                                            });
                                                                                                                          } else {
                                                                                                                            $$renderer3.push("<!--[!-->");
                                                                                                                            if (type === "2_5") {
                                                                                                                              $$renderer3.push("<!--[-->");
                                                                                                                              __5($$renderer3, {
                                                                                                                                inverse,
                                                                                                                                size: sizeFunc(height, width),
                                                                                                                                customColor,
                                                                                                                                get speed() {
                                                                                                                                  return speed;
                                                                                                                                },
                                                                                                                                set speed($$value) {
                                                                                                                                  speed = $$value;
                                                                                                                                  $$settled = false;
                                                                                                                                }
                                                                                                                              });
                                                                                                                            } else {
                                                                                                                              $$renderer3.push("<!--[!-->");
                                                                                                                              if (type === "4_0") {
                                                                                                                                $$renderer3.push("<!--[-->");
                                                                                                                                __0($$renderer3, {
                                                                                                                                  size: sizeFunc(height, width),
                                                                                                                                  customColor,
                                                                                                                                  get speed() {
                                                                                                                                    return speed;
                                                                                                                                  },
                                                                                                                                  set speed($$value) {
                                                                                                                                    speed = $$value;
                                                                                                                                    $$settled = false;
                                                                                                                                  }
                                                                                                                                });
                                                                                                                              } else {
                                                                                                                                $$renderer3.push("<!--[!-->");
                                                                                                                                if (type === "4_1") {
                                                                                                                                  $$renderer3.push("<!--[-->");
                                                                                                                                  __1($$renderer3, {
                                                                                                                                    size: sizeFunc(height, width),
                                                                                                                                    customColor,
                                                                                                                                    get speed() {
                                                                                                                                      return speed;
                                                                                                                                    },
                                                                                                                                    set speed($$value) {
                                                                                                                                      speed = $$value;
                                                                                                                                      $$settled = false;
                                                                                                                                    }
                                                                                                                                  });
                                                                                                                                } else {
                                                                                                                                  $$renderer3.push("<!--[!-->");
                                                                                                                                  if (type === "4_2") {
                                                                                                                                    $$renderer3.push("<!--[-->");
                                                                                                                                    __2($$renderer3, {
                                                                                                                                      size: sizeFunc(height, width),
                                                                                                                                      customColor,
                                                                                                                                      get speed() {
                                                                                                                                        return speed;
                                                                                                                                      },
                                                                                                                                      set speed($$value) {
                                                                                                                                        speed = $$value;
                                                                                                                                        $$settled = false;
                                                                                                                                      }
                                                                                                                                    });
                                                                                                                                  } else {
                                                                                                                                    $$renderer3.push("<!--[!-->");
                                                                                                                                    if (type === "4_3") {
                                                                                                                                      $$renderer3.push("<!--[-->");
                                                                                                                                      __3($$renderer3, {
                                                                                                                                        size: sizeFunc(height, width),
                                                                                                                                        customColor,
                                                                                                                                        get speed() {
                                                                                                                                          return speed;
                                                                                                                                        },
                                                                                                                                        set speed($$value) {
                                                                                                                                          speed = $$value;
                                                                                                                                          $$settled = false;
                                                                                                                                        }
                                                                                                                                      });
                                                                                                                                    } else {
                                                                                                                                      $$renderer3.push("<!--[!-->");
                                                                                                                                      __0$2($$renderer3, {
                                                                                                                                        theme,
                                                                                                                                        inverse,
                                                                                                                                        size: sizeFunc(height, width),
                                                                                                                                        customColor,
                                                                                                                                        get speed() {
                                                                                                                                          return speed;
                                                                                                                                        },
                                                                                                                                        set speed($$value) {
                                                                                                                                          speed = $$value;
                                                                                                                                          $$settled = false;
                                                                                                                                        }
                                                                                                                                      });
                                                                                                                                    }
                                                                                                                                    $$renderer3.push(`<!--]-->`);
                                                                                                                                  }
                                                                                                                                  $$renderer3.push(`<!--]-->`);
                                                                                                                                }
                                                                                                                                $$renderer3.push(`<!--]-->`);
                                                                                                                              }
                                                                                                                              $$renderer3.push(`<!--]-->`);
                                                                                                                            }
                                                                                                                            $$renderer3.push(`<!--]-->`);
                                                                                                                          }
                                                                                                                          $$renderer3.push(`<!--]-->`);
                                                                                                                        }
                                                                                                                        $$renderer3.push(`<!--]-->`);
                                                                                                                      }
                                                                                                                      $$renderer3.push(`<!--]-->`);
                                                                                                                    }
                                                                                                                    $$renderer3.push(`<!--]-->`);
                                                                                                                  }
                                                                                                                  $$renderer3.push(`<!--]-->`);
                                                                                                                }
                                                                                                                $$renderer3.push(`<!--]-->`);
                                                                                                              }
                                                                                                              $$renderer3.push(`<!--]-->`);
                                                                                                            }
                                                                                                            $$renderer3.push(`<!--]-->`);
                                                                                                          }
                                                                                                          $$renderer3.push(`<!--]-->`);
                                                                                                        }
                                                                                                        $$renderer3.push(`<!--]-->`);
                                                                                                      }
                                                                                                      $$renderer3.push(`<!--]-->`);
                                                                                                    }
                                                                                                    $$renderer3.push(`<!--]-->`);
                                                                                                  }
                                                                                                  $$renderer3.push(`<!--]-->`);
                                                                                                }
                                                                                                $$renderer3.push(`<!--]-->`);
                                                                                              }
                                                                                              $$renderer3.push(`<!--]-->`);
                                                                                            }
                                                                                            $$renderer3.push(`<!--]-->`);
                                                                                          }
                                                                                          $$renderer3.push(`<!--]-->`);
                                                                                        }
                                                                                        $$renderer3.push(`<!--]-->`);
                                                                                      }
                                                                                      $$renderer3.push(`<!--]-->`);
                                                                                    }
                                                                                    $$renderer3.push(`<!--]-->`);
                                                                                  }
                                                                                  $$renderer3.push(`<!--]-->`);
                                                                                }
                                                                                $$renderer3.push(`<!--]-->`);
                                                                              }
                                                                              $$renderer3.push(`<!--]-->`);
                                                                            }
                                                                            $$renderer3.push(`<!--]-->`);
                                                                          }
                                                                          $$renderer3.push(`<!--]-->`);
                                                                        }
                                                                        $$renderer3.push(`<!--]-->`);
                                                                      }
                                                                      $$renderer3.push(`<!--]-->`);
                                                                    }
                                                                    $$renderer3.push(`<!--]-->`);
                                                                  }
                                                                  $$renderer3.push(`<!--]-->`);
                                                                }
                                                                $$renderer3.push(`<!--]-->`);
                                                              }
                                                              $$renderer3.push(`<!--]-->`);
                                                            }
                                                            $$renderer3.push(`<!--]-->`);
                                                          }
                                                          $$renderer3.push(`<!--]-->`);
                                                        }
                                                        $$renderer3.push(`<!--]-->`);
                                                      }
                                                      $$renderer3.push(`<!--]-->`);
                                                    }
                                                    $$renderer3.push(`<!--]-->`);
                                                  }
                                                  $$renderer3.push(`<!--]-->`);
                                                }
                                                $$renderer3.push(`<!--]-->`);
                                              }
                                              $$renderer3.push(`<!--]-->`);
                                            }
                                            $$renderer3.push(`<!--]-->`);
                                          }
                                          $$renderer3.push(`<!--]-->`);
                                        }
                                        $$renderer3.push(`<!--]-->`);
                                      }
                                      $$renderer3.push(`<!--]-->`);
                                    }
                                    $$renderer3.push(`<!--]-->`);
                                  }
                                  $$renderer3.push(`<!--]-->`);
                                }
                                $$renderer3.push(`<!--]-->`);
                              }
                              $$renderer3.push(`<!--]-->`);
                            }
                            $$renderer3.push(`<!--]-->`);
                          }
                          $$renderer3.push(`<!--]-->`);
                        }
                        $$renderer3.push(`<!--]-->`);
                      }
                      $$renderer3.push(`<!--]-->`);
                    }
                    $$renderer3.push(`<!--]-->`);
                  }
                  $$renderer3.push(`<!--]-->`);
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { speed });
  });
}
function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      type = "symbol",
      name = "",
      size = 24,
      width = 0,
      height = 0,
      theme = false,
      opacity = 1,
      path = getContext("STDF-global-icon-svg-path") || "fonts/symbol.svg",
      y = 0,
      injClass = "",
      children
    } = $$props;
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (type === "iconify" || type === "iconify-color") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span${attr_class(`${stringify(type)} ${stringify(name)} relative${stringify(theme ? " text-primary dark:text-dark" : "")} ${stringify(injClass)}`)}${attr_style(`opacity:${stringify(opacity)}; width:${stringify(width || size)}px; height:${stringify(height || size)}px; top:${stringify(y)}px;`)}></span>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (type === "symbol") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<svg${attr("width", width || size)}${attr("height", height || size)}${attr_class(`relative${stringify(theme ? " text-primary dark:text-dark" : "")} inline fill-current ${stringify(injClass)}`)}${attr_style(`fill-opacity:${stringify(opacity)}; top:${stringify(y)}px;`)}><use${attr("xlink:href", `/${stringify(path)}#${stringify(name)}`)}></use></svg>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      fill = "base",
      state = "theme",
      radius = "sm",
      size = "big",
      line = "solid",
      injClass = "",
      love = false,
      heightOut = "2",
      heightIn = "3",
      group = false,
      disabled = false,
      customSize = false,
      customWidth = 0,
      customHeight = 0,
      icon = null,
      iconPosition = "left",
      loading = null,
      disabledLoading = true,
      type = "button",
      children,
      onclick
    } = $$props;
    let innerDisabled = disabled || loading && disabledLoading;
    const stateObj = {
      theme: "bg-primary dark:bg-dark",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-error",
      info: "bg-info"
    };
    const radiusObj = {
      none: "rounded-none",
      sm: "rounded-sm",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full"
    };
    const fillObj = {
      base: "",
      line: "border border-black dark:border-white !text-black dark:!text-white",
      lineLight: "border border-black/20 dark:border-white/30 !text-black dark:!text-white",
      lineTheme: "border border-primary dark:border-dark !text-primary dark:!text-dark",
      text: "!text-black dark:!text-white",
      textTheme: "!text-primary dark:!text-dark",
      colorLight: "!bg-black/5 dark:!bg-white/10 !text-black dark:!text-white"
    };
    const sizeObj = {
      full: "w-full",
      big: "w-full",
      md: "w-1/2",
      sm: "w-1/4",
      auto: "w-auto"
    };
    const lineObj = {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted"
    };
    const heightOutObj = {
      "0": "py-0",
      "1": "py-1",
      "2": "py-2",
      "3": "py-3",
      "4": "py-4"
    };
    const heightInObj = {
      "0": "py-0",
      "1": "py-1",
      "2": "py-2",
      "3": "py-3",
      "4": "py-4"
    };
    const block = (size === "full" || size === "big") && !customSize;
    const textColor = state === "theme" ? "text-white dark:text-black" : "text-white";
    $$renderer2.push(`<div${attr_class(`${stringify(heightOutObj[heightOut] || heightOutObj["2"])} ${stringify(size === "big" && !customSize ? "px-4" : "px-0")} ${stringify(block ? "block" : "inline")} ${stringify(love ? "text-xl" : "")}`)}><button${attr_class(`inline-flex items-center justify-center gap-1 truncate ${stringify(!group && !innerDisabled ? "active:opacity-80" : "")} ${stringify(heightInObj[heightIn] || heightInObj["3"])} ${stringify(sizeObj[size] || sizeObj.big)} ${stringify(textColor)} ${stringify(lineObj[line] || lineObj.solid)} ${stringify(radiusObj[radius] || radiusObj.sm)} ${stringify(fill === "base" && (stateObj[state] || stateObj.theme))} ${stringify(fillObj[fill] || fillObj.base)} ${stringify(injClass)} ${stringify(innerDisabled ? "cursor-not-allowed opacity-50" : "")}`)}${attr("disabled", innerDisabled, true)}${attr_style(customSize ? `width:${customWidth}px;height:${customHeight}px;padding:0;` : "")}${attr("type", type)}>`);
    if (loading) {
      $$renderer2.push("<!--[-->");
      Loading($$renderer2, spread_props([loading]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (icon && icon.name && iconPosition === "left") {
      $$renderer2.push("<!--[-->");
      Icon($$renderer2, spread_props([icon]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----> `);
    if (icon && icon.name && iconPosition === "right") {
      $$renderer2.push("<!--[-->");
      Icon($$renderer2, spread_props([icon]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></button></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const scanBarcode = async () => {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.QR_CODE,
        android: {
          scanningLibrary: CapacitorBarcodeScannerAndroidScanningLibrary.MLKIT
        },
        web: { showCameraSelection: true }
      });
      result.ScanResult;
    };
    $$renderer2.push(`<div class="p-4">`);
    Button($$renderer2, {
      onclick: scanBarcode,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Ler QR Code`);
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C_aW2_kN.js.map
