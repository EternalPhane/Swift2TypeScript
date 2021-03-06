import { override } from '../Decorator';
import * as ast from './ast';

/**
 * Visitor of Swift abstract syntax tree.
 */
export class ASTVisitor {
    /**
     * Default callback, should not be used.
     * @final
     */
    public visit(node: ast.Node): void {
        for (let i = 0; i < node.length; ++i) {
            this.visit(node[i]);
        }
    }

    public visitAccessor(node: ast.Accessor): void {
        return this.visit(node);
    }

    public visitAnyType(node: ast.AnyType): void {
        return this.visit(node);
    }

    public visitArrayLiteral(node: ast.ArrayLiteral): void {
        return this.visit(node);
    }

    public visitArrayType(node: ast.ArrayType): void {
        return this.visit(node);
    }

    public visitAsTypeOperator(node: ast.AsTypeOperator): void {
        return this.visit(node);
    }

    public visitAsTypePattern(node: ast.AsTypePattern): void {
        return this.visit(node);
    }

    public visitAssignmentOperator(node: ast.AssignmentOperator): void {
        return this.visit(node);
    }

    public visitAttribute(node: ast.Attribute): void {
        return this.visit(node);
    }

    public visitAvailabilityArgument(node: ast.AvailabilityArgument): void {
        return this.visit(node);
    }

    public visitAvailabilityCondition(node: ast.AvailabilityCondition): void {
        return this.visit(node);
    }

    public visitBreakStatement(node: ast.BreakStatement): void {
        return this.visit(node);
    }

    public visitCaptureItem(node: ast.CaptureItem): void {
        return this.visit(node);
    }

    public visitCaseCondition(node: ast.CaseCondition): void {
        return this.visit(node);
    }

    public visitCaseItem(node: ast.CaseItem): void {
        return this.visit(node);
    }

    public visitCatchClause(node: ast.CatchClause): void {
        return this.visit(node);
    }

    public visitClassDeclaration(node: ast.ClassLikeDeclaration): void {
        return this.visit(node);
    }

    public visitClosureExpression(node: ast.ClosureExpression): void {
        return this.visit(node);
    }

    public visitClosureParameter(node: ast.ClosureParameter): void {
        return this.visit(node);
    }

    public visitConditionalCompilationBlock(node: ast.ConditionalCompilationBlock): void {
        return this.visit(node);
    }

    public visitConditionalOperator(node: ast.ConditionalOperator): void {
        return this.visit(node);
    }

    public visitContinueStatement(node: ast.ContinueStatement): void {
        return this.visit(node);
    }

    public visitDeferStatement(node: ast.DeferStatement): void {
        return this.visit(node);
    }

    public visitDeinitializerDeclaration(node: ast.DeinitializerDeclaration): void {
        return this.visit(node);
    }

    public visitDictionaryLiteral(node: ast.DictionaryLiteral): void {
        return this.visit(node);
    }

    public visitDictionaryLiteralElement(node: ast.DictionaryLiteralElement): void {
        return this.visit(node);
    }

    public visitDictionaryType(node: ast.DictionaryType): void {
        return this.visit(node);
    }

    public visitDirectiveClause(node: ast.DirectiveClause): void {
        return this.visit(node);
    }

    public visitDoStatement(node: ast.DoStatement): void {
        return this.visit(node);
    }

    public visitElseClause(node: ast.ElseClause): void {
        return this.visit(node);
    }

    public visitEnumCase(node: ast.EnumCase): void {
        return this.visit(node);
    }

    public visitEnumCaseList(node: ast.EnumCaseClause): void {
        return this.visit(node);
    }

    public visitEnumCasePattern(node: ast.EnumCasePattern): void {
        return this.visit(node);
    }

    public visitEnumDeclaration(node: ast.EnumDeclaration): void {
        return this.visit(node);
    }

    public visitExplicitMemberExpression(node: ast.ExplicitMemberExpression): void {
        return this.visit(node);
    }

    public visitExpressionPattern(node: ast.ExpressionPattern): void {
        return this.visit(node);
    }

    public visitFallthroughStatement(node: ast.FallthroughStatement): void {
        return this.visit(node);
    }

    public visitForInStatement(node: ast.ForInStatement): void {
        return this.visit(node);
    }

    public visitFunctionCallArgument(node: ast.FunctionCallArgument): void {
        return this.visit(node);
    }

    public visitFunctionCallExpression(node: ast.FunctionCallExpression): void {
        return this.visit(node);
    }

    public visitFunctionDeclaration(node: ast.FunctionDeclaration): void {
        return this.visit(node);
    }

    public visitFunctionType(node: ast.FunctionType): void {
        return this.visit(node);
    }

    public visitFunctionTypeArgument(node: ast.FunctionTypeArgument): void {
        return this.visit(node);
    }

    public visitGenericIdentifier(node: ast.GenericIdentifier): void {
        return this.visit(node);
    }

    public visitGenericParameter(node: ast.GenericParameter): void {
        return this.visit(node);
    }

    public visitGuardStatement(node: ast.GuardStatement): void {
        return this.visit(node);
    }

    public visitIdentifier(node: ast.Identifier): void {
        return this.visit(node);
    }

