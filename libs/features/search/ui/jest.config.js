module.exports = {
    name: 'features-search-ui',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/features/search/ui',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
};
