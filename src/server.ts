import * as ts from 'typescript/lib/tsserverlibrary';

function init(): ts.server.PluginModule {
    function create(info: ts.server.PluginCreateInfo): ts.LanguageService {
        const oldLS = info.languageService;
        const newLS = {...oldLS};

        // Optionally, you can log to confirm your plugin's activity.
        info.project.projectService.logger.info("webgpu-types is active!");

        // This is a simplistic representation; the TypeScript Compiler API is deep, so you may need to delve further to fully integrate the global types.
        newLS.getCompletionsAtPosition = function(fileName, position, options) {
            const results = oldLS.getCompletionsAtPosition(fileName, position, options);
            // Modify the results or add more completions related to WebGPU.
            return results;
        };

        return newLS;
    }

    return { create };
}

export = init;
