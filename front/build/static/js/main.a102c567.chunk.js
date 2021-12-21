(this["webpackJsonpreact-sidebar-sub-v2"] =
  this["webpackJsonpreact-sidebar-sub-v2"] || []).push([
  [0],
  {
    254: function (e, n, t) {},
    256: function (e, n, t) {},
    460: function (e, n, t) {},
    461: function (e, n, t) {
      "use strict";
      t.r(n);
      var r,
        i,
        c,
        o,
        a,
        s,
        l,
        d,
        u,
        b,
        j,
        f,
        p,
        h,
        x,
        g,
        m,
        O,
        v,
        y,
        w,
        k,
        C,
        S,
        F,
        D,
        z,
        T,
        P,
        N,
        I,
        L,
        E,
        A,
        R,
        M,
        B,
        G,
        U,
        q,
        _,
        Q,
        J,
        Y,
        W,
        K,
        H,
        V,
        X,
        Z,
        $,
        ee,
        ne,
        te,
        re,
        ie,
        ce,
        oe,
        ae,
        se,
        le,
        de,
        ue,
        be,
        je,
        fe,
        pe,
        he,
        xe,
        ge,
        me,
        Oe,
        ve,
        ye,
        we,
        ke,
        Ce,
        Se,
        Fe,
        De,
        ze,
        Te,
        Pe,
        Ne = t(1),
        Ie = t(96),
        Le = t.n(Ie),
        Ee = (t(254), t(20)),
        Ae = t.n(Ee),
        Re = t(37),
        Me = t(13),
        Be = (t(256), t(11)),
        Ge = t(12),
        Ue = t(48),
        qe = t(119),
        _e = t(40),
        Qe = t(57),
        Je = t(106),
        Ye = t(2),
        We = [
          {
            title: "Overview",
            path: "/overview",
            icon: Object(Ye.jsx)(_e.a, {}),
            iconClosed: Object(Ye.jsx)(Je.a, {}),
            iconOpened: Object(Ye.jsx)(Je.b, {}),
          },
          {
            title: "Lists",
            path: "/lists",
            icon: Object(Ye.jsx)(Qe.a, {}),
            iconClosed: Object(Ye.jsx)(Je.a, {}),
            iconOpened: Object(Ye.jsx)(Je.b, {}),
            subNav: [
              {
                title: "Lists",
                path: "/lists/lists1",
                icon: Object(Ye.jsx)(Qe.a, {}),
                cName: "sub-nav",
              },
              {
                title: "Lists 2",
                path: "/lists/lists2",
                icon: Object(Ye.jsx)(Qe.a, {}),
                cName: "sub-nav",
              },
              {
                title: "Lists 3",
                path: "/lists/lists3",
                icon: Object(Ye.jsx)(Qe.a, {}),
              },
            ],
          },
          { title: "Team", path: "/team", icon: Object(Ye.jsx)(Qe.c, {}) },
          {
            title: "Support",
            path: "/support",
            icon: Object(Ye.jsx)(Qe.b, {}),
          },
        ],
        Ke = Object(Ge.a)(Ue.b)(
          r ||
            (r = Object(Be.a)([
              "\n  display: flex;\n  color: #e1e9fc;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  list-style: none;\n  height: 60px;\n  text-decoration: none;\n  font-size: 18px;\n\n  &:hover {\n    background: #252831;\n    border-left: 4px solid #632ce4;\n    cursor: pointer;\n  }\n",
            ]))
        ),
        He = Ge.a.span(i || (i = Object(Be.a)(["\n  margin-left: 16px;\n"]))),
        Ve = Object(Ge.a)(Ue.b)(
          c ||
            (c = Object(Be.a)([
              "\n  background: #414757;\n  height: 60px;\n  padding-left: 3rem;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #f5f5f5;\n  font-size: 18px;\n\n  &:hover {\n    background: #632ce4;\n    cursor: pointer;\n  }\n",
            ]))
        ),
        Xe = function (e) {
          var n = e.item,
            t = Object(Ne.useState)(!1),
            r = Object(Me.a)(t, 2),
            i = r[0],
            c = r[1];
          return Object(Ye.jsxs)(Ye.Fragment, {
            children: [
              Object(Ye.jsxs)(Ke, {
                to: n.path,
                onClick:
                  n.subNav &&
                  function () {
                    return c(!i);
                  },
                children: [
                  Object(Ye.jsxs)("div", {
                    children: [
                      n.icon,
                      Object(Ye.jsx)(He, { children: n.title }),
                    ],
                  }),
                  Object(Ye.jsx)("div", {
                    children:
                      n.subNav && i
                        ? n.iconOpened
                        : n.subNav
                        ? n.iconClosed
                        : null,
                  }),
                ],
              }),
              i &&
                n.subNav.map(function (e, n) {
                  return Object(Ye.jsxs)(
                    Ve,
                    {
                      to: e.path,
                      children: [
                        e.icon,
                        Object(Ye.jsx)(He, { children: e.title }),
                      ],
                    },
                    n
                  );
                }),
            ],
          });
        },
        Ze = t(0),
        $e = t.p + "static/media/Group 2 (3).006d8560.png",
        en = Ge.a.div(
          o ||
            (o = Object(Be.a)([
              "\n  /* background: #15171c; */\n  /*   background: #15171c;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; */\n  z-index: 1;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  background: -webkit-gradient(\n    linear,\n    left bottom,\n    left top,\n    from(rgba(0, 0, 0, 0)),\n    to(rgba(0, 0, 0, 0.8))\n  );\n  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));\n",
            ]))
        ),
        nn = Ge.a.div(
          a ||
            (a = Object(Be.a)([
              "\n  /* background: #15171c; */\n  //background: #15171c;\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n",
            ]))
        ),
        tn = Ge.a.div(
          s ||
            (s = Object(Be.a)([
              "\n  /* background: #15171c; */\n  //background: #15171c;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 768px) {\n    margin-right: 50px;\n  }\n",
            ]))
        ),
        rn = Ge.a.div(
          l ||
            (l = Object(Be.a)([
              "\n  /* background: #15171c; */\n  //background: #15171c;\n  height: 80px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 50px;\n  @media (max-width: 768px) {\n    display: none;\n  }\n",
            ]))
        ),
        cn = Object(Ge.a)(Ue.b)(
          d ||
            (d = Object(Be.a)([
              "\n  margin-left: 2rem;\n  font-size: 2rem;\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n",
            ]))
        ),
        on = Ge.a.nav(
          u ||
            (u = Object(Be.a)([
              "\n  background: #15171c;\n  width: 250px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: ",
              ";\n  transition: 350ms;\n  z-index: 10;\n",
            ])),
          function (e) {
            return e.sidebar ? "0" : "-100%";
          }
        ),
        an = Ge.a.div(b || (b = Object(Be.a)(["\n  width: 100%;\n"]))),
        sn = Ge.a.img(
          j ||
            (j = Object(Be.a)([
              "\n  height: 80px;\n  justify-items: center;\n  margin-left: 20px;\n\n  /* transform: translate(-50%, -50%); */\n",
            ]))
        ),
        ln = function () {
          var e = Object(Ne.useState)(!1),
            n = Object(Me.a)(e, 2),
            t = n[0],
            r = n[1],
            i = function () {
              return r(!t);
            };
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsxs)(Ze.b.Provider, {
              value: { color: "#fff" },
              children: [
                Object(Ye.jsxs)(en, {
                  children: [
                    Object(Ye.jsx)(nn, {
                      children: Object(Ye.jsx)(cn, {
                        to: "#",
                        children: Object(Ye.jsx)(qe.a, { onClick: i }),
                      }),
                    }),
                    Object(Ye.jsx)(tn, {
                      children: Object(Ye.jsx)(sn, { src: $e, alt: "logo" }),
                    }),
                    Object(Ye.jsx)(rn, {
                      children: Object(Ye.jsx)(cn, {
                        to: "#",
                        children: Object(Ye.jsx)(qe.b, {}),
                      }),
                    }),
                  ],
                }),
                Object(Ye.jsx)(on, {
                  sidebar: t,
                  children: Object(Ye.jsxs)(an, {
                    children: [
                      Object(Ye.jsx)(cn, {
                        to: "#",
                        children: Object(Ye.jsx)(_e.b, { onClick: i }),
                      }),
                      We.map(function (e, n) {
                        return Object(Ye.jsx)(Xe, { item: e }, n);
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        dn = t(35),
        un = t.p + "static/media/Cvi-0.695fa4bc.jpg",
        bn = Ge.a.div(
          f ||
            (f = Object(Be.a)([
              '\n  max-width: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  display: block;\n  flex-direction: column;\n  /* background-color: rgb(227, 232, 222); */\n  background-color: black;\n  height: 100vh;\n  position: relative;\n  font-family: "Maven Pro", sans-serif;\n  color: white;\n  font-size: 2em;\n  font-weight: regular;\n',
            ]))
        ),
        jn = Ge.a.div(
          p ||
            (p = Object(Be.a)([
              "\n  /*   width: 60vw;\n  height: 50vh;\n  border: solid 1px #3a7359;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); */\n  /* background-color: rgb(215, 235, 200, 0.1); */\n  position: absolute;\n  top: 58%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        fn = Ge.a.img(
          h ||
            (h = Object(Be.a)([
              "\n  width: 100%;\n  //height: 99.9vh;\n  min-height: 100%;\n  justify-items: center;\n  margin: 0;\n  background-image: url(",
              ");\n  /*  background-position: right 15% bottom 45%; */\n  ///https://lewislab.berkeley.edu/media-gallery/detail/1886/4906\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  margin-left: -1px;\n  background-position: center center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  opacity: 0.9;\n\n  /* transform: translate(-50%, -50%); */\n",
            ])),
          un
        ),
        pn = Ge.a.video(
          x ||
            (x = Object(Be.a)([
              "\n  width: 100%;\n  //height: 99.9vh;\n  min-height: 100%;\n  justify-items: center;\n  margin: 0;\n  /*  background-position: right 15% bottom 45%; */\n  ///https://lewislab.berkeley.edu/media-gallery/detail/1886/4906\n  position: fixed;\n  margin-left: -1px;\n  background-position: center center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  opacity: 0.9;\n",
            ]))
        ),
        hn = Object(Ge.a)(Ue.b)(
          g ||
            (g = Object(Be.a)([
              "\n  margin-top: 5vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  background-color: #ff0d1d;\n  border: 0.0625rem solid transparent;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  font-weight: 500;\n  min-height: 3rem;\n  text-decoration-line: none;\n  width: 10em;\n  text-align: center;\n  ",
              ":hover & {\n    transform: scale(1.1);\n    transform-origin: 50% 50%;\n  }\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ])),
          fn
        ),
        xn = Ge.a.div(
          m ||
            (m = Object(Be.a)([
              "\n  text-align: center;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        gn = function () {
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsxs)(bn, {
              children: [
                Object(Ye.jsx)(pn, {
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  children: Object(Ye.jsx)("source", {
                    src: un,
                    type: "video/mp4",
                  }),
                }),
                Object(Ye.jsx)(fn, {}),
                Object(Ye.jsxs)(jn, {
                  children: [
                    Object(Ye.jsx)(xn, {
                      children:
                        "Comparison of redox-related overlapped networks",
                    }),
                    Object(Ye.jsx)(hn, {
                      to: "/lists",
                      children: "Start analysis",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        mn = t(33),
        On = t(26),
        vn = t(466),
        yn = t(467),
        wn = t(127),
        kn = t(128),
        Cn = t(109),
        Sn = t(105),
        Fn = t(471),
        Dn = t(231),
        zn = function (e) {
          var n = e.data;
          return Object(Ye.jsx)(vn.a, {
            width: "100%",
            height: "100%",
            children: Object(Ye.jsxs)(yn.a, {
              width: 300,
              height: 100,
              data: n,
              margin: { top: 15, right: 30, left: 20, bottom: 15 },
              barSize: 20,
              children: [
                Object(Ye.jsx)(wn.a, {
                  dataKey: "overlist",
                  scale: "point",
                  padding: { left: 10, right: 10 },
                }),
                Object(Ye.jsx)(kn.a, {}),
                Object(Ye.jsx)(Cn.a, {
                  wrapperStyle: { width: 100, backgroundColor: "#ccc" },
                }),
                Object(Ye.jsx)(Sn.a, {
                  width: 100,
                  wrapperStyle: {
                    top: 40,
                    right: 20,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px",
                  },
                }),
                Object(Ye.jsx)(Fn.a, { strokeDasharray: "3 3" }),
                Object(Ye.jsx)(Dn.a, {
                  dataKey: "size",
                  fill: "#8884d8",
                  background: { fill: "#eee" },
                }),
              ],
            }),
          });
        },
        Tn = t(32),
        Pn = t(134),
        Nn = Ge.a.section(
          O ||
            (O = Object(Be.a)([
              "\n  position: relative;\n  margin: 25px 0 15px;\n  border: 2px dotted lightgray;\n  padding: 35px 20px;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n",
            ]))
        ),
        In = Ge.a.input(
          v ||
            (v = Object(Be.a)([
              "\n  font-size: 1rem;\n  display: block;\n  width: 100%;\n  border: none;\n  text-transform: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  &:focus {\n    outline: none;\n  }\n",
            ]))
        ),
        Ln = Ge.a.label(
          y ||
            (y = Object(Be.a)([
              "\n  top: -21px;\n  font-size: 1rem;\n  color: black;\n  left: 0;\n  position: absolute;\n",
            ]))
        ),
        En = Ge.a.p(
          w ||
            (w = Object(Be.a)([
              "\n  /* font-weight: bold; */\n  font-size: 1rem;\n  letter-spacing: 2.2px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  text-align: center;\n",
            ]))
        ),
        An = Ge.a.button(
          k ||
            (k = Object(Be.a)([
              '\n  box-sizing: border-box;\n  appearance: none;\n  background-color: transparent;\n  border: 1px solid black;\n  cursor: pointer;\n  font-size: 0.8rem;\n  line-height: 1;\n  padding: 1.1em 2.8em;\n  text-align: center;\n  text-transform: uppercase;\n  /* font-weight: 700; */\n  border-radius: 6px;\n  /* color: #3498db; */\n  color: green;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  transition: color 250ms ease-in-out;\n  width: 20vw;\n  display: flex;\n  align-items: center;\n  padding-right: 0;\n  justify-content: center;\n  &:after {\n    content: "";\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 0;\n    height: 100%;\n    background: rgb(165, 170, 160);\n    z-index: -1;\n    transition: width 250ms ease-in-out;\n  }\n  i {\n    font-size: 1rem;\n    margin-right: 5px;\n    border-right: 2px solid;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  @media only screen and (max-width: 500px) {\n    width: 70%;\n  }\n  @media only screen and (max-width: 350px) {\n    width: 100%;\n  }\n  &:hover {\n    color: #fff;\n    outline: 0;\n    background: transparent;\n    &:after {\n      width: 110%;\n    }\n  }\n  &:focus {\n    outline: 0;\n    background: transparent;\n  }\n  &:disabled {\n    opacity: 0.4;\n    filter: grayscale(100%);\n    pointer-events: none;\n  }\n',
            ]))
        ),
        Rn = Ge.a.article(
          C ||
            (C = Object(Be.a)([
              "\n  /*  border: 5px solid red; */\n  margin-bottom: 35px;\n  span {\n    font-size: 1rem;\n  }\n",
            ]))
        ),
        Mn = Ge.a.section(
          S ||
            (S = Object(Be.a)([
              "\n  display: flex;\n  flex-direction: row;\n  /* border: 5px solid blue; */\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 10px;\n  @media only screen and (max-width: 400px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        Bn = Ge.a.div(
          F ||
            (F = Object(Be.a)([
              "\n  display: ",
              ";\n  //flex-direction: column;\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  border-radius: 6px;\n  color: white;\n  /* font-weight: bold; */\n  background-color: rgba(5, 5, 5, 0.55);\n  aside {\n    margin-top: auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          function (e) {
            return e.isImageFile ? "none" : "flex";
          }
        ),
        Gn = Ge.a.i(
          D ||
            (D = Object(Be.a)([
              "\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.3);\n  }\n",
            ]))
        ),
        Un = Ge.a.section(
          z ||
            (z = Object(Be.a)([
              "\n  padding: 0.25rem;\n  width: 100%;\n  height: 50px;\n  border-radius: 6px;\n  box-sizing: border-box;\n  /*   border: 6px solid violet; */\n  &:hover {\n    opacity: 0.55;\n    ",
              " {\n      display: flex;\n    }\n  }\n  & > div:first-of-type {\n    height: 100%;\n    position: relative;\n  }\n  @media only screen and (max-width: 750px) {\n    width: 100%;\n  }\n  @media only screen and (max-width: 500px) {\n    width: 100%;\n  }\n  @media only screen and (max-width: 400px) {\n    width: 100%;\n    padding: 0 0 0.4em;\n  }\n",
            ])),
          Bn
        ),
        qn = Ge.a.img(
          T ||
            (T = Object(Be.a)([
              "\n  border-radius: 6px;\n  width: 100%;\n  height: 100%;\n",
            ]))
        ),
        _n = ["label", "updateFilesCb", "funct", "show", "maxFileSizeInBytes"],
        Qn = Ge.a.span(
          P ||
            (P = Object(Be.a)([
              "\n  /*   margin-top: 1vh; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  background-color: #ff0d1d;\n  border: 0.0625rem solid transparent;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  font-weight: 500;\n  min-height: 3rem;\n  text-decoration-line: none;\n  /* width: 10em; */\n  text-align: center;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        Jn = function (e) {
          var n = e.label,
            t = e.updateFilesCb,
            r = e.funct,
            i = (e.show, e.maxFileSizeInBytes),
            c = void 0 === i ? 5e5 : i,
            o = Object(Pn.a)(e, _n),
            a = Object(Ne.useRef)(null),
            s = Object(Ne.useState)({}),
            l = Object(Me.a)(s, 2),
            d = l[0],
            u = l[1],
            b = Object(Ne.useContext)(gr),
            j = b.clicked,
            f = b.setDataToProviderClicked,
            p = function (e) {
              var n,
                r =
                  ((n = e),
                  Object.keys(n).map(function (e) {
                    return n[e];
                  }));
              t(r);
            };
          return Object(Ye.jsxs)(Ye.Fragment, {
            children: [
              Object(Ye.jsxs)(Nn, {
                children: [
                  Object(Ye.jsx)(Ln, { children: n }),
                  Object(Ye.jsx)(En, {
                    children: "Choose a file or drag it here",
                  }),
                  Object(Ye.jsxs)(An, {
                    type: "button",
                    onClick: function () {
                      a.current.click(), f(!1);
                    },
                    children: [
                      Object(Ye.jsx)("i", {
                        className: "fas",
                        style: {
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        },
                        children: Object(Ye.jsx)(_e.c, {}),
                      }),
                      Object(Ye.jsxs)("span", {
                        children: [" Upload ", o.multiple ? "files" : "a file"],
                      }),
                    ],
                  }),
                  Object(Ye.jsx)(
                    In,
                    Object(On.a)(
                      {
                        type: "file",
                        ref: a,
                        onChange: function (e) {
                          var n = e.target.files;
                          if (n.length) {
                            var t = (function (e) {
                              var n,
                                t = Object(Tn.a)(e);
                              try {
                                for (t.s(); !(n = t.n()).done; ) {
                                  var r = n.value;
                                  if (r.size <= c) {
                                    if (!o.multiple) return { file: r };
                                    d[r.name] = r;
                                  }
                                }
                              } catch (i) {
                                t.e(i);
                              } finally {
                                t.f();
                              }
                              return Object(On.a)({}, d);
                            })(n);
                            u(t), p(t);
                          }
                        },
                        title: "",
                        value: "",
                      },
                      o
                    )
                  ),
                ],
              }),
              0 === Object.keys(d).length || !0 === j
                ? null
                : Object(Ye.jsxs)(Ye.Fragment, {
                    children: [
                      Object(Ye.jsxs)(Rn, {
                        children: [
                          Object(Ye.jsx)("span", {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: "To Upload",
                          }),
                          Object(Ye.jsx)(Mn, {
                            children: Object.keys(d).map(function (e, n) {
                              var t,
                                r = d[e],
                                i = "image" === r.type.split("/")[0];
                              return Object(Ye.jsx)(
                                Un,
                                {
                                  children: Object(Ye.jsxs)("div", {
                                    children: [
                                      i &&
                                        Object(Ye.jsx)(qn, {
                                          src: URL.createObjectURL(r),
                                          alt: "file preview ".concat(n),
                                        }),
                                      Object(Ye.jsx)(Bn, {
                                        isImageFile: i,
                                        children: Object(Ye.jsxs)("div", {
                                          style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            fontSize: "2rem",
                                          },
                                          children: [
                                            Object(Ye.jsx)("span", {
                                              style: {
                                                display: "flex",
                                                width: "fit-content",
                                                height: "fit-content",
                                                alignItems: "center",
                                                justifyContent: "center",
                                              },
                                              children: r.name,
                                            }),
                                            Object(Ye.jsxs)("aside", {
                                              children: [
                                                Object(Ye.jsxs)("span", {
                                                  style: {
                                                    display: "flex",
                                                    height: "30px",
                                                    width: "fit-content",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    paddingLeft: "10px",
                                                  },
                                                  children: [
                                                    ((t = r.size),
                                                    Math.round(t / 1e3)),
                                                    " kb",
                                                  ],
                                                }),
                                                Object(Ye.jsx)(Gn, {
                                                  onClick: function () {
                                                    return (function (e) {
                                                      delete d[e],
                                                        u(Object(On.a)({}, d)),
                                                        p(Object(On.a)({}, d));
                                                    })(e);
                                                  },
                                                  children: Object(Ye.jsx)(
                                                    Qe.d,
                                                    {
                                                      style: {
                                                        height: "30px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "center",
                                                      },
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                e
                              );
                            }),
                          }),
                        ],
                      }),
                      Object(Ye.jsx)(Qn, { onClick: r, children: "Submit" }),
                    ],
                  }),
            ],
          });
        },
        Yn = t(472),
        Wn = t(125),
        Kn = t(224),
        Hn = t(233),
        Vn = function (e) {
          var n = e.data,
            t = function (e) {
              var n = e.active,
                t = e.payload;
              return n
                ? Object(Ye.jsx)("div", {
                    className: "custom-tooltip",
                    children: Object(Ye.jsx)("p", {
                      className: "intro",
                      children: t[0].payload.author,
                    }),
                  })
                : null;
            };
          return Object(Ye.jsx)(vn.a, {
            width: "100%",
            height: "100%",
            children: Object(Ye.jsxs)(Yn.a, {
              width: 300,
              height: 100,
              data: n,
              margin: { top: 20, right: 20, bottom: 20, left: 20 },
              children: [
                Object(Ye.jsx)(Fn.a, {}),
                Object(Ye.jsx)(wn.a, {
                  type: "number",
                  dataKey: "PC1",
                  name: "stature",
                }),
                Object(Ye.jsx)(kn.a, {
                  type: "number",
                  dataKey: "PC2",
                  name: "weight",
                }),
                Object(Ye.jsx)(Wn.a, { dataKey: "author" }),
                Object(Ye.jsx)(Cn.a, { content: Object(Ye.jsx)(t, {}) }),
                Object(Ye.jsx)(Kn.a, { y: 0, stroke: "#000" }),
                Object(Ye.jsx)(Hn.a, { name: "A school", fill: "#8884d8" }),
              ],
            }),
          });
        },
        Xn = Ge.a.div(
          N ||
            (N = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 5vh;\n  color: #696666;\n  background-color: ",
              ";\n  position: relative;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  border: ",
              ';\n\n  &:hover {\n    &:after {\n      content: " p-val: ',
              '";\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      /* height: 20vw; */\n      background-color: black;\n      color: white;\n      position: absolute;\n      inset: 0;\n\n      /*  top: 0px;\n      right: 0px; */\n      /*    top: 0,\n      left: 50%, */\n      transform: translate(-50%, -50%);\n      /*  width: 100px;\n      height: 100px; */\n      width: fit-content;\n      height: fit-content;\n      /*    transform: translate(20px, 10px);\n      animation-duration: 1s;\n      animation-delay: 0.5s; */\n      z-index: 400;\n      border: 1px solid green;\n    }\n  }\n',
            ])),
          function (e) {
            return e.color;
          },
          function (e) {
            return e.border;
          },
          function (e) {
            return e.before;
          }
        ),
        Zn = function (e) {
          var n = e.col,
            t = e.elem,
            r = Object(Ne.useState)(!1),
            i = Object(Me.a)(r, 2),
            c = i[0],
            o = i[1],
            a = Object(Ne.useContext)(gr),
            s = a.interselect,
            l = a.setDataToProviderInterselect;
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsx)(
              Xn,
              {
                color: n,
                before: t.pval,
                onClick: function (e) {
                  if ((e.preventDefault(), !1 === c))
                    l(function (e) {
                      return [].concat(Object(mn.a)(e), [t]);
                    });
                  else if (!0 === c) {
                    var n = s.filter(function (e) {
                      return t.id !== e.id;
                    });
                    l(n);
                  }
                  o(!c);
                },
                border: c ? "5px solid black" : "1px solid green",
                children: t.overlap,
              },
              t.id
            ),
          });
        },
        $n = Ge.a.div(
          I ||
            (I = Object(Be.a)([
              '\n  display: flex;\n  /* width: 60%; */\n  width: fit-content;\n  font-size: 1rem;\n  font-family: "Lato", sans-serif;\n  //border: 2px solid yellowgreen;\n  justify-content: center;\n  @media (max-width: 768px) {\n    display: none;\n    //flex-basis: 70%;\n  }\n',
            ]))
        ),
        et = Ge.a.div(
          L ||
            (L = Object(Be.a)([
              "\n  width: 60vw;\n  height: fit-content;\n  //border: 2px solid red;\n",
            ]))
        ),
        nt = Ge.a.div(
          E ||
            (E = Object(Be.a)([
              "\n  width: 100%;\n  display: grid;\n  grid-template-columns: 0.2fr 1fr;\n  grid-auto-flow: row;\n  //border: 2px solid black;\n\n  /* grid-template-columns: 2fr, 8fr;\n  grid-template-rows: 1fr; */\n  /* background-color: yellowgreen; */\n",
            ]))
        ),
        tt = Ge.a.div(
          A ||
            (A = Object(Be.a)([
              "\n  display: grid;\n  grid-template-columns: repeat(",
              ", 1fr);\n  grid-column-gap: 5px;\n  grid-row-gap: 5px;\n  background-color: rgb(215, 235, 200);\n  //border: 2px solid purple;\n",
            ])),
          function (e) {
            return e.numc;
          }
        ),
        rt = Ge.a.div(
          R ||
            (R = Object(Be.a)([
              "\n  display: grid;\n  margin-right: 10px;\n  margin-left: 10px;\n  //margin-bottom: -5px;\n  //border: 1px solid green;\n  grid-template-columns: 1fr;\n  width: fit-content;\n",
            ]))
        ),
        it = Ge.a.div(
          M ||
            (M = Object(Be.a)([
              "\n  display: grid;\n  grid-template-columns: repeat(",
              ", 1fr);\n  grid-column-gap: 5px;\n  grid-row-gap: 5px;\n  margin-bottom: 5px;\n",
            ])),
          function (e) {
            return e.numc;
          }
        ),
        ct = Ge.a.div(
          B ||
            (B = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 5vh;\n\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.color;
          }
        ),
        ot = function (e) {
          var n = e.datam,
            t = e.names,
            r = n.map(function (e) {
              return e.map(function (e) {
                return {
                  pval: e.forD.pval,
                  overlap: e.forD.overlap,
                  id: e.forD.id,
                  intersect: e.forD.intersect,
                  list1: e.forD.list1,
                  list2: e.forD.list2,
                };
              });
            }),
            i = r.map(function (e) {
              return e.length;
            }),
            c = {
              columns: Math.max.apply(Math, Object(mn.a)(i)),
              rows: i.length,
            },
            o = function (e) {
              return Math.max.apply(
                Math,
                e.map(function (e) {
                  return e.pval;
                })
              );
            },
            a = function (e) {
              return Math.min.apply(
                Math,
                e.map(function (e) {
                  return e.pval;
                })
              );
            },
            s = r.map(function (e) {
              return { max: o(e), min: a(e) };
            });
          Math.max.apply(
            Math,
            s.map(function (e) {
              return e.max;
            })
          ),
            Math.min.apply(
              Math,
              s.map(function (e) {
                return e.min;
              })
            );
          return Object(Ye.jsx)(Ye.Fragment, {
            children:
              t.length > 0
                ? Object(Ye.jsx)($n, {
                    children: Object(Ye.jsxs)(nt, {
                      children: [
                        Object(Ye.jsxs)(rt, {
                          children: [
                            Object(Ye.jsx)("div", {
                              style: {
                                width: "100%",
                                height: "20vh",
                                marginBottom: "10px",
                              },
                            }),
                            t.map(function (e, n) {
                              return Object(Ye.jsx)(
                                ct,
                                {
                                  style: {
                                    display: "inline-flex",
                                    justifyContent: "flex-end",
                                    marginTop: "5px",
                                  },
                                  children: e,
                                },
                                n
                              );
                            }),
                            Object(Ye.jsx)(ct, {}),
                          ],
                        }),
                        Object(Ye.jsxs)(et, {
                          children: [
                            Object(Ye.jsx)("div", {
                              style: {
                                width: "100%",
                                height: "20vh",
                                marginBottom: "10px",
                              },
                              children: Object(Ye.jsx)(it, {
                                numc: c.columns,
                                children: t.map(function (e, n) {
                                  return Object(Ye.jsx)(
                                    ct,
                                    {
                                      style: {
                                        writingMode: "vertical-lr",
                                        display: "inline-flex",
                                        transform: "scale(-1) ",
                                        justifyContent: "flex-start",
                                        paddingBottom: "1vh",
                                        height: "20vh",
                                      },
                                      children: e,
                                    },
                                    n
                                  );
                                }),
                              }),
                            }),
                            Object(Ye.jsx)(tt, {
                              numc: c.columns,
                              children: r.map(function (e) {
                                return e.map(function (e, n) {
                                  var t,
                                    r = "rgb(252, 27, 1, ".concat(
                                      (t = e.pval) >= 0.1
                                        ? 0
                                        : t > 0.05 && t <= 0.1
                                        ? 0.1
                                        : t > 0.01 && t <= 0.05
                                        ? 0.3
                                        : t > 0.001 && t <= 0.01
                                        ? 0.4
                                        : t > 0 && t <= 0.001
                                        ? 0.5
                                        : 0 === t
                                        ? 1
                                        : void 0,
                                      ")"
                                    );
                                  e.pval;
                                  return Object(Ye.jsx)(
                                    Zn,
                                    { col: r, elem: e },
                                    n
                                  );
                                });
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : null,
          });
        },
        at = Ge.a.div(
          G ||
            (G = Object(Be.a)([
              "\n  display: inline-block;\n  flex-direction: row;\n  //border: 1px solid green;\n  width: 5vw;\n  align-items: center;\n  @media (max-width: 768px) {\n    //flex-direction: column;\n    display: inline-block;\n    margin-right: 10px;\n  }\n",
            ]))
        ),
        st = function (e) {
          var n = e.title,
            t = e.value,
            r = e.checked,
            i = e.toggle;
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsxs)(at, {
              className: "button",
              children: [
                Object(Ye.jsx)("input", {
                  type: "checkbox",
                  value: t,
                  checked: r,
                  onChange: function () {
                    return i(t);
                  },
                  style: {
                    zoom: "1.5",
                    transform: "translate(-25%)",
                    cursor: "pointer",
                  },
                }),
                n,
              ],
            }),
          });
        },
        lt = Ge.a.div(
          U ||
            (U = Object(Be.a)([
              "\n  display: flex;\n  font-size: 2rem;\n  //border: 1px solid yellow;\n  width: 60vw;\n  @media (max-width: 768px) {\n    justify-content: space-around;\n    width: 100%;\n  }\n",
            ]))
        ),
        dt = function (e) {
          var n = e.items,
            t = Object(Ne.useContext)(gr).setDataToProviderFilteredR,
            r = Object(Ne.useState)([]),
            i = Object(Me.a)(r, 2),
            c = i[0],
            o = i[1],
            a = Object(Ne.useState)([]),
            s = Object(Me.a)(a, 2),
            l = s[0],
            d = s[1],
            u = Object(Ne.useState)([]),
            b = Object(Me.a)(u, 2),
            j = b[0],
            f = b[1];
          function p(e) {
            if (c.includes("all") && c.length > 1)
              return o(function (n) {
                return n.filter(function (n) {
                  return n === e;
                });
              });
            var n = c.indexOf(e);
            o(
              n > -1
                ? function (n) {
                    return n.filter(function (n) {
                      return n !== e;
                    });
                  }
                : function (n) {
                    return [].concat(Object(mn.a)(n), [e]);
                  }
            );
          }
          Object(Ne.useEffect)(
            function () {
              var e = Object(mn.a)(
                new Set(
                  ["all"].concat(
                    Object(mn.a)(
                      n.map(function (e) {
                        return e.overlist.toString();
                      })
                    )
                  )
                )
              );
              f(
                e.map(function (e, n) {
                  return { value: e };
                })
              );
            },
            [n]
          ),
            Object(Ne.useEffect)(
              function () {
                var e = [],
                  t = [];
                if (
                  (e =
                    -1 !== c.indexOf("all")
                      ? n.map(function (e) {
                          return e;
                        })
                      : n.filter(function (e) {
                          return c.indexOf(e.overlist.toString()) > -1;
                        })).length > 0
                ) {
                  var r = e.map(function (e) {
                      return e.genes.map(function (e) {
                        return e.genes;
                      });
                    }),
                    i = [].concat.apply([], r);
                  t.push(i);
                }
                d(t);
              },
              [c, n]
            ),
            Object(Ne.useEffect)(
              function () {
                t(l);
              },
              [l, t]
            );
          return Object(Ye.jsx)(lt, {
            children: j.map(function (e, n) {
              return Object(Ye.jsx)(
                st,
                Object(On.a)(
                  Object(On.a)({}, e),
                  {},
                  {
                    title: e.value,
                    value: e.value,
                    checked:
                      ((t = e.value),
                      c.indexOf(t) > -1
                        ? c.indexOf(t) > -1
                        : -1 !== c.indexOf("all") ||
                          (-1 !== c.indexOf("all") && void 0)),
                    toggle: p,
                  }
                ),
                n
              );
              var t;
            }),
          });
        },
        ut = Ge.a.div(
          q ||
            (q = Object(Be.a)([
              "\n  display: flex;\n  border: 1px solid black;\n  flex-direction: column;\n  font-size: 1rem;\n  border-radius: 5px;\n  background-color: rgb(229, 206, 156, 0.5);\n  padding: 5px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n",
            ]))
        ),
        bt = function (e) {
          var n = e.list1,
            t = e.list2,
            r = e.intersect;
          e.funct;
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsxs)(ut, {
              children: [
                Object(Ye.jsxs)("div", { children: ["List 1: ", n] }),
                Object(Ye.jsxs)("div", { children: ["List 2: ", t] }),
                Object(Ye.jsxs)("div", { children: ["Intersect: ", r] }),
              ],
            }),
          });
        },
        jt = (function () {
          var e = (function () {
              var e = document.createElement("canvas"),
                n = e.getContext("2d");
              return {
                canvas: !!n,
                imageData: !!n.getImageData,
                dataURL: !!e.toDataURL,
                btoa: !!window.btoa,
              };
            })(),
            n = "image/octet-stream";
          function t(e, n, t) {
            var r = e.width,
              i = e.height;
            void 0 === n && (n = r), void 0 === t && (t = i);
            var c = document.createElement("canvas"),
              o = c.getContext("2d");
            return (
              (c.width = n),
              (c.height = t),
              o.drawImage(e, 0, 0, r, i, 0, 0, n, t),
              c
            );
          }
          function r(e, n, r, i) {
            return (e = t(e, r, i)).toDataURL(n);
          }
          function i(e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "name",
              r = document.createElement("a");
            (r.download = t + "." + n), (r.href = e), r.click();
          }
          function c(e) {
            var n = document.createElement("img");
            return (n.src = e), n;
          }
          function o(e) {
            return (
              "image/" +
              (e = e.toLowerCase().replace(/jpg/i, "jpeg")).match(
                /png|jpeg|bmp|gif/
              )[0]
            );
          }
          function a(e) {
            if (!window.btoa) throw "btoa undefined";
            var n = "";
            if ("string" == typeof e) n = e;
            else
              for (var t = 0; t < e.length; t++) n += String.fromCharCode(e[t]);
            return btoa(n);
          }
          function s(e) {
            var n = e.width,
              t = e.height;
            return e.getContext("2d").getImageData(0, 0, n, t);
          }
          function l(e, n) {
            return "data:" + n + ";base64," + e;
          }
          var d = function (e) {
              var n = e.width,
                t = e.height,
                r = n * t * 3,
                i = r + 54,
                c = [
                  66,
                  77,
                  255 & i,
                  (i >> 8) & 255,
                  (i >> 16) & 255,
                  (i >> 24) & 255,
                  0,
                  0,
                  0,
                  0,
                  54,
                  0,
                  0,
                  0,
                ],
                o = [
                  40,
                  0,
                  0,
                  0,
                  255 & n,
                  (n >> 8) & 255,
                  (n >> 16) & 255,
                  (n >> 24) & 255,
                  255 & t,
                  (t >> 8) & 255,
                  (t >> 16) & 255,
                  (t >> 24) & 255,
                  1,
                  0,
                  24,
                  0,
                  0,
                  0,
                  0,
                  0,
                  255 & r,
                  (r >> 8) & 255,
                  (r >> 16) & 255,
                  (r >> 24) & 255,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
                s = (4 - ((3 * n) % 4)) % 4,
                l = e.data,
                d = "",
                u = n << 2,
                b = t,
                j = String.fromCharCode;
              do {
                for (var f = u * (b - 1), p = "", h = 0; h < n; h++) {
                  var x = h << 2;
                  p += j(l[f + x + 2]) + j(l[f + x + 1]) + j(l[f + x]);
                }
                for (var g = 0; g < s; g++) p += String.fromCharCode(0);
                d += p;
              } while (--b);
              return a(c.concat(o)) + a(d);
            },
            u = function (c, a, u, b, j) {
              console.log(c, "fromSave");
              var f = b;
              if (e.canvas && e.dataURL)
                if (
                  ("string" == typeof c && (c = document.getElementById(c)),
                  void 0 === b && (b = "png"),
                  (b = o(b)),
                  /bmp/.test(b))
                ) {
                  var p = s(t(c, a, u));
                  i(l(d(p), n), f, j);
                } else {
                  i(r(c, b, a, u).replace(b, n), f, j);
                }
            },
            b = function (n, i, a, u) {
              if (e.canvas && e.dataURL) {
                if (
                  ("string" == typeof n && (n = document.getElementById(n)),
                  void 0 === u && (u = "png"),
                  (u = o(u)),
                  /bmp/.test(u))
                ) {
                  var b = s(t(n, i, a));
                  return c(l(d(b), "image/bmp"));
                }
                return c(r(n, u, i, a));
              }
            };
          return {
            saveAsImage: u,
            saveAsPNG: function (e, n, t, r) {
              return u(e, n, t, "png", r);
            },
            saveAsJPEG: function (e, n, t, r) {
              return u(e, n, t, "jpeg", r);
            },
            saveAsGIF: function (e, n, t, r) {
              return u(e, n, t, "gif", r);
            },
            saveAsBMP: function (e, n, t, r) {
              return u(e, n, t, "bmp", r);
            },
            convertToImage: b,
            convertToPNG: function (e, n, t) {
              return b(e, n, t, "png");
            },
            convertToJPEG: function (e, n, t) {
              return b(e, n, t, "jpeg");
            },
            convertToGIF: function (e, n, t) {
              return b(e, n, t, "gif");
            },
            convertToBMP: function (e, n, t) {
              return b(e, n, t, "bmp");
            },
          };
        })(),
        ft = t(130),
        pt = t(131),
        ht = t(133),
        xt = function (e) {
          var n = e.group,
            t = e.color,
            r = e.count;
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsxs)("div", {
              style: {
                display: "flex",
                marginTop: "5px",
                color: "white",
                justifyContent: "space-between",
              },
              children: [
                "\xa0 ",
                r,
                " \xa0 \xa0 ",
                n,
                " \xa0",
                Object(Ye.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "50px",
                    height: "15",
                    backgroundColor: t,
                  },
                }),
              ],
            }),
          });
        },
        gt =
          (t(460),
          function (e) {
            var n = e.onChange,
              t = e.placeholder;
            return Object(Ye.jsxs)("div", {
              className: "Search",
              children: [
                Object(Ye.jsx)("span", { className: "SearchSpan" }),
                Object(Ye.jsx)("input", {
                  className: "SearchInput",
                  type: "text",
                  onChange: n,
                  placeholder: t,
                }),
              ],
            });
          }),
        mt = t(240),
        Ot = function (e) {
          var n = e.autor,
            t = e.handleClickNodeFunction,
            r = Object(Ne.useState)(!1),
            i = Object(Me.a)(r, 2),
            c = i[0],
            o = i[1];
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsxs)("div", {
              style: {
                display: "flex",
                marginTop: "5px",
                justifyContent: "space-between",
              },
              children: [
                Object(Ye.jsx)(
                  "button",
                  {
                    style: { marginRight: "10px", width: "100%" },
                    onClick: function () {
                      return [t(n), o(!c)];
                    },
                    children: n.label,
                  },
                  n.id
                ),
                Object(Ye.jsx)("div", {
                  style: {
                    backgroundColor: c ? "orange" : "",
                    width: "50px",
                    height: "15",
                    display: "flex",
                    justifyContent: "flex-end",
                  },
                }),
              ],
            }),
          });
        },
        vt =
          (Ge.a.div(
            _ || (_ = Object(Be.a)(["\n  border: 1px solid black;\n"]))
          ),
          Ge.a.div(Q || (Q = Object(Be.a)(["\n  border: 1px solid black;\n"]))),
          Ge.a.div(J || (J = Object(Be.a)(["\n  border: 1px solid black;\n"]))),
          Ge.a.div(
            Y ||
              (Y = Object(Be.a)([
                "\n  display: flex;\n  justify-content: space-between;\n  font-style: italic;\n",
              ]))
          ),
          Ge.a.div(
            W ||
              (W = Object(Be.a)([
                "\n  width: 40vw;\n  height: 5vh;\n  background-color: rgb(237, 238, 236);\n  //display: grid;\n  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr 1fr;\n  display: inline-grid;\n  border: 1px solid white;\n  grid-auto-flow: column;\n  @media (max-width: 768px) {\n    width: 100%;\n    /* justify-content: center; */\n  }\n  @media (max-width: 1024px) {\n    width: 100%;\n    /* justify-content: center; */\n  }\n",
              ]))
          )),
        yt = Ge.a.div(
          K ||
            (K = Object(Be.a)([
              '\n  display: flex;\n  width: 100%;\n  //font-weight: bold;\n  font-size: 1.2rem;\n  font-family: "Maven Pro", sans-serif;\n  align-items: center;\n  background-color: #3a7359;\n  justify-content: center;\n  color: white;\n  //border: 1px solid red;\n  //padding-left: 15px;\n',
            ]))
        ),
        wt = Ge.a.div(
          H ||
            (H = Object(Be.a)([
              '\n  display: flex;\n  width: 100%;\n  font-size: 1rem;\n  //font-family: "Maven Pro", sans-serif;\n  font-family: "Lato", sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(165, 170, 160);\n  //border: 1px solid red;\n  //padding-left: 15px;\n',
            ]))
        ),
        kt = Ge.a.div(
          V ||
            (V = Object(Be.a)([
              "\n  border: 1px solid white;\n  width: fit-content;\n  background-color: green;\n",
            ]))
        ),
        Ct = function (e) {
          var n = e.nData,
            t = e.names,
            r = Object.keys(n[0]).length;
          return Object(Ye.jsxs)(kt, {
            children: [
              Object(Ye.jsx)(vt, {
                rowCount: r,
                children: Object.keys(t).map(function (e, n) {
                  return Object(Ye.jsx)(yt, { children: t[e] }, n);
                }),
              }),
              n.slice(0, 5).map(function (e, n) {
                return Object(Ye.jsx)(
                  "div",
                  {
                    children: Object(Ye.jsxs)(vt, {
                      rowCount: r,
                      children: [
                        Object(Ye.jsx)(wt, { children: e.genes }),
                        Object(Ye.jsx)(wt, { children: e.name2 }),
                        Object(Ye.jsx)(wt, { children: e.bce1.toFixed(2) }),
                        Object(Ye.jsx)(wt, { children: e.bet_c3.toFixed(2) }),
                        Object(Ye.jsx)(wt, { children: e.c_c2.toFixed(2) }),
                        Object(Ye.jsx)(wt, { children: e.ei_c5.toFixed(2) }),
                      ],
                    }),
                  },
                  n
                );
              }),
            ],
          });
        },
        St = Ge.a.div(
          X ||
            (X = Object(Be.a)([
              '\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  font-family: "Maven Pro", sans-serif;\n  flex-direction: column;\n  background-color: rgb(232, 234, 238);\n  font-size: 3rem;\n  justify-content: center;\n  align-items: center;\n',
            ]))
        ),
        Ft = Ge.a.div(
          Z ||
            (Z = Object(Be.a)([
              "\n  width: 90%;\n  height: fit-content;\n  border: 1px solid green;\n  background-color: rgb(215, 235, 200);\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 20px;\n  border-radius: 3px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n\n    //width: 100%;\n  }\n",
            ]))
        ),
        Dt = Ge.a.div(
          $ ||
            ($ = Object(Be.a)([
              "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 28vw;\n  min-width: fit-content;\n  height: fit-content;\n  border: 1px solid black;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n  background-color: #e5ce9c;\n  padding: 5px;\n  padding-right: 20px;\n  margin-right: 10px;\n  border-radius: 3px;\n  @media only screen and (max-width: 768px) {\n    width: 100%;\n    //background-color: white;\n    //flex-basis: 70%;\n    justify-content: center;\n  }\n  @media only screen and (max-width: 1024px) {\n    width: 100%;\n    justify-content: center;\n  }\n",
            ]))
        ),
        zt = Ge.a.div(
          ee ||
            (ee = Object(Be.a)([
              "\n  width: 90%;\n  font-size: 2rem;\n  height: fit-content;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  margin-top: 2vh;\n",
            ]))
        ),
        Tt =
          (Ge.a.div(
            ne ||
              (ne = Object(Be.a)([
                "\n  width: 100%;\n  border: 1px solid black;\n",
              ]))
          ),
          function (e) {
            var n = e.resultsGeneral,
              t = {
                genes: "Gene",
                name2: "AGI",
                bce1: "BCA",
                bet_c3: "ATT",
                c_c2: "CC",
                ei_c5: "FF",
              },
              r = [
                { name: "Gene", mapper: "genes", id: 1 },
                { name: "AGI", mapper: "name2", id: 2 },
                { name: "BCA", mapper: "bce1", id: 3 },
                { name: "ATT", mapper: "bet_c3", id: 4 },
                { name: "CC", mapper: "c_c2", id: 5 },
                { name: "FF", mapper: "ei_c5", id: 6 },
                { name: "groupQuery", mapper: "groupQuery", id: 7 },
              ].map(function (e) {
                return e.mapper;
              }),
              i = n.map(function (e, n) {
                return e.map(function (e) {
                  return (
                    (n = e),
                    (t = r),
                    Object.keys(n)
                      .filter(function (e) {
                        return t.includes(e);
                      })
                      .reduce(function (e, t) {
                        return (e[t] = n[t]), e;
                      }, {})
                  );
                  var n, t;
                });
              });
            return Object(Ye.jsxs)(St, {
              children: [
                Object(Ye.jsx)("div", { style: { height: "10vh" } }),
                Object(Ye.jsx)(zt, {
                  children: "Network Centrality Measures by Group",
                }),
                Object(Ye.jsx)(Ft, {
                  children: i.slice(0, 5).map(function (e, n) {
                    return Object(Ye.jsxs)(
                      Dt,
                      {
                        children: [
                          Object(Ye.jsxs)("h3", {
                            children: ["Group: ", e[0].groupQuery],
                          }),
                          Object(Ye.jsxs)("p", {
                            children: ["Nodes: ", e.length],
                          }),
                          Object(Ye.jsx)("button", {
                            onClick: function () {
                              return alert("ddtt");
                            },
                            children: "expand",
                          }),
                          Object(Ye.jsx)("br", {}),
                          Object(Ye.jsx)(Ct, { nData: e, names: t }),
                        ],
                      },
                      n
                    );
                  }),
                }),
              ],
            });
          }),
        Pt = function () {
          var e = Object(Ne.useContext)(gr),
            n = e.forNewNet,
            t = e.corrNodes,
            r = Object(ht.a)(),
            i = Object(Me.a)(r, 2),
            c = i[0],
            o = i[1],
            a = Object(Ne.useState)({}),
            s = Object(Me.a)(a, 2),
            l = s[0],
            d = s[1],
            u = Object(Ne.useRef)(),
            b = Object(Ne.useState)([]),
            j = Object(Me.a)(b, 2),
            f = j[0],
            p = j[1],
            h = Object(Ne.useState)(0.3),
            x = Object(Me.a)(h, 2),
            g = x[0],
            m = x[1],
            O = Object(Ne.useState)("rgb(1, 1, 20)"),
            v = Object(Me.a)(O, 2),
            y = v[0],
            w = v[1],
            k = Object(Ne.useState)(""),
            C = Object(Me.a)(k, 2),
            S = C[0],
            F = C[1],
            D = Object(Ne.useState)([""]),
            z = Object(Me.a)(D, 2),
            T = z[0],
            P = z[1],
            N = Object(Ne.useState)(4),
            I = Object(Me.a)(N, 2),
            L = I[0],
            E = I[1],
            A = Object(Ne.useState)(["TF_ID"]),
            R = Object(Me.a)(A, 2),
            M = R[0],
            B = R[1],
            G = Object(Ne.useState)([]),
            U = Object(Me.a)(G, 2),
            q = U[0],
            _ = U[1],
            Q = Object(Ne.useState)([]),
            J = Object(Me.a)(Q, 2),
            Y = J[0],
            W = J[1],
            K = Object(Ne.useState)(!1),
            H = Object(Me.a)(K, 2),
            V = H[0],
            X = H[1],
            Z = Object(Ne.useState)(!1),
            $ = Object(Me.a)(Z, 2),
            ee = $[0],
            ne = $[1],
            te = Object(Ne.useState)([]),
            re = Object(Me.a)(te, 2),
            ie = (re[0], re[1]),
            ce = Object(Ne.useState)([]),
            oe = Object(Me.a)(ce, 2),
            ae = oe[0],
            se = oe[1],
            le = Object(Ne.useState)([]),
            de = Object(Me.a)(le, 2),
            ue = (de[0], de[1]),
            be = Object(Ne.useState)([]),
            je = Object(Me.a)(be, 2),
            fe = je[0],
            pe = je[1],
            he = Object(Ne.useState)(!1),
            xe = Object(Me.a)(he, 2),
            ge = xe[0],
            me = xe[1];
          Object(Ne.useEffect)(
            function () {
              var e = new mt.a([l], {
                includeScore: !0,
                keys: ["nodes.label"],
              }).search(S);
              ue(e);
            },
            [l, S]
          ),
            Object(Ne.useEffect)(
              function () {
                d(n);
              },
              [n]
            ),
            Object(Ne.useEffect)(
              function () {
                if (void 0 !== l.nodes) {
                  var e = function (e, n) {
                      var t,
                        r,
                        i,
                        c = n / e,
                        o = ~~(6 * c),
                        a = 6 * c - o,
                        s = 1 - a;
                      switch (o % 6) {
                        case 0:
                          (t = 1), (r = a), (i = 0);
                          break;
                        case 1:
                          (t = s), (r = 1), (i = 0);
                          break;
                        case 2:
                          (t = 0), (r = 1), (i = a);
                          break;
                        case 3:
                          (t = 0), (r = s), (i = 1);
                          break;
                        case 4:
                          (t = a), (r = 0), (i = 1);
                          break;
                        case 5:
                          (t = 1), (r = 0), (i = s);
                      }
                      return (
                        "#" +
                        ("00" + (~~(255 * t)).toString(16)).slice(-2) +
                        ("00" + (~~(255 * r)).toString(16)).slice(-2) +
                        ("00" + (~~(255 * i)).toString(16)).slice(-2)
                      );
                    },
                    n = l.nodes.map(function (e) {
                      return { color: e.color, group: e.groupQuery };
                    }),
                    t = Object(mn.a)(
                      new Map(
                        n.map(function (e) {
                          return [e.group, e];
                        })
                      ).values()
                    )
                      .map(function (e) {
                        return l.nodes.filter(function (n) {
                          return n.groupQuery === e.group;
                        });
                      })
                      .map(function (e) {
                        return e.sort(function (e, n) {
                          return parseFloat(n.bce1) - parseFloat(e.bce1);
                        });
                      });
                  se(t);
                  var r = (function (e) {
                      var n = {};
                      return (
                        e.forEach(function (e) {
                          n[e] ? n[e]++ : (n[e] = 1);
                        }),
                        n
                      );
                    })(
                      n.map(function (e) {
                        return e.group;
                      })
                    ),
                    i = (function () {
                      var e = [];
                      for (var n in r)
                        e.push({ group: n, count: r[n], color: void 0 });
                      return e;
                    })(),
                    c = i.map(function (n, t) {
                      return {
                        color: e(i.length, t),
                        group: n.group,
                        count: n.count,
                      };
                    });
                  p(c);
                  var o = Object.keys(l.nodes[0].orgData.author),
                    a = o.map(function (n, t) {
                      return { color: e(o.length, 11 + t), id: t, label: n };
                    });
                  W(a);
                }
              },
              [l]
            );
          var Oe = Object(Ne.useCallback)(
              function (e) {
                var n = 1 + 40 / Math.hypot(e.x, e.y, e.z);
                u.current.cameraPosition(
                  { x: e.x * n, y: e.y * n, z: e.z * n },
                  e,
                  3e3
                );
              },
              [u]
            ),
            ve = Object(Ne.useCallback)(
              function (e) {
                console.log(e, "object cliqueado"),
                  (e.color = "red"),
                  u.current.refresh();
              },
              [u]
            ),
            ye = Object(Ne.useCallback)(
              function (e) {
                for (var n = 0; n < f.length; n++)
                  if (f[n].group === e.groupQuery) return f[n].color;
              },
              [f]
            );
          var we = Object(Ne.useCallback)(
              function (e) {
                var n = new ft.a(e.id);
                return (
                  (n.color = "rgba(187, 35, 100, 1)"),
                  (n.textHeight = e.node_size1 / 500),
                  u.current.refresh(),
                  n
                );
              },
              [u]
            ),
            ke = Object(Ne.useCallback)(
              function (e) {
                if (void 0 !== fe) {
                  var n = fe.some(function (n) {
                      return n.A === e.source.name2 && n.B === e.target.name2;
                    }),
                    t = fe.some(function (n) {
                      return n.B === e.source.name2 && n.A === e.target.name2;
                    });
                  return n || t ? "red" : "#ffffff30";
                }
              },
              [fe]
            ),
            Ce = Object(Ne.useCallback)(
              function (e) {
                for (var n = 0; n < T.length; n++)
                  if (T[n] === e.id.toLowerCase()) return "orange";
              },
              [T]
            ),
            Se = Object(Ne.useCallback)(
              function (e) {
                for (var n = 0; n < M.length; n++)
                  if (1 === e.orgData.author[M[n].label]) return M[n].color;
              },
              [M]
            ),
            Fe = Object(Ne.useCallback)(
              function (e) {
                for (var n = 0; n < f.length; n++) {
                  if (f[n].group === e.groupQuery) return f[n].color;
                  for (var t = 0; t < q.length; t++)
                    if (1 === e.orgData.author[q[t].label])
                      return console.log("aqui"), "orange";
                }
              },
              [f, q]
            ),
            De = function (e) {
              B([e]),
                (function (e) {
                  console.log(e, "autorAqui");
                  var n = l.nodes.filter(function (n) {
                    return (
                      n.groupBackground.includes(e.label) &&
                      n.groupQuery === f[1].group
                    );
                  });
                  console.log(n, "forTablesStaAqui");
                  var t = n.sort(function (e, n) {
                    return parseFloat(n.bce1) - parseFloat(e.bce1);
                  });
                  ie(t);
                })(e),
                console.log("object", e);
            },
            ze = function (e) {
              _([e]), console.log("object", e);
            };
          return Object(Ye.jsxs)(Ye.Fragment, {
            children: [
              Object(Ye.jsx)("div", {
                style: {
                  width: "100%",
                  display: "flex",
                  height: "95vh",
                  position: "relative",
                },
                children:
                  Object.keys(l).length > 0
                    ? Object(Ye.jsxs)("div", {
                        children: [
                          Object(Ye.jsx)(pt.a, {
                            ref: u,
                            width: c,
                            height: o,
                            graphData: l,
                            nodeLabel: "id",
                            nodeAutoColorBy: "group",
                            onNodeClick: Oe,
                            onNodeRightClick: ve,
                            rendererConfig: {
                              preserveDrawingBuffer: !0,
                              alpha: !0,
                            },
                            nodeRelSize: 8,
                            nodeResolution: 12,
                            linkOpacity: 0.5,
                            linkResolution: 10,
                            linkColor: ke,
                            linkWidth: function () {
                              return 1;
                            },
                            nodeOpacity: g,
                            nodeColor:
                              4 === L
                                ? ye
                                : 3 === L
                                ? Se
                                : 1 === L
                                ? Ce
                                : 5 === L
                                ? Fe
                                : void 0,
                            nodeVal: function (e) {
                              return e.node_size1 / 1e3;
                            },
                            nodeThreeObject: we,
                            nodeThreeObjectExtend: !0,
                            backgroundColor: y,
                            onNodeDragEnd: function (e) {
                              (e.fx = e.x), (e.fy = e.y), (e.fz = e.z);
                            },
                          }),
                          Object(Ye.jsxs)("div", {
                            style: {
                              display: "flex",
                              position: "absolute",
                              bottom: "-40px",
                              left: "0px",
                            },
                            children: [
                              Object(Ye.jsx)("button", {
                                onClick: function () {
                                  return (function (e) {
                                    var n = e.renderer();
                                    n.getClearColor();
                                    var t = n.domElement;
                                    console.log(t, "newA"),
                                      jt.saveAsPNG(t, t.width, t.height);
                                  })(u.current);
                                },
                                children: "Aqui",
                              }),
                              Object(Ye.jsx)("button", {
                                onClick: function () {
                                  u.current.renderer().setClearAlpha(0);
                                },
                                children: "clear",
                              }),
                            ],
                          }),
                          Object(Ye.jsxs)("div", {
                            style: {
                              border: "1px solid white",
                              position: "absolute",
                              top: "0",
                              left: "0",
                              margin: "5px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: [
                              Object(Ye.jsx)("input", {
                                type: "text",
                                value: g,
                                onChange: function (e) {
                                  return m(e.target.value);
                                },
                              }),
                              Object(Ye.jsx)("input", {
                                type: "text",
                                value: y,
                                onChange: function (e) {
                                  return w(e.target.value);
                                },
                              }),
                              Object(Ye.jsx)("input", {
                                type: "text",
                                value: S,
                                onChange: function (e) {
                                  e.preventDefault();
                                  var n = e.target.value.toLowerCase();
                                  F(n);
                                },
                              }),
                              Object(Ye.jsx)(gt, {
                                placeholder: "Search",
                                onChange: function (e) {
                                  var n = e.target.value
                                    .toLowerCase()
                                    .replace(/\s/g, "")
                                    .split(",");
                                  P(n);
                                },
                              }),
                              Object(Ye.jsx)("button", {
                                onClick: function () {
                                  E(1);
                                },
                                children: "Modo search",
                              }),
                              Object(Ye.jsx)("br", {}),
                              Object(Ye.jsx)("button", {
                                onClick: function () {
                                  E(4), X(!1);
                                },
                                children: "DefaultY",
                              }),
                              Object(Ye.jsx)("br", {}),
                              Object(Ye.jsx)("button", {
                                onClick: function () {
                                  E(3), X(!V);
                                },
                                children: "Algoen3",
                              }),
                              V
                                ? Object(Ye.jsx)(Ye.Fragment, {
                                    children: Object(Ye.jsx)("div", {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        width: "fit-content",
                                      },
                                      children: Y.map(function (e) {
                                        return Object(Ye.jsxs)("div", {
                                          style: {
                                            display: "flex",
                                            marginTop: "5px",
                                            justifyContent: "space-between",
                                          },
                                          children: [
                                            Object(Ye.jsx)(
                                              "button",
                                              {
                                                style: {
                                                  marginRight: "10px",
                                                  width: "100%",
                                                },
                                                onClick: function () {
                                                  return De(e);
                                                },
                                                children: e.label,
                                              },
                                              e.id
                                            ),
                                            Object(Ye.jsx)("div", {
                                              style: {
                                                backgroundColor: e.color,
                                                width: "50px",
                                                height: "15",
                                                display: "flex",
                                                justifyContent: "flex-end",
                                              },
                                            }),
                                          ],
                                        });
                                      }),
                                    }),
                                  })
                                : null,
                              Object(Ye.jsx)("br", {}),
                              Object(Ye.jsx)("button", {
                                onClick: function () {
                                  E(5), _([]), ne(!ee);
                                },
                                children: "ProgresiveFilt",
                              }),
                              ee
                                ? Object(Ye.jsx)(Ye.Fragment, {
                                    children: Object(Ye.jsx)("div", {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        width: "fit-content",
                                      },
                                      children: Y.map(function (e) {
                                        return Object(Ye.jsx)(Ot, {
                                          autor: e,
                                          handleClickNodeFunction: ze,
                                        });
                                      }),
                                    }),
                                  })
                                : null,
                              Object(Ye.jsx)("br", {}),
                              Object(Ye.jsx)("button", { children: "Nodes" }),
                            ],
                          }),
                          Object(Ye.jsx)("div", {
                            style: {
                              width: "max-content",
                              height: "fit-content",
                              border: "1px solid white",
                              position: "absolute",
                              top: "0",
                              right: "0",
                              display: "flex",
                              flexDirection: "column",
                              paddingBottom: "5px",
                              paddingRight: "10px",
                              margin: "5px",
                            },
                            children:
                              f.length > 0
                                ? f.map(function (e) {
                                    return Object(Ye.jsx)(
                                      xt,
                                      {
                                        count: e.count,
                                        color: e.color,
                                        group: e.group,
                                      },
                                      e.group
                                    );
                                  })
                                : null,
                          }),
                          Object(Ye.jsx)("div", {
                            style: {
                              display: "flex",
                              position: "absolute",
                              bottom: "-1px",
                              left: "0px",
                            },
                            children:
                              Object.keys(t).length > 0
                                ? Object(Ye.jsx)(Ye.Fragment, {
                                    children: Object.keys(t).map(function (
                                      e,
                                      n
                                    ) {
                                      return Object(Ye.jsx)(Ye.Fragment, {
                                        children: Object(Ye.jsx)(
                                          "button",
                                          {
                                            onClick: function () {
                                              return (
                                                pe(t[(n = e)]),
                                                me(!ge),
                                                void console.log(n, "algo")
                                              );
                                              var n;
                                            },
                                            children: e,
                                          },
                                          n
                                        ),
                                      });
                                    }),
                                  })
                                : null,
                          }),
                        ],
                      })
                    : null,
              }),
              Object(Ye.jsx)(Tt, { resultsGeneral: ae }),
            ],
          });
        },
        Nt = function () {
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsx)(Pt, {}),
          });
        },
        It = ["label", "updateFilesCb", "funct", "show", "maxFileSizeInBytes"],
        Lt = Ge.a.span(
          te ||
            (te = Object(Be.a)([
              "\n  /*   margin-top: 1vh; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  background-color: #ff0d1d;\n  border: 0.0625rem solid transparent;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  font-weight: 500;\n  min-height: 3rem;\n  text-decoration-line: none;\n  /* width: 10em; */\n  text-align: center;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        Et = function (e) {
          var n = e.label,
            t = e.updateFilesCb,
            r = e.funct,
            i = (e.show, e.maxFileSizeInBytes),
            c = void 0 === i ? 5e21 : i,
            o = Object(Pn.a)(e, It),
            a = Object(Ne.useRef)(null),
            s = Object(Ne.useState)({}),
            l = Object(Me.a)(s, 2),
            d = l[0],
            u = l[1],
            b = Object(Ne.useContext)(gr),
            j = b.clickedCdos,
            f = b.setDataToProviderClickedCdos;
          console.log(n, "label");
          var p = function (e) {
            var n,
              r =
                ((n = e),
                Object.keys(n).map(function (e) {
                  return n[e];
                }));
            t(r);
          };
          return Object(Ye.jsxs)(Ye.Fragment, {
            children: [
              Object(Ye.jsxs)(Nn, {
                children: [
                  Object(Ye.jsx)(Ln, { children: n }),
                  Object(Ye.jsx)(En, {
                    children: "Choose a file or drag it here",
                  }),
                  Object(Ye.jsxs)(An, {
                    type: "button",
                    onClick: function () {
                      a.current.click(), f(!1);
                    },
                    children: [
                      Object(Ye.jsx)("i", {
                        className: "fas",
                        style: {
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        },
                        children: Object(Ye.jsx)(_e.c, {}),
                      }),
                      Object(Ye.jsxs)("span", {
                        children: [" Upload ", o.multiple ? "files" : "a file"],
                      }),
                    ],
                  }),
                  Object(Ye.jsx)(
                    In,
                    Object(On.a)(
                      {
                        type: "file",
                        ref: a,
                        onChange: function (e) {
                          var n = e.target.files;
                          if (n.length) {
                            var t = (function (e) {
                              var n,
                                t = Object(Tn.a)(e);
                              try {
                                for (t.s(); !(n = t.n()).done; ) {
                                  var r = n.value;
                                  if (r.size <= c) {
                                    if (!o.multiple) return { file: r };
                                    d[r.name] = r;
                                  }
                                }
                              } catch (i) {
                                t.e(i);
                              } finally {
                                t.f();
                              }
                              return Object(On.a)({}, d);
                            })(n);
                            u(t), p(t);
                          }
                        },
                        title: "",
                        value: "",
                      },
                      o
                    )
                  ),
                ],
              }),
              0 === Object.keys(d).length || !0 === j
                ? null
                : Object(Ye.jsxs)(Ye.Fragment, {
                    children: [
                      Object(Ye.jsxs)(Rn, {
                        children: [
                          Object(Ye.jsx)("span", {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: "To Upload",
                          }),
                          Object(Ye.jsx)(Mn, {
                            children: Object.keys(d).map(function (e, n) {
                              var t,
                                r = d[e],
                                i = "image" === r.type.split("/")[0];
                              return Object(Ye.jsx)(
                                Un,
                                {
                                  children: Object(Ye.jsxs)("div", {
                                    children: [
                                      i &&
                                        Object(Ye.jsx)(qn, {
                                          src: URL.createObjectURL(r),
                                          alt: "file preview ".concat(n),
                                        }),
                                      Object(Ye.jsx)(Bn, {
                                        isImageFile: i,
                                        children: Object(Ye.jsxs)("div", {
                                          style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            fontSize: "2rem",
                                          },
                                          children: [
                                            Object(Ye.jsx)("span", {
                                              style: {
                                                display: "flex",
                                                width: "fit-content",
                                                height: "fit-content",
                                                alignItems: "center",
                                                justifyContent: "center",
                                              },
                                              children: r.name,
                                            }),
                                            Object(Ye.jsxs)("aside", {
                                              children: [
                                                Object(Ye.jsxs)("span", {
                                                  style: {
                                                    display: "flex",
                                                    height: "30px",
                                                    width: "fit-content",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    paddingLeft: "10px",
                                                  },
                                                  children: [
                                                    ((t = r.size),
                                                    Math.round(t / 1e3)),
                                                    " kb",
                                                  ],
                                                }),
                                                Object(Ye.jsx)(Gn, {
                                                  onClick: function () {
                                                    return (function (e) {
                                                      delete d[e],
                                                        u(Object(On.a)({}, d)),
                                                        p(Object(On.a)({}, d));
                                                    })(e);
                                                  },
                                                  children: Object(Ye.jsx)(
                                                    Qe.d,
                                                    {
                                                      style: {
                                                        height: "30px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "center",
                                                      },
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                e
                              );
                            }),
                          }),
                        ],
                      }),
                      Object(Ye.jsx)(Lt, { onClick: r, children: "Submit" }),
                    ],
                  }),
            ],
          });
        },
        At = Ge.a.div(
          re ||
            (re = Object(Be.a)([
              "\n  width: 90%;\n  height: fit-content;\n  border: 1px solid green;\n  background-color: rgb(215, 235, 200);\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 20px;\n  border-radius: 3px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n\n    //width: 100%;\n  }\n",
            ]))
        ),
        Rt = Ge.a.div(
          ie ||
            (ie = Object(Be.a)([
              "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 20vw;\n  min-width: fit-content;\n  height: fit-content;\n  border: 1px solid black;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n  background-color: #e5ce9c;\n  padding: 5px;\n  padding-right: 20px;\n  margin-right: 10px;\n  border-radius: 3px;\n  @media (max-width: 768px) {\n    width: 100%;\n    //flex-basis: 70%;\n  }\n",
            ]))
        ),
        Mt = Ge.a.div(
          ce ||
            (ce = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: red;\n  color: white;\n  border-radius: 3px;\n  cursor: pointer;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        Bt = Ge.a.div(
          oe ||
            (oe = Object(Be.a)([
              "\n  display: flex;\n  width: 100%;\n  height: fit-content;\n  background-color: rgb(165, 170, 160);\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px;\n",
            ]))
        ),
        Gt = Ge.a.div(
          ae ||
            (ae = Object(Be.a)([
              "\n  width: 90%;\n  font-size: 2rem;\n  height: fit-content;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  margin-top: 8vh;\n",
            ]))
        ),
        Ut = Ge.a.div(
          se ||
            (se = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 40px;\n  background-color: #3a7359;\n  border-radius: 20px;\n  font-size: 1rem;\n  cursor: pointer;\n  border: 0.0625rem solid transparent;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  color: white;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        qt = Ge.a.div(
          le ||
            (le = Object(Be.a)([
              "\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        _t = function () {
          var e = Object(Ne.useContext)(gr),
            n = e.setDataToProviderClicked,
            t = e.forNewNet,
            r = e.setDataToProviderCorrNodes,
            i = Object(Ne.useState)([]),
            c = Object(Me.a)(i, 2),
            o = c[0],
            a = c[1],
            s = Object(Ne.useState)([]),
            l = Object(Me.a)(s, 2),
            d = l[0],
            u = l[1],
            b = Object(Ne.useState)([]),
            j = Object(Me.a)(b, 2),
            f = j[0],
            p = j[1],
            h = Object(Ne.useState)([]),
            x = Object(Me.a)(h, 2),
            g = x[0],
            m = x[1];
          console.log(o, "newUserINNNNFOOO"),
            Object(Ne.useEffect)(
              function () {
                if (void 0 !== t.nodes) {
                  var e = t.nodes
                    .map(function (e) {
                      return e.name2;
                    })
                    .join();
                  m(e);
                }
              },
              [t]
            );
          var O = (function () {
            var e = Object(Re.a)(
              Ae.a.mark(function e(n) {
                var t, i;
                return Ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log(n, "objectAQWWWWW"),
                          (t = new FormData()).append(
                            "file",
                            n.profileImages[0]
                          ),
                          t.append("username", g),
                          (e.next = 6),
                          fetch("http://127.0.0.1:5000/listsexp", {
                            method: "POST",
                            body: t,
                          }).then(function (e) {
                            return e.json();
                          })
                        );
                      case 6:
                        (i = e.sent), r(i), p([]);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsxs)(At, {
              children: [
                d.length > 0
                  ? Object(Ye.jsxs)(Ye.Fragment, {
                      children: [
                        Object(Ye.jsx)(Bt, {
                          children: f.map(function (e) {
                            return Object(Ye.jsx)(
                              Ut,
                              {
                                onClick: function () {
                                  return (function (e) {
                                    var n = f.filter(function (n) {
                                        return n.author !== e;
                                      }),
                                      t = f.filter(function (n) {
                                        return n.author === e;
                                      });
                                    u(d.concat(t)), p(n);
                                  })(e.author);
                                },
                                children: e.author,
                              },
                              e.id
                            );
                          }),
                        }),
                        d.map(function (e) {
                          return Object(Ye.jsxs)(
                            Rt,
                            {
                              children: [
                                Object(Ye.jsxs)("div", {
                                  children: [
                                    Object(Ye.jsx)("span", {
                                      children: "List source: ",
                                    }),
                                    e.author,
                                  ],
                                }),
                                Object(Ye.jsxs)("div", {
                                  children: [
                                    Object(Ye.jsx)("span", {
                                      children: "AGI Number: ",
                                    }),
                                    e.genes.length,
                                  ],
                                }),
                                Object(Ye.jsxs)("div", {
                                  children: [
                                    Object(Ye.jsx)("span", {
                                      children: "Pubmed: ",
                                    }),
                                    "Link",
                                  ],
                                }),
                                Object(Ye.jsx)(Mt, {
                                  onClick: function () {
                                    return (function (e) {
                                      var n = d.filter(function (n) {
                                          return n.author !== e;
                                        }),
                                        t = d.filter(function (n) {
                                          return n.author === e;
                                        });
                                      u(n), p(f.concat(t));
                                    })(e.author);
                                  },
                                  children: Object(Ye.jsx)(_e.b, {}),
                                }),
                              ],
                            },
                            e.id
                          );
                        }),
                      ],
                    })
                  : null,
                Object(Ye.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  },
                  children: Object(Ye.jsx)(qt, {
                    children: Object(Ye.jsxs)("div", {
                      children: [
                        Object(Ye.jsx)(Gt, {
                          style: { fontSize: "1rem" },
                          children: "Upload a expression matrix",
                        }),
                        Object(Ye.jsx)("form", {
                          children: Object(Ye.jsx)(Et, {
                            accept: ".csv",
                            label: "",
                            show: d.length,
                            funct: function (e) {
                              e.preventDefault(), O(o), n(!0);
                            },
                            updateFilesCb: function (e) {
                              return a(
                                Object(On.a)(
                                  Object(On.a)({}, o),
                                  {},
                                  { profileImages: e }
                                )
                              );
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Qt = Ge.a.div(
          de ||
            (de = Object(Be.a)([
              "\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(232, 234, 238);\n  font-size: 3rem;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Jt = Ge.a.div(
          ue ||
            (ue = Object(Be.a)([
              "\n  width: 90%;\n  height: fit-content;\n  border: 1px solid green;\n  background-color: rgb(215, 235, 200);\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 20px;\n  border-radius: 3px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n\n    //width: 100%;\n  }\n",
            ]))
        ),
        Yt = Ge.a.div(
          be ||
            (be = Object(Be.a)([
              "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 20vw;\n  min-width: fit-content;\n  height: fit-content;\n  border: 1px solid black;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n  background-color: #e5ce9c;\n  padding: 5px;\n  padding-right: 20px;\n  margin-right: 10px;\n  border-radius: 3px;\n  @media (max-width: 768px) {\n    width: 100%;\n    //flex-basis: 70%;\n  }\n",
            ]))
        ),
        Wt = Ge.a.div(
          je ||
            (je = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: red;\n  color: white;\n  border-radius: 3px;\n  cursor: pointer;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        Kt = Ge.a.div(
          fe ||
            (fe = Object(Be.a)([
              "\n  display: flex;\n  width: 100%;\n  height: fit-content;\n  background-color: rgb(165, 170, 160);\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px;\n",
            ]))
        ),
        Ht = Ge.a.div(
          pe ||
            (pe = Object(Be.a)([
              "\n  width: 90%;\n  font-size: 2rem;\n  height: fit-content;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  margin-top: 8vh;\n",
            ]))
        ),
        Vt = Ge.a.div(
          he ||
            (he = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 40px;\n  background-color: #3a7359;\n  border-radius: 20px;\n  font-size: 1rem;\n  cursor: pointer;\n  border: 0.0625rem solid transparent;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  color: white;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        Xt = Ge.a.div(
          xe ||
            (xe = Object(Be.a)([
              "\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Zt = Ge.a.span(
          ge ||
            (ge = Object(Be.a)([
              "\n  /*   margin-top: 1vh; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  background-color: #ff0d1d;\n  border: 0.0625rem solid transparent;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  font-weight: 500;\n  min-height: 3rem;\n  text-decoration-line: none;\n  /* width: 10em; */\n  text-align: center;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        $t = function () {
          var e = Object(Ne.useContext)(gr),
            n = e.finlist,
            t = e.setDataToProviderClicked,
            r = e.consolidated,
            i = e.setDataToProviderInterselect,
            c = e.setDataToProviderForNewNet,
            o = e.setDataToProviderScrollDir,
            a = e.setDataToProviderCorrNodes,
            s = e.scrollDir,
            l = e.forNewNet,
            d = Object(Ne.useState)([]),
            u = Object(Me.a)(d, 2),
            b = u[0],
            j = u[1],
            f = Object(Ne.useState)([]),
            p = Object(Me.a)(f, 2),
            h = p[0],
            x = p[1],
            g = Object(Ne.useState)(!1),
            m = Object(Me.a)(g, 2),
            O = m[0],
            v = m[1];
          Object(Ne.useEffect)(
            function () {
              var e = window.pageYOffset,
                n = !1,
                t = function () {
                  var t = window.pageYOffset;
                  Math.abs(t - e) < 20 ||
                    (o(t > e ? "scrolling down" : "scrolling up"),
                    (e = t > 0 ? t : 0)),
                    (n = !1);
                },
                r = function () {
                  n || (window.requestAnimationFrame(t), (n = !0));
                };
              return (
                window.addEventListener("scroll", r),
                function () {
                  return window.removeEventListener("scroll", r);
                }
              );
            },
            [s, o]
          );
          var y = Object(Ne.useState)({ profileImages: [] }),
            w = Object(Me.a)(y, 2),
            k = w[0],
            C = w[1],
            S = (function () {
              var e = Object(Re.a)(
                Ae.a.mark(function e(n) {
                  var t, r;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new FormData()).append(
                              "file",
                              n.profileImages[0]
                            ),
                            (e.next = 4),
                            fetch("http://127.0.0.1:5000/lists", {
                              method: "POST",
                              body: t,
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 4:
                          (r = e.sent), j(r), x([]);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = Object(Re.a)(
                Ae.a.mark(function e(n) {
                  var t;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("http://127.0.0.1:5000/stringdball", {
                              method: "POST",
                              headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(n),
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 2:
                          (t = e.sent), c(t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = Object(Re.a)(
                Ae.a.mark(function e(t) {
                  var i, c, o;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("http://127.0.0.1:5000/consolidate", {
                              method: "POST",
                              headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(t),
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 2:
                          (i = e.sent),
                            (c = i.filter(function (e) {
                              return n.includes(e.genes);
                            })),
                            (o = (function (e, n) {
                              for (
                                var t = [],
                                  r = function (r) {
                                    var i = e.find(function (e) {
                                      return e.genes === n[r].genes;
                                    });
                                    t.push(
                                      Object(On.a)(
                                        Object(On.a)({}, i),
                                        {},
                                        { authQuery: n[r].author }
                                      )
                                    );
                                  },
                                  i = 0;
                                i < n.length;
                                i++
                              )
                                r(i);
                              return t;
                            })(r, c)),
                            F(o);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(Ye.jsxs)(Ye.Fragment, {
            children: [
              Object(Ye.jsxs)(Qt, {
                style: { minHeight: "70vh" },
                children: [
                  Object(Ye.jsx)(Ht, {}),
                  Object(Ye.jsx)(Ht, { children: "Lists for networkA" }),
                  Object(Ye.jsxs)(Ye.Fragment, {
                    children: [
                      " ",
                      Object(Ye.jsxs)(Jt, {
                        children: [
                          " ",
                          b.length > 0
                            ? Object(Ye.jsxs)(Ye.Fragment, {
                                children: [
                                  Object(Ye.jsx)(Kt, {
                                    children: h.map(function (e) {
                                      return Object(Ye.jsx)(
                                        Vt,
                                        {
                                          onClick: function () {
                                            return (function (e) {
                                              var n = h.filter(function (n) {
                                                  return n.author !== e;
                                                }),
                                                t = h.filter(function (n) {
                                                  return n.author === e;
                                                });
                                              j(b.concat(t)), x(n);
                                            })(e.author);
                                          },
                                          children: e.author,
                                        },
                                        e.id
                                      );
                                    }),
                                  }),
                                  b.map(function (e) {
                                    return Object(Ye.jsxs)(
                                      Yt,
                                      {
                                        children: [
                                          Object(Ye.jsxs)("div", {
                                            children: [
                                              Object(Ye.jsx)("span", {
                                                children: "List source: ",
                                              }),
                                              e.author,
                                            ],
                                          }),
                                          Object(Ye.jsxs)("div", {
                                            children: [
                                              Object(Ye.jsx)("span", {
                                                children: "AGI Number: ",
                                              }),
                                              e.genes.length,
                                            ],
                                          }),
                                          Object(Ye.jsxs)("div", {
                                            children: [
                                              Object(Ye.jsx)("span", {
                                                children: "Pubmed: ",
                                              }),
                                              "Link",
                                            ],
                                          }),
                                          Object(Ye.jsx)(Wt, {
                                            onClick: function () {
                                              return (function (e) {
                                                var n = b.filter(function (n) {
                                                    return n.author !== e;
                                                  }),
                                                  t = b.filter(function (n) {
                                                    return n.author === e;
                                                  });
                                                j(n), x(h.concat(t));
                                              })(e.author);
                                            },
                                            children: Object(Ye.jsx)(_e.b, {}),
                                          }),
                                        ],
                                      },
                                      e.id
                                    );
                                  }),
                                ],
                              })
                            : null,
                          Object(Ye.jsx)("div", {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              width: "100%",
                            },
                            children: Object(Ye.jsx)(Xt, {
                              children: Object(Ye.jsxs)("div", {
                                children: [
                                  Object(Ye.jsx)(Ht, {
                                    style: { fontSize: "1rem" },
                                    children: "Upload lists for network",
                                  }),
                                  Object(Ye.jsx)("form", {
                                    children: Object(Ye.jsx)(Jn, {
                                      accept: ".csv",
                                      label: "",
                                      show: b.length,
                                      funct: function (e) {
                                        e.preventDefault(), S(k), t(!0);
                                      },
                                      updateFilesCb: function (e) {
                                        return C(
                                          Object(On.a)(
                                            Object(On.a)({}, k),
                                            {},
                                            { profileImages: e }
                                          )
                                        );
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(Ye.jsxs)(Qt, {
                children: [
                  Object(Ye.jsx)(Ht, { children: "Consolidate lists" }),
                  Object(Ye.jsx)(Jt, {
                    style: { justifyContent: "center" },
                    children: Object(Ye.jsx)(Zt, {
                      onClick: function () {
                        var e = b,
                          n = e.map(function (e) {
                            return e.author;
                          }),
                          t = n.filter(function (e, n, t) {
                            return t.indexOf(e) === n;
                          });
                        n.length === t.length && (D(e), a({}), i([]));
                      },
                      children: Object(Ye.jsx)("span", {
                        style: { marginLeft: "10px", marginRight: "10px" },
                        children: "ConsolidateR",
                      }),
                    }),
                  }),
                ],
              }),
              Object.keys(l).length > 0
                ? Object(Ye.jsxs)(Ye.Fragment, {
                    children: [
                      Object(Ye.jsxs)(Qt, {
                        children: [
                          Object(Ye.jsx)(Ht, {
                            children: Object(Ye.jsx)("button", {
                              onClick: function () {
                                return v(!O);
                              },
                              children: "Upload normalized count matrix",
                            }),
                          }),
                          O ? Object(Ye.jsx)(_t, {}) : null,
                        ],
                      }),
                      Object(Ye.jsxs)(Qt, {
                        children: [
                          Object(Ye.jsx)(Ht, {
                            children: "PPI consensus network",
                          }),
                          Object(Ye.jsx)(Nt, {}),
                        ],
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        er = Ge.a.div(
          me ||
            (me = Object(Be.a)([
              "\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(232, 234, 238);\n  font-size: 3rem;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        nr = Ge.a.div(
          Oe ||
            (Oe = Object(Be.a)([
              "\n  width: 90%;\n  height: fit-content;\n  border: 1px solid green;\n  background-color: rgb(215, 235, 200);\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 20px;\n  border-radius: 3px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n\n    //width: 100%;\n  }\n",
            ]))
        ),
        tr = Ge.a.div(
          ve ||
            (ve = Object(Be.a)([
              "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 20vw;\n  min-width: fit-content;\n  height: fit-content;\n  border: 1px solid black;\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n  background-color: #e5ce9c;\n  padding: 5px;\n  padding-right: 20px;\n  margin-right: 10px;\n  border-radius: 3px;\n  @media (max-width: 768px) {\n    width: 100%;\n    //flex-basis: 70%;\n  }\n",
            ]))
        ),
        rr = Ge.a.div(
          ye ||
            (ye = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: red;\n  color: white;\n  border-radius: 3px;\n  cursor: pointer;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        ir = Ge.a.div(
          we ||
            (we = Object(Be.a)([
              "\n  display: flex;\n  width: 100%;\n  height: fit-content;\n  background-color: rgb(165, 170, 160);\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px;\n",
            ]))
        ),
        cr = Ge.a.div(
          ke ||
            (ke = Object(Be.a)([
              "\n  width: 90%;\n  font-size: 2rem;\n  height: fit-content;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  margin-top: 8vh;\n",
            ]))
        ),
        or = Ge.a.div(
          Ce ||
            (Ce = Object(Be.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 40px;\n  background-color: #3a7359;\n  border-radius: 20px;\n  font-size: 1rem;\n  cursor: pointer;\n  border: 0.0625rem solid transparent;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  color: white;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        ar = Ge.a.div(
          Se ||
            (Se = Object(Be.a)([
              "\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        sr = Ge.a.span(
          Fe ||
            (Fe = Object(Be.a)([
              "\n  /*   margin-top: 1vh; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  background-color: #ff0d1d;\n  border: 0.0625rem solid transparent;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  font-weight: 500;\n  min-height: 3rem;\n  text-decoration-line: none;\n  /* width: 10em; */\n  text-align: center;\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        lr = Ge.a.div(
          De ||
            (De = Object(Be.a)([
              "\n  display: flex;\n  width: 600px;\n  height: 400px;\n  font-size: 1rem;\n  justify-content: space-between;\n  /* border: 1px solid red; */\n  /*   margin-left: 5vw;\n  margin-right: 5vw; */\n  @media (max-width: 768px) {\n    width: 400px;\n    height: 300px;\n    justify-content: center;\n\n    //width: 100%;\n  }\n",
            ]))
        ),
        dr = Ge.a.div(
          ze ||
            (ze = Object(Be.a)([
              "\n  display: flex;\n  background-color: rgb(165, 170, 160, 0.2);\n  border-radius: 0px 0px 5px 5px;\n  width: 100%;\n  align-items: center;\n  height: fit-content;\n  flex-wrap: wrap;\n  padding-right: 10px;\n",
            ]))
        ),
        ur = Ge.a.div(
          Te ||
            (Te = Object(Be.a)([
              "\n  display: flex;\n  background-color: rgb(165, 170, 160, 0.2);\n  border-radius: 5px;\n  width: 100%;\n  align-items: center;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  //border: 1px solid red;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        br = Object(Ge.a)(Ue.b)(
          Pe ||
            (Pe = Object(Be.a)([
              "\n  margin-top: 5vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  background-color: #ff0d1d;\n  border: 0.0625rem solid transparent;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  font-family: sans-serif;\n  font-size: 1.2rem;\n  font-weight: 500;\n  min-height: 3rem;\n  text-decoration-line: none;\n  width: 10em;\n  text-align: center;\n\n  &:hover {\n    background-color: #bd0d19;\n  }\n",
            ]))
        ),
        jr = function () {
          return Object(Ye.jsxs)("div", {
            className: "reports",
            children: [
              Object(Ye.jsx)("h1", { children: "Reports" }),
              Object(Ye.jsx)("div", {
                children:
                  "During section Lists it is required to select the lorem ips .lorem Ipsum During section Lists it is required to select the lorem ips .lorem Ipsum, During section Lists it is required to select the lorem ips .lorem Ipsum",
              }),
              Object(Ye.jsx)(br, {
                to: "/lists/lists1",
                children: "Upload lists",
              }),
            ],
          });
        },
        fr = function () {
          var e = Object(Ne.useContext)(gr),
            n = e.initial,
            t = e.setDataToProviderClicked,
            r = e.setDataToProviderConsolidated,
            i = e.setDataToProviderMds,
            c = e.setDataToProviderFisher,
            o = e.setDataToProviderInterselect,
            a = e.setDataToProviderScrollDir,
            s = e.scrollDir,
            l = Object(Ne.useState)([]),
            d = Object(Me.a)(l, 2),
            u = d[0],
            b = d[1],
            j = Object(Ne.useState)([]),
            f = Object(Me.a)(j, 2),
            p = f[0],
            h = f[1],
            x = Object(Ne.useState)([]),
            g = Object(Me.a)(x, 2),
            m = g[0],
            O = g[1],
            v = Object(Ne.useState)([]),
            y = Object(Me.a)(v, 2),
            w = y[0],
            k = y[1],
            C = Object(dn.f)();
          Object(Ne.useEffect)(
            function () {
              O(n);
            },
            [n]
          ),
            Object(Ne.useEffect)(
              function () {
                var e = window.pageYOffset,
                  n = !1,
                  t = function () {
                    var t = window.pageYOffset;
                    Math.abs(t - e) < 20 ||
                      (a(t > e ? "scrolling down" : "scrolling up"),
                      (e = t > 0 ? t : 0)),
                      (n = !1);
                  },
                  r = function () {
                    n || (window.requestAnimationFrame(t), (n = !0));
                  };
                return (
                  window.addEventListener("scroll", r),
                  function () {
                    return window.removeEventListener("scroll", r);
                  }
                );
              },
              [s, a]
            );
          var S = Object(Ne.useState)({ profileImages: [] }),
            F = Object(Me.a)(S, 2),
            D = F[0],
            z = F[1],
            T = (function () {
              var e = Object(Re.a)(
                Ae.a.mark(function e(n) {
                  var t, r;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new FormData()).append(
                              "file",
                              n.profileImages[0]
                            ),
                            (e.next = 4),
                            fetch("http://127.0.0.1:5000/lists", {
                              method: "POST",
                              body: t,
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 4:
                          (r = e.sent), b(r), h([]);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            P = (function () {
              var e = Object(Re.a)(
                Ae.a.mark(function e(n) {
                  var t;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("http://127.0.0.1:5000/consolidate", {
                              method: "POST",
                              headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(n),
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 2:
                          (t = e.sent), r(t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            N = (function () {
              var e = Object(Re.a)(
                Ae.a.mark(function e(n) {
                  var t;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("http://127.0.0.1:5000/listsmds", {
                              method: "POST",
                              headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(n),
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 2:
                          (t = e.sent), i(t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = Object(Re.a)(
                Ae.a.mark(function e(n) {
                  var t, r;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("http://127.0.0.1:5000/listsfisher", {
                              method: "POST",
                              headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(n),
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 2:
                          (t = e.sent),
                            (r = (function (e, n) {
                              return e.map(function (e) {
                                var n = Object.values(e),
                                  t = Object.keys(e);
                                return n.map(function (e, n) {
                                  return { forD: e, forF: t[n] };
                                });
                              });
                            })(t)),
                            c(r);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(Ye.jsxs)(Ye.Fragment, {
            children: [
              Object(Ye.jsxs)(er, {
                children: [
                  Object(Ye.jsx)(cr, {}),
                  Object(Ye.jsx)(cr, { children: "Redox-related lists" }),
                  Object(Ye.jsxs)(nr, {
                    children: [
                      Object(Ye.jsx)(ir, {
                        children: w.map(function (e) {
                          return Object(Ye.jsx)(
                            or,
                            {
                              onClick: function () {
                                return (function (e) {
                                  var n = w.filter(function (n) {
                                      return n.author !== e;
                                    }),
                                    t = w.filter(function (n) {
                                      return n.author === e;
                                    });
                                  O(m.concat(t)), k(n);
                                })(e.author);
                              },
                              children: e.author,
                            },
                            e.id
                          );
                        }),
                      }),
                      m.map(function (e) {
                        return Object(Ye.jsxs)(
                          tr,
                          {
                            children: [
                              Object(Ye.jsxs)("div", {
                                children: [
                                  Object(Ye.jsx)("span", {
                                    children: "List source: ",
                                  }),
                                  e.author,
                                ],
                              }),
                              Object(Ye.jsxs)("div", {
                                children: [
                                  Object(Ye.jsx)("span", {
                                    children: "AGI Number: ",
                                  }),
                                  e.genes.length,
                                ],
                              }),
                              Object(Ye.jsxs)("div", {
                                children: [
                                  Object(Ye.jsx)("span", {
                                    children: "Pubmed: ",
                                  }),
                                  "Link",
                                ],
                              }),
                              Object(Ye.jsx)(rr, {
                                onClick: function () {
                                  return (function (e) {
                                    var n = m.filter(function (n) {
                                        return n.author !== e;
                                      }),
                                      t = m.filter(function (n) {
                                        return n.author === e;
                                      });
                                    O(n), k(w.concat(t));
                                  })(e.author);
                                },
                                children: Object(Ye.jsx)(_e.b, {}),
                              }),
                            ],
                          },
                          e.id
                        );
                      }),
                    ],
                  }),
                ],
              }),
              Object(Ye.jsxs)(er, {
                children: [
                  Object(Ye.jsx)(cr, { children: "Lists upload" }),
                  Object(Ye.jsxs)(nr, {
                    children: [
                      u.length > 0
                        ? Object(Ye.jsxs)(Ye.Fragment, {
                            children: [
                              Object(Ye.jsx)(ir, {
                                children: p.map(function (e) {
                                  return Object(Ye.jsx)(
                                    or,
                                    {
                                      onClick: function () {
                                        return (function (e) {
                                          var n = p.filter(function (n) {
                                              return n.author !== e;
                                            }),
                                            t = p.filter(function (n) {
                                              return n.author === e;
                                            });
                                          b(u.concat(t)), h(n);
                                        })(e.author);
                                      },
                                      children: e.author,
                                    },
                                    e.id
                                  );
                                }),
                              }),
                              u.map(function (e) {
                                return Object(Ye.jsxs)(
                                  tr,
                                  {
                                    children: [
                                      Object(Ye.jsxs)("div", {
                                        children: [
                                          Object(Ye.jsx)("span", {
                                            children: "List source: ",
                                          }),
                                          e.author,
                                        ],
                                      }),
                                      Object(Ye.jsxs)("div", {
                                        children: [
                                          Object(Ye.jsx)("span", {
                                            children: "AGI Number: ",
                                          }),
                                          e.genes.length,
                                        ],
                                      }),
                                      Object(Ye.jsxs)("div", {
                                        children: [
                                          Object(Ye.jsx)("span", {
                                            children: "Pubmed: ",
                                          }),
                                          "Link",
                                        ],
                                      }),
                                      Object(Ye.jsx)(rr, {
                                        onClick: function () {
                                          return (function (e) {
                                            var n = u.filter(function (n) {
                                                return n.author !== e;
                                              }),
                                              t = u.filter(function (n) {
                                                return n.author === e;
                                              });
                                            b(n), h(p.concat(t));
                                          })(e.author);
                                        },
                                        children: Object(Ye.jsx)(_e.b, {}),
                                      }),
                                    ],
                                  },
                                  e.id
                                );
                              }),
                            ],
                          })
                        : null,
                      Object(Ye.jsx)(ar, {
                        children: Object(Ye.jsx)("div", {
                          children: Object(Ye.jsx)("form", {
                            children: Object(Ye.jsx)(Jn, {
                              accept: ".csv",
                              label: "",
                              show: u.length,
                              funct: function (e) {
                                e.preventDefault(), T(D), t(!0);
                              },
                              updateFilesCb: function (e) {
                                return z(
                                  Object(On.a)(
                                    Object(On.a)({}, D),
                                    {},
                                    { profileImages: e }
                                  )
                                );
                              },
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(Ye.jsxs)(er, {
                children: [
                  Object(Ye.jsx)(cr, { children: "Consolidate lists" }),
                  Object(Ye.jsx)(nr, {
                    style: { justifyContent: "center" },
                    children: Object(Ye.jsx)(sr, {
                      onClick: function () {
                        var e = m.concat(u),
                          n = e.map(function (e) {
                            return e.author;
                          }),
                          t = n.filter(function (e, n, t) {
                            return t.indexOf(e) === n;
                          });
                        n.length === t.length &&
                          (P(e),
                          N(e),
                          I(e),
                          C.push("/lists/lists2"),
                          o([]),
                          a("scrolling up"));
                      },
                      children: Object(Ye.jsx)("span", {
                        style: { marginLeft: "10px", marginRight: "10px" },
                        children: "ConsolidateUno",
                      }),
                    }),
                  }),
                  Object(Ye.jsx)(cr, {}),
                ],
              }),
            ],
          });
        },
        pr = function () {
          var e = Object(Ne.useContext)(gr),
            n = e.consolidated,
            t = e.mds,
            r = e.fisher,
            i = e.filteredR,
            c = e.interselect,
            o = e.scrollDir,
            a = e.setDataToProviderFinlist,
            s = e.setDataToProviderScrollDir,
            l = e.setDataToProviderForNewNet,
            d = Object(Ne.useState)([]),
            u = Object(Me.a)(d, 2),
            b = u[0],
            j = u[1],
            f = Object(Ne.useState)({}),
            p = Object(Me.a)(f, 2),
            h = p[0],
            x = p[1],
            g = Object(Ne.useState)([]),
            m = Object(Me.a)(g, 2),
            O = m[0],
            v = m[1],
            y = Object(Ne.useState)([]),
            w = Object(Me.a)(y, 2),
            k = w[0],
            C = w[1],
            S = Object(dn.f)();
          Object(Ne.useEffect)(
            function () {
              var e = window.pageYOffset,
                n = !1,
                t = function () {
                  var t = window.pageYOffset;
                  Math.abs(t - e) < 20 ||
                    (s(t > e ? "scrolling down" : "scrolling up"),
                    (e = t > 0 ? t : 0)),
                    (n = !1);
                },
                r = function () {
                  n || (window.requestAnimationFrame(t), (n = !0));
                };
              return (
                window.addEventListener("scroll", r),
                function () {
                  return window.removeEventListener("scroll", r);
                }
              );
            },
            [o, s]
          ),
            Object(Ne.useEffect)(
              function () {
                if (r.length > 0) {
                  var e = r.map(function (e) {
                    return e.map(function (e) {
                      return e.forF;
                    });
                  });
                  x(e[0]);
                }
              },
              [r]
            );
          Object(Ne.useEffect)(
            function () {
              var e = (function (e, n) {
                var t = e.reduce(function (e, t) {
                  var r = t[n];
                  return e[r] || (e[r] = []), e[r].push(t), e;
                }, {});
                return Object.entries(t).map(function (e) {
                  return Object.fromEntries(
                    new Map(
                      Object.entries({
                        overlist: parseInt(e[0]),
                        size: e[1].length,
                        genes: e[1],
                      })
                    )
                  );
                });
              })(n, "total");
              j(
                e.map(function (e, n) {
                  return Object(On.a)(Object(On.a)({}, e), {}, { id: n + 1 });
                })
              );
            },
            [n]
          );
          Object(Ne.useEffect)(
            function () {
              var e = (function (e) {
                if (e.length > 0) {
                  var n = e.map(function (e) {
                    return e.intersect;
                  });
                  return [].concat.apply([], n).filter(function (e, n, t) {
                    return t.indexOf(e) === n;
                  });
                }
              })(c);
              v(e);
            },
            [c]
          );
          Object(Ne.useEffect)(
            function () {
              var e = (function (e, n) {
                var t = void 0 === e || null === e ? (e = []) : e,
                  r = void 0 === n || null === n ? (n = []) : n;
                return []
                  .concat(Object(mn.a)(t), Object(mn.a)(r.flat()))
                  .filter(function (e, n, t) {
                    return t.indexOf(e) === n;
                  });
              })(O, i);
              C(e);
            },
            [O, i]
          );
          return Object(Ye.jsxs)(Ye.Fragment, {
            children: [
              Object(Ye.jsxs)(er, {
                children: [
                  Object(Ye.jsx)(cr, {}),
                  Object(Ye.jsx)(cr, { children: "Redox-related lists" }),
                  Object(Ye.jsxs)(nr, {
                    style: { justifyContent: "space-around" },
                    children: [
                      Object(Ye.jsx)(lr, {
                        children: Object(Ye.jsx)(zn, {
                          className: "chartbasis",
                          data: b,
                        }),
                      }),
                      Object(Ye.jsx)(lr, {
                        children: Object(Ye.jsx)(Vn, { data: t }),
                      }),
                    ],
                  }),
                  Object(Ye.jsx)(nr, {
                    style: { marginTop: "5px", backgroundColor: "#FFFFFF" },
                    children: Object(Ye.jsxs)(ur, {
                      children: [
                        null !== i && i.length > 0
                          ? Object(Ye.jsxs)(cr, {
                              style: { margin: 0, marginLeft: "10px" },
                              children: [
                                "Selected genes by lists overlap: ",
                                i[0].length,
                              ],
                            })
                          : Object(Ye.jsx)(cr, {
                              style: { margin: 0, marginLeft: "10px" },
                              children: "Select genes by overlap frequency",
                            }),
                        Object(Ye.jsx)(dt, { items: b }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(Ye.jsxs)(er, {
                children: [
                  Object(Ye.jsx)(cr, {
                    children: "Include specific lists or intersections",
                  }),
                  Object(Ye.jsx)(er, {
                    style: { display: "flex" },
                    children: Object(Ye.jsx)(nr, {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        height: "fit-content",
                        overflow: "hidden",
                        paddingBottom: "100px",
                      },
                      children: Object(Ye.jsx)(ot, { datam: r, names: h }),
                    }),
                  }),
                  O
                    ? Object(Ye.jsx)(Ye.Fragment, {
                        children: Object(Ye.jsxs)(nr, {
                          style: {
                            marginTop: "5px",
                            backgroundColor: "#FFFFFF",
                          },
                          children: [
                            Object(Ye.jsx)("div", {
                              style: {
                                display: "flex",
                                backgroundColor: "rgb(165, 170, 160, 0.2)",
                                borderRadius: "5px 5px 0px 0px",
                                width: "100%",
                                alignItems: "center",
                                paddingTop: "2vh",
                                paddingBottom: "2vh",
                              },
                              children: Object(Ye.jsxs)(cr, {
                                style: { margin: 0, marginLeft: "10px" },
                                children: [
                                  "Selected genes by lists overlap ",
                                  O.length,
                                ],
                              }),
                            }),
                            Object(Ye.jsx)(dr, {
                              children: c.map(function (e) {
                                return Object(Ye.jsx)(
                                  bt,
                                  {
                                    list1: e.list1,
                                    list2: e.list2,
                                    intersect: e.overlap,
                                  },
                                  e.id
                                );
                              }),
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
              Object(Ye.jsxs)(er, {
                children: [
                  Object(Ye.jsxs)(cr, {
                    children: ["Total selected genes: ", k.length],
                  }),
                  Object(Ye.jsx)(nr, {
                    style: { justifyContent: "center" },
                    children:
                      k.length > 0
                        ? Object(Ye.jsx)(sr, {
                            onClick: function () {
                              a(k), l({}), S.push("/lists/lists3");
                            },
                            children: Object(Ye.jsx)("span", {
                              style: {
                                marginLeft: "10px",
                                marginRight: "10px",
                              },
                              children: "Consolidate selection",
                            }),
                          })
                        : null,
                  }),
                  Object(Ye.jsx)(cr, {}),
                ],
              }),
            ],
          });
        },
        hr = function () {
          return Object(Ye.jsx)(Ye.Fragment, {
            children: Object(Ye.jsx)($t, {}),
          });
        },
        xr = function () {
          return Object(Ye.jsx)("div", {
            className: "home",
            children: Object(Ye.jsx)("h1", { children: "Team" }),
          });
        },
        gr = Object(Ne.createContext)();
      var mr = function () {
        var e = Object(Ne.useState)([]),
          n = Object(Me.a)(e, 2),
          t = n[0],
          r = n[1],
          i = Object(Ne.useState)(!1),
          c = Object(Me.a)(i, 2),
          o = c[0],
          a = c[1],
          s = Object(Ne.useState)(!1),
          l = Object(Me.a)(s, 2),
          d = l[0],
          u = l[1],
          b = Object(Ne.useState)([]),
          j = Object(Me.a)(b, 2),
          f = j[0],
          p = j[1],
          h = Object(Ne.useState)([]),
          x = Object(Me.a)(h, 2),
          g = x[0],
          m = x[1],
          O = Object(Ne.useState)([]),
          v = Object(Me.a)(O, 2),
          y = v[0],
          w = v[1],
          k = Object(Ne.useState)([]),
          C = Object(Me.a)(k, 2),
          S = C[0],
          F = C[1],
          D = Object(Ne.useState)(null),
          z = Object(Me.a)(D, 2),
          T = z[0],
          P = z[1],
          N = Object(Ne.useState)([]),
          I = Object(Me.a)(N, 2),
          L = I[0],
          E = I[1],
          A = Object(Ne.useState)([]),
          R = Object(Me.a)(A, 2),
          M = R[0],
          B = R[1],
          G = Object(Ne.useState)({}),
          U = Object(Me.a)(G, 2),
          q = U[0],
          _ = U[1],
          Q = Object(Ne.useState)("scrolling up"),
          J = Object(Me.a)(Q, 2),
          Y = J[0],
          W = J[1],
          K = Object(Ne.useState)({}),
          H = Object(Me.a)(K, 2),
          V = H[0],
          X = H[1],
          Z = (function () {
            var e = Object(Re.a)(
              Ae.a.mark(function e() {
                var n, t;
                return Ae.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            fetch("http://127.0.0.1:5000/lists")
                          );
                        case 3:
                          return (n = e.sent), (e.next = 6), n.json();
                        case 6:
                          (t = e.sent), r(t), (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        function $() {
          var e = Object(dn.f)();
          return (
            Object(Ne.useEffect)(
              function () {
                var n = e.listen(function (e, n) {
                  "POP" !== n && window.scrollTo(0, 0);
                });
                return function () {
                  return n();
                };
              },
              [e]
            ),
            null
          );
        }
        return (
          Object(Ne.useEffect)(function () {
            Z(), _({});
          }, []),
          Object(Ye.jsx)(gr.Provider, {
            value: {
              initial: t,
              clicked: o,
              clickedCdos: d,
              consolidated: f,
              mds: g,
              fisher: y,
              interselect: S,
              filteredR: T,
              finlist: L,
              forNetworkFiltered: M,
              forNewNet: q,
              scrollDir: Y,
              corrNodes: V,
              setDataToProviderClicked: function (e) {
                a(e);
              },
              setDataToProviderClickedCdos: function (e) {
                u(e);
              },
              setDataToProviderConsolidated: function (e) {
                p(e);
              },
              setDataToProviderMds: function (e) {
                m(e);
              },
              setDataToProviderFisher: function (e) {
                w(e);
              },
              setDataToProviderInterselect: function (e) {
                F(e);
              },
              setDataToProviderFilteredR: function (e) {
                P(e);
              },
              setDataToProviderFinlist: function (e) {
                E(e);
              },
              setDataToProviderForNetworkFiltered: function (e) {
                B(e);
              },
              setDataToProviderForNewNet: function (e) {
                _(e);
              },
              setDataToProviderScrollDir: function (e) {
                W(e);
              },
              setDataToProviderCorrNodes: function (e) {
                X(e);
              },
            },
            children: Object(Ye.jsxs)(Ue.a, {
              children: [
                "scrolling up" === Y ? Object(Ye.jsx)(ln, {}) : null,
                Object(Ye.jsx)($, {}),
                Object(Ye.jsxs)(dn.c, {
                  children: [
                    Object(Ye.jsx)(dn.a, {
                      path: "/",
                      exact: !0,
                      component: gn,
                    }),
                    Object(Ye.jsx)(dn.a, {
                      path: "/overview",
                      exact: !0,
                      component: gn,
                    }),
                    Object(Ye.jsx)(dn.a, {
                      path: "/lists",
                      exact: !0,
                      component: jr,
                    }),
                    Object(Ye.jsx)(dn.a, {
                      path: "/lists/lists1",
                      exact: !0,
                      component: fr,
                    }),
                    Object(Ye.jsx)(dn.a, {
                      path: "/lists/lists2",
                      exact: !0,
                      component: pr,
                    }),
                    Object(Ye.jsx)(dn.a, {
                      path: "/lists/lists3",
                      exact: !0,
                      component: hr,
                    }),
                    Object(Ye.jsx)(dn.a, {
                      path: "/team",
                      exact: !0,
                      component: xr,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      Le.a.render(Object(Ye.jsx)(mr, {}), document.getElementById("root"));
    },
  },
  [[461, 1, 2]],
]);
//# sourceMappingURL=main.a102c567.chunk.js.map
