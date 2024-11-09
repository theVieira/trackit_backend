export interface ICacheRepository {
	get<T>(key: string): Promise<T>
	set<T>(key: string, value: T): Promise<void>
	clear(key: string): Promise<void>
}
