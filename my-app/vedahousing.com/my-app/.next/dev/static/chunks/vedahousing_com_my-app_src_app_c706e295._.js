(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vedahousing.com/my-app/src/app/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/src/context/AuthContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
const Header = ()=>{
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const handleLogin = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], provider);
        } catch (err) {
            const ignored = [
                'auth/popup-closed-by-user',
                'auth/user-cancelled'
            ];
            if (!ignored.includes(err.code)) {
                console.error('Login failed:', err);
            }
        }
    };
    const handleLogoClick = (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "vh-header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vh-header-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "vh-logo",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        onClick: handleLogoClick,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/veda_logo.png",
                            alt: "vedahousing",
                            className: "vh-logo-image"
                        }, void 0, false, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                            lineNumber: 33,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                        lineNumber: 32,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "vh-nav-auth",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "vh-nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#explore",
                                    className: "vh-nav-link",
                                    children: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "vh-nav-link",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                            lineNumber: 38,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vh-auth",
                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vh-user-menu",
                                children: [
                                    user.photoURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user.photoURL,
                                        alt: user.displayName,
                                        className: "vh-avatar",
                                        referrerPolicy: "no-referrer"
                                    }, void 0, false, {
                                        fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                        lineNumber: 47,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "vh-user-name",
                                        children: user.displayName?.split(' ')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: logout,
                                        className: "vh-logout-btn",
                                        children: "Sign out"
                                    }, void 0, false, {
                                        fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                        lineNumber: 55,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                lineNumber: 45,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogin,
                                className: "vh-login-btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 48 48",
                                        style: {
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#EA4335",
                                                d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                                lineNumber: 62,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#4285F4",
                                                d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                                lineNumber: 63,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#FBBC05",
                                                d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                                lineNumber: 64,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#34A853",
                                                d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                                lineNumber: 65,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "none",
                                                d: "M0 0h48v48H0z"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                                lineNumber: 66,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                        lineNumber: 61,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Sign in"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                                lineNumber: 60,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
            lineNumber: 30,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vedahousing.com/my-app/src/app/components/Header.js",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "SlSPRKmTohGnoLiiApupaRii2Oc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vedahousing.com/my-app/src/app/components/Hero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "vh-hero",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vh-hero-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "vh-hero-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "vh-eyebrow",
                            children: "SMART LIVING · VEDAHOUSING"
                        }, void 0, false, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                            lineNumber: 8,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "vh-title",
                            children: [
                                "Discover  ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 10,
                                    columnNumber: 35
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "span-and",
                                    children: "&"
                                }, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 10,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 10,
                                    columnNumber: 78
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Design home",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "vh-title-highlight",
                                    children: " design that fit your life."
                                }, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                            lineNumber: 9,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "vh-subtitle",
                            children: "Browse verified listings, compare real-time prices, and book virtual or in-person tours in just a few taps."
                        }, void 0, false, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                            lineNumber: 13,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vh-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "vh-btn vh-btn-primary",
                                    children: "Browse homes"
                                }, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20Vedahousing%20services",
                                    className: "vh-btn vh-btn-secondary",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Talk to an expert"
                                }, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                            lineNumber: 17,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "vh-meta",
                            children: "Trusted by homebuyers across major Indian cities · New properties every week"
                        }, void 0, false, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                            lineNumber: 31,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "vh-hero-visual",
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vh-card-main",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vh-card-image-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/image copy 3.png",
                                        alt: "Buy & Rent Apartment in Varanasi",
                                        className: "vh-card-img-fit",
                                        width: "520",
                                        height: "160",
                                        loading: "eager"
                                    }, void 0, false, {
                                        fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vh-card-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vh-card-row",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "vh-card-title",
                                                children: " Buy & Rent Apartment"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                lineNumber: 48,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                            lineNumber: 47,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "vh-card-location",
                                            children: "Varanasi "
                                        }, void 0, false, {
                                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                            lineNumber: 50,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vh-chip-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "vh-chip",
                                                    children: "Verified Listings"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 52,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "vh-chip",
                                                    children: "Zero hidden charges"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 53,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "vh-chip",
                                                    children: " Book tours in one tap"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 54,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                            lineNumber: 51,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                            lineNumber: 35,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vh-card-stats",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vh-stat-card vh-stat-card-interior",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vh-card-image-interior",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/image.png",
                                                alt: "Interior Design Services",
                                                className: "vh-card-img-fit",
                                                width: "240",
                                                height: "110",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                lineNumber: 62,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                            lineNumber: 61,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vh-stat-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "vh-stat-value",
                                                    children: "Interior Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vh-stat-meta",
                                                    children: "Spaces designed around you."
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 73,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vh-stat-meta",
                                                    children: "No hidden charges"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 74,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vh-stat-card vh-stat-card-interior",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vh-card-image-consulting",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/image copy.png",
                                                alt: "Architecture Consulting",
                                                className: "vh-card-img-fit",
                                                width: "240",
                                                height: "110",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                lineNumber: 80,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vh-stat-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "vh-stat-value",
                                                    children: "Consulting"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 90,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vh-stat-meta",
                                                    children: "Architecture"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 91,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vh-stat-meta",
                                                    children: "High quality designs"
                                                }, void 0, false, {
                                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                                    lineNumber: 92,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                            lineNumber: 89,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
                    lineNumber: 34,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vedahousing.com/my-app/src/app/components/Hero.js",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vedahousing.com/my-app/src/app/components/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Footer = ()=>{
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "vh-footer",
        id: "contact",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vh-footer-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "© ",
                    year,
                    " Vedahousing. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/vedahousing.com/my-app/src/app/components/Footer.js",
                lineNumber: 9,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/vedahousing.com/my-app/src/app/components/Footer.js",
            lineNumber: 8,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vedahousing.com/my-app/src/app/components/Footer.js",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vedahousing.com/my-app/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/src/app/components/Header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$app$2f$components$2f$Hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/src/app/components/Hero.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vedahousing.com/my-app/src/app/components/Footer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Page() {
    _s();
    const [popupScale, setPopupScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [popupOpacity, setPopupOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const handleScroll = {
                "Page.useEffect.handleScroll": ()=>{
                    const heroSection = document.querySelector('.vh-hero');
                    if (!heroSection) return;
                    const heroRect = heroSection.getBoundingClientRect();
                    const heroBottom = heroRect.bottom;
                    const windowHeight = window.innerHeight;
                    const triggerPoint = windowHeight * 0.5;
                    const fadeDistance = windowHeight * 0.8;
                    if (heroBottom < triggerPoint) {
                        const scrollPast = triggerPoint - heroBottom;
                        const progress = Math.min(scrollPast / fadeDistance, 1);
                        setPopupScale(0.8 + progress * 0.2);
                        setPopupOpacity(progress * 0.95);
                    } else {
                        setPopupScale(0);
                        setPopupOpacity(0);
                    }
                }
            }["Page.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "Page.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    const shouldShow = popupOpacity > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "vh-app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vedahousing.com/my-app/src/app/page.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$app$2f$components$2f$Hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vedahousing.com/my-app/src/app/page.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vedahousing.com/my-app/src/app/page.js",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            shouldShow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vh-popup-image",
                style: {
                    opacity: popupOpacity,
                    '--popup-scale': popupScale
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "vh-popup-image-wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vedahousing$2e$com$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/cover-vedahousing.jpg",
                        alt: "Varanasi Ghats"
                    }, void 0, false, {
                        fileName: "[project]/vedahousing.com/my-app/src/app/page.js",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vedahousing.com/my-app/src/app/page.js",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vedahousing.com/my-app/src/app/page.js",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vedahousing.com/my-app/src/app/page.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Page, "E6xek1cjy5dxVMNXnY38pC/FKR4=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vedahousing_com_my-app_src_app_c706e295._.js.map