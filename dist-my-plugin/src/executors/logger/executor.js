import { __awaiter } from "tslib";
export default function runExecutor(options) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Executor ran for Logger', options);
        return {
            success: true,
        };
    });
}
//# sourceMappingURL=executor.js.map