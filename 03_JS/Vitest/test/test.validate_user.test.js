/* This is real example in the backend */
import { describe, expect, test } from "vitest";
const { validarUsuario } = require("../src/validate_user");

describe("validarUsuario", () => {

    test("usuario válido", () => {
        const usuario = {
            email: "test@test.com",
            password: "123456"
        };

        expect(validarUsuario(usuario)).toBe(true);
    });

    test("rechaza usuario sin email", () => {
        const usuario = {
            password: "123456"
        };

        expect(validarUsuario(usuario)).toBe(false);
    });

    test("rechaza usuario sin password", () => {
        const usuario = {
            email: "test@test.com"
        };

        expect(validarUsuario(usuario)).toBe(false);
    });

});
