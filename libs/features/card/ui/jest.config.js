module.exports = {
    name: 'features-card-ui',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/features/card/ui',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
};
