/**
 * @author kuitos
 * @since 2019-05-16
 */

interface IImportResult {
	template: string;

	assetPublicPath: string;

	execScripts<T>(sandbox?: object): Promise<T>;

	getExternalScripts(): Promise<string[]>;

	getExternalStyleSheets(): Promise<string[]>;
}

type ImportEntryOpts = {
	fetch?: Function;
}

export type Entry = string | { styles?: string[], scripts?: string[], html?: string };

export function execScripts<T>(entry: string | null, scripts: string[], proxy: Window, opts?: ImportEntryOpts): Promise<T>;

export default function importHTML(url: string, fetch?: Function): Promise<IImportResult>;

export function importEntry(entry: Entry, opts?: ImportEntryOpts): Promise<IImportResult>;
