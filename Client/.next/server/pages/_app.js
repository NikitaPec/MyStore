/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/API/index.ts":
/*!**************************!*\
  !*** ./src/API/index.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst API_URL = \"http://localhost:5000/api\";\nconst $api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    withCredentials: true,\n    baseURL: API_URL\n});\n$api.interceptors.request.use((config)=>{\n    config.headers.Authorizationt = `Bearer ${localStorage.getItem(\"token\")}`;\n    return config;\n});\n$api.interceptors.response.use((config)=>{\n    return config;\n}, async (error)=>{\n    const orginalRequest = error.config;\n    if (error.response.status === 401 && error.config && !error.config._isRetry) {\n        orginalRequest._isRetry = true;\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${API_URL}/refresh`, {\n                withCredentials: true\n            });\n            localStorage.setItem(\"token\", response.data.data.accessToken);\n            return $api.request(orginalRequest);\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    throw error;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQVBJL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUVuQixNQUFNQyxVQUFVLDRCQUE0QjtBQUVuRCxNQUFNQyxPQUFPRixvREFBWSxDQUFDO0lBQ3hCSSxpQkFBaUIsSUFBSTtJQUNyQkMsU0FBU0o7QUFDWDtBQUVBQyxLQUFLSSxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFNBQVc7SUFDeENBLE9BQU9DLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLENBQUMsT0FBTyxFQUFFQyxhQUFhQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3pFLE9BQU9KO0FBQ1Q7QUFFQVAsS0FBS0ksWUFBWSxDQUFDUSxRQUFRLENBQUNOLEdBQUcsQ0FDNUIsQ0FBQ0MsU0FBVztJQUNWLE9BQU9BO0FBQ1QsR0FDQSxPQUFPTSxRQUFVO0lBQ2YsTUFBTUMsaUJBQWlCRCxNQUFNTixNQUFNO0lBQ25DLElBQUlNLE1BQU1ELFFBQVEsQ0FBQ0csTUFBTSxLQUFLLE9BQU9GLE1BQU1OLE1BQU0sSUFBSSxDQUFDTSxNQUFNTixNQUFNLENBQUNTLFFBQVEsRUFBRTtRQUMzRUYsZUFBZUUsUUFBUSxHQUFHLElBQUk7UUFDOUIsSUFBSTtZQUNGLE1BQU1KLFdBQVcsTUFBTWQsaURBQVMsQ0FBQyxDQUFDLEVBQUVDLFFBQVEsUUFBUSxDQUFDLEVBQUU7Z0JBQUVHLGlCQUFpQixJQUFJO1lBQUM7WUFDL0VRLGFBQWFRLE9BQU8sQ0FBQyxTQUFTTixTQUFTTyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsV0FBVztZQUM1RCxPQUFPcEIsS0FBS0ssT0FBTyxDQUFDUztRQUN0QixFQUFFLE9BQU9ELE9BQU87WUFDZFEsUUFBUUMsR0FBRyxDQUFDVDtRQUNkO0lBQ0YsQ0FBQztJQUNELE1BQU1BLE1BQU07QUFDZDtBQUdGLGlFQUFlYixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvcmUtYXBwLy4vc3JjL0FQSS9pbmRleC50cz85MWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGlcIjtcblxuY29uc3QgJGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgYmFzZVVSTDogQVBJX1VSTCxcbn0pO1xuXG4kYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XG4gIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb250ID0gYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIil9YDtcbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuXG4kYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gIChjb25maWcpID0+IHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9LFxuICBhc3luYyAoZXJyb3IpID0+IHtcbiAgICBjb25zdCBvcmdpbmFsUmVxdWVzdCA9IGVycm9yLmNvbmZpZztcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgZXJyb3IuY29uZmlnICYmICFlcnJvci5jb25maWcuX2lzUmV0cnkpIHtcbiAgICAgIG9yZ2luYWxSZXF1ZXN0Ll9pc1JldHJ5ID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L3JlZnJlc2hgLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLmRhdGEuYWNjZXNzVG9rZW4pO1xuICAgICAgICByZXR1cm4gJGFwaS5yZXF1ZXN0KG9yZ2luYWxSZXF1ZXN0KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0ICRhcGk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJBUElfVVJMIiwiJGFwaSIsImNyZWF0ZSIsIndpdGhDcmVkZW50aWFscyIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb250IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZXJyb3IiLCJvcmdpbmFsUmVxdWVzdCIsInN0YXR1cyIsIl9pc1JldHJ5IiwiZ2V0Iiwic2V0SXRlbSIsImRhdGEiLCJhY2Nlc3NUb2tlbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/API/index.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stor_UserStor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stor/UserStor */ \"./src/stor/UserStor.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stor_UserStor__WEBPACK_IMPORTED_MODULE_3__]);\n_stor_UserStor__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    userStor: _stor_UserStor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            userStor: _stor_UserStor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/nik/Desktop/MyStore/Client/src/pages/_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nik/Desktop/MyStore/Client/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVPO0FBQ0M7QUFFL0IsTUFBTUUsd0JBQVVGLG9EQUFhQSxDQUFDO0lBQUVDLFFBQVFBLHdEQUFBQTtBQUFDLEdBQUU7QUFFbkMsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDSCxRQUFRSSxRQUFRO1FBQUNDLE9BQU87WUFBRU4sUUFBUUEsd0RBQUFBO1FBQUM7a0JBQ2xDLDRFQUFDRztZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yZS1hcHAvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuc2NzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VyU3RvciBmcm9tICdAL3N0b3IvVXNlclN0b3InXG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHVzZXJTdG9yIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlclN0b3IgfX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZXJTdG9yIiwiQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/service/AuthService.ts":
