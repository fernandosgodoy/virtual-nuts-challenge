const { printSequentialResults, verifyConditionVisualNuts, verifyConditionIsNuts } = require("./solution-sequential-items");

describe("Testing the conditions", () => {

    it("Ensure that you have the function.", () => {    
        expect(
            printSequentialResults()
        ).toBeUndefined();
    });

    it("Passing Rule - All numbers divisible by both 5.", () => {    
        expect(
            verifyConditionIsNuts(5)
        ).toBe(true);
    });

    it("Failing Rule - All numbers divisible by both 5.", () => {    
        expect(
            verifyConditionIsNuts(6)
        ).toBe(false);
    });

    it("Passing Rule - All numbers divisible by both (3 | 5).", () => {    
        expect(
            verifyConditionVisualNuts(30)
        ).toBe(true);
    });

    it("Failing Rule - All numbers divisible by both (3 | 5).", () => {    
        expect(
            verifyConditionVisualNuts(4)
        ).toBe(false);
    });
 
})
