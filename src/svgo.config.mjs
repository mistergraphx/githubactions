export default {
    plugins: [
        {
            name: "preset-default",
            params: {
            overrides: {
                removeViewBox: false,
                cleanupIDs: false,
                removeUselessDefs: false,
                removeUselessStrokeAndFill: false
            },
            },
        },
    ],
};