/*!************************************!*\
  !*** ./src/service/AuthService.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthService)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/API */ \"./src/API/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_API__WEBPACK_IMPORTED_MODULE_0__]);\n_API__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass AuthService {\n    static async login(login, password) {\n        return _API__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/login\", {\n            login,\n            password\n        }).then((response)=>{\n            return response;\n        }).catch((err)=>{\n            if (err.response.status === 400) {\n                return err.response;\n            } else {\n                throw err;\n            }\n        });\n    }\n    static async registration(login, password, confirm) {\n        return _API__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/registration\", {\n            login,\n            password,\n            confirm\n        }).then((response)=>{\n            return response;\n        }).catch((err)=>{\n            if (err.response.status === 417) {\n                return err.response;\n            } else {\n                throw err;\n            }\n        });\n    }\n    static async logout() {\n        return _API__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/logout\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9BdXRoU2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV5QjtBQUVWLE1BQU1DO0lBQ25CLGFBQWFDLE1BQU1BLEtBQWEsRUFBRUMsUUFBZ0IsRUFBd0M7UUFDeEYsT0FBT0gsaURBQ0EsQ0FBZSxVQUFVO1lBQUVFO1lBQU9DO1FBQVMsR0FDL0NFLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ2xCLE9BQU9BO1FBQ1QsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVE7WUFDZCxJQUFJQSxJQUFJRixRQUFRLENBQUNHLE1BQU0sS0FBSyxLQUFLO2dCQUMvQixPQUFPRCxJQUFJRixRQUFRO1lBQ3JCLE9BQU87Z0JBQ0wsTUFBTUUsSUFBSTtZQUNaLENBQUM7UUFDSDtJQUNKO0lBRUEsYUFBYUUsYUFDWFIsS0FBYSxFQUNiQyxRQUFnQixFQUNoQlEsT0FBZSxFQUM0QjtRQUMzQyxPQUFPWCxpREFDQSxDQUFlLGlCQUFpQjtZQUFFRTtZQUFPQztZQUFVUTtRQUFRLEdBQy9ETixJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixPQUFPQTtRQUNULEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxNQUFRO1lBQ2QsSUFBSUEsSUFBSUYsUUFBUSxDQUFDRyxNQUFNLEtBQUssS0FBSztnQkFDL0IsT0FBT0QsSUFBSUYsUUFBUTtZQUNyQixPQUFPO2dCQUNMLE1BQU1FLElBQUk7WUFDWixDQUFDO1FBQ0g7SUFDSjtJQUVBLGFBQWFJLFNBQStDO1FBQzFELE9BQU9aLGlEQUFTLENBQUM7SUFDbkI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvcmUtYXBwLy4vc3JjL3NlcnZpY2UvQXV0aFNlcnZpY2UudHM/NjJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0F1dGhSZXNwb25zZS5pbnRlcmZhY2VcIjtcbmltcG9ydCAkYXBpIGZyb20gXCJAL0FQSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHN0YXRpYyBhc3luYyBsb2dpbihsb2dpbjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEF1dGhSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gJGFwaVxuICAgICAgLnBvc3Q8QXV0aFJlc3BvbnNlPihcIi9sb2dpblwiLCB7IGxvZ2luLCBwYXNzd29yZCB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgICAgcmV0dXJuIGVyci5yZXNwb25zZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHJlZ2lzdHJhdGlvbihcbiAgICBsb2dpbjogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgY29uZmlybTogc3RyaW5nXG4gICk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxBdXRoUmVzcG9uc2UsIGFueT4+IHtcbiAgICByZXR1cm4gJGFwaVxuICAgICAgLnBvc3Q8QXV0aFJlc3BvbnNlPihcIi9yZWdpc3RyYXRpb25cIiwgeyBsb2dpbiwgcGFzc3dvcmQsIGNvbmZpcm0gfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT09IDQxNykge1xuICAgICAgICAgIHJldHVybiBlcnIucmVzcG9uc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBsb2dvdXQoKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEF1dGhSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gJGFwaS5wb3N0KFwiL2xvZ291dFwiKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIiRhcGkiLCJBdXRoU2VydmljZSIsImxvZ2luIiwicGFzc3dvcmQiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJyZWdpc3RyYXRpb24iLCJjb25maXJtIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service/AuthService.ts\n");

