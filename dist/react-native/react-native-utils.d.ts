export declare var spawn: any;
export interface VersionSearchParams {
    os: string;
    plistFile: string;
    plistFilePrefix: string;
    gradleFile: string;
}
export declare function getReactNativeProjectAppVersion(versionSearchParams: VersionSearchParams, projectRoot?: string): Promise<string>;
export declare function runReactNativeBundleCommand(bundleName: string, development: boolean, entryFile: string, outputFolder: string, platform: string, sourcemapOutput: string): Promise<void>;
export declare function isValidOS(os: string): boolean;
export declare function isValidPlatform(platform: string): boolean;
export declare function isReactNativeProject(): boolean;
