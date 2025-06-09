
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ElectionReturn
 * 
 */
export type ElectionReturn = $Result.DefaultSelection<Prisma.$ElectionReturnPayload>
/**
 * Model ElectionReturnResult
 * 
 */
export type ElectionReturnResult = $Result.DefaultSelection<Prisma.$ElectionReturnResultPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ElectionReturns
 * const electionReturns = await prisma.electionReturn.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ElectionReturns
   * const electionReturns = await prisma.electionReturn.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.electionReturn`: Exposes CRUD operations for the **ElectionReturn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElectionReturns
    * const electionReturns = await prisma.electionReturn.findMany()
    * ```
    */
  get electionReturn(): Prisma.ElectionReturnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.electionReturnResult`: Exposes CRUD operations for the **ElectionReturnResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElectionReturnResults
    * const electionReturnResults = await prisma.electionReturnResult.findMany()
    * ```
    */
  get electionReturnResult(): Prisma.ElectionReturnResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ElectionReturn: 'ElectionReturn',
    ElectionReturnResult: 'ElectionReturnResult',
    Candidate: 'Candidate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "electionReturn" | "electionReturnResult" | "candidate"
      txIsolationLevel: never
    }
    model: {
      ElectionReturn: {
        payload: Prisma.$ElectionReturnPayload<ExtArgs>
        fields: Prisma.ElectionReturnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionReturnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionReturnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload>
          }
          findFirst: {
            args: Prisma.ElectionReturnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionReturnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload>
          }
          findMany: {
            args: Prisma.ElectionReturnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload>[]
          }
          create: {
            args: Prisma.ElectionReturnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload>
          }
          createMany: {
            args: Prisma.ElectionReturnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ElectionReturnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload>
          }
          update: {
            args: Prisma.ElectionReturnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload>
          }
          deleteMany: {
            args: Prisma.ElectionReturnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionReturnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ElectionReturnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnPayload>
          }
          aggregate: {
            args: Prisma.ElectionReturnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElectionReturn>
          }
          groupBy: {
            args: Prisma.ElectionReturnGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionReturnGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ElectionReturnFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ElectionReturnAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ElectionReturnCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionReturnCountAggregateOutputType> | number
          }
        }
      }
      ElectionReturnResult: {
        payload: Prisma.$ElectionReturnResultPayload<ExtArgs>
        fields: Prisma.ElectionReturnResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionReturnResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionReturnResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload>
          }
          findFirst: {
            args: Prisma.ElectionReturnResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionReturnResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload>
          }
          findMany: {
            args: Prisma.ElectionReturnResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload>[]
          }
          create: {
            args: Prisma.ElectionReturnResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload>
          }
          createMany: {
            args: Prisma.ElectionReturnResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ElectionReturnResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload>
          }
          update: {
            args: Prisma.ElectionReturnResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload>
          }
          deleteMany: {
            args: Prisma.ElectionReturnResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionReturnResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ElectionReturnResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionReturnResultPayload>
          }
          aggregate: {
            args: Prisma.ElectionReturnResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElectionReturnResult>
          }
          groupBy: {
            args: Prisma.ElectionReturnResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionReturnResultGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ElectionReturnResultFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ElectionReturnResultAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ElectionReturnResultCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionReturnResultCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CandidateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CandidateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    electionReturn?: ElectionReturnOmit
    electionReturnResult?: ElectionReturnResultOmit
    candidate?: CandidateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ElectionReturnCountOutputType
   */

  export type ElectionReturnCountOutputType = {
    results: number
  }

  export type ElectionReturnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | ElectionReturnCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * ElectionReturnCountOutputType without action
   */
  export type ElectionReturnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnCountOutputType
     */
    select?: ElectionReturnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElectionReturnCountOutputType without action
   */
  export type ElectionReturnCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionReturnResultWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    ElectionReturnResult: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ElectionReturnResult?: boolean | CandidateCountOutputTypeCountElectionReturnResultArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountElectionReturnResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionReturnResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ElectionReturn
   */

  export type AggregateElectionReturn = {
    _count: ElectionReturnCountAggregateOutputType | null
    _avg: ElectionReturnAvgAggregateOutputType | null
    _sum: ElectionReturnSumAggregateOutputType | null
    _min: ElectionReturnMinAggregateOutputType | null
    _max: ElectionReturnMaxAggregateOutputType | null
  }

  export type ElectionReturnAvgAggregateOutputType = {
    total_votes: number | null
    processed_votes: number | null
  }

  export type ElectionReturnSumAggregateOutputType = {
    total_votes: number | null
    processed_votes: number | null
  }

  export type ElectionReturnMinAggregateOutputType = {
    id: string | null
    total_votes: number | null
    processed_votes: number | null
  }

  export type ElectionReturnMaxAggregateOutputType = {
    id: string | null
    total_votes: number | null
    processed_votes: number | null
  }

  export type ElectionReturnCountAggregateOutputType = {
    id: number
    total_votes: number
    processed_votes: number
    _all: number
  }


  export type ElectionReturnAvgAggregateInputType = {
    total_votes?: true
    processed_votes?: true
  }

  export type ElectionReturnSumAggregateInputType = {
    total_votes?: true
    processed_votes?: true
  }

  export type ElectionReturnMinAggregateInputType = {
    id?: true
    total_votes?: true
    processed_votes?: true
  }

  export type ElectionReturnMaxAggregateInputType = {
    id?: true
    total_votes?: true
    processed_votes?: true
  }

  export type ElectionReturnCountAggregateInputType = {
    id?: true
    total_votes?: true
    processed_votes?: true
    _all?: true
  }

  export type ElectionReturnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionReturn to aggregate.
     */
    where?: ElectionReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturns to fetch.
     */
    orderBy?: ElectionReturnOrderByWithRelationInput | ElectionReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElectionReturns
    **/
    _count?: true | ElectionReturnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectionReturnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectionReturnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionReturnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionReturnMaxAggregateInputType
  }

  export type GetElectionReturnAggregateType<T extends ElectionReturnAggregateArgs> = {
        [P in keyof T & keyof AggregateElectionReturn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElectionReturn[P]>
      : GetScalarType<T[P], AggregateElectionReturn[P]>
  }




  export type ElectionReturnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionReturnWhereInput
    orderBy?: ElectionReturnOrderByWithAggregationInput | ElectionReturnOrderByWithAggregationInput[]
    by: ElectionReturnScalarFieldEnum[] | ElectionReturnScalarFieldEnum
    having?: ElectionReturnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionReturnCountAggregateInputType | true
    _avg?: ElectionReturnAvgAggregateInputType
    _sum?: ElectionReturnSumAggregateInputType
    _min?: ElectionReturnMinAggregateInputType
    _max?: ElectionReturnMaxAggregateInputType
  }

  export type ElectionReturnGroupByOutputType = {
    id: string
    total_votes: number
    processed_votes: number
    _count: ElectionReturnCountAggregateOutputType | null
    _avg: ElectionReturnAvgAggregateOutputType | null
    _sum: ElectionReturnSumAggregateOutputType | null
    _min: ElectionReturnMinAggregateOutputType | null
    _max: ElectionReturnMaxAggregateOutputType | null
  }

  type GetElectionReturnGroupByPayload<T extends ElectionReturnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionReturnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionReturnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionReturnGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionReturnGroupByOutputType[P]>
        }
      >
    >


  export type ElectionReturnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_votes?: boolean
    processed_votes?: boolean
    results?: boolean | ElectionReturn$resultsArgs<ExtArgs>
    _count?: boolean | ElectionReturnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionReturn"]>



  export type ElectionReturnSelectScalar = {
    id?: boolean
    total_votes?: boolean
    processed_votes?: boolean
  }

  export type ElectionReturnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total_votes" | "processed_votes", ExtArgs["result"]["electionReturn"]>
  export type ElectionReturnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | ElectionReturn$resultsArgs<ExtArgs>
    _count?: boolean | ElectionReturnCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ElectionReturnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElectionReturn"
    objects: {
      results: Prisma.$ElectionReturnResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      total_votes: number
      processed_votes: number
    }, ExtArgs["result"]["electionReturn"]>
    composites: {}
  }

  type ElectionReturnGetPayload<S extends boolean | null | undefined | ElectionReturnDefaultArgs> = $Result.GetResult<Prisma.$ElectionReturnPayload, S>

  type ElectionReturnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionReturnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionReturnCountAggregateInputType | true
    }

  export interface ElectionReturnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElectionReturn'], meta: { name: 'ElectionReturn' } }
    /**
     * Find zero or one ElectionReturn that matches the filter.
     * @param {ElectionReturnFindUniqueArgs} args - Arguments to find a ElectionReturn
     * @example
     * // Get one ElectionReturn
     * const electionReturn = await prisma.electionReturn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionReturnFindUniqueArgs>(args: SelectSubset<T, ElectionReturnFindUniqueArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ElectionReturn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionReturnFindUniqueOrThrowArgs} args - Arguments to find a ElectionReturn
     * @example
     * // Get one ElectionReturn
     * const electionReturn = await prisma.electionReturn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionReturnFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionReturnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionReturn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnFindFirstArgs} args - Arguments to find a ElectionReturn
     * @example
     * // Get one ElectionReturn
     * const electionReturn = await prisma.electionReturn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionReturnFindFirstArgs>(args?: SelectSubset<T, ElectionReturnFindFirstArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionReturn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnFindFirstOrThrowArgs} args - Arguments to find a ElectionReturn
     * @example
     * // Get one ElectionReturn
     * const electionReturn = await prisma.electionReturn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionReturnFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionReturnFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElectionReturns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElectionReturns
     * const electionReturns = await prisma.electionReturn.findMany()
     * 
     * // Get first 10 ElectionReturns
     * const electionReturns = await prisma.electionReturn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electionReturnWithIdOnly = await prisma.electionReturn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElectionReturnFindManyArgs>(args?: SelectSubset<T, ElectionReturnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ElectionReturn.
     * @param {ElectionReturnCreateArgs} args - Arguments to create a ElectionReturn.
     * @example
     * // Create one ElectionReturn
     * const ElectionReturn = await prisma.electionReturn.create({
     *   data: {
     *     // ... data to create a ElectionReturn
     *   }
     * })
     * 
     */
    create<T extends ElectionReturnCreateArgs>(args: SelectSubset<T, ElectionReturnCreateArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ElectionReturns.
     * @param {ElectionReturnCreateManyArgs} args - Arguments to create many ElectionReturns.
     * @example
     * // Create many ElectionReturns
     * const electionReturn = await prisma.electionReturn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionReturnCreateManyArgs>(args?: SelectSubset<T, ElectionReturnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ElectionReturn.
     * @param {ElectionReturnDeleteArgs} args - Arguments to delete one ElectionReturn.
     * @example
     * // Delete one ElectionReturn
     * const ElectionReturn = await prisma.electionReturn.delete({
     *   where: {
     *     // ... filter to delete one ElectionReturn
     *   }
     * })
     * 
     */
    delete<T extends ElectionReturnDeleteArgs>(args: SelectSubset<T, ElectionReturnDeleteArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ElectionReturn.
     * @param {ElectionReturnUpdateArgs} args - Arguments to update one ElectionReturn.
     * @example
     * // Update one ElectionReturn
     * const electionReturn = await prisma.electionReturn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionReturnUpdateArgs>(args: SelectSubset<T, ElectionReturnUpdateArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ElectionReturns.
     * @param {ElectionReturnDeleteManyArgs} args - Arguments to filter ElectionReturns to delete.
     * @example
     * // Delete a few ElectionReturns
     * const { count } = await prisma.electionReturn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionReturnDeleteManyArgs>(args?: SelectSubset<T, ElectionReturnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElectionReturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElectionReturns
     * const electionReturn = await prisma.electionReturn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionReturnUpdateManyArgs>(args: SelectSubset<T, ElectionReturnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ElectionReturn.
     * @param {ElectionReturnUpsertArgs} args - Arguments to update or create a ElectionReturn.
     * @example
     * // Update or create a ElectionReturn
     * const electionReturn = await prisma.electionReturn.upsert({
     *   create: {
     *     // ... data to create a ElectionReturn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElectionReturn we want to update
     *   }
     * })
     */
    upsert<T extends ElectionReturnUpsertArgs>(args: SelectSubset<T, ElectionReturnUpsertArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElectionReturns that matches the filter.
     * @param {ElectionReturnFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const electionReturn = await prisma.electionReturn.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ElectionReturnFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ElectionReturn.
     * @param {ElectionReturnAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const electionReturn = await prisma.electionReturn.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ElectionReturnAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ElectionReturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnCountArgs} args - Arguments to filter ElectionReturns to count.
     * @example
     * // Count the number of ElectionReturns
     * const count = await prisma.electionReturn.count({
     *   where: {
     *     // ... the filter for the ElectionReturns we want to count
     *   }
     * })
    **/
    count<T extends ElectionReturnCountArgs>(
      args?: Subset<T, ElectionReturnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionReturnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElectionReturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectionReturnAggregateArgs>(args: Subset<T, ElectionReturnAggregateArgs>): Prisma.PrismaPromise<GetElectionReturnAggregateType<T>>

    /**
     * Group by ElectionReturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectionReturnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionReturnGroupByArgs['orderBy'] }
        : { orderBy?: ElectionReturnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectionReturnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionReturnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElectionReturn model
   */
  readonly fields: ElectionReturnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElectionReturn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionReturnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    results<T extends ElectionReturn$resultsArgs<ExtArgs> = {}>(args?: Subset<T, ElectionReturn$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ElectionReturn model
   */
  interface ElectionReturnFieldRefs {
    readonly id: FieldRef<"ElectionReturn", 'String'>
    readonly total_votes: FieldRef<"ElectionReturn", 'Int'>
    readonly processed_votes: FieldRef<"ElectionReturn", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ElectionReturn findUnique
   */
  export type ElectionReturnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturn to fetch.
     */
    where: ElectionReturnWhereUniqueInput
  }

  /**
   * ElectionReturn findUniqueOrThrow
   */
  export type ElectionReturnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturn to fetch.
     */
    where: ElectionReturnWhereUniqueInput
  }

  /**
   * ElectionReturn findFirst
   */
  export type ElectionReturnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturn to fetch.
     */
    where?: ElectionReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturns to fetch.
     */
    orderBy?: ElectionReturnOrderByWithRelationInput | ElectionReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionReturns.
     */
    cursor?: ElectionReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionReturns.
     */
    distinct?: ElectionReturnScalarFieldEnum | ElectionReturnScalarFieldEnum[]
  }

  /**
   * ElectionReturn findFirstOrThrow
   */
  export type ElectionReturnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturn to fetch.
     */
    where?: ElectionReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturns to fetch.
     */
    orderBy?: ElectionReturnOrderByWithRelationInput | ElectionReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionReturns.
     */
    cursor?: ElectionReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionReturns.
     */
    distinct?: ElectionReturnScalarFieldEnum | ElectionReturnScalarFieldEnum[]
  }

  /**
   * ElectionReturn findMany
   */
  export type ElectionReturnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturns to fetch.
     */
    where?: ElectionReturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturns to fetch.
     */
    orderBy?: ElectionReturnOrderByWithRelationInput | ElectionReturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElectionReturns.
     */
    cursor?: ElectionReturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturns.
     */
    skip?: number
    distinct?: ElectionReturnScalarFieldEnum | ElectionReturnScalarFieldEnum[]
  }

  /**
   * ElectionReturn create
   */
  export type ElectionReturnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * The data needed to create a ElectionReturn.
     */
    data: XOR<ElectionReturnCreateInput, ElectionReturnUncheckedCreateInput>
  }

  /**
   * ElectionReturn createMany
   */
  export type ElectionReturnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElectionReturns.
     */
    data: ElectionReturnCreateManyInput | ElectionReturnCreateManyInput[]
  }

  /**
   * ElectionReturn update
   */
  export type ElectionReturnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * The data needed to update a ElectionReturn.
     */
    data: XOR<ElectionReturnUpdateInput, ElectionReturnUncheckedUpdateInput>
    /**
     * Choose, which ElectionReturn to update.
     */
    where: ElectionReturnWhereUniqueInput
  }

  /**
   * ElectionReturn updateMany
   */
  export type ElectionReturnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElectionReturns.
     */
    data: XOR<ElectionReturnUpdateManyMutationInput, ElectionReturnUncheckedUpdateManyInput>
    /**
     * Filter which ElectionReturns to update
     */
    where?: ElectionReturnWhereInput
    /**
     * Limit how many ElectionReturns to update.
     */
    limit?: number
  }

  /**
   * ElectionReturn upsert
   */
  export type ElectionReturnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * The filter to search for the ElectionReturn to update in case it exists.
     */
    where: ElectionReturnWhereUniqueInput
    /**
     * In case the ElectionReturn found by the `where` argument doesn't exist, create a new ElectionReturn with this data.
     */
    create: XOR<ElectionReturnCreateInput, ElectionReturnUncheckedCreateInput>
    /**
     * In case the ElectionReturn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionReturnUpdateInput, ElectionReturnUncheckedUpdateInput>
  }

  /**
   * ElectionReturn delete
   */
  export type ElectionReturnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
    /**
     * Filter which ElectionReturn to delete.
     */
    where: ElectionReturnWhereUniqueInput
  }

  /**
   * ElectionReturn deleteMany
   */
  export type ElectionReturnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionReturns to delete
     */
    where?: ElectionReturnWhereInput
    /**
     * Limit how many ElectionReturns to delete.
     */
    limit?: number
  }

  /**
   * ElectionReturn findRaw
   */
  export type ElectionReturnFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ElectionReturn aggregateRaw
   */
  export type ElectionReturnAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ElectionReturn.results
   */
  export type ElectionReturn$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    where?: ElectionReturnResultWhereInput
    orderBy?: ElectionReturnResultOrderByWithRelationInput | ElectionReturnResultOrderByWithRelationInput[]
    cursor?: ElectionReturnResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionReturnResultScalarFieldEnum | ElectionReturnResultScalarFieldEnum[]
  }

  /**
   * ElectionReturn without action
   */
  export type ElectionReturnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturn
     */
    select?: ElectionReturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturn
     */
    omit?: ElectionReturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnInclude<ExtArgs> | null
  }


  /**
   * Model ElectionReturnResult
   */

  export type AggregateElectionReturnResult = {
    _count: ElectionReturnResultCountAggregateOutputType | null
    _avg: ElectionReturnResultAvgAggregateOutputType | null
    _sum: ElectionReturnResultSumAggregateOutputType | null
    _min: ElectionReturnResultMinAggregateOutputType | null
    _max: ElectionReturnResultMaxAggregateOutputType | null
  }

  export type ElectionReturnResultAvgAggregateOutputType = {
    votes: number | null
  }

  export type ElectionReturnResultSumAggregateOutputType = {
    votes: number | null
  }

  export type ElectionReturnResultMinAggregateOutputType = {
    id: string | null
    candidateId: string | null
    votes: number | null
    electionReturnId: string | null
  }

  export type ElectionReturnResultMaxAggregateOutputType = {
    id: string | null
    candidateId: string | null
    votes: number | null
    electionReturnId: string | null
  }

  export type ElectionReturnResultCountAggregateOutputType = {
    id: number
    candidateId: number
    votes: number
    electionReturnId: number
    _all: number
  }


  export type ElectionReturnResultAvgAggregateInputType = {
    votes?: true
  }

  export type ElectionReturnResultSumAggregateInputType = {
    votes?: true
  }

  export type ElectionReturnResultMinAggregateInputType = {
    id?: true
    candidateId?: true
    votes?: true
    electionReturnId?: true
  }

  export type ElectionReturnResultMaxAggregateInputType = {
    id?: true
    candidateId?: true
    votes?: true
    electionReturnId?: true
  }

  export type ElectionReturnResultCountAggregateInputType = {
    id?: true
    candidateId?: true
    votes?: true
    electionReturnId?: true
    _all?: true
  }

  export type ElectionReturnResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionReturnResult to aggregate.
     */
    where?: ElectionReturnResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturnResults to fetch.
     */
    orderBy?: ElectionReturnResultOrderByWithRelationInput | ElectionReturnResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionReturnResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturnResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturnResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElectionReturnResults
    **/
    _count?: true | ElectionReturnResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectionReturnResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectionReturnResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionReturnResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionReturnResultMaxAggregateInputType
  }

  export type GetElectionReturnResultAggregateType<T extends ElectionReturnResultAggregateArgs> = {
        [P in keyof T & keyof AggregateElectionReturnResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElectionReturnResult[P]>
      : GetScalarType<T[P], AggregateElectionReturnResult[P]>
  }




  export type ElectionReturnResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionReturnResultWhereInput
    orderBy?: ElectionReturnResultOrderByWithAggregationInput | ElectionReturnResultOrderByWithAggregationInput[]
    by: ElectionReturnResultScalarFieldEnum[] | ElectionReturnResultScalarFieldEnum
    having?: ElectionReturnResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionReturnResultCountAggregateInputType | true
    _avg?: ElectionReturnResultAvgAggregateInputType
    _sum?: ElectionReturnResultSumAggregateInputType
    _min?: ElectionReturnResultMinAggregateInputType
    _max?: ElectionReturnResultMaxAggregateInputType
  }

  export type ElectionReturnResultGroupByOutputType = {
    id: string
    candidateId: string
    votes: number
    electionReturnId: string
    _count: ElectionReturnResultCountAggregateOutputType | null
    _avg: ElectionReturnResultAvgAggregateOutputType | null
    _sum: ElectionReturnResultSumAggregateOutputType | null
    _min: ElectionReturnResultMinAggregateOutputType | null
    _max: ElectionReturnResultMaxAggregateOutputType | null
  }

  type GetElectionReturnResultGroupByPayload<T extends ElectionReturnResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionReturnResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionReturnResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionReturnResultGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionReturnResultGroupByOutputType[P]>
        }
      >
    >


  export type ElectionReturnResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    votes?: boolean
    electionReturnId?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    electionReturn?: boolean | ElectionReturnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electionReturnResult"]>



  export type ElectionReturnResultSelectScalar = {
    id?: boolean
    candidateId?: boolean
    votes?: boolean
    electionReturnId?: boolean
  }

  export type ElectionReturnResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "votes" | "electionReturnId", ExtArgs["result"]["electionReturnResult"]>
  export type ElectionReturnResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    electionReturn?: boolean | ElectionReturnDefaultArgs<ExtArgs>
  }

  export type $ElectionReturnResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElectionReturnResult"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
      electionReturn: Prisma.$ElectionReturnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      candidateId: string
      votes: number
      electionReturnId: string
    }, ExtArgs["result"]["electionReturnResult"]>
    composites: {}
  }

  type ElectionReturnResultGetPayload<S extends boolean | null | undefined | ElectionReturnResultDefaultArgs> = $Result.GetResult<Prisma.$ElectionReturnResultPayload, S>

  type ElectionReturnResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionReturnResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionReturnResultCountAggregateInputType | true
    }

  export interface ElectionReturnResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElectionReturnResult'], meta: { name: 'ElectionReturnResult' } }
    /**
     * Find zero or one ElectionReturnResult that matches the filter.
     * @param {ElectionReturnResultFindUniqueArgs} args - Arguments to find a ElectionReturnResult
     * @example
     * // Get one ElectionReturnResult
     * const electionReturnResult = await prisma.electionReturnResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionReturnResultFindUniqueArgs>(args: SelectSubset<T, ElectionReturnResultFindUniqueArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ElectionReturnResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionReturnResultFindUniqueOrThrowArgs} args - Arguments to find a ElectionReturnResult
     * @example
     * // Get one ElectionReturnResult
     * const electionReturnResult = await prisma.electionReturnResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionReturnResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionReturnResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionReturnResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnResultFindFirstArgs} args - Arguments to find a ElectionReturnResult
     * @example
     * // Get one ElectionReturnResult
     * const electionReturnResult = await prisma.electionReturnResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionReturnResultFindFirstArgs>(args?: SelectSubset<T, ElectionReturnResultFindFirstArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ElectionReturnResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnResultFindFirstOrThrowArgs} args - Arguments to find a ElectionReturnResult
     * @example
     * // Get one ElectionReturnResult
     * const electionReturnResult = await prisma.electionReturnResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionReturnResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionReturnResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElectionReturnResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElectionReturnResults
     * const electionReturnResults = await prisma.electionReturnResult.findMany()
     * 
     * // Get first 10 ElectionReturnResults
     * const electionReturnResults = await prisma.electionReturnResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electionReturnResultWithIdOnly = await prisma.electionReturnResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElectionReturnResultFindManyArgs>(args?: SelectSubset<T, ElectionReturnResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ElectionReturnResult.
     * @param {ElectionReturnResultCreateArgs} args - Arguments to create a ElectionReturnResult.
     * @example
     * // Create one ElectionReturnResult
     * const ElectionReturnResult = await prisma.electionReturnResult.create({
     *   data: {
     *     // ... data to create a ElectionReturnResult
     *   }
     * })
     * 
     */
    create<T extends ElectionReturnResultCreateArgs>(args: SelectSubset<T, ElectionReturnResultCreateArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ElectionReturnResults.
     * @param {ElectionReturnResultCreateManyArgs} args - Arguments to create many ElectionReturnResults.
     * @example
     * // Create many ElectionReturnResults
     * const electionReturnResult = await prisma.electionReturnResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionReturnResultCreateManyArgs>(args?: SelectSubset<T, ElectionReturnResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ElectionReturnResult.
     * @param {ElectionReturnResultDeleteArgs} args - Arguments to delete one ElectionReturnResult.
     * @example
     * // Delete one ElectionReturnResult
     * const ElectionReturnResult = await prisma.electionReturnResult.delete({
     *   where: {
     *     // ... filter to delete one ElectionReturnResult
     *   }
     * })
     * 
     */
    delete<T extends ElectionReturnResultDeleteArgs>(args: SelectSubset<T, ElectionReturnResultDeleteArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ElectionReturnResult.
     * @param {ElectionReturnResultUpdateArgs} args - Arguments to update one ElectionReturnResult.
     * @example
     * // Update one ElectionReturnResult
     * const electionReturnResult = await prisma.electionReturnResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionReturnResultUpdateArgs>(args: SelectSubset<T, ElectionReturnResultUpdateArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ElectionReturnResults.
     * @param {ElectionReturnResultDeleteManyArgs} args - Arguments to filter ElectionReturnResults to delete.
     * @example
     * // Delete a few ElectionReturnResults
     * const { count } = await prisma.electionReturnResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionReturnResultDeleteManyArgs>(args?: SelectSubset<T, ElectionReturnResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElectionReturnResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElectionReturnResults
     * const electionReturnResult = await prisma.electionReturnResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionReturnResultUpdateManyArgs>(args: SelectSubset<T, ElectionReturnResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ElectionReturnResult.
     * @param {ElectionReturnResultUpsertArgs} args - Arguments to update or create a ElectionReturnResult.
     * @example
     * // Update or create a ElectionReturnResult
     * const electionReturnResult = await prisma.electionReturnResult.upsert({
     *   create: {
     *     // ... data to create a ElectionReturnResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElectionReturnResult we want to update
     *   }
     * })
     */
    upsert<T extends ElectionReturnResultUpsertArgs>(args: SelectSubset<T, ElectionReturnResultUpsertArgs<ExtArgs>>): Prisma__ElectionReturnResultClient<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ElectionReturnResults that matches the filter.
     * @param {ElectionReturnResultFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const electionReturnResult = await prisma.electionReturnResult.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ElectionReturnResultFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ElectionReturnResult.
     * @param {ElectionReturnResultAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const electionReturnResult = await prisma.electionReturnResult.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ElectionReturnResultAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ElectionReturnResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnResultCountArgs} args - Arguments to filter ElectionReturnResults to count.
     * @example
     * // Count the number of ElectionReturnResults
     * const count = await prisma.electionReturnResult.count({
     *   where: {
     *     // ... the filter for the ElectionReturnResults we want to count
     *   }
     * })
    **/
    count<T extends ElectionReturnResultCountArgs>(
      args?: Subset<T, ElectionReturnResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionReturnResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElectionReturnResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectionReturnResultAggregateArgs>(args: Subset<T, ElectionReturnResultAggregateArgs>): Prisma.PrismaPromise<GetElectionReturnResultAggregateType<T>>

    /**
     * Group by ElectionReturnResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionReturnResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectionReturnResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionReturnResultGroupByArgs['orderBy'] }
        : { orderBy?: ElectionReturnResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectionReturnResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionReturnResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElectionReturnResult model
   */
  readonly fields: ElectionReturnResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElectionReturnResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionReturnResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    electionReturn<T extends ElectionReturnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionReturnDefaultArgs<ExtArgs>>): Prisma__ElectionReturnClient<$Result.GetResult<Prisma.$ElectionReturnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ElectionReturnResult model
   */
  interface ElectionReturnResultFieldRefs {
    readonly id: FieldRef<"ElectionReturnResult", 'String'>
    readonly candidateId: FieldRef<"ElectionReturnResult", 'String'>
    readonly votes: FieldRef<"ElectionReturnResult", 'Int'>
    readonly electionReturnId: FieldRef<"ElectionReturnResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ElectionReturnResult findUnique
   */
  export type ElectionReturnResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturnResult to fetch.
     */
    where: ElectionReturnResultWhereUniqueInput
  }

  /**
   * ElectionReturnResult findUniqueOrThrow
   */
  export type ElectionReturnResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturnResult to fetch.
     */
    where: ElectionReturnResultWhereUniqueInput
  }

  /**
   * ElectionReturnResult findFirst
   */
  export type ElectionReturnResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturnResult to fetch.
     */
    where?: ElectionReturnResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturnResults to fetch.
     */
    orderBy?: ElectionReturnResultOrderByWithRelationInput | ElectionReturnResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionReturnResults.
     */
    cursor?: ElectionReturnResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturnResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturnResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionReturnResults.
     */
    distinct?: ElectionReturnResultScalarFieldEnum | ElectionReturnResultScalarFieldEnum[]
  }

  /**
   * ElectionReturnResult findFirstOrThrow
   */
  export type ElectionReturnResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturnResult to fetch.
     */
    where?: ElectionReturnResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturnResults to fetch.
     */
    orderBy?: ElectionReturnResultOrderByWithRelationInput | ElectionReturnResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectionReturnResults.
     */
    cursor?: ElectionReturnResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturnResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturnResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectionReturnResults.
     */
    distinct?: ElectionReturnResultScalarFieldEnum | ElectionReturnResultScalarFieldEnum[]
  }

  /**
   * ElectionReturnResult findMany
   */
  export type ElectionReturnResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * Filter, which ElectionReturnResults to fetch.
     */
    where?: ElectionReturnResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectionReturnResults to fetch.
     */
    orderBy?: ElectionReturnResultOrderByWithRelationInput | ElectionReturnResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElectionReturnResults.
     */
    cursor?: ElectionReturnResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectionReturnResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectionReturnResults.
     */
    skip?: number
    distinct?: ElectionReturnResultScalarFieldEnum | ElectionReturnResultScalarFieldEnum[]
  }

  /**
   * ElectionReturnResult create
   */
  export type ElectionReturnResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ElectionReturnResult.
     */
    data: XOR<ElectionReturnResultCreateInput, ElectionReturnResultUncheckedCreateInput>
  }

  /**
   * ElectionReturnResult createMany
   */
  export type ElectionReturnResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElectionReturnResults.
     */
    data: ElectionReturnResultCreateManyInput | ElectionReturnResultCreateManyInput[]
  }

  /**
   * ElectionReturnResult update
   */
  export type ElectionReturnResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ElectionReturnResult.
     */
    data: XOR<ElectionReturnResultUpdateInput, ElectionReturnResultUncheckedUpdateInput>
    /**
     * Choose, which ElectionReturnResult to update.
     */
    where: ElectionReturnResultWhereUniqueInput
  }

  /**
   * ElectionReturnResult updateMany
   */
  export type ElectionReturnResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElectionReturnResults.
     */
    data: XOR<ElectionReturnResultUpdateManyMutationInput, ElectionReturnResultUncheckedUpdateManyInput>
    /**
     * Filter which ElectionReturnResults to update
     */
    where?: ElectionReturnResultWhereInput
    /**
     * Limit how many ElectionReturnResults to update.
     */
    limit?: number
  }

  /**
   * ElectionReturnResult upsert
   */
  export type ElectionReturnResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ElectionReturnResult to update in case it exists.
     */
    where: ElectionReturnResultWhereUniqueInput
    /**
     * In case the ElectionReturnResult found by the `where` argument doesn't exist, create a new ElectionReturnResult with this data.
     */
    create: XOR<ElectionReturnResultCreateInput, ElectionReturnResultUncheckedCreateInput>
    /**
     * In case the ElectionReturnResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionReturnResultUpdateInput, ElectionReturnResultUncheckedUpdateInput>
  }

  /**
   * ElectionReturnResult delete
   */
  export type ElectionReturnResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    /**
     * Filter which ElectionReturnResult to delete.
     */
    where: ElectionReturnResultWhereUniqueInput
  }

  /**
   * ElectionReturnResult deleteMany
   */
  export type ElectionReturnResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectionReturnResults to delete
     */
    where?: ElectionReturnResultWhereInput
    /**
     * Limit how many ElectionReturnResults to delete.
     */
    limit?: number
  }

  /**
   * ElectionReturnResult findRaw
   */
  export type ElectionReturnResultFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ElectionReturnResult aggregateRaw
   */
  export type ElectionReturnResultAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ElectionReturnResult without action
   */
  export type ElectionReturnResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
    name: string | null
    party: string | null
    logo: string | null
    description: string | null
    creation_date: Date | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    party: string | null
    logo: string | null
    description: string | null
    creation_date: Date | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    name: number
    party: number
    logo: number
    description: number
    creation_date: number
    _all: number
  }


  export type CandidateMinAggregateInputType = {
    id?: true
    name?: true
    party?: true
    logo?: true
    description?: true
    creation_date?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    name?: true
    party?: true
    logo?: true
    description?: true
    creation_date?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    name?: true
    party?: true
    logo?: true
    description?: true
    creation_date?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
    name: string
    party: string
    logo: string
    description: string
    creation_date: Date
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    party?: boolean
    logo?: boolean
    description?: boolean
    creation_date?: boolean
    ElectionReturnResult?: boolean | Candidate$ElectionReturnResultArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>



  export type CandidateSelectScalar = {
    id?: boolean
    name?: boolean
    party?: boolean
    logo?: boolean
    description?: boolean
    creation_date?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "party" | "logo" | "description" | "creation_date", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ElectionReturnResult?: boolean | Candidate$ElectionReturnResultArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      ElectionReturnResult: Prisma.$ElectionReturnResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      party: string
      logo: string
      description: string
      creation_date: Date
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * @param {CandidateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const candidate = await prisma.candidate.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CandidateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Candidate.
     * @param {CandidateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const candidate = await prisma.candidate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CandidateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ElectionReturnResult<T extends Candidate$ElectionReturnResultArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$ElectionReturnResultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionReturnResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly name: FieldRef<"Candidate", 'String'>
    readonly party: FieldRef<"Candidate", 'String'>
    readonly logo: FieldRef<"Candidate", 'String'>
    readonly description: FieldRef<"Candidate", 'String'>
    readonly creation_date: FieldRef<"Candidate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate findRaw
   */
  export type CandidateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Candidate aggregateRaw
   */
  export type CandidateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Candidate.ElectionReturnResult
   */
  export type Candidate$ElectionReturnResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionReturnResult
     */
    select?: ElectionReturnResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ElectionReturnResult
     */
    omit?: ElectionReturnResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionReturnResultInclude<ExtArgs> | null
    where?: ElectionReturnResultWhereInput
    orderBy?: ElectionReturnResultOrderByWithRelationInput | ElectionReturnResultOrderByWithRelationInput[]
    cursor?: ElectionReturnResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionReturnResultScalarFieldEnum | ElectionReturnResultScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ElectionReturnScalarFieldEnum: {
    id: 'id',
    total_votes: 'total_votes',
    processed_votes: 'processed_votes'
  };

  export type ElectionReturnScalarFieldEnum = (typeof ElectionReturnScalarFieldEnum)[keyof typeof ElectionReturnScalarFieldEnum]


  export const ElectionReturnResultScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    votes: 'votes',
    electionReturnId: 'electionReturnId'
  };

  export type ElectionReturnResultScalarFieldEnum = (typeof ElectionReturnResultScalarFieldEnum)[keyof typeof ElectionReturnResultScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    party: 'party',
    logo: 'logo',
    description: 'description',
    creation_date: 'creation_date'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ElectionReturnWhereInput = {
    AND?: ElectionReturnWhereInput | ElectionReturnWhereInput[]
    OR?: ElectionReturnWhereInput[]
    NOT?: ElectionReturnWhereInput | ElectionReturnWhereInput[]
    id?: StringFilter<"ElectionReturn"> | string
    total_votes?: IntFilter<"ElectionReturn"> | number
    processed_votes?: IntFilter<"ElectionReturn"> | number
    results?: ElectionReturnResultListRelationFilter
  }

  export type ElectionReturnOrderByWithRelationInput = {
    id?: SortOrder
    total_votes?: SortOrder
    processed_votes?: SortOrder
    results?: ElectionReturnResultOrderByRelationAggregateInput
  }

  export type ElectionReturnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElectionReturnWhereInput | ElectionReturnWhereInput[]
    OR?: ElectionReturnWhereInput[]
    NOT?: ElectionReturnWhereInput | ElectionReturnWhereInput[]
    total_votes?: IntFilter<"ElectionReturn"> | number
    processed_votes?: IntFilter<"ElectionReturn"> | number
    results?: ElectionReturnResultListRelationFilter
  }, "id">

  export type ElectionReturnOrderByWithAggregationInput = {
    id?: SortOrder
    total_votes?: SortOrder
    processed_votes?: SortOrder
    _count?: ElectionReturnCountOrderByAggregateInput
    _avg?: ElectionReturnAvgOrderByAggregateInput
    _max?: ElectionReturnMaxOrderByAggregateInput
    _min?: ElectionReturnMinOrderByAggregateInput
    _sum?: ElectionReturnSumOrderByAggregateInput
  }

  export type ElectionReturnScalarWhereWithAggregatesInput = {
    AND?: ElectionReturnScalarWhereWithAggregatesInput | ElectionReturnScalarWhereWithAggregatesInput[]
    OR?: ElectionReturnScalarWhereWithAggregatesInput[]
    NOT?: ElectionReturnScalarWhereWithAggregatesInput | ElectionReturnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ElectionReturn"> | string
    total_votes?: IntWithAggregatesFilter<"ElectionReturn"> | number
    processed_votes?: IntWithAggregatesFilter<"ElectionReturn"> | number
  }

  export type ElectionReturnResultWhereInput = {
    AND?: ElectionReturnResultWhereInput | ElectionReturnResultWhereInput[]
    OR?: ElectionReturnResultWhereInput[]
    NOT?: ElectionReturnResultWhereInput | ElectionReturnResultWhereInput[]
    id?: StringFilter<"ElectionReturnResult"> | string
    candidateId?: StringFilter<"ElectionReturnResult"> | string
    votes?: IntFilter<"ElectionReturnResult"> | number
    electionReturnId?: StringFilter<"ElectionReturnResult"> | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    electionReturn?: XOR<ElectionReturnScalarRelationFilter, ElectionReturnWhereInput>
  }

  export type ElectionReturnResultOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    votes?: SortOrder
    electionReturnId?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
    electionReturn?: ElectionReturnOrderByWithRelationInput
  }

  export type ElectionReturnResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElectionReturnResultWhereInput | ElectionReturnResultWhereInput[]
    OR?: ElectionReturnResultWhereInput[]
    NOT?: ElectionReturnResultWhereInput | ElectionReturnResultWhereInput[]
    candidateId?: StringFilter<"ElectionReturnResult"> | string
    votes?: IntFilter<"ElectionReturnResult"> | number
    electionReturnId?: StringFilter<"ElectionReturnResult"> | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    electionReturn?: XOR<ElectionReturnScalarRelationFilter, ElectionReturnWhereInput>
  }, "id">

  export type ElectionReturnResultOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    votes?: SortOrder
    electionReturnId?: SortOrder
    _count?: ElectionReturnResultCountOrderByAggregateInput
    _avg?: ElectionReturnResultAvgOrderByAggregateInput
    _max?: ElectionReturnResultMaxOrderByAggregateInput
    _min?: ElectionReturnResultMinOrderByAggregateInput
    _sum?: ElectionReturnResultSumOrderByAggregateInput
  }

  export type ElectionReturnResultScalarWhereWithAggregatesInput = {
    AND?: ElectionReturnResultScalarWhereWithAggregatesInput | ElectionReturnResultScalarWhereWithAggregatesInput[]
    OR?: ElectionReturnResultScalarWhereWithAggregatesInput[]
    NOT?: ElectionReturnResultScalarWhereWithAggregatesInput | ElectionReturnResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ElectionReturnResult"> | string
    candidateId?: StringWithAggregatesFilter<"ElectionReturnResult"> | string
    votes?: IntWithAggregatesFilter<"ElectionReturnResult"> | number
    electionReturnId?: StringWithAggregatesFilter<"ElectionReturnResult"> | string
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    name?: StringFilter<"Candidate"> | string
    party?: StringFilter<"Candidate"> | string
    logo?: StringFilter<"Candidate"> | string
    description?: StringFilter<"Candidate"> | string
    creation_date?: DateTimeFilter<"Candidate"> | Date | string
    ElectionReturnResult?: ElectionReturnResultListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    creation_date?: SortOrder
    ElectionReturnResult?: ElectionReturnResultOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    name?: StringFilter<"Candidate"> | string
    party?: StringFilter<"Candidate"> | string
    logo?: StringFilter<"Candidate"> | string
    description?: StringFilter<"Candidate"> | string
    creation_date?: DateTimeFilter<"Candidate"> | Date | string
    ElectionReturnResult?: ElectionReturnResultListRelationFilter
  }, "id">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    creation_date?: SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    name?: StringWithAggregatesFilter<"Candidate"> | string
    party?: StringWithAggregatesFilter<"Candidate"> | string
    logo?: StringWithAggregatesFilter<"Candidate"> | string
    description?: StringWithAggregatesFilter<"Candidate"> | string
    creation_date?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
  }

  export type ElectionReturnCreateInput = {
    id?: string
    total_votes: number
    processed_votes: number
    results?: ElectionReturnResultCreateNestedManyWithoutElectionReturnInput
  }

  export type ElectionReturnUncheckedCreateInput = {
    id?: string
    total_votes: number
    processed_votes: number
    results?: ElectionReturnResultUncheckedCreateNestedManyWithoutElectionReturnInput
  }

  export type ElectionReturnUpdateInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    processed_votes?: IntFieldUpdateOperationsInput | number
    results?: ElectionReturnResultUpdateManyWithoutElectionReturnNestedInput
  }

  export type ElectionReturnUncheckedUpdateInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    processed_votes?: IntFieldUpdateOperationsInput | number
    results?: ElectionReturnResultUncheckedUpdateManyWithoutElectionReturnNestedInput
  }

  export type ElectionReturnCreateManyInput = {
    id?: string
    total_votes: number
    processed_votes: number
  }

  export type ElectionReturnUpdateManyMutationInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    processed_votes?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionReturnUncheckedUpdateManyInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    processed_votes?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionReturnResultCreateInput = {
    id?: string
    votes: number
    candidate: CandidateCreateNestedOneWithoutElectionReturnResultInput
    electionReturn: ElectionReturnCreateNestedOneWithoutResultsInput
  }

  export type ElectionReturnResultUncheckedCreateInput = {
    id?: string
    candidateId: string
    votes: number
    electionReturnId: string
  }

  export type ElectionReturnResultUpdateInput = {
    votes?: IntFieldUpdateOperationsInput | number
    candidate?: CandidateUpdateOneRequiredWithoutElectionReturnResultNestedInput
    electionReturn?: ElectionReturnUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ElectionReturnResultUncheckedUpdateInput = {
    candidateId?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    electionReturnId?: StringFieldUpdateOperationsInput | string
  }

  export type ElectionReturnResultCreateManyInput = {
    id?: string
    candidateId: string
    votes: number
    electionReturnId: string
  }

  export type ElectionReturnResultUpdateManyMutationInput = {
    votes?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionReturnResultUncheckedUpdateManyInput = {
    candidateId?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    electionReturnId?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateCreateInput = {
    id?: string
    name: string
    party?: string
    logo: string
    description: string
    creation_date?: Date | string
    ElectionReturnResult?: ElectionReturnResultCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
    name: string
    party?: string
    logo: string
    description: string
    creation_date?: Date | string
    ElectionReturnResult?: ElectionReturnResultUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    party?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ElectionReturnResult?: ElectionReturnResultUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    party?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ElectionReturnResult?: ElectionReturnResultUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: string
    name: string
    party?: string
    logo: string
    description: string
    creation_date?: Date | string
  }

  export type CandidateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    party?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    party?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ElectionReturnResultListRelationFilter = {
    every?: ElectionReturnResultWhereInput
    some?: ElectionReturnResultWhereInput
    none?: ElectionReturnResultWhereInput
  }

  export type ElectionReturnResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionReturnCountOrderByAggregateInput = {
    id?: SortOrder
    total_votes?: SortOrder
    processed_votes?: SortOrder
  }

  export type ElectionReturnAvgOrderByAggregateInput = {
    total_votes?: SortOrder
    processed_votes?: SortOrder
  }

  export type ElectionReturnMaxOrderByAggregateInput = {
    id?: SortOrder
    total_votes?: SortOrder
    processed_votes?: SortOrder
  }

  export type ElectionReturnMinOrderByAggregateInput = {
    id?: SortOrder
    total_votes?: SortOrder
    processed_votes?: SortOrder
  }

  export type ElectionReturnSumOrderByAggregateInput = {
    total_votes?: SortOrder
    processed_votes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type ElectionReturnScalarRelationFilter = {
    is?: ElectionReturnWhereInput
    isNot?: ElectionReturnWhereInput
  }

  export type ElectionReturnResultCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    votes?: SortOrder
    electionReturnId?: SortOrder
  }

  export type ElectionReturnResultAvgOrderByAggregateInput = {
    votes?: SortOrder
  }

  export type ElectionReturnResultMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    votes?: SortOrder
    electionReturnId?: SortOrder
  }

  export type ElectionReturnResultMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    votes?: SortOrder
    electionReturnId?: SortOrder
  }

  export type ElectionReturnResultSumOrderByAggregateInput = {
    votes?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    creation_date?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    creation_date?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    creation_date?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ElectionReturnResultCreateNestedManyWithoutElectionReturnInput = {
    create?: XOR<ElectionReturnResultCreateWithoutElectionReturnInput, ElectionReturnResultUncheckedCreateWithoutElectionReturnInput> | ElectionReturnResultCreateWithoutElectionReturnInput[] | ElectionReturnResultUncheckedCreateWithoutElectionReturnInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutElectionReturnInput | ElectionReturnResultCreateOrConnectWithoutElectionReturnInput[]
    createMany?: ElectionReturnResultCreateManyElectionReturnInputEnvelope
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
  }

  export type ElectionReturnResultUncheckedCreateNestedManyWithoutElectionReturnInput = {
    create?: XOR<ElectionReturnResultCreateWithoutElectionReturnInput, ElectionReturnResultUncheckedCreateWithoutElectionReturnInput> | ElectionReturnResultCreateWithoutElectionReturnInput[] | ElectionReturnResultUncheckedCreateWithoutElectionReturnInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutElectionReturnInput | ElectionReturnResultCreateOrConnectWithoutElectionReturnInput[]
    createMany?: ElectionReturnResultCreateManyElectionReturnInputEnvelope
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ElectionReturnResultUpdateManyWithoutElectionReturnNestedInput = {
    create?: XOR<ElectionReturnResultCreateWithoutElectionReturnInput, ElectionReturnResultUncheckedCreateWithoutElectionReturnInput> | ElectionReturnResultCreateWithoutElectionReturnInput[] | ElectionReturnResultUncheckedCreateWithoutElectionReturnInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutElectionReturnInput | ElectionReturnResultCreateOrConnectWithoutElectionReturnInput[]
    upsert?: ElectionReturnResultUpsertWithWhereUniqueWithoutElectionReturnInput | ElectionReturnResultUpsertWithWhereUniqueWithoutElectionReturnInput[]
    createMany?: ElectionReturnResultCreateManyElectionReturnInputEnvelope
    set?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    disconnect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    delete?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    update?: ElectionReturnResultUpdateWithWhereUniqueWithoutElectionReturnInput | ElectionReturnResultUpdateWithWhereUniqueWithoutElectionReturnInput[]
    updateMany?: ElectionReturnResultUpdateManyWithWhereWithoutElectionReturnInput | ElectionReturnResultUpdateManyWithWhereWithoutElectionReturnInput[]
    deleteMany?: ElectionReturnResultScalarWhereInput | ElectionReturnResultScalarWhereInput[]
  }

  export type ElectionReturnResultUncheckedUpdateManyWithoutElectionReturnNestedInput = {
    create?: XOR<ElectionReturnResultCreateWithoutElectionReturnInput, ElectionReturnResultUncheckedCreateWithoutElectionReturnInput> | ElectionReturnResultCreateWithoutElectionReturnInput[] | ElectionReturnResultUncheckedCreateWithoutElectionReturnInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutElectionReturnInput | ElectionReturnResultCreateOrConnectWithoutElectionReturnInput[]
    upsert?: ElectionReturnResultUpsertWithWhereUniqueWithoutElectionReturnInput | ElectionReturnResultUpsertWithWhereUniqueWithoutElectionReturnInput[]
    createMany?: ElectionReturnResultCreateManyElectionReturnInputEnvelope
    set?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    disconnect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    delete?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    update?: ElectionReturnResultUpdateWithWhereUniqueWithoutElectionReturnInput | ElectionReturnResultUpdateWithWhereUniqueWithoutElectionReturnInput[]
    updateMany?: ElectionReturnResultUpdateManyWithWhereWithoutElectionReturnInput | ElectionReturnResultUpdateManyWithWhereWithoutElectionReturnInput[]
    deleteMany?: ElectionReturnResultScalarWhereInput | ElectionReturnResultScalarWhereInput[]
  }

  export type CandidateCreateNestedOneWithoutElectionReturnResultInput = {
    create?: XOR<CandidateCreateWithoutElectionReturnResultInput, CandidateUncheckedCreateWithoutElectionReturnResultInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionReturnResultInput
    connect?: CandidateWhereUniqueInput
  }

  export type ElectionReturnCreateNestedOneWithoutResultsInput = {
    create?: XOR<ElectionReturnCreateWithoutResultsInput, ElectionReturnUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ElectionReturnCreateOrConnectWithoutResultsInput
    connect?: ElectionReturnWhereUniqueInput
  }

  export type CandidateUpdateOneRequiredWithoutElectionReturnResultNestedInput = {
    create?: XOR<CandidateCreateWithoutElectionReturnResultInput, CandidateUncheckedCreateWithoutElectionReturnResultInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionReturnResultInput
    upsert?: CandidateUpsertWithoutElectionReturnResultInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutElectionReturnResultInput, CandidateUpdateWithoutElectionReturnResultInput>, CandidateUncheckedUpdateWithoutElectionReturnResultInput>
  }

  export type ElectionReturnUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ElectionReturnCreateWithoutResultsInput, ElectionReturnUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ElectionReturnCreateOrConnectWithoutResultsInput
    upsert?: ElectionReturnUpsertWithoutResultsInput
    connect?: ElectionReturnWhereUniqueInput
    update?: XOR<XOR<ElectionReturnUpdateToOneWithWhereWithoutResultsInput, ElectionReturnUpdateWithoutResultsInput>, ElectionReturnUncheckedUpdateWithoutResultsInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ElectionReturnResultCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ElectionReturnResultCreateWithoutCandidateInput, ElectionReturnResultUncheckedCreateWithoutCandidateInput> | ElectionReturnResultCreateWithoutCandidateInput[] | ElectionReturnResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutCandidateInput | ElectionReturnResultCreateOrConnectWithoutCandidateInput[]
    createMany?: ElectionReturnResultCreateManyCandidateInputEnvelope
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
  }

  export type ElectionReturnResultUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ElectionReturnResultCreateWithoutCandidateInput, ElectionReturnResultUncheckedCreateWithoutCandidateInput> | ElectionReturnResultCreateWithoutCandidateInput[] | ElectionReturnResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutCandidateInput | ElectionReturnResultCreateOrConnectWithoutCandidateInput[]
    createMany?: ElectionReturnResultCreateManyCandidateInputEnvelope
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ElectionReturnResultUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ElectionReturnResultCreateWithoutCandidateInput, ElectionReturnResultUncheckedCreateWithoutCandidateInput> | ElectionReturnResultCreateWithoutCandidateInput[] | ElectionReturnResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutCandidateInput | ElectionReturnResultCreateOrConnectWithoutCandidateInput[]
    upsert?: ElectionReturnResultUpsertWithWhereUniqueWithoutCandidateInput | ElectionReturnResultUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ElectionReturnResultCreateManyCandidateInputEnvelope
    set?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    disconnect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    delete?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    update?: ElectionReturnResultUpdateWithWhereUniqueWithoutCandidateInput | ElectionReturnResultUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ElectionReturnResultUpdateManyWithWhereWithoutCandidateInput | ElectionReturnResultUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ElectionReturnResultScalarWhereInput | ElectionReturnResultScalarWhereInput[]
  }

  export type ElectionReturnResultUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ElectionReturnResultCreateWithoutCandidateInput, ElectionReturnResultUncheckedCreateWithoutCandidateInput> | ElectionReturnResultCreateWithoutCandidateInput[] | ElectionReturnResultUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ElectionReturnResultCreateOrConnectWithoutCandidateInput | ElectionReturnResultCreateOrConnectWithoutCandidateInput[]
    upsert?: ElectionReturnResultUpsertWithWhereUniqueWithoutCandidateInput | ElectionReturnResultUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ElectionReturnResultCreateManyCandidateInputEnvelope
    set?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    disconnect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    delete?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    connect?: ElectionReturnResultWhereUniqueInput | ElectionReturnResultWhereUniqueInput[]
    update?: ElectionReturnResultUpdateWithWhereUniqueWithoutCandidateInput | ElectionReturnResultUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ElectionReturnResultUpdateManyWithWhereWithoutCandidateInput | ElectionReturnResultUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ElectionReturnResultScalarWhereInput | ElectionReturnResultScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ElectionReturnResultCreateWithoutElectionReturnInput = {
    id?: string
    votes: number
    candidate: CandidateCreateNestedOneWithoutElectionReturnResultInput
  }

  export type ElectionReturnResultUncheckedCreateWithoutElectionReturnInput = {
    id?: string
    candidateId: string
    votes: number
  }

  export type ElectionReturnResultCreateOrConnectWithoutElectionReturnInput = {
    where: ElectionReturnResultWhereUniqueInput
    create: XOR<ElectionReturnResultCreateWithoutElectionReturnInput, ElectionReturnResultUncheckedCreateWithoutElectionReturnInput>
  }

  export type ElectionReturnResultCreateManyElectionReturnInputEnvelope = {
    data: ElectionReturnResultCreateManyElectionReturnInput | ElectionReturnResultCreateManyElectionReturnInput[]
  }

  export type ElectionReturnResultUpsertWithWhereUniqueWithoutElectionReturnInput = {
    where: ElectionReturnResultWhereUniqueInput
    update: XOR<ElectionReturnResultUpdateWithoutElectionReturnInput, ElectionReturnResultUncheckedUpdateWithoutElectionReturnInput>
    create: XOR<ElectionReturnResultCreateWithoutElectionReturnInput, ElectionReturnResultUncheckedCreateWithoutElectionReturnInput>
  }

  export type ElectionReturnResultUpdateWithWhereUniqueWithoutElectionReturnInput = {
    where: ElectionReturnResultWhereUniqueInput
    data: XOR<ElectionReturnResultUpdateWithoutElectionReturnInput, ElectionReturnResultUncheckedUpdateWithoutElectionReturnInput>
  }

  export type ElectionReturnResultUpdateManyWithWhereWithoutElectionReturnInput = {
    where: ElectionReturnResultScalarWhereInput
    data: XOR<ElectionReturnResultUpdateManyMutationInput, ElectionReturnResultUncheckedUpdateManyWithoutElectionReturnInput>
  }

  export type ElectionReturnResultScalarWhereInput = {
    AND?: ElectionReturnResultScalarWhereInput | ElectionReturnResultScalarWhereInput[]
    OR?: ElectionReturnResultScalarWhereInput[]
    NOT?: ElectionReturnResultScalarWhereInput | ElectionReturnResultScalarWhereInput[]
    id?: StringFilter<"ElectionReturnResult"> | string
    candidateId?: StringFilter<"ElectionReturnResult"> | string
    votes?: IntFilter<"ElectionReturnResult"> | number
    electionReturnId?: StringFilter<"ElectionReturnResult"> | string
  }

  export type CandidateCreateWithoutElectionReturnResultInput = {
    id?: string
    name: string
    party?: string
    logo: string
    description: string
    creation_date?: Date | string
  }

  export type CandidateUncheckedCreateWithoutElectionReturnResultInput = {
    id?: string
    name: string
    party?: string
    logo: string
    description: string
    creation_date?: Date | string
  }

  export type CandidateCreateOrConnectWithoutElectionReturnResultInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutElectionReturnResultInput, CandidateUncheckedCreateWithoutElectionReturnResultInput>
  }

  export type ElectionReturnCreateWithoutResultsInput = {
    id?: string
    total_votes: number
    processed_votes: number
  }

  export type ElectionReturnUncheckedCreateWithoutResultsInput = {
    id?: string
    total_votes: number
    processed_votes: number
  }

  export type ElectionReturnCreateOrConnectWithoutResultsInput = {
    where: ElectionReturnWhereUniqueInput
    create: XOR<ElectionReturnCreateWithoutResultsInput, ElectionReturnUncheckedCreateWithoutResultsInput>
  }

  export type CandidateUpsertWithoutElectionReturnResultInput = {
    update: XOR<CandidateUpdateWithoutElectionReturnResultInput, CandidateUncheckedUpdateWithoutElectionReturnResultInput>
    create: XOR<CandidateCreateWithoutElectionReturnResultInput, CandidateUncheckedCreateWithoutElectionReturnResultInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutElectionReturnResultInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutElectionReturnResultInput, CandidateUncheckedUpdateWithoutElectionReturnResultInput>
  }

  export type CandidateUpdateWithoutElectionReturnResultInput = {
    name?: StringFieldUpdateOperationsInput | string
    party?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUncheckedUpdateWithoutElectionReturnResultInput = {
    name?: StringFieldUpdateOperationsInput | string
    party?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionReturnUpsertWithoutResultsInput = {
    update: XOR<ElectionReturnUpdateWithoutResultsInput, ElectionReturnUncheckedUpdateWithoutResultsInput>
    create: XOR<ElectionReturnCreateWithoutResultsInput, ElectionReturnUncheckedCreateWithoutResultsInput>
    where?: ElectionReturnWhereInput
  }

  export type ElectionReturnUpdateToOneWithWhereWithoutResultsInput = {
    where?: ElectionReturnWhereInput
    data: XOR<ElectionReturnUpdateWithoutResultsInput, ElectionReturnUncheckedUpdateWithoutResultsInput>
  }

  export type ElectionReturnUpdateWithoutResultsInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    processed_votes?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionReturnUncheckedUpdateWithoutResultsInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    processed_votes?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionReturnResultCreateWithoutCandidateInput = {
    id?: string
    votes: number
    electionReturn: ElectionReturnCreateNestedOneWithoutResultsInput
  }

  export type ElectionReturnResultUncheckedCreateWithoutCandidateInput = {
    id?: string
    votes: number
    electionReturnId: string
  }

  export type ElectionReturnResultCreateOrConnectWithoutCandidateInput = {
    where: ElectionReturnResultWhereUniqueInput
    create: XOR<ElectionReturnResultCreateWithoutCandidateInput, ElectionReturnResultUncheckedCreateWithoutCandidateInput>
  }

  export type ElectionReturnResultCreateManyCandidateInputEnvelope = {
    data: ElectionReturnResultCreateManyCandidateInput | ElectionReturnResultCreateManyCandidateInput[]
  }

  export type ElectionReturnResultUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ElectionReturnResultWhereUniqueInput
    update: XOR<ElectionReturnResultUpdateWithoutCandidateInput, ElectionReturnResultUncheckedUpdateWithoutCandidateInput>
    create: XOR<ElectionReturnResultCreateWithoutCandidateInput, ElectionReturnResultUncheckedCreateWithoutCandidateInput>
  }

  export type ElectionReturnResultUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ElectionReturnResultWhereUniqueInput
    data: XOR<ElectionReturnResultUpdateWithoutCandidateInput, ElectionReturnResultUncheckedUpdateWithoutCandidateInput>
  }

  export type ElectionReturnResultUpdateManyWithWhereWithoutCandidateInput = {
    where: ElectionReturnResultScalarWhereInput
    data: XOR<ElectionReturnResultUpdateManyMutationInput, ElectionReturnResultUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ElectionReturnResultCreateManyElectionReturnInput = {
    id?: string
    candidateId: string
    votes: number
  }

  export type ElectionReturnResultUpdateWithoutElectionReturnInput = {
    votes?: IntFieldUpdateOperationsInput | number
    candidate?: CandidateUpdateOneRequiredWithoutElectionReturnResultNestedInput
  }

  export type ElectionReturnResultUncheckedUpdateWithoutElectionReturnInput = {
    candidateId?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionReturnResultUncheckedUpdateManyWithoutElectionReturnInput = {
    candidateId?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionReturnResultCreateManyCandidateInput = {
    id?: string
    votes: number
    electionReturnId: string
  }

  export type ElectionReturnResultUpdateWithoutCandidateInput = {
    votes?: IntFieldUpdateOperationsInput | number
    electionReturn?: ElectionReturnUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ElectionReturnResultUncheckedUpdateWithoutCandidateInput = {
    votes?: IntFieldUpdateOperationsInput | number
    electionReturnId?: StringFieldUpdateOperationsInput | string
  }

  export type ElectionReturnResultUncheckedUpdateManyWithoutCandidateInput = {
    votes?: IntFieldUpdateOperationsInput | number
    electionReturnId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}