/***/ }),

/***/ "./src/service/EditService.ts":
/*!************************************!*\
  !*** ./src/service/EditService.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditService)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/API */ \"./src/API/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_API__WEBPACK_IMPORTED_MODULE_0__]);\n_API__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass EditService {\n    static async userEdit(user) {\n        return _API__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/edit\", {\n            user\n        }).then((response)=>{\n            return response;\n        }).catch((err)=>{\n            if (err.response.status === 417) {\n                console.log(err.response);\n                return err.response;\n            } else {\n                throw err;\n            }\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9FZGl0U2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUlWLE1BQU1DO0lBQ25CLGFBQWFDLFNBQVNDLElBQVMsRUFBd0M7UUFDckUsT0FBT0gsaURBQ0EsQ0FBZSxTQUFTO1lBQUVHO1FBQUssR0FDbkNFLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ2xCLE9BQU9BO1FBQ1QsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVE7WUFDZCxJQUFJQSxJQUFJRixRQUFRLENBQUNHLE1BQU0sS0FBSyxLQUFLO2dCQUMvQkMsUUFBUUMsR0FBRyxDQUFDSCxJQUFJRixRQUFRO2dCQUN4QixPQUFPRSxJQUFJRixRQUFRO1lBQ3JCLE9BQU87Z0JBQ0wsTUFBTUUsSUFBSTtZQUNaLENBQUM7UUFDSDtJQUNKO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b3JlLWFwcC8uL3NyYy9zZXJ2aWNlL0VkaXRTZXJ2aWNlLnRzP2ZlNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRhcGkgZnJvbSBcIkAvQVBJXCI7XG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0F1dGhSZXNwb25zZS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdFNlcnZpY2Uge1xuICBzdGF0aWMgYXN5bmMgdXNlckVkaXQodXNlcjogYW55KTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEF1dGhSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gJGFwaVxuICAgICAgLnBvc3Q8QXV0aFJlc3BvbnNlPihcIi9lZGl0XCIsIHsgdXNlciB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDE3KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gZXJyLnJlc3BvbnNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyIkYXBpIiwiRWRpdFNlcnZpY2UiLCJ1c2VyRWRpdCIsInVzZXIiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service/EditService.ts\n");

/***/ }),

