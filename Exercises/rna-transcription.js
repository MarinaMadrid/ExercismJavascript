/**
 * Your task is determine the RNA complement of a given DNA sequence.

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
Note
If you want to look at how the inputs and outputs are structured, take a look at the examples in the test suite.
 */

//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function toRna(dna) {
    var rna = "";
  
    dna.split('').forEach(nucleotide => {
      if(nucleotide === "C"){
        rna += "G";
      } else if(nucleotide === "G"){
        rna += "C";
      } else if(nucleotide === "A"){
        rna += "U";
      } else {
        rna += "A";
      }
    });
    return rna;  
  };
  