    public visitIdentifierPattern(node: ast.IdentifierPattern): void {
        return this.visit(node);
    }

    public visitIfStatement(node: ast.IfStatement): void {
        return this.visit(node);
    }

    public visitImplicitMemberExpression(node: ast.ImplicitMemberExpression): void {
        return this.visit(node);
    }

    public visitImportDeclaration(node: ast.ImportDeclaration): void {
        return this.visit(node);
    }

    public visitInOutExpression(node: ast.InOutExpression): void {
        return this.visit(node);
    }

    public visitInitializerDeclaration(node: ast.InitializerDeclaration): void {
        return this.visit(node);
    }

    public visitIsTypeOperator(node: ast.IsTypeOperator): void {
        return this.visit(node);
    }

    public visitIsTypePattern(node: ast.IsTypePattern): void {
        return this.visit(node);
    }

    public visitKeyPathComponent(node: ast.KeyPathComponent): void {
        return this.visit(node);
    }

    public visitKeyPathExpression(node: ast.KeyPathExpression): void {
        return this.visit(node);
    }

    public visitKeyPathStringExpression(node: ast.KeyPathStringExpression): void {
        return this.visit(node);
    }

    public visitLineControlStatement(node: ast.LineControlStatement): void {
        return this.visit(node);
    }

    public visitLiteral(node: ast.Literal): void {
        return this.visit(node);
    }

    public visitMetaType(node: ast.MetaType): void {
        return this.visit(node);
    }

    public visitOperator(node: ast.Operator): void {
        return this.visit(node);
    }

    public visitOptionalBindingCondition(node: ast.OptionalBindingCondition): void {
        return this.visit(node);
    }

    public visitOptionalPattern(node: ast.OptionalPattern): void {
        return this.visit(node);
    }

    public visitOptionalType(node: ast.OptionalType): void {
        return this.visit(node);
    }

    public visitParameter(node: ast.Parameter): void {
        return this.visit(node);
    }

    public visitPatternBinding(node: ast.PatternBinding): void {
        return this.visit(node);
    }

    public visitPlatformCondition(node: ast.PlatformCondition): void {
        return this.visit(node);
    }

    public visitPlaygroundLiteral(node: ast.PlaygroundLiteral): void {
        return this.visit(node);
    }

    public visitProgram(node: ast.Program): void {
        return this.visit(node);
    }

    public visitProtocolAssociatedTypeDeclaration(
        node: ast.ProtocolAssociatedTypeDeclaration
    ): void {
        return this.visit(node);
    }

    public visitProtocolCompositionType(node: ast.ProtocolCompositionType): void {
        return this.visit(node);
    }

    public visitRepeatWhileStatement(node: ast.RepeatWhileStatement): void {
        return this.visit(node);
    }

    public visitRequirement(node: ast.Requirement): void {
        return this.visit(node);
    }

    public visitReturnStatement(node: ast.ReturnStatement): void {
        return this.visit(node);
    }

    public visitSelectorExpression(node: ast.SelectorExpression): void {
        return this.visit(node);
    }

    public visitSelfExpression(node: ast.SelfExpression): void {
        return this.visit(node);
    }

    public visitSelfType(node: ast.SelfType): void {
        return this.visit(node);
    }

    public visitSubscriptDeclaration(node: ast.SubscriptDeclaration): void {
        return this.visit(node);
    }

    public visitSubscriptExpression(node: ast.SubscriptExpression): void {
        return this.visit(node);
    }

    public visitSuperclassExpression(node: ast.SuperclassExpression): void {
        return this.visit(node);
    }

    public visitSwitchCase(node: ast.SwitchCase): void {
        return this.visit(node);
    }

    public visitSwitchStatement(node: ast.SwitchStatement): void {
        return this.visit(node);
    }

    public visitThrowStatement(node: ast.ThrowStatement): void {
        return this.visit(node);
    }

    public visitTryOperator(node: ast.TryOperator): void {
        return this.visit(node);
    }

    public visitTupleElement(node: ast.TupleElement): void {
        return this.visit(node);
    }

    public visitTupleExpression(node: ast.TupleExpression): void {
        return this.visit(node);
    }

    public visitTuplePattern(node: ast.TuplePattern): void {
        return this.visit(node);
    }

    public visitTuplePatternElement(node: ast.TuplePatternElement): void {
        return this.visit(node);
    }

    public visitTupleType(node: ast.TupleType): void {
        return this.visit(node);
    }

    public visitTupleTypeElement(node: ast.TupleTypeElement): void {
        return this.visit(node);
    }

    public visitTypeIdentifier(node: ast.TypeIdentifier): void {
        return this.visit(node);
    }

    public visitTypealiasDeclaration(node: ast.TypealiasDeclaration): void {
        return this.visit(node);
    }

    public visitUnwrappedExpression(node: ast.UnwrappedExpression): void {
        return this.visit(node);
    }

    public visitValueBindingPattern(node: ast.ValueBindingPattern): void {
        return this.visit(node);
    }

    public visitVariableDeclaration(node: ast.VariableDeclaration): void {
        return this.visit(node);
    }

    public visitWhileStatement(node: ast.WhileStatement): void {
        return this.visit(node);
    }

    public visitWildcard(node: ast.Wildcard): void {
        return this.visit(node);
    }
}
