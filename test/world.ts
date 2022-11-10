import { suite, test } from "@testdeck/vitest";
import { expect } from "vitest";


@suite
class WorldSuite {

    @test
    world() {
        expect(true).toBe(true);
    }
}
