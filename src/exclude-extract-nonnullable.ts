/* eslint-disable */
export {}

type DebugType = () => void
type SomeTypes = string | number | DebugType

// string と number を除外
type FunctionType = Exclude<SomeTypes, string | number>

// DebugType を除外
type NonFunctionType = Exclude<SomeTypes, DebugType>
type TypeExcludingFunction = Exclude<SomeTypes, Function>

// DebugType を抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>

// string と number を抽出
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>

// null を除外
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>
