source("scripts/binfunction.R")
source("scripts/corr_script.R")


# Be able to read JSON files
library(Hmisc);
install.packages("rjson");
library(rjson);


filename <- "data/ProteinMonomer.json";
monomer_i <- fromJSON(file=filename);


#Load Protein Monomer Data
filename<-"data/protein-monomer.json";
monomer <- fromJSON(file=filename);
monomer_bins <- fillBins(monomer);


# Load RNA Data
filename <- "data/Gene.json";
gene_i <- fromJSON(file=filename);
filename <- "data/rna.json";
RNA <- fromJSON(file=filename);
RNA_bins <- fillBins(RNA);


# Load Protein-Complex Data
filename<-"data/protein-complex.json";
complex_ <- fromJSON(file=filename);
complex_bins <- fillBins(complex_);


# Create correlation matrices
RNA_corr <- getCorr(RNA_bins);
complex_corr <- getCorr(complex_bins);
monomer_corr <- getCorr(monomer_bins);

# Replace all NA's with > tmp2[is.na(tmp2)] <- FALSE;

# Create links with threshold and export
outputJSON(RNA_corr, filename="data/RNA_graph1.json", data=RNA_bins);
outputJSON(complex_corr, filename="data/complex_graph1.json", data=complex_bins);
outputJSON(monomer_corr, filename="data/monomer_graph1.json", data=monomer_bins);
##########################################
