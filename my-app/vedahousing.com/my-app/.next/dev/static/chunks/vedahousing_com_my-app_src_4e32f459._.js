(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vedahousing.com/my-app/src/firebase/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyBmDAyj13tJHiC8JmLGttt9L1UbbFBlh00",
    authDomain: "vedahousing-v.firebaseapp.com",
    projectId: "vedahousing-v",
    storageBucket: "vedahousing-v.firebasestorage.app",
    messagingSenderId: "792515368801",
    appId: "1:792515368801:web:21618ddc5c5bce4a9e5720",
    measurementId: "G-9CFP8V4QML"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vedahousing.com/my-app/src/context/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_EMAIL",
    ()=>ADMIN_EMAIL,
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/src/firebase/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const ADMIN_EMAIL = 'gsdd9875@gmail.com';
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined) // undefined = loading, null = not logged in
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsub": (u)=>{
                    // Only allow the admin email — kick everyone else out
                    if (u && u.email !== ADMIN_EMAIL) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
                        setUser(null);
                    } else {
                        setUser(u ?? null);
                    }
                }
            }["AuthProvider.useEffect.unsub"]);
            return ({
                "AuthProvider.useEffect": ()=>unsub()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const logout = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/vedahousing.com/my-app/src/context/AuthContext.js",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(AuthProvider, "k7s7A7S01Q+DeTLxmZ7J/UPfNsI=");
_c = AuthProvider;
function useAuth() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
}
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vedahousing_com_my-app_src_4e32f459._.js.map