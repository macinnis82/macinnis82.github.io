webpackJsonp([1], {
  NHnr: function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = a("7+uW"),
      o = {
        render: function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("nav", [t("div", {
            staticClass: "nav-wrapper green"
          }, [t("div", {
            staticClass: "container"
          }, [t("router-link", {
            staticClass: "brand-logo",
            attrs: {
              to: "/"
            }
          }, [this._v("Employee Manager")])], 1)])])
        },
        staticRenderFns: []
      },
      n = {
        name: "App",
        components: {
          Navbar: a("VU/8")(null, o, !1, null, null, null).exports
        }
      },
      s = {
        render: function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            attrs: {
              id: "app"
            }
          }, [t("Navbar"), this._v(" "), t("div", {
            staticClass: "container"
          }, [t("router-view")], 1)], 1)
        },
        staticRenderFns: []
      },
      l = a("VU/8")(n, s, !1, null, null, null).exports,
      r = a("kxiW"),
      p = a.n(r).a.initializeApp({
        apiKey: "AIzaSyBPEl9zgeBFmyiLr1FW-otg7hCqGYkShE0",
        authDomain: "vuefs-prod-2faaa.firebaseapp.com",
        databaseURL: "https://vuefs-prod-2faaa.firebaseio.com",
        projectId: "vuefs-prod-2faaa",
        storageBucket: "vuefs-prod-2faaa.appspot.com",
        messagingSenderId: "79153034557"
      }).firestore(),
      d = {
        name: "dashboard",
        data: function () {
          return {
            employees: []
          }
        },
        created: function () {
          var e = this;
          p.collection("employees").orderBy("dept").get().then(function (t) {
            t.forEach(function (t) {
              var a = {
                id: t.id,
                employee_id: t.data().employee_id,
                name: t.data().name,
                dept: t.data().dept,
                position: t.data().position
              };
              e.employees.push(a)
            })
          })
        }
      },
      c = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "dashboard"
          }, [a("ul", {
            staticClass: "collection with-header"
          }, [e._m(0), e._v(" "), e._l(e.employees, function (t) {
            return a("li", {
              key: t.id,
              staticClass: "collection-item"
            }, [a("div", {
              staticClass: "chip"
            }, [e._v(e._s(t.dept))]), e._v("\n      " + e._s(t.employee_id) + ":" + e._s(t.name) + "\n\n      "), a("router-link", {
              staticClass: "secondary-content",
              attrs: {
                to: {
                  name: "view-employee",
                  params: {
                    employee_id: t.employee_id
                  }
                }
              }
            }, [a("i", {
              staticClass: "fa fa-eye"
            })])], 1)
          })], 2), e._v(" "), a("div", {
            staticClass: "fixed-action-btn"
          }, [a("router-link", {
            staticClass: "btn-floating btn-large red",
            attrs: {
              to: "/new"
            }
          }, [a("i", {
            staticClass: "fa fa-plus"
          })])], 1)])
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("li", {
            staticClass: "collection-header"
          }, [t("h4", [this._v("Employees")])])
        }]
      },
      m = a("VU/8")(d, c, !1, null, null, null).exports,
      u = {
        name: "edit-employee",
        data: function () {
          return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
          }
        },
        beforeRouteEnter: function (e, t, a) {
          p.collection("employees").where("employee_id", "==", e.params.employee_id).get().then(function (e) {
            e.forEach(function (e) {
              a(function (t) {
                t.employee_id = e.data().employee_id, t.name = e.data().name, t.dept = e.data().dept, t.position = e.data().position
              })
            })
          })
        },
        watch: {
          $route: "fetchData"
        },
        methods: {
          fetchData: function () {
            var e = this;
            p.collection("employees").where("employee_id", "==", this.$route.params.employee_id).get().then(function (t) {
              t.forEach(function (t) {
                e.employee_id = t.data().employee_id, e.name = t.data().name, e.dept = t.data().dept, e.position = t.data().position
              })
            })
          },
          updateEmployee: function () {
            var e = this;
            p.collection("employees").where("employee_id", "==", this.$route.params.employee_id).get().then(function (t) {
              t.forEach(function (t) {
                t.ref.update({
                  employee_id: e.employee_id,
                  name: e.name,
                  dept: e.dept,
                  position: e.position
                }).then(function () {
                  e.$router.push({
                    name: "view-employee",
                    params: {
                      employee_id: e.employee_id
                    }
                  })
                })
              })
            })
          }
        }
      },
      v = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "edit-employee"
          }, [a("h3", [e._v("Edit Employee")]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("form", {
            staticClass: "col s12",
            on: {
              submit: function (t) {
                return t.preventDefault(), e.updateEmployee(t)
              }
            }
          }, [a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.employee_id,
              expression: "employee_id"
            }],
            attrs: {
              type: "text",
              disabled: ""
            },
            domProps: {
              value: e.employee_id
            },
            on: {
              input: function (t) {
                t.target.composing || (e.employee_id = t.target.value)
              }
            }
          })])]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.name,
              expression: "name"
            }],
            attrs: {
              type: "text",
              required: ""
            },
            domProps: {
              value: e.name
            },
            on: {
              input: function (t) {
                t.target.composing || (e.name = t.target.value)
              }
            }
          })])]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.dept,
              expression: "dept"
            }],
            attrs: {
              type: "text",
              required: ""
            },
            domProps: {
              value: e.dept
            },
            on: {
              input: function (t) {
                t.target.composing || (e.dept = t.target.value)
              }
            }
          })])]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.position,
              expression: "position"
            }],
            attrs: {
              type: "text",
              required: ""
            },
            domProps: {
              value: e.position
            },
            on: {
              input: function (t) {
                t.target.composing || (e.position = t.target.value)
              }
            }
          })])]), e._v(" "), a("button", {
            staticClass: "btn",
            attrs: {
              type: "submit"
            }
          }, [e._v("Submit")]), e._v(" "), a("router-link", {
            staticClass: "btn grey",
            attrs: {
              to: "/"
            }
          }, [e._v("Cancel")])], 1)])])
        },
        staticRenderFns: []
      },
      _ = a("VU/8")(u, v, !1, null, null, null).exports,
      f = {
        name: "new-employee",
        data: function () {
          return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
          }
        },
        methods: {
          saveEmployee: function () {
            var e = this;
            p.collection("employees").add({
              employee_id: this.employee_id,
              name: this.name,
              dept: this.dept,
              position: this.position
            }).then(function (t) {
              return e.$router.push("/")
            })
          }
        }
      },
      y = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "new-employee"
          }, [a("h3", [e._v("New Employee")]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("form", {
            staticClass: "col s12",
            on: {
              submit: function (t) {
                return t.preventDefault(), e.saveEmployee(t)
              }
            }
          }, [a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.employee_id,
              expression: "employee_id"
            }],
            attrs: {
              type: "text",
              required: ""
            },
            domProps: {
              value: e.employee_id
            },
            on: {
              input: function (t) {
                t.target.composing || (e.employee_id = t.target.value)
              }
            }
          }), e._v(" "), a("label", [e._v("Employee ID#")])])]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.name,
              expression: "name"
            }],
            attrs: {
              type: "text",
              required: ""
            },
            domProps: {
              value: e.name
            },
            on: {
              input: function (t) {
                t.target.composing || (e.name = t.target.value)
              }
            }
          }), e._v(" "), a("label", [e._v("Name")])])]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.dept,
              expression: "dept"
            }],
            attrs: {
              type: "text",
              required: ""
            },
            domProps: {
              value: e.dept
            },
            on: {
              input: function (t) {
                t.target.composing || (e.dept = t.target.value)
              }
            }
          }), e._v(" "), a("label", [e._v("Department")])])]), e._v(" "), a("div", {
            staticClass: "row"
          }, [a("div", {
            staticClass: "input-field col s12"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.position,
              expression: "position"
            }],
            attrs: {
              type: "text",
              required: ""
            },
            domProps: {
              value: e.position
            },
            on: {
              input: function (t) {
                t.target.composing || (e.position = t.target.value)
              }
            }
          }), e._v(" "), a("label", [e._v("Position")])])]), e._v(" "), a("button", {
            staticClass: "btn",
            attrs: {
              type: "submit"
            }
          }, [e._v("Submit")]), e._v(" "), a("router-link", {
            staticClass: "btn grey",
            attrs: {
              to: "/"
            }
          }, [e._v("Cancel")])], 1)])])
        },
        staticRenderFns: []
      },
      h = a("VU/8")(f, y, !1, null, null, null).exports,
      C = {
        name: "view-employee",
        data: function () {
          return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
          }
        },
        beforeRouteEnter: function (e, t, a) {
          p.collection("employees").where("employee_id", "==", e.params.employee_id).get().then(function (e) {
            e.forEach(function (e) {
              a(function (t) {
                t.employee_id = e.data().employee_id, t.name = e.data().name, t.dept = e.data().dept, t.position = e.data().position
              })
            })
          })
        },
        watch: {
          $route: "fetchData"
        },
        methods: {
          fetchData: function () {
            var e = this;
            p.collection("employees").where("employee_id", "==", this.$route.params.employee_id).get().then(function (t) {
              t.forEach(function (t) {
                e.employee_id = t.data().employee_id, e.name = t.data().name, e.dept = t.data().dept, e.position = t.data().position
              })
            })
          },
          deleteEmployee: function () {
            var e = this;
            confirm("Are you sure?") && p.collection("employees").where("employee_id", "==", this.$route.params.employee_id).get().then(function (t) {
              t.forEach(function (t) {
                t.ref.delete(), e.$router.push("/")
              })
            })
          }
        }
      },
      g = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "view-employee"
          }, [a("ul", {
            staticClass: "collection with-header"
          }, [a("li", {
            staticClass: "collection-header"
          }, [a("h4", [e._v(e._s(e.name))])]), e._v(" "), a("li", {
            staticClass: "collection-item"
          }, [e._v("Employee ID#:  " + e._s(e.employee_id))]), e._v(" "), a("li", {
            staticClass: "collection-item"
          }, [e._v("Department:  " + e._s(e.dept))]), e._v(" "), a("li", {
            staticClass: "collection-item"
          }, [e._v("Position:  " + e._s(e.position))])]), e._v(" "), a("router-link", {
            staticClass: "btn grey",
            attrs: {
              to: "/"
            }
          }, [e._v("Back")]), e._v(" "), a("button", {
            staticClass: "btn red",
            on: {
              click: e.deleteEmployee
            }
          }, [e._v("Delete")]), e._v(" "), a("div", {
            staticClass: "fixed-action-btn"
          }, [a("router-link", {
            staticClass: "btn-floating btn-large red",
            attrs: {
              to: {
                name: "edit-employee",
                params: {
                  employee_id: e.employee_id
                }
              }
            }
          }, [a("i", {
            staticClass: "fa fa-pencil-alt"
          })])], 1)], 1)
        },
        staticRenderFns: []
      },
      w = a("VU/8")(C, g, !1, null, null, null).exports,
      b = a("/ocq");
    i.a.use(b.a);
    var E = new b.a({
      routes: [{
        path: "/",
        name: "dashboard",
        component: m
      }, {
        path: "/new",
        name: "new-employee",
        component: h
      }, {
        path: "/edit/:employee_id",
        name: "edit-employee",
        component: _
      }, {
        path: "/:employee_id",
        name: "view-employee",
        component: w
      }]
    });
    i.a.config.productionTip = !1, new i.a({
      el: "#app",
      router: E,
      components: {
        App: l
      },
      template: "<App/>"
    })
  }
}, ["NHnr"]);
//# sourceMappingURL=app.e110a87d2a9c8f983c33.js.map