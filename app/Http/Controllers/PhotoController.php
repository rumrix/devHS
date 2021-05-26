<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $msg[]['msg'] ='  Scope';
        $msg[]['msg'] =' Conformance ';
        $msg[]['msg'] =' Normative References';
        $msg[]['msg'] =' Terms and Definitions ';
        $msg[]['msg'] =' Notational Conventions';
        $msg[]['msg'] =' Key words for Requirement Statements ';
        $msg[]['msg'] =' Annotations on Example Diagrams';
        $msg[]['msg'] =' Additional Information ';
        $msg[]['msg'] =' Specification Simplification ';
        $msg[]['msg'] =' Architectural Alignment ';
        $msg[]['msg'] =' On the Semantics of UML';
        $msg[]['msg'] =' Models and What They Model ';
        $msg[]['msg'] =' Semantic Areas';
        $msg[]['msg'] =' Stable and Transient Behavioral Semantics ';
        $msg[]['msg'] =' How to Read this Specification ';
        $msg[]['msg'] =' Specification Format ';
        $msg[]['msg'] =' Diagram Format ';
        $msg[]['msg'] =' Acknowledgements ';
        $msg[]['msg'] =' Primary Authors ';
        $msg[]['msg'] =' Technical Support ';
        $msg[]['msg'] =' Association Descriptions';
        $msg[]['msg'] =' AactualtemplateParameterSubstitution Association';
        $msg[]['msg'] =' AannotatedElementcomment Association ';
        $msg[]['msg'] =' AclientDependencyclient Association ';
        $msg[]['msg'] =' AconstrainedElementconstraint Association ';
        $msg[]['msg'] ='Unified Modeling Language  vii';
        $msg[]['msg'] =' AdefaulttemplateParameter Association ';
        $msg[]['msg'] =' AelementImportimportingNamespace Association';
        $msg[]['msg'] =' AformaltemplateParameterSubstitution Association ';
        $msg[]['msg'] =' AimportedElementimport Association ';
        $msg[]['msg'] =' AimportedMembernamespace Association';
        $msg[]['msg'] =' AimportedPackagepackageImport Association';
        $msg[]['msg'] =' AlowerValueowningLower Association';
        $msg[]['msg'] =' Amappingabstraction Association ';
        $msg[]['msg'] =' AmembermemberNamespace Association';
        $msg[]['msg'] =' AnameExpressionnamedElement Association';
        $msg[]['msg'] =' AownedActualowningTemplateParameterSubstitution Association';
        $msg[]['msg'] =' AownedCommentowningElement Association';
        $msg[]['msg'] =' AownedDefaulttemplateParameter Association';
        $msg[]['msg'] =' AownedElementowner Association';
        $msg[]['msg'] =' AownedMembernamespace Association ';
        $msg[]['msg'] =' AownedParametersignature Association ';
        $msg[]['msg'] =' AownedParameteredElementowningTemplateParameter Association';
        $msg[]['msg'] =' AownedRulecontext Association';
        $msg[]['msg'] =' AownedTemplateSignaturetemplate Association ';
        $msg[]['msg'] =' ApackageImportimportingNamespace Association';
        $msg[]['msg'] =' AparameterSubstitutiontemplateBinding Association';
        $msg[]['msg'] =' AparametertemplateSignature Association';
        $msg[]['msg'] =' AparameteredElementtemplateParameter Association ';
        $msg[]['msg'] =' ArelatedElementrelationship Association';
        $msg[]['msg'] =' AsignaturetemplateBinding Association';
        $msg[]['msg'] =' AsourcedirectedRelationship Association ';
        $msg[]['msg'] =' AspecificationowningConstraint Association';
        $msg[]['msg'] =' AsuppliersupplierDependency Association ';
        $msg[]['msg'] =' AtargetdirectedRelationship Association';
        $msg[]['msg'] =' AtemplateBindingboundElement Association ';
        $msg[]['msg'] =' AtypetypedElement Association';
        $msg[]['msg'] =' AupperValueowningUpper Association ';

        return json_encode($msg);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return 'CREATE';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $msg[] = '30';
        $msg[] = '40';
        return json_encode($msg);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        return 'EDIT ' . $id;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
