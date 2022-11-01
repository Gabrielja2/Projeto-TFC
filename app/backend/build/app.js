"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
require("express-async-errors");
const middlewareError_1 = require("./middlewares/middlewareError");
const index_1 = require("./routers/index");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.app.use('/login', index_1.loginRouter);
        this.app.use('/teams', index_1.teamsRouter);
        this.app.use('/matches', index_1.matchesRouter);
        this.app.use('/leaderboard', index_1.leaderboardRouter);
        this.app.use(middlewareError_1.default);
        // Não remover essa rota
        this.app.get('/', (req, res) => res.json({ ok: true }));
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
// A execução dos testes de cobertura depende dessa exportação
exports.app = new App().app;
//# sourceMappingURL=app.js.map