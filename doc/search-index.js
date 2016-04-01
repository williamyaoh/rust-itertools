var searchIndex = {};
searchIndex["itertools"] = {"doc":"Itertools — extra iterator adaptors, functions and macros.","items":[[3,"Dedup","itertools","An iterator adaptor that removes repeated duplicates.",null,null],[3,"Interleave","","An iterator adaptor that alternates elements from two iterators until both\nrun out.",null,null],[3,"InterleaveShortest","","An iterator adaptor that alternates elements from the two iterators until\none of them runs out.",null,null],[3,"Product","","An iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators `I` and `J`.",null,null],[3,"PutBack","","An iterator adaptor that allows putting back a single\nitem to the front of the iterator.",null,null],[3,"PutBackN","","An iterator adaptor that allows putting multiple\nitems in front of the iterator.",null,null],[3,"Batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",null,null],[3,"GroupBy","","An iterator adaptor that groups iterator elements. Consecutive elements\nthat map to the same key (“runs”), are returned as the iterator elements.",null,null],[3,"Step","","An iterator adaptor that steps a number elements in the base iterator\nfor each iteration.",null,null],[3,"Merge","","An iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",null,null],[3,"MergeBy","","An iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",null,null],[3,"MultiPeek","","An iterator adaptor that allows the user to peek at multiple *.next()*\nvalues without advancing itself.",null,null],[3,"TakeWhileRef","","An iterator adaptor that borrows from a `Clone`-able iterator\nto only pick off elements while the predicate returns `true`.",null,null],[3,"WhileSome","","An iterator adaptor that filters `Option&lt;A&gt;` iterator elements\nand produces `A`. Stops on the first `None` encountered.",null,null],[3,"Coalesce","","An iterator adaptor that may join together adjacent elements.",null,null],[3,"MendSlices","","An iterator adaptor that glues together adjacent contiguous slices.",null,null],[3,"Combinations","","An iterator to iterate through all the combinations of pairs in a `Clone`-able iterator.",null,null],[3,"CombinationsN","","An iterator to iterate through all the `n`-length combinations in an iterator.",null,null],[3,"Unique","","An iterator adapter to filter out duplicate elements.",null,null],[3,"UniqueBy","","An iterator adapter to filter out duplicate elements.",null,null],[3,"Flatten","","An iterator adapter to simply flatten a structure.",null,null],[3,"Format","","Format all iterator elements lazily, separated by `sep`.",null,null],[3,"ChunksLazy","","`ChunkLazy` is the storage for a lazy chunking operation.",null,null],[3,"Chunk","","An iterator for the elements in a single chunk.",null,null],[3,"Chunks","","An iterator that yields the Chunk iterators.",null,null],[3,"GroupByLazy","","`GroupByLazy` is the storage for the lazy grouping operation.",null,null],[3,"Group","","An iterator for the elements in a single group.",null,null],[3,"Groups","","An iterator that yields the Group iterators.",null,null],[3,"Intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",null,null],[3,"ISlice","","An iterator adaptor that yields a subset (a slice) of the base iterator.",null,null],[3,"KMerge","","An iterator adaptor that merges an abitrary number of base iterators in ascending order.\nIf all base iterators are sorted (ascending), the result is sorted.",null,null],[3,"Linspace","","An iterator of a sequence of evenly spaced floats.",null,null],[3,"PadUsing","","An iterator adaptor that pads a sequence to a minimum length by filling\nmissing elements using a closure.",null,null],[3,"RcIter","","A wrapper for `Rc&lt;RefCell&lt;I&gt;&gt;`, that implements the `Iterator` trait.",null,null],[12,"rciter","","The boxed iterator.",0,null],[3,"RepeatN","","An iterator that repeats an element exactly *n* times.",null,null],[3,"RepeatCall","","An iterator source that produces elements indefinitely by calling\na given closure.",null,null],[3,"Unfold","","`Unfold` is a general iterator builder: it has a mutable state value,\nand a closure with access to the state that produces the next value.",null,null],[12,"state","","Internal state that will be passed to the closure on the next iteration",1,null],[3,"Stride","","An iterator similar to the slice iterator, but with a certain number of steps\n(the stride) skipped per iteration.",null,null],[3,"StrideMut","","The mutable equivalent of Stride.",null,null],[3,"Tee","","One half of an iterator pair where both return the same elements.",null,null],[3,"ZipEq","","An iterator which iterates two other iterators simultaneously",null,null],[3,"ZipLongest","","An iterator which iterates two other iterators simultaneously",null,null],[3,"Zip","","An iterator that generalizes *.zip()* and allows running multiple iterators in lockstep.",null,null],[3,"ZipSlices","","An iterator which iterates two slices simultaneously.",null,null],[4,"Diff","","A type returned by the [`diff_with`](./fn.diff_with.html) function.",null,null],[13,"FirstMismatch","","The index of the first non-matching element along with both iterator&#39;s remaining elements\nstarting with the first mis-match.",2,null],[13,"Shorter","","The total number of elements that were in `J` along with the remaining elements of `I`.",2,null],[13,"Longer","","The total number of elements that were in `I` along with the remaining elements of `J`.",2,null],[4,"EitherOrBoth","","A value yielded by `ZipLongest`.\nContains one or two values, depending on which of the input iterators are exhausted.",null,null],[13,"Both","","Neither input iterator is exhausted yet, yielding two values.",3,null],[13,"Left","","The parameter iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the `self` iterator.",3,null],[13,"Right","","The `self` iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the parameter iterator.",3,null],[4,"Partition","","Classifies the result of the `.partition_map()` closure into a\npartition.",null,null],[13,"Left","","Classify into the left partition.",4,null],[13,"Right","","Classify into the right partition.",4,null],[4,"FoldWhile","","An enum used for controlling the execution of `.fold_while()`.",null,null],[13,"Continue","","Continue folding with this value",5,null],[13,"Done","","Fold is complete and will return this value",5,null],[5,"diff_with","","Compares every element yielded by both `i` and `j` with the given function in lock-step and\nreturns a `Diff` which describes how `j` differs from `i`.",null,{"inputs":[{"name":"i"},{"name":"j"},{"name":"f"}],"output":{"name":"option"}}],[5,"linspace","","Return an iterator of evenly spaced floats.",null,{"inputs":[{"name":"f"},{"name":"f"},{"name":"usize"}],"output":{"name":"linspace"}}],[5,"equal","","Return `true` if both iterators produce equal sequences\n(elements pairwise equal and sequences of the same length),\n`false` otherwise.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"bool"}}],[5,"assert_equal","","Assert that two iterators produce equal sequences, with the same\nsemantics as *equal(a, b)*.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":null}],[5,"partition","","Partition a sequence using predicate `pred` so that elements\nthat map to `true` are placed before elements which map to `false`.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"usize"}}],[11,"clone","","",6,{"inputs":[{"name":"interleave"}],"output":{"name":"interleave"}}],[11,"new","","Creat a new `Interleave` iterator.",6,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"next","","",6,{"inputs":[{"name":"interleave"}],"output":{"name":"option"}}],[11,"clone","","",7,{"inputs":[{"name":"interleaveshortest"}],"output":{"name":"interleaveshortest"}}],[11,"new","","Create a new `InterleaveShortest` iterator.",7,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"interleaveshortest"}}],[11,"next","","",7,{"inputs":[{"name":"interleaveshortest"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"clone","","",8,{"inputs":[{"name":"putback"}],"output":{"name":"putback"}}],[11,"new","","Iterator element type is `A`",8,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"with_value","","Create a `PutBack` along with the `value` to put back.",8,{"inputs":[{"name":"item"},{"name":"i"}],"output":{"name":"self"}}],[11,"into_parts","","Split the `PutBack` into its parts.",8,null],[11,"put_back","","Put back a single value to the front of the iterator.",8,{"inputs":[{"name":"putback"},{"name":"item"}],"output":null}],[11,"next","","",8,{"inputs":[{"name":"putback"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"new","","Iterator element type is `A`",9,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"put_back","","Puts x in front of the iterator.\nThe values are yielded in order.",9,{"inputs":[{"name":"putbackn"},{"name":"item"}],"output":null}],[11,"next","","",9,{"inputs":[{"name":"putbackn"}],"output":{"name":"option"}}],[11,"size_hint","","",9,null],[11,"clone","","",9,{"inputs":[{"name":"putbackn"}],"output":{"name":"self"}}],[11,"clone","","",10,{"inputs":[{"name":"product"}],"output":{"name":"product"}}],[11,"new","","Create a new cartesian product iterator",10,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"self"}}],[11,"next","","",10,{"inputs":[{"name":"product"}],"output":{"name":"option"}}],[11,"size_hint","","",10,null],[11,"clone","","",11,{"inputs":[{"name":"batching"}],"output":{"name":"batching"}}],[11,"new","","Create a new Batching iterator.",11,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"batching"}}],[11,"next","","",11,{"inputs":[{"name":"batching"}],"output":{"name":"option"}}],[11,"size_hint","","",11,null],[11,"clone","","",12,{"inputs":[{"name":"groupby"}],"output":{"name":"groupby"}}],[11,"new","","Create a new `GroupBy` iterator.",12,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",12,{"inputs":[{"name":"groupby"}],"output":{"name":"option"}}],[11,"size_hint","","",12,null],[11,"clone","","",13,{"inputs":[{"name":"step"}],"output":{"name":"step"}}],[11,"new","","Create a `Step` iterator.",13,{"inputs":[{"name":"i"},{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",13,{"inputs":[{"name":"step"}],"output":{"name":"option"}}],[11,"size_hint","","",13,null],[11,"clone","","",14,{"inputs":[{"name":"merge"}],"output":{"name":"self"}}],[11,"next","","",14,{"inputs":[{"name":"merge"}],"output":{"name":"option"}}],[11,"size_hint","","",14,null],[11,"clone","","",15,{"inputs":[{"name":"mergeby"}],"output":{"name":"self"}}],[11,"next","","",15,{"inputs":[{"name":"mergeby"}],"output":{"name":"option"}}],[11,"size_hint","","",15,null],[11,"clone","","",16,{"inputs":[{"name":"multipeek"}],"output":{"name":"multipeek"}}],[11,"new","","Create a `MultiPeek` iterator.",16,{"inputs":[{"name":"i"}],"output":{"name":"multipeek"}}],[11,"peek","","Works exactly like *.next()* with the only difference that it doesn&#39;t\nadvance itself. *.peek()* can be called multiple times, to peek\nfurther ahead.",16,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"next","","",16,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"size_hint","","",16,null],[11,"clone","","",17,{"inputs":[{"name":"coalesce"}],"output":{"name":"self"}}],[11,"new","","Create a new `Coalesce`.",17,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",17,{"inputs":[{"name":"coalesce"}],"output":{"name":"option"}}],[11,"size_hint","","",17,null],[11,"clone","","",18,{"inputs":[{"name":"dedup"}],"output":{"name":"self"}}],[11,"new","","Create a new `Dedup`.",18,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"next","","",18,{"inputs":[{"name":"dedup"}],"output":{"name":"option"}}],[11,"size_hint","","",18,null],[11,"clone","","",19,{"inputs":[{"name":"mendslices"}],"output":{"name":"self"}}],[11,"new","","Create a new `MendSlices`.",19,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"next","","",19,{"inputs":[{"name":"mendslices"}],"output":{"name":"option"}}],[11,"size_hint","","",19,null],[11,"new","","Create a new `TakeWhileRef` from a reference to clonable iterator.",20,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",20,{"inputs":[{"name":"takewhileref"}],"output":{"name":"option"}}],[11,"size_hint","","",20,null],[11,"clone","","",21,{"inputs":[{"name":"whilesome"}],"output":{"name":"whilesome"}}],[11,"new","","Create a new `WhileSome&lt;I&gt;`.",21,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"next","","",21,{"inputs":[{"name":"whilesome"}],"output":{"name":"option"}}],[11,"size_hint","","",21,null],[11,"clone","","",22,{"inputs":[{"name":"combinations"}],"output":{"name":"combinations"}}],[11,"new","","Create a new `Combinations` from a clonable iterator.",22,{"inputs":[{"name":"i"}],"output":{"name":"combinations"}}],[11,"next","","",22,{"inputs":[{"name":"combinations"}],"output":{"name":"option"}}],[11,"size_hint","","",22,null],[11,"new","","Create a new `CombinationsN` from a clonable iterator.",23,{"inputs":[{"name":"i"},{"name":"usize"}],"output":{"name":"combinationsn"}}],[11,"next","","",23,{"inputs":[{"name":"combinationsn"}],"output":{"name":"option"}}],[11,"clone","","",24,{"inputs":[{"name":"uniqueby"}],"output":{"name":"uniqueby"}}],[11,"new","","Create a new `UniqueBy` iterator.",24,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"uniqueby"}}],[11,"next","","",24,{"inputs":[{"name":"uniqueby"}],"output":{"name":"option"}}],[11,"size_hint","","",24,null],[11,"next","","",25,{"inputs":[{"name":"unique"}],"output":{"name":"option"}}],[11,"size_hint","","",25,null],[11,"clone","","",25,{"inputs":[{"name":"unique"}],"output":{"name":"unique"}}],[11,"new","","Create a new `Flatten` iterator.",26,{"inputs":[{"name":"i"}],"output":{"name":"flatten"}}],[11,"next","","",26,{"inputs":[{"name":"flatten"}],"output":{"name":"option"}}],[11,"next_back","","",26,{"inputs":[{"name":"flatten"}],"output":{"name":"option"}}],[11,"clone","","",26,{"inputs":[{"name":"flatten"}],"output":{"name":"self"}}],[0,"free","","Free functions that create iterator adaptors or call iterator methods.",null,null],[5,"enumerate","itertools::free","Iterate `iterable` with a running index.",null,{"inputs":[{"name":"i"}],"output":{"name":"enumerate"}}],[5,"rev","","Iterate `iterable` in reverse.",null,{"inputs":[{"name":"i"}],"output":{"name":"rev"}}],[5,"zip","","Iterate `i` and `j` in lock step.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"zip"}}],[5,"zip_eq","","Iterate `i` and `j` in lock step.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"zipeq"}}],[5,"chain","","Create an iterator that first iterates `i` and then `j`.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"chain"}}],[5,"fold","","Perform a fold operation over the iterable.",null,{"inputs":[{"name":"i"},{"name":"b"},{"name":"f"}],"output":{"name":"b"}}],[5,"all","","Test whether the predicate holds for all elements in the iterable.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"bool"}}],[5,"any","","Test whether the predicate holds for any elements in the iterable.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"bool"}}],[5,"max","","Return the maximum value of the iterable.",null,{"inputs":[{"name":"i"}],"output":{"name":"option"}}],[5,"min","","Return the minimum value of the iterable.",null,{"inputs":[{"name":"i"}],"output":{"name":"option"}}],[5,"interleave","","Create an iterator that interleaves elements in `i` and `j`.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"interleave"}}],[5,"merge","","Create an iterator that merges elements in `i` and `j`.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"merge"}}],[5,"kmerge","","Create an iterator that merges elements of the contained iterators.",null,{"inputs":[{"name":"i"}],"output":{"name":"kmerge"}}],[5,"join","","Combine all iterator elements into one String, seperated by `sep`.",null,{"inputs":[{"name":"i"},{"name":"str"}],"output":{"name":"string"}}],[5,"sorted","","Collect all the iterable&#39;s elements into a sorted vector in ascending order.",null,{"inputs":[{"name":"i"}],"output":{"name":"vec"}}],[11,"fmt","itertools","",27,{"inputs":[{"name":"format"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",28,{"inputs":[{"name":"groups"}],"output":{"name":"option"}}],[11,"drop","","",29,{"inputs":[{"name":"group"}],"output":null}],[11,"next","","",29,{"inputs":[{"name":"group"}],"output":{"name":"option"}}],[11,"next","","",30,{"inputs":[{"name":"chunks"}],"output":{"name":"option"}}],[11,"drop","","",31,{"inputs":[{"name":"chunk"}],"output":null}],[11,"next","","",31,{"inputs":[{"name":"chunk"}],"output":{"name":"option"}}],[11,"clone","","",32,{"inputs":[{"name":"intersperse"}],"output":{"name":"intersperse"}}],[11,"new","","Create a new Intersperse iterator",32,{"inputs":[{"name":"i"},{"name":"item"}],"output":{"name":"self"}}],[11,"next","","",32,{"inputs":[{"name":"intersperse"}],"output":{"name":"option"}}],[11,"size_hint","","",32,null],[11,"clone","","",33,{"inputs":[{"name":"islice"}],"output":{"name":"islice"}}],[11,"new","","Create a new **ISlice**.",33,{"inputs":[{"name":"i"},{"name":"r"}],"output":{"name":"self"}}],[11,"next","","",33,{"inputs":[{"name":"islice"}],"output":{"name":"option"}}],[11,"size_hint","","",33,null],[11,"clone","","",34,{"inputs":[{"name":"kmerge"}],"output":{"name":"kmerge"}}],[11,"next","","",34,{"inputs":[{"name":"kmerge"}],"output":{"name":"option"}}],[11,"size_hint","","",34,null],[11,"fmt","","",35,{"inputs":[{"name":"linspace"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",35,{"inputs":[{"name":"linspace"}],"output":{"name":"linspace"}}],[11,"next","","",35,{"inputs":[{"name":"linspace"}],"output":{"name":"option"}}],[11,"size_hint","","",35,null],[11,"next_back","","",35,{"inputs":[{"name":"linspace"}],"output":{"name":"option"}}],[0,"misc","","A module of helper traits and iterators that are not intended to be used\ndirectly.",null,null],[3,"FlatTuples","itertools::misc","A helper iterator that maps an iterator of tuples like\n`((A, B), C)` to an iterator of `(A, B, C)`.",null,null],[8,"IntoIteratorTuple","","Apply `IntoIterator` on each element of a tuple.",null,null],[16,"Output","","Tuple of values that implement `Iterator`.",36,null],[10,"into_iterator_tuple","","Return a tuple of iterators.",36,{"inputs":[{"name":"intoiteratortuple"}],"output":{"name":"output"}}],[8,"AppendTuple","","A helper trait for (x, y, z) ++ w =&gt; (x, y, z, w),\nused for implementing `iproduct!`.",null,null],[16,"Result","","Resulting tuple type",37,null],[10,"append","","“Append” value `x` to a tuple.",37,{"inputs":[{"name":"appendtuple"},{"name":"x"}],"output":{"name":"result"}}],[8,"GenericRange","","`GenericRange` is implemented by Rust&#39;s built-in range types, produced\nby range syntax like `a..`, `..b` or `c..d`.",null,null],[8,"ToFloat","","Helper trait to convert usize to floating point type.",null,null],[8,"MendSlice","","A trait for items that can *maybe* be joined together.",null,null],[8,"Slice","","A helper trait to let `ZipSlices` accept both `&amp;[T]` and `&amp;mut [T]`.",null,null],[16,"Item","","The type of a reference to the slice&#39;s elements",38,null],[11,"clone","","",39,{"inputs":[{"name":"flattuples"}],"output":{"name":"flattuples"}}],[11,"next","","",39,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"size_hint","","",39,null],[11,"next_back","","",39,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"start","core::ops","",40,{"inputs":[{"name":"rangefrom"}],"output":{"name":"option"}}],[11,"end","","",41,{"inputs":[{"name":"rangeto"}],"output":{"name":"option"}}],[11,"start","","",42,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"end","","",42,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"clone","itertools","",43,{"inputs":[{"name":"padusing"}],"output":{"name":"padusing"}}],[11,"new","","Create a new **PadUsing** iterator.",43,{"inputs":[{"name":"i"},{"name":"usize"},{"name":"f"}],"output":{"name":"padusing"}}],[11,"next","","",43,{"inputs":[{"name":"padusing"}],"output":{"name":"option"}}],[11,"size_hint","","",43,null],[11,"next_back","","",43,{"inputs":[{"name":"padusing"}],"output":{"name":"option"}}],[11,"new","","Create a new RcIter.",0,{"inputs":[{"name":"i"}],"output":{"name":"rciter"}}],[11,"clone","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"rciter"}}],[11,"next","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"size_hint","","",0,null],[11,"next_back","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"new","","Create a new **RepeatN** with **n** repetitions.",44,{"inputs":[{"name":"a"},{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",44,{"inputs":[{"name":"repeatn"}],"output":{"name":"option"}}],[11,"size_hint","","",44,null],[11,"next_back","","",44,{"inputs":[{"name":"repeatn"}],"output":{"name":"option"}}],[11,"new","","Create a new `RepeatCall` from a closure.",45,{"inputs":[{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",45,{"inputs":[{"name":"repeatcall"}],"output":{"name":"option"}}],[11,"size_hint","","",45,null],[11,"next_back","","",45,{"inputs":[{"name":"repeatcall"}],"output":{"name":"option"}}],[11,"clone","","",1,{"inputs":[{"name":"unfold"}],"output":{"name":"unfold"}}],[11,"new","","Creates a new iterator with the specified closure as the &quot;iterator\nfunction&quot; and an initial state to eventually pass to the closure",1,{"inputs":[{"name":"st"},{"name":"f"}],"output":{"name":"unfold"}}],[11,"next","","",1,{"inputs":[{"name":"unfold"}],"output":{"name":"option"}}],[11,"size_hint","","",1,null],[0,"size_hint","","Arithmetic on **Iterator** *.size_hint()* values.",null,null],[5,"add","itertools::size_hint","Add **SizeHint** correctly.",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"add_scalar","","Add **x** correctly to a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"sub_scalar","","Sbb **x** correctly to a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"mul_scalar","","Multiply **x** correctly with a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"mul","","Multiply **SizeHint** correctly",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"max","","Return the maximum",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"min","","Return the minimum",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[6,"SizeHint","","**SizeHint** is the return type of **Iterator::size_hint()**.",null,null],[11,"from_ptr_len","itertools","Create a Stride iterator from a raw pointer.",46,null],[11,"from_ptr_len","","Create a StrideMut iterator from a raw pointer.",47,null],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",46,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",46,{"inputs":[{"name":"stride"},{"name":"isize"}],"output":{"name":"stride"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",46,{"inputs":[{"name":"stride"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",46,{"inputs":[{"name":"stride"}],"output":{"name":"usize"}}],[11,"get","","Return a reference to the element of a stride at the\ngiven index, or None if the index is out of bounds.",46,{"inputs":[{"name":"stride"},{"name":"usize"}],"output":{"name":"option"}}],[11,"next","","",46,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"size_hint","","",46,null],[11,"next_back","","",46,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",46,{"inputs":[{"name":"stride"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",46,{"inputs":[{"name":"stride"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","",46,{"inputs":[{"name":"stride"}],"output":{"name":"usize"}}],[11,"get_unchecked","","",46,{"inputs":[{"name":"stride"},{"name":"usize"}],"output":{"name":"a"}}],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",47,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",47,{"inputs":[{"name":"stridemut"},{"name":"isize"}],"output":{"name":"stridemut"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",47,{"inputs":[{"name":"stridemut"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",47,{"inputs":[{"name":"stridemut"}],"output":{"name":"usize"}}],[11,"get","","Return a reference to the element of a stride at the\ngiven index, or None if the index is out of bounds.",47,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"option"}}],[11,"next","","",47,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"size_hint","","",47,null],[11,"next_back","","",47,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",47,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",47,{"inputs":[{"name":"stridemut"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","",47,{"inputs":[{"name":"stridemut"}],"output":{"name":"usize"}}],[11,"get_unchecked","","",47,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"clone","","",46,{"inputs":[{"name":"stride"}],"output":{"name":"stride"}}],[11,"get_mut","","Return a mutable reference to the element of a stride at the\ngiven index, or None if the index is out of bounds.",47,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"option"}}],[11,"index_mut","","Return a mutable reference to the element at a given index.",47,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"next","","",48,{"inputs":[{"name":"tee"}],"output":{"name":"option"}}],[11,"size_hint","","",48,null],[11,"clone","","",49,{"inputs":[{"name":"zipeq"}],"output":{"name":"zipeq"}}],[11,"next","","",49,{"inputs":[{"name":"zipeq"}],"output":{"name":"option"}}],[11,"size_hint","","",49,null],[11,"clone","","",50,{"inputs":[{"name":"ziplongest"}],"output":{"name":"ziplongest"}}],[11,"new","","Create a new `ZipLongest` iterator.",50,{"inputs":[{"name":"t"},{"name":"u"}],"output":{"name":"ziplongest"}}],[11,"next","","",50,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"size_hint","","",50,null],[11,"next_back","","",50,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"fmt","","",3,{"inputs":[{"name":"eitherorboth"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"eitherorboth"}],"output":{"name":"eitherorboth"}}],[11,"clone","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"zip"}}],[11,"new","","Create a new `Zip` from a tuple of iterators.",51,{"inputs":[{"name":"t"}],"output":{"name":"zip"}}],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"next","","",51,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",51,null],[11,"clone","","",52,{"inputs":[{"name":"zipslices"}],"output":{"name":"zipslices"}}],[11,"new","","Create a new `ZipSlices` from slices `a` and `b`.",52,null],[11,"from_slices","","Create a new `ZipSlices` from slices `a` and `b`.",52,{"inputs":[{"name":"t"},{"name":"u"}],"output":{"name":"self"}}],[11,"next","","",52,{"inputs":[{"name":"zipslices"}],"output":{"name":"option"}}],[11,"size_hint","","",52,null],[11,"next_back","","",52,{"inputs":[{"name":"zipslices"}],"output":{"name":"option"}}],[11,"len","","",52,{"inputs":[{"name":"zipslices"}],"output":{"name":"usize"}}],[11,"get_unchecked","","",52,{"inputs":[{"name":"zipslices"},{"name":"usize"}],"output":{"name":"item"}}],[6,"MapFn","","The function pointer map iterator created with `.map_fn()`.",null,null],[8,"Itertools","","The trait `Itertools`: extra iterator adaptors and methods for iterators.",null,null],[11,"interleave","","Alternate elements from two iterators until both\nrun out.",53,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"interleave_shortest","","Alternate elements from two iterators until one of them runs out.",53,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"interleaveshortest"}}],[11,"intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",53,{"inputs":[{"name":"itertools"},{"name":"item"}],"output":{"name":"intersperse"}}],[11,"zip_longest","","Create an iterator which iterates over both this and the specified\niterator simultaneously, yielding pairs of two optional elements.",53,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"ziplongest"}}],[11,"zip_eq","","Create an iterator which iterates over both this and the specified\niterator simultaneously, yielding pairs of elements.",53,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"zipeq"}}],[11,"batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"batching"}}],[11,"group_by","","Group iterator elements. Consecutive elements that map to the same key (“runs”),\nare returned as the iterator elements of `GroupBy`.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"groupby"}}],[11,"group_by_lazy","","Return an iterable that can group iterator elements.\nConsecutive elements that map to the same key (“runs”), are assigned\nto the same group.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"groupbylazy"}}],[11,"chunks_lazy","","Return an iterable that can chunk the iterator.",53,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"chunkslazy"}}],[11,"tee","","Split into an iterator pair that both yield all elements from\nthe original iterator.",53,null],[11,"slice","","Return a sliced iterator.",53,{"inputs":[{"name":"itertools"},{"name":"r"}],"output":{"name":"islice"}}],[11,"into_rc","","Return an iterator inside a `Rc&lt;RefCell&lt;_&gt;&gt;` wrapper.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"rciter"}}],[11,"step","","Return an iterator adaptor that steps `n` elements in the base iterator\nfor each iteration.",53,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"step"}}],[11,"merge","","Return an iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",53,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"merge"}}],[11,"merge_by","","Return an iterator adaptor that merges the two base iterators in order.\nThis is much like `.merge()` but allows for a custom ordering.",53,{"inputs":[{"name":"itertools"},{"name":"j"},{"name":"f"}],"output":{"name":"mergeby"}}],[11,"kmerge","","Return an iterator adaptor that flattens an iterator of iterators by\nmerging them in ascending order.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"kmerge"}}],[11,"cartesian_product","","Return an iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators `self` and `J`.",53,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"product"}}],[11,"multipeek","","Return an iterator adapter that allows peeking multiple values.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"multipeek"}}],[11,"coalesce","","Return an iterator adaptor that uses the passed-in closure to\noptionally merge together consecutive elements.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"coalesce"}}],[11,"dedup","","Remove duplicates from sections of consecutive identical elements.\nIf the iterator is sorted, all elements will be unique.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"dedup"}}],[11,"unique","","Return an iterator adaptor that filters out elements that have\nalready been produced once during the iteration. Duplicates\nare detected using hash and equality.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"unique"}}],[11,"unique_by","","Return an iterator adaptor that filters out elements that have\nalready been produced once during the iteration.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"uniqueby"}}],[11,"mend_slices","","Return an iterator adaptor that joins together adjacent slices if possible.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"mendslices"}}],[11,"take_while_ref","","Return an iterator adaptor that borrows from a `Clone`-able iterator\nto only pick off elements while the predicate `f` returns `true`.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"takewhileref"}}],[11,"while_some","","Return an iterator adaptor that filters `Option&lt;A&gt;` iterator elements\nand produces `A`. Stops on the first `None` encountered.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"whilesome"}}],[11,"combinations","","Return an iterator adaptor that iterates over the combinations of\nthe elements from an iterator.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"combinations"}}],[11,"combinations_n","","Return an iterator adaptor that iterates over the `n`-length combinations of\nthe elements from an iterator.",53,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"combinationsn"}}],[11,"pad_using","","Return an iterator adaptor that pads the sequence to a minimum length of\n`min` by filling missing elements using a closure `f`.",53,{"inputs":[{"name":"itertools"},{"name":"usize"},{"name":"f"}],"output":{"name":"padusing"}}],[11,"flatten","","Unravel a nested iterator.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"flatten"}}],[11,"map_fn","","Like regular `.map()`, specialized to using a simple function pointer instead,\nso that the resulting `Map` iterator value can be cloned.",53,null],[11,"find_position","","Find the position and value of the first element satisfying a predicate.",53,{"inputs":[{"name":"itertools"},{"name":"p"}],"output":{"name":"option"}}],[11,"dropn","","Consume the first `n` elements of the iterator eagerly.",53,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"dropping","","Consume the first `n` elements from the iterator eagerly,\nand return the same iterator again.",53,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"self"}}],[11,"dropping_back","","Consume the last `n` elements from the iterator eagerly,\nand return the same iterator again.",53,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"self"}}],[11,"foreach","","Run the closure `f` eagerly on each element of the iterator.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":null}],[11,"collect_vec","","`.collect_vec()` is simply a type specialization of `.collect()`,\nfor convenience.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"vec"}}],[11,"set_from","","Assign to each reference in `self` from the `from` iterator,\nstopping at the shortest of the two iterators.",53,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"usize"}}],[11,"join","","Combine all iterator elements into one String, seperated by `sep`.",53,{"inputs":[{"name":"itertools"},{"name":"str"}],"output":{"name":"string"}}],[11,"format","","Format all iterator elements, separated by `sep`.",53,{"inputs":[{"name":"itertools"},{"name":"str"},{"name":"f"}],"output":{"name":"format"}}],[11,"fold_results","","Fold `Result` values from an iterator.",53,{"inputs":[{"name":"itertools"},{"name":"b"},{"name":"f"}],"output":{"name":"result"}}],[11,"fold_options","","Fold `Option` values from an iterator.",53,{"inputs":[{"name":"itertools"},{"name":"b"},{"name":"f"}],"output":{"name":"option"}}],[11,"fold1","","Accumulator of the elements in the iterator.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"option"}}],[11,"fold_while","","An iterator adaptor that applies a function, producing a single, final value.",53,{"inputs":[{"name":"itertools"},{"name":"b"},{"name":"f"}],"output":{"name":"b"}}],[11,"is_empty_hint","","Tell if the iterator is empty or not according to its size hint.\nReturn `None` if the size hint does not tell, or return a `Some`\nvalue with the emptiness if it&#39;s possible to tell.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"option"}}],[11,"sorted","","Collect all iterator elements into a sorted vector in ascending order.",53,{"inputs":[{"name":"itertools"}],"output":{"name":"vec"}}],[11,"sorted_by","","Collect all iterator elements into a sorted vector.",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"vec"}}],[11,"sort_by","","**Deprecated:** renamed to `.sorted_by()`",53,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"vec"}}],[11,"partition_map","","Collect all iterator elements into one of two\npartitions. Unlike `Iterator::partition`, each partition may\nhave a distinct type.",53,null],[14,"iproduct!","","Create an iterator over the “cartesian product” of iterators.",null,null],[14,"izip!","","Create an iterator running multiple iterators in lockstep.",null,null]],"paths":[[3,"RcIter"],[3,"Unfold"],[4,"Diff"],[4,"EitherOrBoth"],[4,"Partition"],[4,"FoldWhile"],[3,"Interleave"],[3,"InterleaveShortest"],[3,"PutBack"],[3,"PutBackN"],[3,"Product"],[3,"Batching"],[3,"GroupBy"],[3,"Step"],[3,"Merge"],[3,"MergeBy"],[3,"MultiPeek"],[3,"Coalesce"],[3,"Dedup"],[3,"MendSlices"],[3,"TakeWhileRef"],[3,"WhileSome"],[3,"Combinations"],[3,"CombinationsN"],[3,"UniqueBy"],[3,"Unique"],[3,"Flatten"],[3,"Format"],[3,"Groups"],[3,"Group"],[3,"Chunks"],[3,"Chunk"],[3,"Intersperse"],[3,"ISlice"],[3,"KMerge"],[3,"Linspace"],[8,"IntoIteratorTuple"],[8,"AppendTuple"],[8,"Slice"],[3,"FlatTuples"],[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[3,"PadUsing"],[3,"RepeatN"],[3,"RepeatCall"],[3,"Stride"],[3,"StrideMut"],[3,"Tee"],[3,"ZipEq"],[3,"ZipLongest"],[3,"Zip"],[3,"ZipSlices"],[8,"Itertools"]]};
initSearch(searchIndex);
