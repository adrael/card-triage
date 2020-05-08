module.exports = {
    name: 'features-card-utils',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/features/card/utils',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
};
