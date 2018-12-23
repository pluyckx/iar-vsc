
import * as Assert from "assert";
import { IncludePath } from "../../src/iar/project/includepaths";

suite("Test includepath parsers", () => {
    suite("Test compile output", () => {
        test("output AVR compiler", () => {
            const output = `$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "\n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "   IAR C/C++ Compiler V7.10.1.1197 for Atmel AVR\n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "   Copyright 1996-2017 IAR Systems AB.\n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "   Standalone license - IAR Embedded Workbench for Atmel AVR, 4K Kickstart edition 7.10\n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$INC_BEGIN $$FILEPATH "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.0\\avr\\inc" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$INC_BEGIN $$FILEPATH "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.0\\avr\\inc\\dlib\\c" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$DEP_BEGIN $$FILEPATH "C:\\Users\\phili\\AppData\\Local\\Temp\\main.c" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$OUT_BEGIN $$FILEPATH "C:\\Users\\phili\\AppData\\Local\\Temp\\predef.txt" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$OUT_BEGIN $$FILEPATH "C:\\Data\\Programming\\vsc\\iar-vsc\\main.r90" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN " \n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "\n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "\n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "Errors: none\n" $$TOOL_END
$$TOOL_BEGIN $$VERSION "3" $$MSG_BEGIN $$MSG_POS "0" "0" "0" "0" $$TYPE "2" $$TXT_BEGIN "Warnings: none\n" $$TOOL_END
 $$TOOL_EXIT`;

            let includepaths = IncludePath.fromCompilerOutput(output);

            Assert.equal(includepaths.length, 2);
            Assert.equal(includepaths[0].path, "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.0\\avr\\inc");
            Assert.equal(includepaths[1].path, "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.0\\avr\\inc\\dlib\\c");
        });
    });
});