/***/ "./src/stor/UserStor.ts":
/*!******************************!*\
  !*** ./src/stor/UserStor.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/API */ \"./src/API/index.ts\");\n/* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/service/AuthService */ \"./src/service/AuthService.ts\");\n/* harmony import */ var _service_EditService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/service/EditService */ \"./src/service/EditService.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _API__WEBPACK_IMPORTED_MODULE_2__, _service_AuthService__WEBPACK_IMPORTED_MODULE_3__, _service_EditService__WEBPACK_IMPORTED_MODULE_4__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _API__WEBPACK_IMPORTED_MODULE_2__, _service_AuthService__WEBPACK_IMPORTED_MODULE_3__, _service_EditService__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nclass UserStor {\n    user = {\n        email: \"\",\n        phone: \"\",\n        id: \"\",\n        isActivatedEmail: false,\n        isActivatedPhone: false,\n        name: \"\",\n        surname: \"\",\n        patronymic: \"\",\n        role: \"\"\n    };\n    isAuth = false;\n    isAdmin = true;\n    errors = {\n        login: [],\n        email: [],\n        phone: [],\n        password: [],\n        confirm: []\n    };\n    constructor(){\n        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeAutoObservable)(this);\n    }\n    setAuth(bool) {\n        this.isAuth = bool;\n    }\n    setAdmin(bool) {\n        this.isAdmin = bool;\n    }\n    setClearErrors() {\n        this.errors = {\n            login: [],\n            email: [],\n            phone: [],\n            password: [],\n            confirm: []\n        };\n    }\n    setErrors(error) {\n        this.errors = error;\n    }\n    setUser(user) {\n        this.user = user;\n    }\n    async login(login, password) {\n        try {\n            const response = await _service_AuthService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].login(login, password);\n            if (response.data.success === true) {\n                this.setErrors(response.data.errors);\n                localStorage.setItem(\"token\", response.data.data.accessToken);\n                this.setAuth(true);\n                this.setUser(response.data.data.user);\n            } else {\n                this.setErrors(response.data.errors);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    async registration(login, password, confirm) {\n        try {\n            const response = await _service_AuthService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].registration(login, password, confirm);\n            if (response.data.success === true) {\n                this.setErrors(response.data.errors);\n                localStorage.setItem(\"token\", response.data.data.accessToken);\n                this.setAuth(true);\n                this.setUser(response.data.data.user);\n            } else {\n                this.setErrors(response.data.errors);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    async logout() {\n        try {\n            const response = await _service_AuthService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout();\n            console.log(response);\n            if (response.data.success === true) {\n                localStorage.removeItem(\"token\");\n                this.setAuth(false);\n                this.setUser({});\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    async checkAuth() {\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${_API__WEBPACK_IMPORTED_MODULE_2__.API_URL}/refresh`, {\n                withCredentials: true\n            });\n            localStorage.setItem(\"token\", response.data.data.accessToken);\n            this.setAuth(true);\n            this.setUser(response.data.data.user);\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    async editUser(user) {\n        try {\n            const response = await _service_EditService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].userEdit(user);\n            if (response.data.success === true) {\n                this.setErrors(response.data.errors);\n                localStorage.setItem(\"token\", response.data.data.accessToken);\n                this.setAuth(true);\n                this.setUser(response.data.data.user);\n            } else {\n                this.setErrors(response.data.errors);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserStor());\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0EsSUFBSSxDQUFDekIsSUFBSTtZQUN0QyxPQUFPO2dCQUNMLElBQUksQ0FBQ3FCLFNBQVMsQ0FBQ0csU0FBU0MsSUFBSSxDQUFDYixNQUFNO1lBQ3JDLENBQUM7UUFDSCxFQUFFLE9BQU9VLE9BQU87WUFDZFEsUUFBUUMsR0FBRyxDQUFDVDtRQUNkO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlLElBQUl2QixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvcmUtYXBwLy4vc3JjL3N0b3IvVXNlclN0b3IudHM/NzY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCJAL0FQSVwiO1xuaW1wb3J0IHsgSUVycm9yLCBJVXNlciB9IGZyb20gXCJAL2ludGVyZmFjZXMvQXV0aFJlc3BvbnNlLmludGVyZmFjZVwiO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCJAL3NlcnZpY2UvQXV0aFNlcnZpY2VcIjtcbmltcG9ydCBFZGl0U2VydmljZSBmcm9tIFwiQC9zZXJ2aWNlL0VkaXRTZXJ2aWNlXCI7XG5cbmNsYXNzIFVzZXJTdG9yIHtcbiAgdXNlcjogSVVzZXIgPSB7XG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgaWQ6IFwiXCIsXG4gICAgaXNBY3RpdmF0ZWRFbWFpbDogZmFsc2UsXG4gICAgaXNBY3RpdmF0ZWRQaG9uZTogZmFsc2UsXG4gICAgbmFtZTogXCJcIixcbiAgICBzdXJuYW1lOiBcIlwiLFxuICAgIHBhdHJvbnltaWM6IFwiXCIsXG4gICAgcm9sZTogXCJcIixcbiAgfTtcbiAgaXNBdXRoID0gZmFsc2U7XG4gIGlzQWRtaW4gPSB0cnVlO1xuXG4gIGVycm9yczogSUVycm9yID0ge1xuICAgIGxvZ2luOiBbXSxcbiAgICBlbWFpbDogW10sXG4gICAgcGhvbmU6IFtdLFxuICAgIHBhc3N3b3JkOiBbXSxcbiAgICBjb25maXJtOiBbXSxcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xuICB9XG5cbiAgc2V0QXV0aChib29sOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0F1dGggPSBib29sO1xuICB9XG5cbiAgc2V0QWRtaW4oYm9vbDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNBZG1pbiA9IGJvb2w7XG4gIH1cblxuICBzZXRDbGVhckVycm9ycygpIHtcbiAgICB0aGlzLmVycm9ycyA9IHtcbiAgICAgIGxvZ2luOiBbXSxcbiAgICAgIGVtYWlsOiBbXSxcbiAgICAgIHBob25lOiBbXSxcbiAgICAgIHBhc3N3b3JkOiBbXSxcbiAgICAgIGNvbmZpcm06IFtdLFxuICAgIH07XG4gIH1cblxuICBzZXRFcnJvcnMoZXJyb3I6IElFcnJvcikge1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3I7XG4gIH1cblxuICBzZXRVc2VyKHVzZXI6IElVc2VyKSB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgfVxuXG4gIGFzeW5jIGxvZ2luKGxvZ2luOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBdXRoU2VydmljZS5sb2dpbihsb2dpbiwgcGFzc3dvcmQpO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9ycyhyZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgdGhpcy5zZXRBdXRoKHRydWUpO1xuICAgICAgICB0aGlzLnNldFVzZXIocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcnMocmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVnaXN0cmF0aW9uKGxvZ2luOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGNvbmZpcm06IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF1dGhTZXJ2aWNlLnJlZ2lzdHJhdGlvbihsb2dpbiwgcGFzc3dvcmQsIGNvbmZpcm0pO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnNldEVycm9ycyhyZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5kYXRhLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgdGhpcy5zZXRBdXRoKHRydWUpO1xuICAgICAgICB0aGlzLnNldFVzZXIocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRFcnJvcnMocmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9nb3V0KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICB0aGlzLnNldEF1dGgoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFVzZXIoe30gYXMgSVVzZXIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2hlY2tBdXRoKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9yZWZyZXNoYCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEuZGF0YS5hY2Nlc3NUb2tlbik7XG4gICAgICB0aGlzLnNldEF1dGgodHJ1ZSk7XG4gICAgICB0aGlzLnNldFVzZXIocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZWRpdFVzZXIodXNlcjogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgRWRpdFNlcnZpY2UudXNlckVkaXQodXNlcik7XG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2V0RXJyb3JzKHJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLmRhdGEuYWNjZXNzVG9rZW4pO1xuICAgICAgICB0aGlzLnNldEF1dGgodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0VXNlcihyZXNwb25zZS5kYXRhLmRhdGEudXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEVycm9ycyhyZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJTdG9yKCk7Il0sIm5hbWVzIjpbImF4aW9zIiwibWFrZUF1dG9PYnNlcnZhYmxlIiwiQVBJX1VSTCIsIkF1dGhTZXJ2aWNlIiwiRWRpdFNlcnZpY2UiLCJVc2VyU3RvciIsInVzZXIiLCJlbWFpbCIsInBob25lIiwiaWQiLCJpc0FjdGl2YXRlZEVtYWlsIiwiaXNBY3RpdmF0ZWRQaG9uZSIsIm5hbWUiLCJzdXJuYW1lIiwicGF0cm9ueW1pYyIsInJvbGUiLCJpc0F1dGgiLCJpc0FkbWluIiwiZXJyb3JzIiwibG9naW4iLCJwYXNzd29yZCIsImNvbmZpcm0iLCJjb25zdHJ1Y3RvciIsInNldEF1dGgiLCJib29sIiwic2V0QWRtaW4iLCJzZXRDbGVhckVycm9ycyIsInNldEVycm9ycyIsImVycm9yIiwic2V0VXNlciIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWNjZXNzVG9rZW4iLCJjb25zb2xlIiwibG9nIiwicmVnaXN0cmF0aW9uIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImNoZWNrQXV0aCIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImVkaXRVc2VyIiwidXNlckVkaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stor/UserStor.ts\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();